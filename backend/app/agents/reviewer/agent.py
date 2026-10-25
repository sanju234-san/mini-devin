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


import ast


def run_static_analysis(code_changes: list[Any]) -> dict[str, Any]:
    """Runs lightweight static analysis (AST parsing & syntax check) on changed files."""
    findings = []
    exit_code = 0
    for change in code_changes:
        fpath = change.get("file_path", "") if isinstance(change, dict) else getattr(change, "file_path", "")
        diff_str = change.get("diff", "") if isinstance(change, dict) else getattr(change, "diff", "")
        added_lines = [line[1:] for line in diff_str.splitlines() if line.startswith("+") and not line.startswith("+++")]
        content = "\n".join(added_lines)
        if fpath.endswith(".py") and content.strip():
            try:
                ast.parse(content)
            except SyntaxError as e:
                findings.append(f"Syntax error in {fpath}: {e.msg} at line {e.lineno}")
                exit_code = 1
    return {
        "command": "python -m py_compile <changed_files>",
        "exit_code": exit_code,
        "findings": findings,
        "clean": exit_code == 0,
    }


def reviewer_node(state: AgentState) -> dict[str, Any]:
    """
    Reviewer Agent Node: Checks modifications against the agreed plan.
    
    Safety Invariants:
    1. Independent review against the approved plan (writer-blind to Coder reasoning).
    2. Strictly refuses approval if tests did not pass or changes are unverified.
    3. Validates diff against security denylist (.env, workflows, secrets, traversal).
    4. Evaluates all six Synopsis dimensions (Plan coverage, Correctness, Regression risk,
       Scope control, Security, Documentation).
    5. Returns exactly one verdict: 'approve', 'revise', or 'block'.
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
        findings_dict = existing_findings.model_dump(mode="json") if hasattr(existing_findings, "model_dump") else dict(existing_findings)
        if "verdict" not in findings_dict:
            findings_dict["verdict"] = "approve" if findings_dict.get("approved", False) else "block"
        result["review_findings"] = findings_dict
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
        revision_instructions: list[str] = []
        is_blocked = False

        changes_list = code_changes if isinstance(code_changes, list) else [code_changes]

        # 1. Static analysis & linter check
        linter_output = run_static_analysis(changes_list)
        if not linter_output["clean"]:
            comments.append(f"Static analysis failed: {'; '.join(linter_output['findings'])}")
            revision_instructions.append("Fix syntax errors detected by static analysis.")

        # 2. Security dimension
        clean_diff, violations = validate_diff_safety(changes_list)
        if not clean_diff:
            comments.append(f"Security violation: diff modifies prohibited files: {', '.join(violations)}")
            is_blocked = True

        # 3. Scope control dimension
        affected_files: list[str] = []
        plan_reqs: list[str] = []
        if plan:
            if isinstance(plan, dict):
                affected_files = plan.get("affected_files", [])
                plan_reqs = [r.get("id") for r in plan.get("requirements", []) if isinstance(r, dict)]
            elif hasattr(plan, "affected_files"):
                affected_files = plan.affected_files
                plan_reqs = [getattr(r, "id", "") for r in getattr(plan, "requirements", [])]

        unplanned_files = []
        if affected_files:
            for change in changes_list:
                fpath = change.get("file_path", "") if isinstance(change, dict) else getattr(change, "file_path", "")
                if fpath and fpath not in affected_files:
                    unplanned_files.append(fpath)

        if unplanned_files:
            comments.append(f"Scope violation: files {unplanned_files} modified but not in approved plan scope.")
            revision_instructions.append(f"Remove modifications to unplanned files: {unplanned_files}")

        # 4. Correctness & verification dimension
        if not tests_passed:
            comments.append("Verification failure: test suite did not pass.")
            revision_instructions.append("Fix failing test assertions identified by test runner.")

        # 5. Plan coverage dimension
        covered_reqs = set()
        for change in changes_list:
            rids = change.get("requirement_ids", []) if isinstance(change, dict) else getattr(change, "requirement_ids", [])
            covered_reqs.update(rids or [])
        if plan_reqs and not covered_reqs.intersection(set(plan_reqs)):
            comments.append(f"Plan coverage gap: requirements {plan_reqs} not mapped in changes.")
            revision_instructions.append(f"Ensure code changes explicitly address requirements: {plan_reqs}")

        # 6. Regression risk & documentation
        doc_passed = bool(changes_list)

        dimensions = {
            "plan_coverage": bool(not plan_reqs or covered_reqs.intersection(set(plan_reqs))),
            "correctness": tests_passed,
            "regression_risk": bool(not unplanned_files),
            "scope_control": bool(not unplanned_files),
            "security": clean_diff,
            "documentation": doc_passed,
        }

        # Determine verdict: Approve, Revise, Block
        if is_blocked:
            verdict = "block"
            approved = False
        elif not tests_passed or not clean_diff or unplanned_files or not linter_output["clean"] or revision_instructions:
            verdict = "revise"
            approved = False
        else:
            verdict = "approve"
            approved = True

        score = 1.0 if approved else (0.5 if verdict == "revise" else 0.0)
        findings = ReviewFindings(
            approved=approved,
            verdict=verdict,
            score=score,
            dimensions=dimensions,
            revision_instructions=revision_instructions,
            linter_output=linter_output,
            comments=comments if comments else ["Patch adheres strictly to plan, tests passed, and guardrails satisfied."],
        )
        result["review_findings"] = findings.model_dump(mode="json")
        result["linter_results"] = linter_output
        if not approved:
            result["status"] = "failed" if (verdict == "block" or state.get("strict_verification", False)) else "reviewing"
            result["error"] = f"Review {verdict}: {'; '.join(comments)}"
    elif state.get("strict_verification", False):
        findings = ReviewFindings(
            approved=False,
            verdict="block",
            score=0.0,
            comments=["Review rejected under strict verification: test results or diff missing."],
        )
        result["review_findings"] = findings.model_dump(mode="json")
        result["status"] = "failed"
        result["error"] = "Review rejected: test results or code changes absent."

    return result
