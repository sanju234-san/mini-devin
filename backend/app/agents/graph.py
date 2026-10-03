"""LangGraph StateGraph wiring for the Mini-Devin supervisor pattern."""

from pydantic import ValidationError
from langgraph.graph import StateGraph, START, END
from langgraph.types import interrupt
from langgraph.checkpoint.memory import MemorySaver

from app.agents.routing import Limits, decide, make_router
from app.agents.schemas import (
    ApprovalDecision,
    ApprovalResponse,
    Plan,
    PlanAuthor,
    PlanStatus,
    RunState,
    RunStatus,
    StopReason,
    TriageCategory,
    next_plan_version_id,
)

REQUIRED_NODE_KEYS = frozenset({
    "intake", "input_guardrail", "triage", "retrieval", "planner",
    "plan_validation", "coder", "diff_gate", "test_runner",
    "debugger", "reviewer", "pr_agent",
})


def _human_approval(state: RunState, limits: Limits) -> dict:
    """Human-in-the-loop approval interrupt node."""
    plans = state.get("plan_versions", [])
    latest_plan = plans[-1] if plans else None
    payload = {
        "run_id": state.get("run_id", ""),
        "plan_version_id": latest_plan.version_id if latest_plan else None,
    }

    raw = interrupt(payload)

    # Accept either an ApprovalResponse instance or a dict; otherwise error
    if isinstance(raw, ApprovalResponse):
        response = raw
    elif isinstance(raw, dict):
        try:
            response = ApprovalResponse.model_validate(raw)
        except ValidationError:
            return {"node_error": StopReason.ERROR, "current_step": "human_approval"}
    else:
        return {"node_error": StopReason.ERROR, "current_step": "human_approval"}

    result: dict = {"last_approval": response, "current_step": "human_approval"}

    if response.decision == ApprovalDecision.APPROVE:
        if latest_plan:
            result["approved_version"] = latest_plan.version_id
        result["approval_feedback"] = None

    elif response.decision == ApprovalDecision.EDIT:
        if response.edited_plan and latest_plan:
            # Create a new human-authored plan version
            new_vid = next_plan_version_id(state)
            new_plan = Plan(
                version_id=new_vid,
                author=PlanAuthor.HUMAN,
                status=PlanStatus.DRAFT,
                intent=response.edited_plan.intent,
                scope=response.edited_plan.scope,
                non_goals=response.edited_plan.non_goals,
                affected_files=response.edited_plan.affected_files,
                requirements=response.edited_plan.requirements,
                steps=response.edited_plan.steps,
                expected_tests=response.edited_plan.expected_tests,
            )
            result["plan_versions"] = [new_plan]
            result["plan_validation_ok"] = None
        result["approval_feedback"] = None

    elif response.decision == ApprovalDecision.REJECT:
        result["approval_feedback"] = response.feedback
        result["plan_revisions"] = state.get("plan_revisions", 0) + 1

    return result


def _escalate(state: RunState, limits: Limits) -> dict:
    """Terminal node for escalated runs."""
    current = state.get("current_step", "")
    d = decide(current, state, limits)
    stop_reason = d.stop_reason or state.get("node_error") or StopReason.ERROR
    return {
        "status": RunStatus.ESCALATED,
        "stop_reason": stop_reason,
        "current_step": "escalate",
    }


def _finish(state: RunState) -> dict:
    """Terminal node for successful or out-of-scope runs."""
    triage = state.get("triage_result")
    if triage and triage.category == TriageCategory.OUT_OF_SCOPE:
        status = RunStatus.OUT_OF_SCOPE
    else:
        status = RunStatus.PR_OPENED
    return {"status": status, "current_step": "finish"}


def new_run_state(run_id: str, repo: str, issue_number: int, issue_text: str) -> RunState:
    """Create an initial RunState with all counters at zero."""
    return RunState(
        run_id=run_id,
        repo=repo,
        issue_number=issue_number,
        issue_text=issue_text,
        status=RunStatus.RUNNING,
        plan_schema_retries=0,
        diff_schema_retries=0,
        plan_revisions=0,
        debug_attempts=0,
        review_revisions=0,
        run_llm_calls=0,
        current_step="",
        artifact_references={},
        plan_versions=[],
    )


def run_config(run_id: str) -> dict:
    """Create a config dict with thread_id equal to run_id."""
    return {"configurable": {"thread_id": run_id}}


def build_graph(
    nodes: dict[str, callable],
    limits: Limits | None = None,
    checkpointer=None,
):
    """Build and compile the Mini-Devin supervisor StateGraph."""
    missing = REQUIRED_NODE_KEYS - set(nodes.keys())
    if missing:
        raise ValueError(f"Missing required node keys: {sorted(missing)}")

    if limits is None:
        limits = Limits()
    if checkpointer is None:
        checkpointer = MemorySaver()

    graph = StateGraph(RunState)

    # Add external nodes
    for name, fn in nodes.items():
        graph.add_node(name, fn)

    # Add internal nodes
    graph.add_node("human_approval", lambda state: _human_approval(state, limits))
    graph.add_node("escalate", lambda state: _escalate(state, limits))
    graph.add_node("finish", _finish)

    # --- Edges ---

    # START -> intake
    graph.add_edge(START, "intake")

    # Terminal edges
    graph.add_edge("escalate", END)
    graph.add_edge("finish", END)

    # Conditional edges for all 12 external nodes + human_approval
    _all_targets = [
        "intake", "input_guardrail", "triage", "retrieval", "planner",
        "plan_validation", "human_approval", "coder", "diff_gate",
        "test_runner", "debugger", "reviewer", "pr_agent",
        "escalate", "finish",
    ]
    target_set = {n: n for n in _all_targets}

    routed_nodes = [
        "intake",
        "input_guardrail",
        "triage",
        "retrieval",
        "planner",
        "plan_validation",
        "human_approval",
        "coder",
        "diff_gate",
        "test_runner",
        "debugger",
        "reviewer",
        "pr_agent",
    ]
    for node_name in routed_nodes:
        graph.add_conditional_edges(node_name, make_router(node_name, limits), target_set)

    return graph.compile(checkpointer=checkpointer)
