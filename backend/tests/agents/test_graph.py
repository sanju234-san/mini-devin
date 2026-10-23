"""
Automated tests for Mini-Devin's Day 1 LangGraph workflow and checkpointing.

Verifies:
1. Execution from issue input to Planner interrupt.
2. Preservation of implementation plan at human approval interrupt.
3. Resuming approved plan using the same thread_id.
4. Safe termination of rejected plans without code generation.
5. Out-of-scope issues routed to safe stopping path.
6. Validation and safe handling of missing/invalid issue inputs.
7. Checkpoint state retention across interrupt and resume.
8. Retry limits and initial state defaults.
"""

from __future__ import annotations

import pytest
from langgraph.checkpoint.memory import MemorySaver
from langgraph.types import Command

from app.agents.checkpointer import create_checkpointer
from app.agents.graph import create_graph, create_workflow_graph
from app.agents.model_router import ModelTier, route
from app.agents.schemas import (
    AgentState,
    ApprovalDecision,
    ImplementationPlan,
    TriageClassification,
    create_initial_state,
)


@pytest.fixture
def memory_checkpointer() -> MemorySaver:
    """Provide a fresh, isolated checkpointer for each test."""
    return create_checkpointer()


# ΓöÇΓöÇ Test 1: Graph execution to planner interrupt ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ

def test_graph_executes_to_planner_interrupt(memory_checkpointer: MemorySaver):
    """Workflow should execute Triage -> Retrieval -> Planner and pause at Human Approval."""
    graph = create_graph(checkpointer=memory_checkpointer)
    initial_state = create_initial_state(
        issue_title="Fix ZeroDivisionError in calculation endpoint",
        issue_body="When denominator is zero, the service crashes with 500.",
        repo="acme/calculator",
    )
    thread_id = initial_state["thread_id"]
    config = {"configurable": {"thread_id": thread_id}}

    # Invoke graph: should halt at human_approval interrupt
    graph.invoke(initial_state, config=config)

    # Inspect checkpointed state
    saved_state = graph.get_state(config)
    assert saved_state.next == ("human_approval",), "Workflow should be paused waiting for approval"

    values = saved_state.values
    assert values["status"] == "awaiting_approval"
    assert values["current_agent"] == "planner"
    assert values["triage"] is not None
    assert values["triage"]["is_supported"] is True
    assert values["triage"]["classification"] in (
        TriageClassification.BUG.value,
        TriageClassification.FEATURE.value,
    )
    assert values["retrieved_context"] is not None
    assert values["retrieved_context"]["is_mock"] is False
    assert values["retrieved_context"]["retrieval_status"] == "missing_checkout"
    assert values["plan"] is not None
    assert len(values["plan"]["steps"]) > 0
    assert len(values["plan"]["affected_files"]) > 0


# ΓöÇΓöÇ Test 2: Plan preserved at human approval interrupt ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ

def test_plan_preserved_at_approval_interrupt(memory_checkpointer: MemorySaver):
    """The implementation plan must be accurately persisted in the checkpoint."""
    graph = create_graph(checkpointer=memory_checkpointer)
    initial_state = create_initial_state(
        issue_title="Add OAuth2 token refresh handler",
        repo="org/auth-service",
    )
    config = {"configurable": {"thread_id": initial_state["thread_id"]}}

    graph.invoke(initial_state, config=config)
    saved_state = graph.get_state(config)

    # Check tasks and interrupts
    assert len(saved_state.tasks) > 0
    interrupts = saved_state.tasks[0].interrupts
    assert len(interrupts) > 0

    interrupt_payload = interrupts[0].value
    assert interrupt_payload["action"] == "request_approval"
    assert interrupt_payload["thread_id"] == initial_state["thread_id"]
    assert "plan" in interrupt_payload

    plan = saved_state.values["plan"]
    assert plan["summary"] == "Fix: Add OAuth2 token refresh handler"
    assert len(plan["steps"]) >= 2
    assert "affected_files" in plan


# ΓöÇΓöÇ Test 3: Approved plan resumes with same thread_id ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ

def test_approved_plan_resumes_with_same_thread_id(memory_checkpointer: MemorySaver):
    """Resuming with approval must continue the same thread to completion."""
    graph = create_graph(checkpointer=memory_checkpointer)
    initial_state = create_initial_state(
        issue_title="Handle timeout in webhook delivery",
        repo="org/webhooks",
    )
    thread_id = initial_state["thread_id"]
    config = {"configurable": {"thread_id": thread_id}}

    # Phase 1: Pause at interrupt
    graph.invoke(initial_state, config=config)
    state_at_pause = graph.get_state(config)
    assert state_at_pause.next == ("human_approval",)

    # Phase 2: Resume with approval using the exact same thread_id
    approval_response = {
        "decision": "approved",
        "feedback": "Plan approved for automated code generation.",
    }
    resume_cmd = Command(resume=approval_response)
    final_output = graph.invoke(resume_cmd, config=config)

    # Phase 3: Assert final state
    assert final_output["status"] == "completed"
    assert final_output["current_agent"] == "completion"
    assert final_output["human_approval"]["decision"] == "approved"
    assert final_output["human_approval"]["feedback"] == approval_response["feedback"]

    # Verify state in checkpoint is fully finished
    final_state = graph.get_state(config)
    assert final_state.next == (), "Graph should have reached END"
    assert final_state.values["status"] == "completed"


# ΓöÇΓöÇ Test 4: Rejected plan terminates safely ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ

def test_rejected_plan_terminates_safely(memory_checkpointer: MemorySaver):
    """Rejected plans must terminate cleanly without proceeding to code generation."""
    graph = create_graph(checkpointer=memory_checkpointer)
    initial_state = create_initial_state(
        issue_title="Rewrite core engine in Rust",
        repo="org/backend",
    )
    thread_id = initial_state["thread_id"]
    config = {"configurable": {"thread_id": thread_id}}

    # Pause at interrupt
    graph.invoke(initial_state, config=config)

    # Resume with rejection
    rejection_response = {
        "decision": "rejected",
        "feedback": "Out of scope for this sprint.",
    }
    resume_cmd = Command(resume=rejection_response)
    final_output = graph.invoke(resume_cmd, config=config)

    assert final_output["status"] == "rejected"
    assert final_output["current_agent"] == "rejection_terminal"
    assert final_output["human_approval"]["decision"] == "rejected"

    # Confirm no downstream code generation occurred
    assert final_output.get("code_changes") is None
    assert final_output.get("pull_request_url") is None

    # Check termination in checkpoint
    final_state = graph.get_state(config)
    assert final_state.next == ()
    assert final_state.values["status"] == "rejected"


# ΓöÇΓöÇ Test 5: Out-of-scope issues follow safe stopping path ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ

@pytest.mark.parametrize(
    "out_of_scope_title",
    [
        "Question: How do I configure CORS for this app?",
        "Discussion: RFC on architectural direction",
        "[out-of-scope] Migrate documentation to VitePress",
        "How to deploy this on Kubernetes?",
        "Won't fix: Deprecate legacy auth",
    ],
)
def test_out_of_scope_issues_safe_stopping_path(
    memory_checkpointer: MemorySaver, out_of_scope_title: str
):
    """Non-actionable or out-of-scope issues must halt at safe_stop without reaching planner."""
    graph = create_graph(checkpointer=memory_checkpointer)
    initial_state = create_initial_state(
        issue_title=out_of_scope_title,
        repo="org/app",
    )
    config = {"configurable": {"thread_id": initial_state["thread_id"]}}

    final_output = graph.invoke(initial_state, config=config)

    assert final_output["status"] == "out_of_scope"
    assert final_output["current_agent"] == "safe_stop"
    assert final_output["triage"]["is_supported"] is False
    assert final_output["triage"]["classification"] == TriageClassification.OUT_OF_SCOPE.value

    # Planner and approval must never have been reached
    assert final_output.get("plan") is None
    assert final_output.get("human_approval") is None


# ΓöÇΓöÇ Test 6: Missing or invalid issue input ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ

def test_missing_or_invalid_issue_input():
    """Initial state creation must reject invalid inputs with clear errors."""
    with pytest.raises(ValueError, match="Repository identifier"):
        create_initial_state(issue_title="Some issue", repo="")

    with pytest.raises(ValueError, match="Repository identifier"):
        create_initial_state(issue_title="Some issue", repo="   ")

    with pytest.raises(ValueError, match="Issue title cannot be empty"):
        create_initial_state(issue_title="", repo="org/repo")

    with pytest.raises(ValueError, match="Issue title cannot be empty"):
        create_initial_state(issue_title="   ", repo="org/repo")


def test_triage_node_handles_empty_title_safely():
    """Triage node must safely handle edge cases if an empty title bypasses factory."""
    from app.agents.graph import triage_node

    raw_state: AgentState = {
        "run_id": "test_run",
        "thread_id": "test_thread",
        "repo": "org/repo",
        "issue_title": "",
        "issue_body": "",
        "retry_count": 0,
        "max_retries": 3,
        "status": "pending",
        "events": [],
    }

    result = triage_node(raw_state)
    assert result["status"] == "unsupported"
    assert result["triage"]["is_supported"] is False


# ΓöÇΓöÇ Test 7: Checkpoint state across resume ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ

def test_checkpoint_state_across_resume(memory_checkpointer: MemorySaver):
    """
    Events log and completed stage data must accumulate and persist cleanly
    across separate graph invocations on the same checkpointer.
    """
    thread_id = "test_thread_persistence"
    initial_state = create_initial_state(
        issue_title="Fix race condition in session store",
        repo="acme/auth",
        thread_id=thread_id,
    )
    config = {"configurable": {"thread_id": thread_id}}

    # Instance 1: Run to interrupt
    graph1 = create_graph(checkpointer=memory_checkpointer)
    graph1.invoke(initial_state, config=config)

    paused_state = graph1.get_state(config)
    events_at_pause = paused_state.values["events"]
    assert len(events_at_pause) >= 3  # workflow_started, triage_completed, retrieval_completed, plan_generated

    # Instance 2: Resume from the same checkpointer with a new graph instance
    graph2 = create_graph(checkpointer=memory_checkpointer)
    resumed_result = graph2.invoke(
        Command(resume={"decision": "approved", "feedback": "LGTM"}),
        config=config,
    )

    events_after_resume = resumed_result["events"]
    assert len(events_after_resume) > len(events_at_pause)

    # Check chronological ordering of events
    agent_names = [e["agent_name"] for e in events_after_resume]
    assert "orchestrator" in agent_names
    assert "triage" in agent_names
    assert "retrieval" in agent_names
    assert "planner" in agent_names
    assert "human_approval" in agent_names
    assert "completion" in agent_names


# ΓöÇΓöÇ Test 8: Retry limits and initial state defaults ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ

def test_retry_limits_and_initial_defaults():
    """Verify that initial state sets correct defaults for retry tracking."""
    state = create_initial_state(
        issue_title="Sample bug",
        repo="org/repo",
        max_retries=5,
    )

    assert state["retry_count"] == 0
    assert state["max_retries"] == 5
    assert state["code_changes"] is None
    assert state["test_results"] is None
    assert state["review_findings"] is None
    assert state["pull_request_url"] is None
    assert state["status"] == "pending"


# ΓöÇΓöÇ Test 9: Model router integration ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ

def test_model_router_tier_integration():
    """Verify that model_router appropriately routes agent tiers."""
    assert route("triage") == ModelTier.CLASSIFIER
    assert route("retrieval") == ModelTier.EMBEDDING
    assert route("planner") == ModelTier.LLM
    assert route("coder") == ModelTier.LLM
    assert route("debugger_first_pass") == ModelTier.CLASSIFIER
    assert route("reviewer_first_pass") == ModelTier.STATIC_ANALYSIS
    assert route("pr") == ModelTier.LLM
