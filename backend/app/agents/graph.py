"""
LangGraph Supervisor Workflow for Mini-Devin.

Wires the multi-agent workflow state machine:
Triage -> Retrieval -> Planner -> (Human Approval Interrupt) -> Completion / Clean Stop

Future Extension Pipeline (Day 2+):
Triage -> Retrieval -> Planner -> Human Approval -> Coder -> Test Runner
-> Debugger (bounded retry loop) -> Reviewer -> PR Agent.
"""

from __future__ import annotations

import datetime
import logging
from typing import Any, Optional

from langgraph.checkpoint.base import BaseCheckpointSaver
from langgraph.graph import END, START, StateGraph
from langgraph.types import interrupt

from app.agents.checkpointer import get_checkpointer
from app.agents.planner import planner_node
from app.agents.retrieval import retrieval_node
from app.agents.schemas import (
    AgentState,
    ApprovalDecision,
    compute_plan_hash,
    create_event,
)
from app.agents.triage import triage_node

logger = logging.getLogger(__name__)


# ΓöÇΓöÇ Routing Helpers ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ

def _is_supported_triage(triage: Any) -> bool:
    """Helper to check if triage result indicates a supported issue."""
    if not triage:
        return False
    if isinstance(triage, dict):
        return bool(triage.get("is_supported", False))
    return bool(getattr(triage, "is_supported", False))


def _get_approval_decision(approval: Any) -> str:
    """Helper to safely extract the approval decision string."""
    if not approval:
        return "rejected"
    if isinstance(approval, dict):
        return str(approval.get("decision", "rejected"))
    return str(getattr(approval, "decision", "rejected"))


def route_triage(state: AgentState) -> str:
    """Conditional router deciding whether to proceed to Retrieval or halt safely."""
    triage = state.get("triage")
    if not _is_supported_triage(triage):
        return "safe_stop"
    return "retrieval"


def safe_stop_node(state: AgentState) -> dict[str, Any]:
    """Safe terminal node for unsupported or out-of-scope issues."""
    triage = state.get("triage")
    reason = "Unsupported or out-of-scope issue"
    if isinstance(triage, dict):
        reason = triage.get("reason", reason)
    elif hasattr(triage, "reason"):
        reason = triage.reason

    logger.info("Halting execution safely: %s", reason)

    event = create_event(
        agent_name="safe_stop",
        event_type="workflow_halted",
        status="stopped",
        message=f"Execution safely stopped: {reason}",
        metadata={"reason": reason},
    )
    return {
        "status": "out_of_scope",
        "current_agent": "safe_stop",
        "events": [event],
    }


def human_approval_node(state: AgentState) -> dict[str, Any]:
    """
    Human Approval Node: Interrupts execution before any repository modifications.
    
    Uses LangGraph's native `interrupt()` to persist the checkpoint and await
    an explicit approval or rejection response from the human operator.
    Enforces frozen plan hash binding and rejects mutated plans or plan substitutions.
    """
    # Duplicate approval idempotency check
    existing_approval = state.get("human_approval")
    if existing_approval:
        prev_dec = (
            existing_approval.get("decision")
            if isinstance(existing_approval, dict)
            else getattr(existing_approval, "decision", None)
        )
        if prev_dec in ("approved", "rejected"):
            logger.info("Human approval decision already recorded ('%s'). Idempotently passing through.", prev_dec)
            return {
                "human_approval": existing_approval,
                "status": prev_dec,
                "current_agent": "human_approval",
                "events": [],
            }

    plan = state.get("plan")
    plan_dict = plan.model_dump(mode="json") if hasattr(plan, "model_dump") else plan
    plan_hash = state.get("plan_hash") or compute_plan_hash(plan_dict)
    plan_version = state.get("plan_version") or "v1"

    # LangGraph interrupt halts execution here and persists checkpoint
    approval_request = {
        "action": "request_approval",
        "run_id": state.get("run_id"),
        "thread_id": state.get("thread_id"),
        "plan": plan_dict,
        "plan_hash": plan_hash,
        "plan_version": plan_version,
        "repo": state.get("repo"),
        "issue_title": state.get("issue_title"),
        "message": f"Human approval required to proceed with code modifications (Plan Hash: {plan_hash[:8]}).",
    }

    # Execution yields here until resumed with Command(resume=...)
    resume_payload = interrupt(approval_request)

    # Normalize resume payload
    decision_value = "rejected"
    feedback = None
    submitted_plan_hash = None

    if isinstance(resume_payload, dict):
        decision_raw = resume_payload.get("decision", "")
        if isinstance(decision_raw, bool):
            decision_value = "approved" if decision_raw else "rejected"
        elif str(decision_raw).lower() in ("approved", "approve", "yes", "true"):
            decision_value = "approved"
        elif str(decision_raw).lower() in ("rejected", "reject", "no", "false"):
            decision_value = "rejected"
        feedback = resume_payload.get("feedback")
        submitted_plan_hash = resume_payload.get("plan_hash")
    elif isinstance(resume_payload, bool):
        decision_value = "approved" if resume_payload else "rejected"
    elif isinstance(resume_payload, str):
        if resume_payload.lower() in ("approved", "approve", "yes", "true"):
            decision_value = "approved"
        else:
            decision_value = "rejected"

    # Integrity verification against plan substitution / tampering:
    # 1. If resume payload specified a plan hash, it must match the frozen plan hash
    if decision_value == "approved" and submitted_plan_hash and submitted_plan_hash != plan_hash:
        logger.warning(
            "Plan hash mismatch on resume: submitted '%s' vs frozen '%s'. Rejecting.",
            submitted_plan_hash, plan_hash,
        )
        decision_value = "rejected"
        feedback = f"Plan tampering detected: submitted hash '{submitted_plan_hash[:8]}' does not match frozen plan '{plan_hash[:8]}'."

    # 2. Check if the current plan in state was modified since interrupt
    current_plan_hash = compute_plan_hash(state.get("plan"))
    if decision_value == "approved" and current_plan_hash != plan_hash:
        logger.warning(
            "Plan in state was modified after interrupt: current '%s' vs frozen '%s'. Rejecting.",
            current_plan_hash, plan_hash,
        )
        decision_value = "rejected"
        feedback = "Plan was mutated after approval was requested. Approval rejected; a new plan approval is required."

    approval = ApprovalDecision(
        decision=decision_value,
        feedback=feedback,
        timestamp=datetime.datetime.now(datetime.timezone.utc).isoformat(),
        plan_version=plan_version,
        plan_hash=plan_hash,
    )

    if decision_value == "approved":
        event = create_event(
            agent_name="human_approval",
            event_type="approval_received",
            status="approved",
            message=f"Plan approved by human operator (Plan Hash: {plan_hash[:8]}). Proceeding to execution stage.",
            metadata={
                "decision": "approved",
                "feedback": feedback,
                "plan_version": plan_version,
                "plan_hash": plan_hash,
            },
        )
        return {
            "human_approval": approval.model_dump(mode="json"),
            "plan_version": plan_version,
            "plan_hash": plan_hash,
            "status": "approved",
            "current_agent": "human_approval",
            "events": [event],
        }
    else:
        event = create_event(
            agent_name="human_approval",
            event_type="approval_rejected",
            status="rejected",
            message="Plan rejected by human operator. Aborting without code modification.",
            metadata={
                "decision": "rejected",
                "feedback": feedback,
                "plan_version": plan_version,
                "plan_hash": plan_hash,
            },
        )
        return {
            "human_approval": approval.model_dump(mode="json"),
            "plan_version": plan_version,
            "plan_hash": plan_hash,
            "status": "rejected",
            "current_agent": "human_approval",
            "events": [event],
        }


def route_approval(state: AgentState) -> str:
    """Conditional router directing flow based on human approval decision."""
    approval = state.get("human_approval")
    if _get_approval_decision(approval) == "approved":
        return "completion"
    return "rejection_terminal"


def rejection_terminal_node(state: AgentState) -> dict[str, Any]:
    """
    Clean terminal node for rejected plans.
    
    Guarantees no code modification or PR opening takes place.
    """
    logger.info("Workflow cleanly terminated after human plan rejection.")
    event = create_event(
        agent_name="rejection_terminal",
        event_type="workflow_terminated",
        status="rejected",
        message="Workflow safely terminated. No code was written or modified.",
        metadata={"reason": "Human operator rejected the implementation plan."},
    )
    return {
        "status": "rejected",
        "current_agent": "rejection_terminal",
        "events": [event],
    }


def completion_node(state: AgentState) -> dict[str, Any]:
    """
    Day 1 Completion Node: Successfully concludes the approval workflow.
    
    Serves as the clean handoff point where Day 2's Coder Agent will begin.
    """
    logger.info("Approval workflow complete. State ready for Coder Agent handoff.")
    plan = state.get("plan")
    summary = ""
    if isinstance(plan, dict):
        summary = plan.get("summary", "")
    elif hasattr(plan, "summary"):
        summary = plan.summary

    event = create_event(
        agent_name="completion",
        event_type="workflow_completed",
        status="completed",
        message="Workflow reached approval milestone successfully. Ready for Coder Agent.",
        metadata={"plan_summary": summary},
    )
    return {
        "status": "completed",
        "current_agent": "completion",
        "events": [event],
    }


# ΓöÇΓöÇ Graph Builder ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ

def create_workflow_graph() -> StateGraph:
    """
    Construct the StateGraph defining Mini-Devin's workflow topology.
    
    Architecture is strictly compatible with the full 8-agent pipeline:
    Triage -> Retrieval -> Planner -> (Human Approval) -> Coder -> Test-Runner
    -> Debugger (bounded retry loop) -> Reviewer -> PR Agent.
    """
    builder = StateGraph(AgentState)

    # Add core nodes (imported from their respective agent subpackages)
    builder.add_node("triage", triage_node)
    builder.add_node("safe_stop", safe_stop_node)
    builder.add_node("retrieval", retrieval_node)
    builder.add_node("planner", planner_node)
    builder.add_node("human_approval", human_approval_node)
    builder.add_node("rejection_terminal", rejection_terminal_node)
    builder.add_node("completion", completion_node)

    # Add edges and routing
    builder.add_edge(START, "triage")
    builder.add_conditional_edges(
        "triage",
        route_triage,
        {
            "retrieval": "retrieval",
            "safe_stop": "safe_stop",
        },
    )
    builder.add_edge("safe_stop", END)
    builder.add_edge("retrieval", "planner")
    builder.add_edge("planner", "human_approval")
    builder.add_conditional_edges(
        "human_approval",
        route_approval,
        {
            "completion": "completion",
            "rejection_terminal": "rejection_terminal",
        },
    )
    builder.add_edge("rejection_terminal", END)
    builder.add_edge("completion", END)

    return builder


def create_graph(checkpointer: Optional[BaseCheckpointSaver] = None):
    """
    Compile and return the executable LangGraph workflow with checkpointing.
    
    If no checkpointer is supplied, uses the default process checkpointer.
    """
    active_checkpointer = checkpointer if checkpointer is not None else get_checkpointer()
    builder = create_workflow_graph()
    return builder.compile(checkpointer=active_checkpointer)


# Re-exports for backwards compatibility
__all__ = [
    "create_graph",
    "create_workflow_graph",
    "triage_node",
    "retrieval_node",
    "planner_node",
    "human_approval_node",
    "safe_stop_node",
    "rejection_terminal_node",
    "completion_node",
    "route_triage",
    "route_approval",
]
