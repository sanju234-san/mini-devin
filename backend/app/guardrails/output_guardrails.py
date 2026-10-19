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
from typing import Any

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
) -> TriageResult:
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
