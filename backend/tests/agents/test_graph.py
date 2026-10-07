"""Integration tests for graph.py — run the compiled graph with fake nodes."""

import pytest

from app.agents.fake_nodes import Scenario, make_fake_nodes
from app.agents.graph import build_graph, new_run_state, run_config, REQUIRED_NODE_KEYS
from app.agents.routing import Limits
from app.agents.schemas import (
    ApprovalDecision,
    ApprovalResponse,
    DiffGateResult,
    Plan,
    PlanAuthor,
    PlanStep,
    Requirement,
    ReviewOutcome,
    RunStatus,
    StopReason,
    TestResult,
    TriageCategory,
    find_duplicate_plan_versions,
    get_approved_plan,
)

TestResult.__test__ = False


def _run_until_interrupt(graph, state, config):
    """Invoke the graph; return the last state snapshot."""
    graph.invoke(state, config)
    snapshot = graph.get_state(config)
    return snapshot


def _resume(graph, config, value):
    """Resume graph from interrupt with a value."""
    graph.invoke(Command(resume=value), config)
    return graph.get_state(config)


# We import Command here for resume usage
from langgraph.types import Command


# --- build_graph validation ---

def test_build_graph_rejects_missing_nodes():
    """build_graph raises ValueError if required nodes are missing."""
    nodes = {"intake": lambda s: s}
    with pytest.raises(ValueError, match="Missing required node keys"):
        build_graph(nodes)


# --- Happy path ---

def test_happy_path():
    """Intake -> guardrail -> triage -> retrieval -> planner -> plan_validation
    -> human_approval (approve) -> coder -> diff_gate -> test_runner
    -> reviewer -> pr_agent -> finish."""
    sc = Scenario()
    nodes = make_fake_nodes(sc)
    limits = Limits()
    g = build_graph(nodes, limits)

    state = new_run_state("r1", "o/r", 1, "Bug")
    config = run_config("r1")

    # Run to human_approval interrupt
    snap = _run_until_interrupt(g, state, config)
    assert snap.next == ("human_approval",), f"Expected interrupt at human_approval, got {snap.next}"

    # Resume with approval
    approval = ApprovalResponse(decision=ApprovalDecision.APPROVE)
    snap = _resume(g, config, approval.model_dump())

    # Should have finished
    assert snap.next == ()
    final = snap.values
    assert final["status"] == RunStatus.PR_OPENED
    assert final["current_step"] == "finish"
    assert "pr_link" in final.get("artifact_references", {})

    # Verify call order
    expected = [
        "intake", "input_guardrail", "triage", "retrieval", "planner",
        "plan_validation", "coder", "diff_gate", "test_runner",
        "reviewer", "pr_agent",
    ]
    assert sc.calls == expected


# --- Out of scope ---

def test_out_of_scope():
    """out_of_scope triage -> finish with status OUT_OF_SCOPE."""
    sc = Scenario(triage_category=TriageCategory.OUT_OF_SCOPE)
    nodes = make_fake_nodes(sc)
    g = build_graph(nodes, Limits())

    state = new_run_state("r2", "o/r", 2, "Q")
    config = run_config("r2")

    snap = _run_until_interrupt(g, state, config)
    assert snap.next == ()
    assert snap.values["status"] == RunStatus.OUT_OF_SCOPE
    assert sc.calls == ["intake", "input_guardrail", "triage"]


def test_triage_low_confidence():
    """Run with triage_confidence=0.3 ends escalated with TRIAGE_UNCERTAIN and retrieval not called."""
    sc = Scenario(triage_confidence=0.3)
    nodes = make_fake_nodes(sc)
    g = build_graph(nodes, Limits())

    state = new_run_state("r2b", "o/r", 2, "Unclear request")
    config = run_config("r2b")

    snap = _run_until_interrupt(g, state, config)
    assert snap.next == ()
    assert snap.values["status"] == RunStatus.ESCALATED
    assert snap.values["stop_reason"] == StopReason.TRIAGE_UNCERTAIN
    assert "retrieval" not in sc.calls


# --- Guardrail injection ---

def test_guardrail_blocks():
    """Flagged guardrail -> escalate."""
    sc = Scenario(guardrail_flagged=True)
    nodes = make_fake_nodes(sc)
    g = build_graph(nodes, Limits())

    state = new_run_state("r3", "o/r", 3, "DROP TABLE")
    config = run_config("r3")

    snap = _run_until_interrupt(g, state, config)
    assert snap.next == ()
    assert snap.values["status"] == RunStatus.ESCALATED
    assert snap.values["stop_reason"] == StopReason.INJECTION_SUSPECTED


# --- Plan schema retry then success ---

def test_plan_schema_retry():
    """Plan invalid once, then valid — should re-enter planner."""
    sc = Scenario(plan_valid=[False, True])
    nodes = make_fake_nodes(sc)
    g = build_graph(nodes, Limits())

    state = new_run_state("r4", "o/r", 4, "Bug")
    config = run_config("r4")

    snap = _run_until_interrupt(g, state, config)
    assert snap.next == ("human_approval",)
    # planner was called twice
    assert sc.calls.count("planner") == 2
    assert sc.calls.count("plan_validation") == 2


# --- Plan schema retry exhausted ---

def test_plan_schema_retry_exhausted():
    """All plan validations fail -> escalate after limit."""
    limits = Limits(plan_schema_retries=1)
    sc = Scenario(plan_valid=[False, False, False])
    nodes = make_fake_nodes(sc)
    g = build_graph(nodes, limits)

    state = new_run_state("r5", "o/r", 5, "Bug")
    config = run_config("r5")

    snap = _run_until_interrupt(g, state, config)
    assert snap.next == ()
    assert snap.values["status"] == RunStatus.ESCALATED
    assert snap.values["stop_reason"] == StopReason.PLAN_SCHEMA_RETRIES_EXHAUSTED


# --- Reject, re-plan, approve ---

def test_reject_replan_approve():
    """Reject plan -> planner reruns -> valid -> approve -> finish."""
    sc = Scenario()
    nodes = make_fake_nodes(sc)
    g = build_graph(nodes, Limits())

    state = new_run_state("r6", "o/r", 6, "Bug")
    config = run_config("r6")

    # First interrupt
    snap = _run_until_interrupt(g, state, config)
    assert snap.next == ("human_approval",)

    # Reject
    reject = ApprovalResponse(decision=ApprovalDecision.REJECT, feedback="Too broad")
    snap = _resume(g, config, reject.model_dump())
    # Should re-plan and interrupt again
    assert snap.next == ("human_approval",)

    # Now approve
    approve = ApprovalResponse(decision=ApprovalDecision.APPROVE)
    snap = _resume(g, config, approve.model_dump())
    assert snap.next == ()
    assert snap.values["status"] == RunStatus.PR_OPENED
    assert sc.calls.count("planner") == 2


# --- Test failure, debug loop, then pass ---

def test_debug_loop():
    """Tests fail once, debugger re-diffs, tests pass."""
    sc = Scenario(tests=[TestResult.FAIL, TestResult.PASS])
    nodes = make_fake_nodes(sc)
    g = build_graph(nodes, Limits())

    state = new_run_state("r7", "o/r", 7, "Bug")
    config = run_config("r7")

    snap = _run_until_interrupt(g, state, config)
    assert snap.next == ("human_approval",)
    approve = ApprovalResponse(decision=ApprovalDecision.APPROVE)
    snap = _resume(g, config, approve.model_dump())

    assert snap.next == ()
    assert snap.values["status"] == RunStatus.PR_OPENED
    assert "debugger" in sc.calls
    assert sc.calls.count("test_runner") == 2


# --- Debug limit exhausted ---

def test_debug_limit_exhausted():
    """Tests keep failing -> escalate after debugger limit."""
    limits = Limits(debug_attempts=1)
    sc = Scenario(tests=[TestResult.FAIL, TestResult.FAIL, TestResult.FAIL])
    nodes = make_fake_nodes(sc)
    g = build_graph(nodes, limits)

    state = new_run_state("r8", "o/r", 8, "Bug")
    config = run_config("r8")

    snap = _run_until_interrupt(g, state, config)
    assert snap.next == ("human_approval",)
    approve = ApprovalResponse(decision=ApprovalDecision.APPROVE)
    snap = _resume(g, config, approve.model_dump())

    assert snap.next == ()
    assert snap.values["status"] == RunStatus.ESCALATED
    assert snap.values["stop_reason"] == StopReason.DEBUGGER_LIMIT


# --- Reviewer revise loop ---

def test_reviewer_revise_loop():
    """Reviewer asks for revision, coder re-diffs, reviewer approves."""
    sc = Scenario(reviews=[ReviewOutcome.REVISE, ReviewOutcome.APPROVE])
    nodes = make_fake_nodes(sc)
    g = build_graph(nodes, Limits())

    state = new_run_state("r9", "o/r", 9, "Bug")
    config = run_config("r9")

    snap = _run_until_interrupt(g, state, config)
    assert snap.next == ("human_approval",)
    approve = ApprovalResponse(decision=ApprovalDecision.APPROVE)
    snap = _resume(g, config, approve.model_dump())

    assert snap.next == ()
    assert snap.values["status"] == RunStatus.PR_OPENED
    assert sc.calls.count("coder") == 2
    assert sc.calls.count("reviewer") == 2


# --- Reviewer block ---

def test_reviewer_block():
    """Reviewer blocks -> escalate (reviewer_block)."""
    sc = Scenario(reviews=[ReviewOutcome.BLOCK])
    nodes = make_fake_nodes(sc)
    g = build_graph(nodes, Limits())

    state = new_run_state("r10", "o/r", 10, "Bug")
    config = run_config("r10")

    snap = _run_until_interrupt(g, state, config)
    assert snap.next == ("human_approval",)
    approve = ApprovalResponse(decision=ApprovalDecision.APPROVE)
    snap = _resume(g, config, approve.model_dump())

    assert snap.next == ()
    assert snap.values["status"] == RunStatus.ESCALATED
    assert snap.values["stop_reason"] == StopReason.REVIEWER_BLOCK


# --- Diff gate blocked ---

def test_diff_gate_blocked():
    """Diff hits denylist -> escalate (diff_blocked)."""
    sc = Scenario(diff_gate=[DiffGateResult.DENYLIST_HIT])
    nodes = make_fake_nodes(sc)
    g = build_graph(nodes, Limits())

    state = new_run_state("r11", "o/r", 11, "Bug")
    config = run_config("r11")

    snap = _run_until_interrupt(g, state, config)
    assert snap.next == ("human_approval",)
    approve = ApprovalResponse(decision=ApprovalDecision.APPROVE)
    snap = _resume(g, config, approve.model_dump())

    assert snap.next == ()
    assert snap.values["status"] == RunStatus.ESCALATED
    assert snap.values["stop_reason"] == StopReason.DIFF_BLOCKED


# --- Diff schema retry ---

def test_diff_schema_retry():
    """Diff schema invalid once, then clean on retry."""
    sc = Scenario(diff_gate=[DiffGateResult.SCHEMA_INVALID, DiffGateResult.CLEAN])
    nodes = make_fake_nodes(sc)
    g = build_graph(nodes, Limits())

    state = new_run_state("r12", "o/r", 12, "Bug")
    config = run_config("r12")

    snap = _run_until_interrupt(g, state, config)
    assert snap.next == ("human_approval",)
    approve = ApprovalResponse(decision=ApprovalDecision.APPROVE)
    snap = _resume(g, config, approve.model_dump())

    assert snap.next == ()
    assert snap.values["status"] == RunStatus.PR_OPENED
    assert sc.calls.count("coder") == 2
    assert sc.calls.count("diff_gate") == 2


# --- Run budget ---

def test_run_budget_exhausted():
    """Budget exhausted before reviewer -> escalate."""
    limits = Limits(run_budget=4)
    sc = Scenario()
    nodes = make_fake_nodes(sc)
    g = build_graph(nodes, limits)

    state = new_run_state("r13", "o/r", 13, "Bug")
    config = run_config("r13")

    snap = _run_until_interrupt(g, state, config)
    assert snap.next == ("human_approval",)
    approve = ApprovalResponse(decision=ApprovalDecision.APPROVE)
    snap = _resume(g, config, approve.model_dump())

    assert snap.next == ()
    assert snap.values["status"] == RunStatus.ESCALATED
    assert snap.values["stop_reason"] == StopReason.RUN_BUDGET


# --- new_run_state and run_config ---

def test_new_run_state():
    """new_run_state returns proper initial state."""
    s = new_run_state("r", "o/r", 1, "T")
    assert s["run_id"] == "r"
    assert s["status"] == RunStatus.RUNNING
    assert s["plan_schema_retries"] == 0
    assert s["run_llm_calls"] == 0
    assert s["plan_versions"] == []


def test_run_config():
    """run_config sets thread_id."""
    c = run_config("r")
    assert c["configurable"]["thread_id"] == "r"


# --- Review findings follow-up tests ---

EXTERNAL_NODES_ORDER = [
    "intake",
    "input_guardrail",
    "triage",
    "retrieval",
    "planner",
    "plan_validation",
    "coder",
    "diff_gate",
    "test_runner",
    "debugger",
    "reviewer",
    "pr_agent",
]


@pytest.mark.parametrize("failing_node", EXTERNAL_NODES_ORDER)
def test_node_error_at_external_nodes(failing_node):
    """Parametrized over 12 external nodes: node_error_at set to that node,
    assert final status is escalated, stop_reason is error, and no node after it was called.
    """
    # For debugger, we need tests to fail on the first run so it routes to debugger
    tests_cfg = [TestResult.FAIL, TestResult.PASS] if failing_node == "debugger" else [TestResult.PASS]
    sc = Scenario(
        node_error_at=failing_node,
        node_error_reason=StopReason.ERROR,
        tests=tests_cfg,
    )
    nodes = make_fake_nodes(sc)
    g = build_graph(nodes, Limits())

    run_id = f"err_{failing_node}"
    state = new_run_state(run_id, "o/r", 1, "Bug")
    config = run_config(run_id)

    snap = _run_until_interrupt(g, state, config)
    if snap.next == ("human_approval",):
        # We need to approve to let execution reach post-approval nodes
        approval = ApprovalResponse(decision=ApprovalDecision.APPROVE)
        snap = _resume(g, config, approval.model_dump())

    assert snap.next == ()
    final = snap.values
    assert final["status"] == RunStatus.ESCALATED
    assert final["stop_reason"] == StopReason.ERROR

    # Verify no node after failing_node was called
    assert failing_node in sc.calls
    idx = sc.calls.index(failing_node)
    assert sc.calls == sc.calls[:idx + 1]


def test_edit_then_reject_then_planner():
    """Edit then reject then planner again: all plan version_ids in final state
    are unique (find_duplicate_plan_versions returns empty) and the approved
    version resolves to the intended plan.
    """
    sc = Scenario()
    nodes = make_fake_nodes(sc)
    g = build_graph(nodes, Limits())

    run_id = "test_edit_reject_plan"
    state = new_run_state(run_id, "o/r", 10, "Bug")
    config = run_config(run_id)

    # 1. Runs through planner (v1) -> plan_validation -> human_approval
    snap = _run_until_interrupt(g, state, config)
    assert snap.next == ("human_approval",)

    # 2. Edit plan -> human-authored plan (v2) -> plan_validation -> human_approval
    edited = Plan(
        version_id="will_be_overridden",
        author=PlanAuthor.HUMAN,
        intent="Human revised intent",
        scope="target module",
        non_goals="none",
        affected_files=["app/target.py"],
        requirements=[Requirement(id="R1", description="Fix", acceptance_criterion="Tests pass")],
        steps=[PlanStep(description="Edit target", requirement_ids=["R1"], files=["app/target.py"])],
        expected_tests=["tests/test_target.py"],
    )
    edit_resp = ApprovalResponse(decision=ApprovalDecision.EDIT, edited_plan=edited)
    snap = _resume(g, config, edit_resp.model_dump())
    assert snap.next == ("human_approval",)

    # 3. Reject plan -> planner reruns (v3) -> plan_validation -> human_approval
    reject_resp = ApprovalResponse(decision=ApprovalDecision.REJECT, feedback="Need more tests")
    snap = _resume(g, config, reject_resp.model_dump())
    assert snap.next == ("human_approval",)

    # 4. Approve plan v3 -> coder -> ... -> finish
    approve_resp = ApprovalResponse(decision=ApprovalDecision.APPROVE)
    snap = _resume(g, config, approve_resp.model_dump())
    assert snap.next == ()

    final = snap.values
    assert final["status"] == RunStatus.PR_OPENED
    assert find_duplicate_plan_versions(final) == []
    approved_plan = get_approved_plan(final)
    assert approved_plan.version_id == "v3"
    assert final["approved_version"] == "v3"


@pytest.mark.parametrize("bad_payload", [
    {"decision": "approve", "feedback": "x"},  # approve with feedback violates model
    "not_a_dict_or_response",
    12345,
    {"decision": "unknown_decision"},
])
def test_invalid_resume_payload_escalates(bad_payload):
    """Invalid resume payload ends escalated with stop_reason error."""
    sc = Scenario()
    nodes = make_fake_nodes(sc)
    g = build_graph(nodes, Limits())

    run_id = "test_bad_resume"
    state = new_run_state(run_id, "o/r", 20, "Bug")
    config = run_config(run_id)

    snap = _run_until_interrupt(g, state, config)
    assert snap.next == ("human_approval",)

    snap = _resume(g, config, bad_payload)
    assert snap.next == ()
    final = snap.values
    assert final["status"] == RunStatus.ESCALATED
    assert final["stop_reason"] == StopReason.ERROR


def test_approve_clears_prior_rejection_feedback():
    """After approve following an earlier reject, state['approval_feedback'] is None."""
    sc = Scenario()
    nodes = make_fake_nodes(sc)
    g = build_graph(nodes, Limits())

    run_id = "test_clear_feedback"
    state = new_run_state(run_id, "o/r", 30, "Bug")
    config = run_config(run_id)

    # 1. Interrupt at human_approval
    snap = _run_until_interrupt(g, state, config)
    assert snap.next == ("human_approval",)

    # 2. Reject with feedback
    reject_resp = ApprovalResponse(decision=ApprovalDecision.REJECT, feedback="Initial reject feedback")
    snap = _resume(g, config, reject_resp.model_dump())
    assert snap.next == ("human_approval",)
    assert snap.values.get("approval_feedback") == "Initial reject feedback"

    # 3. Approve
    approve_resp = ApprovalResponse(decision=ApprovalDecision.APPROVE)
    snap = _resume(g, config, approve_resp.model_dump())
    assert snap.next == ()
    final = snap.values
    assert final["status"] == RunStatus.PR_OPENED
    assert final["approval_feedback"] is None


# --- 7a. Writer-blind at graph level ---

def test_writer_blind_at_graph_level():
    """Coder reasoning must not appear in final state; it goes only to scenario.trace."""
    sc = Scenario()
    nodes = make_fake_nodes(sc)
    g = build_graph(nodes, Limits())

    run_id = "test_writer_blind"
    state = new_run_state(run_id, "o/r", 40, "Bug")
    config = run_config(run_id)

    snap = _run_until_interrupt(g, state, config)
    assert snap.next == ("human_approval",)
    approve = ApprovalResponse(decision=ApprovalDecision.APPROVE)
    snap = _resume(g, config, approve.model_dump())
    assert snap.next == ()
    assert snap.values["status"] == RunStatus.PR_OPENED

    final_repr = repr(snap.values)
    assert "Coder reasoning" not in final_repr
    assert any("Coder reasoning" in t for t in sc.trace)


# --- 7b. Call-order assertions in guardrail/diff-gate tests ---

def test_guardrail_blocks_stops_before_triage():
    """Flagged guardrail -> escalate; triage is never called."""
    sc = Scenario(guardrail_flagged=True)
    nodes = make_fake_nodes(sc)
    g = build_graph(nodes, Limits())

    state = new_run_state("r3b", "o/r", 3, "DROP TABLE")
    config = run_config("r3b")

    snap = _run_until_interrupt(g, state, config)
    assert snap.next == ()
    assert snap.values["status"] == RunStatus.ESCALATED
    assert snap.values["stop_reason"] == StopReason.INJECTION_SUSPECTED
    assert "triage" not in sc.calls


def test_diff_gate_blocked_stops_before_test_runner():
    """Diff gate denylist hit -> escalate; test_runner is never called."""
    sc = Scenario(diff_gate=[DiffGateResult.DENYLIST_HIT])
    nodes = make_fake_nodes(sc)
    g = build_graph(nodes, Limits())

    state = new_run_state("r11b", "o/r", 11, "Bug")
    config = run_config("r11b")

    snap = _run_until_interrupt(g, state, config)
    assert snap.next == ("human_approval",)
    approve = ApprovalResponse(decision=ApprovalDecision.APPROVE)
    snap = _resume(g, config, approve.model_dump())
    assert snap.next == ()
    assert snap.values["status"] == RunStatus.ESCALATED
    assert snap.values["stop_reason"] == StopReason.DIFF_BLOCKED
    assert "test_runner" not in sc.calls


# --- 7c. Plan revisions exhausted at graph level ---

def test_plan_revisions_exhausted_at_graph_level():
    """Reject repeatedly until exhausted; planner ran limit+1 times."""
    limits = Limits()  # default plan_revisions = 3
    sc = Scenario()
    nodes = make_fake_nodes(sc)
    g = build_graph(nodes, limits)

    run_id = "test_revisions_exhausted"
    state = new_run_state(run_id, "o/r", 50, "Bug")
    config = run_config(run_id)

    # Initial run -> planner (1st) -> human_approval
    snap = _run_until_interrupt(g, state, config)
    assert snap.next == ("human_approval",)

    reject_count = 0
    while snap.next == ("human_approval",):
        reject = ApprovalResponse(decision=ApprovalDecision.REJECT, feedback=f"Not good {reject_count}")
        snap = _resume(g, config, reject.model_dump())
        reject_count += 1
        if snap.next == ():
            break

    assert snap.next == ()
    final = snap.values
    assert final["status"] == RunStatus.ESCALATED
    assert final["stop_reason"] == StopReason.PLAN_REVISIONS_EXHAUSTED
    # Needed exactly limits.plan_revisions + 1 rejects to exhaust
    assert reject_count == limits.plan_revisions + 1
    # planner ran once initially plus once per reject before exhaustion
    assert sc.calls.count("planner") == limits.plan_revisions + 1
