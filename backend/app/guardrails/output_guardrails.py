"""
Output Guardrails for Mini-Devin.

Validates and sanitizes agent and model outputs:
1. Redacts sensitive credentials (API tokens, private keys, secrets).
2. Validates structured responses against expected Pydantic schemas.
3. Guards against malformed, hallucinated, or unparseable model payloads.
"""

from __future__ import annotations

import logging
import re
from typing import TYPE_CHECKING, Any

# Deferred to avoid circular import:
#   guardrails.output_guardrails → agents.schemas → agents.__init__
#   → agents.graph → agents.triage → guardrails (partially initialized)
if TYPE_CHECKING:
    from app.agents.schemas import TriageClassification, TriageResult

logger = logging.getLogger(__name__)

# Secret patterns to redact from operational messages and logs
_SECRET_PATTERNS = (
    r"(?:ghp|gho|ghu|ghs|ghr)_[A-Za-z0-9_]{36,}",           # GitHub Personal Access Tokens
    r"gsk_[A-Za-z0-9]{32,}",                                 # Groq API Keys
    r"AIza[0-9A-Za-z-_]{35}",                               # Google AI Studio / Firebase Keys
    r"hf_[A-Za-z0-9]{34,}",                                 # Hugging Face Tokens
    r"sk-[A-Za-z0-9_-]{20,}",                               # OpenAI / General API Keys
    r"bearer\s+[A-Za-z0-9\-\._~\+\/]+=*",                   # Bearer Tokens
    r"-----BEGIN\s+[A-Z\s]+PRIVATE\s+KEY-----",             # Private Key blocks
)

_SECRET_REGEXES = [re.compile(p, re.IGNORECASE) for p in _SECRET_PATTERNS]


def redact_secrets(text: str) -> str:
    """Scan and redact any accidental API keys or secrets from text."""
    if not text:
        return ""
    sanitized = text
    for rx in _SECRET_REGEXES:
        sanitized = rx.sub("[REDACTED_SECRET]", sanitized)
    return sanitized


def validate_triage_output(
    data: dict[str, Any],
    fallback_reason: str = "Triage validation failed; safely routed to out_of_scope.",
) -> "TriageResult":
    # Local import prevents the circular dependency at module load time.
    from app.agents.schemas import TriageClassification, TriageResult  # noqa: PLC0415
    """
    Validate a raw dictionary against TriageResult requirements.
    
    If invalid or malformed, returns a safe fallback out_of_scope classification.
    """
    try:
        raw_classification = str(data.get("classification", "")).strip().lower()
        
        # Map or validate classification enum
        if raw_classification in ("bug", "defect", "error", "fix"):
            cls_enum = TriageClassification.BUG
            is_supported = True
        elif raw_classification in ("feature", "enhancement", "feat", "addition"):
            cls_enum = TriageClassification.FEATURE
            is_supported = True
        elif raw_classification in ("test", "tests", "testing", "unit_test"):
            cls_enum = TriageClassification.TEST
            is_supported = True
        elif raw_classification in ("out_of_scope", "question", "documentation", "unsupported", "invalid"):
            cls_enum = TriageClassification.OUT_OF_SCOPE
            is_supported = False
        else:
            raise ValueError(f"Unrecognized triage classification: {raw_classification!r}")

        # Override is_supported if explicitly provided as False
        if "is_supported" in data and not bool(data["is_supported"]):
            is_supported = False

        confidence_val = float(data.get("confidence", 0.9))
        confidence = max(0.0, min(1.0, confidence_val))

        raw_reason = str(data.get("reason", "")).strip() or "Classified based on issue analysis."
        reason = redact_secrets(raw_reason)

        raw_warnings = data.get("warnings", [])
        warnings = [redact_secrets(str(w)) for w in raw_warnings] if isinstance(raw_warnings, list) else []

        return TriageResult(
            classification=cls_enum,
            is_supported=is_supported,
            confidence=confidence,
            reason=reason,
            warnings=warnings,
        )
    except Exception as exc:
        logger.warning("Output guardrail validation failed on raw data: %s (error: %s)", data, exc)
        return TriageResult(
            classification=TriageClassification.OUT_OF_SCOPE,
            is_supported=False,
            confidence=0.5,
            reason=f"{fallback_reason} (Validation error: {exc})",
            warnings=[f"Malformed output guarded: {exc}"],
        )


# ── Dangerous Path & Diff Safety Guardrails ──────────────────────────

DENIED_PATH_PATTERNS = (
    r"^\.env.*",
    r".*\.pem$",
    r".*\.key$",
    r".*\.pfx$",
    r".*\.pkcs12$",
    r".*id_rsa.*",
    r".*id_ed25519.*",
    r"^\.git/.*",
    r"^\.github/workflows/.*",
    r".*secret.*",
    r".*credential.*",
    r".*token.*",
)
_DENIED_REGEXES = [re.compile(p, re.IGNORECASE) for p in DENIED_PATH_PATTERNS]


def validate_path_safety(file_path: str) -> tuple[bool, str]:
    """
    Check if a file path is safe from path traversal and sensitive denylists.
    
    Returns (is_safe, violation_reason).
    """
    if not file_path or not file_path.strip():
        return False, "File path is empty."

    norm = file_path.strip().replace("\\", "/")

    # Check directory traversal
    if ".." in norm.split("/"):
        return False, f"Path traversal ('..') detected in '{file_path}'."

    # Check absolute path escapes
    if norm.startswith("/") or re.match(r"^[A-Za-z]:", norm):
        return False, f"Absolute path '{file_path}' is forbidden; paths must be repository-relative."

    # Check sensitive denylist
    for rx in _DENIED_REGEXES:
        if rx.search(norm):
            return False, f"Access to sensitive file pattern '{rx.pattern}' in '{file_path}' is denied."

    return True, ""


def validate_diff_safety(file_changes: Sequence[dict[str, Any] | Any]) -> tuple[bool, list[str]]:
    """
    Validate proposed file changes against sensitive file denylists.
    
    Returns (is_clean, violations).
    """
    violations: list[str] = []
    if not file_changes:
        return True, []

    for change in file_changes:
        path = change.get("path") if isinstance(change, dict) else getattr(change, "path", "")
        if not path:
            path = change.get("file_path") if isinstance(change, dict) else getattr(change, "file_path", "")
        is_safe, reason = validate_path_safety(path)
        if not is_safe:
            violations.append(reason)
            logger.warning("Diff gate guardrail triggered: %s", reason)

    return len(violations) == 0, violations


def validate_plan_output(data: dict[str, Any]) -> tuple[bool, dict[str, Any], list[str]]:
    """
    Validate and sanitize structured implementation plan output from LLM.
    
    Guarantees:
    - Secrets are redacted from explanation, summary, and step descriptions.
    - Affected files satisfy path safety.
    - Required fields (summary, steps) are present.
    """
    violations: list[str] = []
    sanitized: dict[str, Any] = dict(data)

    # Redact sensitive values from text fields
    if "summary" in sanitized:
        sanitized["summary"] = redact_secrets(str(sanitized["summary"]))
    if "explanation" in sanitized:
        sanitized["explanation"] = redact_secrets(str(sanitized["explanation"]))

    steps = sanitized.get("steps", [])
    if not steps:
        violations.append("Plan contains no implementation steps.")
    else:
        for idx, s in enumerate(steps):
            if isinstance(s, dict):
                s["description"] = redact_secrets(str(s.get("description", "")))
                target = s.get("target_file", "")
                if target:
                    is_safe, reason = validate_path_safety(target)
                    if not is_safe:
                        violations.append(f"Step {idx+1}: {reason}")

    affected = sanitized.get("affected_files", [])
    if not affected:
        violations.append("Plan affected_files list is empty.")
    else:
        for af in affected:
            is_safe, reason = validate_path_safety(af)
            if not is_safe:
                violations.append(f"Affected file: {reason}")

    is_valid = len(violations) == 0
    return is_valid, sanitized, violations
