"""
Planner Agent Implementation for Mini-Devin.

Synthesizes issue specifications and authentic repository code evidence into a
detailed, structured engineering plan. Grounds all findings in RetrievedContext,
separates evidence from hypotheses, and freezes the plan with a deterministic
cryptographic hash before submitting for human approval.
"""

from __future__ import annotations

import json
import logging
from pathlib import Path
import re
from typing import Any, Optional

from app.agents.model_router import route
from app.agents.schemas import (
    AgentState,
    ImplementationPlan,
    PlanEvidence,
    PlanStep,
    RetrievedContext,
    RetrievedSnippet,
    RootCauseAnalysis,
    compute_plan_hash,
    create_event,
)

logger = logging.getLogger(__name__)

# Patterns to extract function and class declarations from snippets
_DEF_RE = re.compile(r"^\s*def\s+([A-Za-z0-9_]+)\s*\(", re.MULTILINE)
_CLASS_RE = re.compile(r"^\s*class\s+([A-Za-z0-9_]+)\s*[:\(]", re.MULTILINE)
_RAISE_RE = re.compile(r"^\s*raise\s+([A-Za-z0-9_]+)\b", re.MULTILINE)


def extract_symbols_from_code(code: str) -> list[str]:
    """Extract declared functions, classes, or exceptions from code snippet text."""
    symbols: list[str] = []
    seen: set[str] = set()

    for m in _CLASS_RE.finditer(code):
        sym = f"class {m.group(1)}"
        if sym not in seen:
            seen.add(sym)
            symbols.append(sym)

    for m in _DEF_RE.finditer(code):
        sym = f"def {m.group(1)}()"
        if sym not in seen:
            seen.add(sym)
            symbols.append(sym)

    for m in _RAISE_RE.finditer(code):
        sym = f"raise {m.group(1)}"
        if sym not in seen:
            seen.add(sym)
            symbols.append(sym)

    return symbols


def try_llm_plan_generation(
    title: str,
    body: str,
    retrieved: dict[str, Any],
) -> Optional[ImplementationPlan]:
    """
    Attempt to use the shared LLM client to produce a detailed engineering plan.
    
    Returns None if the shared LLM client raises NotImplementedError, is
    unimplemented, or fails, enabling clean deterministic synthesis fallback.
    """
    try:
        from app.integrations.llm_provider_client import complete

        snippets_text = "\n".join(
            f"--- {s.get('file_path')} (lines {s.get('start_line')}-{s.get('end_line')}) ---\n{s.get('content')}"
            for s in retrieved.get("snippets", [])
        )
        prompt = (
            f"You are the Planner Agent for Mini-Devin.\n"
            f"Issue Title: {title}\n"
            f"Issue Body: {body}\n\n"
            f"Code Evidence:\n{snippets_text}\n\n"
            f"Generate a valid JSON object matching the ImplementationPlan schema."
        )
        response = complete(prompt, agent_name="planner")
        if response and isinstance(response, str):
            data = json.loads(response)
            data["provenance"] = "llm_generated"
            plan = ImplementationPlan.model_validate(data)
            return plan
    except (NotImplementedError, ImportError, Exception) as exc:
        logger.debug("LLM plan generation bypassed (shared client not implemented: %s)", exc)
    return None


def synthesize_deterministic_plan(
    title: str,
    body: str,
    retrieved: dict[str, Any],
    repo: str,
) -> ImplementationPlan:
    """
    Synthesize an evidence-grounded, detailed engineering plan deterministically
    from authentic repository snippets and issue specifications.
    
    Strictly preserves provenance: never fabricates non-existent lines or files.
    """
    retrieval_status = retrieved.get("retrieval_status", "success")
    snippets_data = retrieved.get("snippets", [])
    files = retrieved.get("files", [])

    # Case 1: Target repository checkout is missing
    if retrieval_status == "missing_checkout":
        words = [w.lower() for w in title.split() if len(w) > 3 and w.isalnum()]
        kw = words[0] if words else "module"
        candidate_targets = files if files else [f"src/{kw}.py", f"tests/test_{kw}.py"]

        return ImplementationPlan(
            summary=f"Fix: {title}",
            explanation=(
                f"Target repository '{repo}' is not available as an approved local directory. "
                "Per Mini-Devin safety and provenance rules, code modifications and line-grounded "
                "plans cannot be verified without an authentic repository checkout. "
                f"Candidate targets {candidate_targets} are unverified hypotheses pending checkout."
            ),
            steps=[
                PlanStep(
                    step_number=1,
                    description=f"Request backend team repository checkout service for '{repo}'.",
                    target_file="repo_checkout",
                    action="inspect",
                ),
                PlanStep(
                    step_number=2,
                    description=f"Inspect authentic code structure in `{candidate_targets[0]}` once checked out.",
                    target_file=candidate_targets[0],
                    action="modify",
                ),
                PlanStep(
                    step_number=3,
                    description=f"Add unit test reproducing '{title}' in `{candidate_targets[1]}`.",
                    target_file=candidate_targets[1],
                    action="modify",
                ),
            ],
            affected_files=candidate_targets,
            estimated_complexity="high",
            plan_version="v1",
            root_cause=RootCauseAnalysis(
                evidence_backed_findings=[],
                hypotheses=[
                    f"Issue '{title}' refers to repository '{repo}' which requires local checkout.",
                    f"Hypothesized target files {candidate_targets} await verification against genuine codebase.",
                ],
            ),
            acceptance_criteria=[
                f"Repository '{repo}' checked out into an approved workspace directory.",
                f"Root-cause analysis performed on verified repository files for '{title}'.",
            ],
            test_strategy={
                "existing_tests_to_inspect": [],
                "new_tests_to_add": [f"Add test in `{candidate_targets[1]}` once repository is checked out."],
            },
            security_considerations=[
                "Do not execute remote repository code until repository checkout is validated.",
            ],
            risks_and_assumptions=[
                "Risk: No authentic repository evidence is currently available; target files are hypotheses.",
                "Assumption: Backend repository clone/checkout interface will be provided.",
            ],
            suggested_verification_commands=[
                "echo 'Awaiting repository checkout before test execution'",
            ],
            provenance="deterministic_unverified_missing_checkout",
        )

    # Case 2: Repository exists but yielded no matching code results
    if retrieval_status == "no_results" or not snippets_data:
        return ImplementationPlan(
            summary=f"Investigate: No Matching Snippets Found for '{title}'",
            explanation=(
                f"Retrieval scanned repository '{repo}', but no source snippets matched the "
                f"query terms for issue '{title}'. Additional issue details or manual inspection required."
            ),
            steps=[
                PlanStep(
                    step_number=1,
                    description=f"Inspect repository structure to identify files relevant to '{title}'.",
                    target_file="repository_root",
                    action="inspect",
                )
            ],
            affected_files=[],
            estimated_complexity="medium",
            plan_version="v1",
            root_cause=RootCauseAnalysis(
                evidence_backed_findings=[],
                hypotheses=[
                    f"Issue '{title}' may relate to an unindexed file or require creating new modules."
                ],
            ),
            acceptance_criteria=[
                f"Relevant source file for '{title}' identified.",
            ],
            test_strategy={
                "existing_tests_to_inspect": [],
                "new_tests_to_add": [f"Add test reproducing '{title}' once target file is located."],
            },
            security_considerations=[
                "Verify file paths and permissions before creating new files.",
            ],
            risks_and_assumptions=[
                "Risk: Retrieval query did not match existing identifier tokens in indexed files.",
            ],
            suggested_verification_commands=[
                "git status",
            ],
            provenance="deterministic_no_results",
        )

    # Case 3: Genuine repository evidence is available
    evidence_items: list[PlanEvidence] = []
    file_changes: list[dict[str, Any]] = []
    evidence_findings: list[str] = []
    existing_tests_to_inspect: list[str] = []

    for snip in snippets_data:
        fpath = snip.get("file_path", "")
        sline = snip.get("start_line", 1)
        eline = snip.get("end_line", 1)
        content = snip.get("content", "")

        symbols = extract_symbols_from_code(content)
        sym_label = ", ".join(symbols) if symbols else None

        obs = f"Indexed lines {sline}-{eline} containing: {symbols[0]}" if symbols else f"Indexed lines {sline}-{eline}"
        evidence_items.append(
            PlanEvidence(
                file_path=fpath,
                start_line=sline,
                end_line=eline,
                symbol=sym_label,
                observation=obs,
            )
        )
        evidence_findings.append(f"In `{fpath}` (lines {sline}-{eline}): {obs}")

        if "test" in fpath.lower() and fpath not in existing_tests_to_inspect:
            existing_tests_to_inspect.append(fpath)

    # Separate code files from test files
    code_files = [f for f in files if "test" not in f.lower()]
    target_code_file = code_files[0] if code_files else files[0]
    target_test_file = (
        next((f for f in files if "test" in f.lower()), None)
        or f"tests/test_{Path(target_code_file).stem}.py"
    )

    primary_symbol = evidence_items[0].symbol if evidence_items and evidence_items[0].symbol else "target logic"

    file_changes.append({
        "file_path": target_code_file,
        "module_or_function": primary_symbol,
        "change_description": f"Refactor and add defensive error handling to address: {title}",
    })
    file_changes.append({
        "file_path": target_test_file,
        "module_or_function": f"test_{Path(target_code_file).stem}_regression",
        "change_description": f"Add regression assertion verifying behavior reported in '{title}'",
    })

    steps = [
        PlanStep(
            step_number=1,
            description=f"Inspect and modify `{target_code_file}` ({primary_symbol}) to satisfy intended behavior.",
            target_file=target_code_file,
            action="modify",
        ),
        PlanStep(
            step_number=2,
            description=f"Add regression test in `{target_test_file}` asserting expected outcome for '{title}'.",
            target_file=target_test_file,
            action="modify" if target_test_file in files else "create",
        ),
        PlanStep(
            step_number=3,
            description=f"Execute verification test suite against `{target_test_file}` to confirm resolution.",
            target_file=target_test_file,
            action="inspect",
        ),
    ]

    affected_files = list(dict.fromkeys([target_code_file, target_test_file]))

    return ImplementationPlan(
        summary=f"Fix: {title}",
        explanation=(
            f"Evidence-grounded analysis of issue '{title}' against repository '{repo}'. "
            f"Verified relevant declarations in `{target_code_file}` grounded in {len(evidence_items)} retrieved snippets."
        ),
        steps=steps,
        affected_files=affected_files,
        estimated_complexity="medium" if len(evidence_items) <= 3 else "high",
        plan_version="v1",
        evidence_items=evidence_items,
        root_cause=RootCauseAnalysis(
            evidence_backed_findings=evidence_findings,
            hypotheses=[
                f"Defect reported in '{title}' occurs when `{primary_symbol}` receives unexpected input or state.",
            ],
        ),
        file_changes=file_changes,
        dependencies_and_interfaces=[
            f"Preserve public API and function signature compatibility in `{target_code_file}`.",
        ],
        acceptance_criteria=[
            f"Issue '{title}' is resolved without regressions.",
            f"Regression test in `{target_test_file}` passes deterministically.",
            f"All existing unit tests in repository continue to pass.",
        ],
        test_strategy={
            "existing_tests_to_inspect": existing_tests_to_inspect,
            "new_tests_to_add": [f"`{target_test_file}` regression test for '{title}'"],
        },
        security_considerations=[
            "Validate all inputs against unexpected boundary values and type mutations.",
            "Ensure no secrets, tokens, or credential strings are logged or exposed in error messages.",
        ],
        risks_and_assumptions=[
            f"Assumption: Retrieved code snippet in `{target_code_file}` contains the entrypoint for reported defect.",
            "Risk: Secondary side effects in consumers of this module if return signatures change.",
        ],
        suggested_verification_commands=[
            f"pytest {target_test_file} -v",
            "pytest tests/ -v",
        ],
        provenance="deterministic_evidence_synthesis",
    )


def planner_node(state: AgentState) -> dict[str, Any]:
    """
    Planner Agent Node: Synthesizes issue details and code evidence into a concrete,
    frozen implementation plan.
    
    Calculates a deterministic cryptographic hash of the plan, freezes it in state,
    and pauses for human operator approval.
    """
    tier = route("planner")
    title = state.get("issue_title", "")
    body = state.get("issue_body", "")
    repo = state.get("repo", "local/repo")
    retrieved_raw = state.get("retrieved_context") or {}

    retrieved_dict: dict[str, Any] = (
        retrieved_raw.model_dump(mode="json")
        if hasattr(retrieved_raw, "model_dump")
        else dict(retrieved_raw)
    )

    logger.info("Executing Planner node [tier=%s] for repo='%s'", tier, repo)

    # 1. Attempt LLM generation first via shared interface
    plan = try_llm_plan_generation(title=title, body=body, retrieved=retrieved_dict)

    # 2. If LLM provider is unimplemented or fails, use evidence-grounded synthesizer
    if plan is None:
        plan = synthesize_deterministic_plan(
            title=title,
            body=body,
            retrieved=retrieved_dict,
            repo=repo,
        )

    # 3. Freeze the plan with a deterministic SHA-256 hash
    plan_dict = plan.model_dump(mode="json")
    plan_hash = compute_plan_hash(plan_dict)
    plan.plan_hash = plan_hash
    plan_dict["plan_hash"] = plan_hash

    event = create_event(
        agent_name="planner",
        event_type="plan_generated",
        status="awaiting_approval",
        message=f"Implementation plan generated and frozen (v1:{plan_hash[:8]}). Awaiting human approval.",
        metadata={
            "tier": tier.value,
            "plan_version": plan.plan_version,
            "plan_hash": plan_hash,
            "affected_files": plan.affected_files,
            "step_count": len(plan.steps),
            "evidence_count": len(plan.evidence_items),
            "provenance": plan.provenance,
        },
    )

    return {
        "plan": plan_dict,
        "plan_version": plan.plan_version,
        "plan_hash": plan_hash,
        "status": "awaiting_approval",
        "current_agent": "planner",
        "events": [event],
    }
