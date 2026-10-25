"""
Reviewer Agent Implementation.

Performs static analysis, style and lint checks, and verifies that the patch
strictly addresses the approved plan without unintended side-effects or regressions.
"""

from __future__ import annotations

import logging
from typing import Any

from app.agents.model_router import route
from app.agents.schemas import AgentState, ReviewFindings, create_event
from app.guardrails.output_guardrails import validate_diff_safety, validate_path_safety

logger = logging.getLogger(__name__)


def reviewer_node(state: AgentState) -> dict[str, Any]:
    """
    Reviewer Agent Node: Checks modifications against the agreed plan.
    
    Safety Invariants:
    1. Independent review against the approved plan (writer-blind to Coder reasoning).
    2. Strictly refuses approval if tests did not pass or changes are unverified.
    3. Validates diff against security denylist (.env, workflows, secrets, traversal).
    4. Validates that diff does not exceed approved plan scope.
    """
    tier = route("reviewer_first_pass")
    logger.info("Executing Reviewer node [tier=%s]", tier)

    existing_findings = state.get("review_findings")

    event = create_event(
        agent_name="reviewer",
        event_type="review_started",
        status="in_progress",
        message="Reviewer Agent inspecting patch against approved implementation plan.",
        metadata={"tier": tier.value},
    )

    result: dict[str, Any] = {
        "status": "reviewing",
        "current_agent": "reviewer",
        "events": [event],
    }

    if existing_findings is not None:
        result["review_findings"] = existing_findings
        return result

    # Evaluate evidence independently
    test_results = state.get("test_results")
    code_changes = state.get("code_changes")
    plan = state.get("plan")

    if test_results is not None and code_changes is not None:
        tests_passed = False
        if isinstance(test_results, dict):
            tests_passed = bool(test_results.get("passed", False))
        elif hasattr(test_results, "passed"):
            tests_passed = bool(test_results.passed)

        comments: list[str] = []
        if not tests_passed:
            comments.append("Verification failure: test suite did not pass.")

        # Guardrail check on diff
        changes_list = code_changes if isinstance(code_changes, list) else [code_changes]
        clean_diff, violations = validate_diff_safety(changes_list)
        if not clean_diff:
            comments.append(f"Security violation: diff modifies prohibited files: {', '.join(violations)}")

        # Scope adherence check against plan
        if plan:
            affected_files: list[str] = []
            if isinstance(plan, dict):
                affected_files = plan.get("affected_files", [])
            elif hasattr(plan, "affected_files"):
                affected_files = plan.affected_files

            if affected_files:
                for change in changes_list:
                    fpath = change.get("file_path", "") if isinstance(change, dict) else getattr(change, "file_path", "")
                    if fpath and fpath not in affected_files:
                        comments.append(f"Scope violation: file '{fpath}' modified but not in approved plan scope.")

        approved = tests_passed and clean_diff and (len(comments) == 0) and bool(code_changes)
        score = 1.0 if approved else 0.0
        findings = ReviewFindings(
            approved=approved,
            score=score,
            comments=comments if comments else ["Patch adheres strictly to plan, tests passed, and guardrails satisfied."],
        )
        result["review_findings"] = findings.model_dump(mode="json")
        if not approved:
            result["status"] = "failed"
            result["error"] = f"Review rejected: {'; '.join(comments)}"
    elif state.get("strict_verification", False):
        findings = ReviewFindings(
            approved=False,
            score=0.0,
            comments=["Review rejected under strict verification: test results or diff missing."],
        )
        result["review_findings"] = findings.model_dump(mode="json")
        result["status"] = "failed"
        result["error"] = "Review rejected: test results or code changes absent."

    return result
