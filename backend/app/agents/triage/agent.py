"""
Triage Agent Implementation for Mini-Devin.

Classifies incoming GitHub issues into 'bug', 'feature', 'test', or 'out_of_scope':
1. Treats issue content as untrusted input using input guardrails (prompt injection & sanitization).
2. Uses the shared LLM client if functional with graceful provider fallback.
3. Provides a robust, clearly labeled deterministic classification fallback for local development.
4. Validates structured outputs through output guardrails with secret redaction.
5. Updates LangGraph workflow state without mutating unrelated fields.
"""

from __future__ import annotations

import json
import logging
import re
from typing import Any, Optional

from app.agents.model_router import route
from app.agents.schemas import (
    AgentState,
    TriageClassification,
    TriageResult,
    create_event,
)
from app.guardrails import (
    redact_secrets,
    validate_and_sanitize_issue,
    validate_triage_output,
)

logger = logging.getLogger(__name__)

# Out-of-scope and non-actionable keyword patterns
_OUT_OF_SCOPE_PHRASES = (
    r"\bhow\s+(to|do\s+i|can\s+i|should\s+i)\b",
    r"\bwhy\s+(does|is|are|do)\b",
    r"\bwhat\s+is\b",
    r"\bquestion\s*:",
    r"\brfc\s*:",
    r"\bdiscussion\s*:",
    r"\bproposal\s*:",
    r"\bhelp\s+wanted\b",
    r"\bdocumentation\s+only\b",
    r"\bwon'?t\s*fix\b",
    r"\bduplicate\b",
    r"\bspam\b",
    r"\[out-of-scope\]",
    r"\bout\s+of\s+scope\b",
    r"\[invalid\]",
)

# Test-related issue keyword patterns
_TEST_PHRASES = (
    r"\b(add|write|update|fix|broken|flaky|flakey|failing)\s+([a-zA-Z0-9_-]+\s+)?tests?\b",
    r"\btest\s+(suite|coverage|case|cases|runner|harness|failure|failures|regression)\b",
    r"\bunit\s*tests?\b",
    r"\bintegration\s*tests?\b",
    r"\be2e\s*tests?\b",
    r"\bpytest\b",
    r"\bjest\b",
    r"\bmock(ing|s)?\b",
    r"\bfixture(s)?\b",
)

# Bug-related issue keyword patterns
_BUG_PHRASES = (
    r"\b(fix|fixes|fixing|fixed|bug|defect|crash|crashes|exception|exceptions|error|errors|fault|traceback|panic)\b",
    r"\b(fails|failing|failed|failure|broken|breaks)\b",
    r"\b(null\s*pointer|[a-zA-Z0-9_]*exception|keyerror|typeerror|valueerror|indexerror|zerodivisionerror)\b",
    r"\b(infinite\s+loop|memory\s+leak|deadlock|race\s+condition|timeout)\b",
    r"\b5\d{2}\s+(error|status|internal\s+server)\b",
    r"\bunexpected\s+(behavior|result|output)\b",
    r"\bregression\b",
)

# Feature-related issue keyword patterns
_FEATURE_PHRASES = (
    r"\b(add|implement|support|introduce|allow|enable|provide|rewrite|refactor|migrate)\s+(support\s+for|new|a\s+new)?\b",
    r"\bfeature\s*(request)?\b",
    r"\benhancement\b",
    r"\bnew\s+(capability|option|feature|functionality|endpoint|api)\b",
    r"\bupgrade\s+to\b",
)

_AMBIGUOUS_TITLES = frozenset({
    "bug", "issue", "problem", "error", "fix", "help", "broken", "test",
    "feature", "update", "question", "urgent", "todo",
})


def _classify_deterministically(
    title: str,
    body: str,
    warnings: list[str],
) -> TriageResult:
    """
    Deterministic rule-based classification fallback for local development.
    
    Clearly tagged as deterministic fallback in its rationale.
    Does not assume certainty on ambiguous inputs.
    """
    full_text = f"{title}\n{body}".lower()

    # 1. Check for explicit out-of-scope / non-actionable markers
    for pat in _OUT_OF_SCOPE_PHRASES:
        if re.search(pat, full_text, re.IGNORECASE):
            return TriageResult(
                classification=TriageClassification.OUT_OF_SCOPE,
                is_supported=False,
                confidence=0.95,
                reason="Identified as out of scope or non-actionable query via deterministic analysis.",
                warnings=warnings,
            )

    # 2. Check for overly ambiguous or low-information inputs
    words = [w for w in re.split(r"\W+", title.lower()) if w]
    if len(words) == 1 and words[0] in _AMBIGUOUS_TITLES and len(body.strip()) < 10:
        ambiguous_warning = f"Ambiguous issue: '{title}' lacks sufficient context to safely determine actionable code changes."
        warnings.append(ambiguous_warning)
        return TriageResult(
            classification=TriageClassification.OUT_OF_SCOPE,
            is_supported=False,
            confidence=0.35,
            reason=ambiguous_warning,
            warnings=warnings,
        )

    # 3. Check for test-focused issues
    for pat in _TEST_PHRASES:
        if re.search(pat, full_text, re.IGNORECASE):
            return TriageResult(
                classification=TriageClassification.TEST,
                is_supported=True,
                confidence=0.90,
                reason="Classified as a test engineering issue (deterministic fallback).",
                warnings=warnings,
            )

    # 4. Check for bug patterns
    for pat in _BUG_PHRASES:
        if re.search(pat, full_text, re.IGNORECASE):
            return TriageResult(
                classification=TriageClassification.BUG,
                is_supported=True,
                confidence=0.92,
                reason="Classified as a software defect/bug report (deterministic fallback).",
                warnings=warnings,
            )

    # 5. Check for feature patterns
    for pat in _FEATURE_PHRASES:
        if re.search(pat, full_text, re.IGNORECASE):
            return TriageResult(
                classification=TriageClassification.FEATURE,
                is_supported=True,
                confidence=0.88,
                reason="Classified as a feature request or enhancement (deterministic fallback).",
                warnings=warnings,
            )

    # 6. Fallback for unclassifiable / ambiguous requests: do NOT blindly classify as bug/feature
    unclear_warning = "Issue content did not match recognizable bug, feature, or test patterns."
    warnings.append(unclear_warning)
    return TriageResult(
        classification=TriageClassification.OUT_OF_SCOPE,
        is_supported=False,
        confidence=0.40,
        reason="Unable to determine issue scope with acceptable confidence; requires operator clarification.",
        warnings=warnings,
    )


def classify_issue(
    title: str,
    body: str = "",
    repo: str = "",
    issue_url: Optional[str] = None,
    issue_number: Optional[int] = None,
) -> tuple[TriageResult, str]:
    """
    Core Triage classification engine.
    
    Returns:
        tuple of (TriageResult, execution_method) where execution_method is
        'llm_inference', 'deterministic_fallback', or 'input_guardrail'.
    """
    clean_title, clean_body, warnings, is_suspicious = validate_and_sanitize_issue(title, body)

    # Guardrail check: Prompt Injection or Suspicious Input
    if is_suspicious:
        result = TriageResult(
            classification=TriageClassification.OUT_OF_SCOPE,
            is_supported=False,
            confidence=1.0,
            reason="Input guardrail: suspicious system prompt injection attempt detected.",
            warnings=warnings,
        )
        return result, "input_guardrail"

    # Missing or empty title check
    if not clean_title:
        result = TriageResult(
            classification=TriageClassification.UNSUPPORTED,
            is_supported=False,
            confidence=1.0,
            reason="Issue title is missing or empty; cannot proceed.",
            warnings=warnings,
        )
        return result, "input_guardrail"

    # Try shared LLM completion client if available
    llm_functional = False
    try:
        from app.integrations.llm_provider_client import complete

        prompt = (
            "You are the Triage Agent for Mini-Devin.\n"
            "Analyze this GitHub issue and classify it into one of: 'bug', 'feature', 'test', 'out_of_scope'.\n"
            f"Repository: {repo}\n"
            f"Title: {clean_title}\n"
            f"Description: {clean_body}\n\n"
            "Respond ONLY with a valid JSON object matching:\n"
            "{\n"
            '  "classification": "bug" | "feature" | "test" | "out_of_scope",\n'
            '  "is_supported": true | false,\n'
            '  "confidence": 0.0 - 1.0,\n'
            '  "reason": "concise explanation",\n'
            '  "warnings": ["any relevant warnings"]\n'
            "}"
        )

        response_text = complete(prompt, agent_name="triage")
        if response_text and isinstance(response_text, str):
            parsed = json.loads(response_text)
            validated = validate_triage_output(parsed)
            # Combine any input warnings with model warnings
            all_warnings = warnings + validated.warnings
            validated.warnings = all_warnings
            return validated, "llm_inference"
        llm_functional = True
    except (NotImplementedError, ImportError):
        logger.debug("Shared LLM client not implemented; utilizing deterministic fallback.")
    except Exception as exc:
        logger.warning("LLM triage completion failed: %s; falling back to deterministic classification.", exc)
        warnings.append(f"LLM inference unavailable or timed out: {redact_secrets(str(exc))}")

    # Deterministic fallback
    deterministic_result = _classify_deterministically(clean_title, clean_body, warnings)
    return deterministic_result, "deterministic_fallback"


def triage_node(state: AgentState) -> dict[str, Any]:
    """
    LangGraph Triage Agent Node.
    
    Evaluates issue information, invokes the classification engine with guardrails,
    and updates shared AgentState without mutating unrelated fields.
    """
    tier = route("triage")
    issue_title = state.get("issue_title", "")
    issue_body = state.get("issue_body", "")
    repo = state.get("repo", "")
    issue_url = state.get("issue_url")
    issue_number = state.get("issue_number")

    logger.info("Triage Agent executing [tier=%s] for repo=%s", tier.value, repo)

    result, method = classify_issue(
        title=issue_title,
        body=issue_body,
        repo=repo,
        issue_url=issue_url,
        issue_number=issue_number,
    )

    if not result.is_supported:
        status = "unsupported" if result.classification == TriageClassification.UNSUPPORTED else "out_of_scope"
    else:
        status = "triaged"

    event = create_event(
        agent_name="triage",
        event_type="triage_completed",
        status=status,
        message=f"Triage classified issue as '{result.classification.value}' ({'supported' if result.is_supported else 'unsupported'}). {result.reason}",
        metadata={
            "tier": tier.value,
            "classification": result.classification.value,
            "is_supported": result.is_supported,
            "confidence": result.confidence,
            "method": method,
            "warnings": result.warnings,
        },
    )

    return {
        "triage": result.model_dump(mode="json"),
        "status": status,
        "current_agent": "triage",
        "events": [event],
    }
