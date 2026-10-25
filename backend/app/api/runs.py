"""Create, list, fetch, and approve/reject agent runs.

This module provides endpoints for tracking and interacting with agent runs:
- GET /runs: Paginated list of recent runs.
- GET /runs/{run_id}: Full details of a single run.
- GET /runs/{run_id}/plan: Fetch current proposed implementation plan.
- POST /runs/{run_id}/plan/decision: Human decision (approve, edit, reject).
- POST /runs/{run_id}/approve: Convenience endpoint to approve the current plan.
- POST /runs/{run_id}/reject: Convenience endpoint to reject the plan and halt safely.
"""

from __future__ import annotations

import logging
from typing import Any, Dict
from uuid import UUID

from fastapi import APIRouter, BackgroundTasks, Depends, HTTPException, Query, status

from app.agents.checkpointer import get_checkpointer
from app.agents.graph import create_graph
from app.api.deps import get_run_store
from app.api.run_store import RunStore
from app.models.plan import PlanDecisionIn
from app.models.run import RunDetail, RunList, RunStatus
from langgraph.types import Command

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/runs", tags=["runs"])


@router.get(
    "",
    response_model=RunList,
    summary="List agent runs with pagination",
)
async def list_runs(
    limit: int = Query(
        default=20,
        ge=1,
        le=100,
        description="Maximum number of runs to return (1-100)",
    ),
    offset: int = Query(
        default=0,
        ge=0,
        description="Number of runs to skip",
    ),
    store: RunStore = Depends(get_run_store),
) -> RunList:
    """Retrieve a paginated list of agent runs ordered newest first."""
    return await store.list_runs(limit=limit, offset=offset)


@router.get(
    "/{run_id}",
    response_model=RunDetail,
    summary="Get details of a specific agent run",
)
async def get_run(
    run_id: UUID,
    store: RunStore = Depends(get_run_store),
) -> RunDetail:
    """Fetch complete details for a run, including the original issue body."""
    run = await store.get_run(run_id)
    if run is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Run not found",
        )
    return run


@router.get(
    "/{run_id}/plan",
    summary="Get proposed implementation plan for a run",
)
async def get_run_plan(
    run_id: UUID,
    store: RunStore = Depends(get_run_store),
) -> Dict[str, Any]:
    """Fetch the proposed implementation plan from graph state checkpoint."""
    run = await store.get_run(run_id)
    if run is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Run not found")

    graph = create_graph(checkpointer=get_checkpointer())
    config = {"configurable": {"thread_id": str(run_id)}}
    state = graph.get_state(config)

    if not state or not state.values:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="No active plan found for this run.",
        )

    plan = state.values.get("plan")
    plan_hash = state.values.get("plan_hash")
    plan_version = state.values.get("plan_version")

    return {
        "run_id": str(run_id),
        "plan_version": plan_version or "v1",
        "plan_hash": plan_hash,
        "plan": plan.model_dump(mode="json") if hasattr(plan, "model_dump") else plan,
    }


async def _resume_graph_task(run_id: str, resume_payload: dict[str, Any]) -> None:
    """Background task to resume graph execution after human decision."""
    try:
        graph = create_graph(checkpointer=get_checkpointer())
        config = {"configurable": {"thread_id": run_id}}
        logger.info("Resuming workflow for run %s with decision: %s", run_id, resume_payload.get("decision"))
        await graph.ainvoke(Command(resume=resume_payload), config=config)
        logger.info("Resumed workflow for run %s completed or advanced", run_id)
    except Exception as exc:
        logger.exception("Error resuming graph for run %s: %s", run_id, exc)


@router.post(
    "/{run_id}/plan/decision",
    status_code=status.HTTP_200_OK,
    summary="Record human approval, edit, or rejection decision on proposed plan",
)
async def decide_plan(
    run_id: UUID,
    payload: PlanDecisionIn,
    background_tasks: BackgroundTasks,
    store: RunStore = Depends(get_run_store),
) -> Dict[str, Any]:
    """Accept human plan decision and resume the paused LangGraph workflow."""
    run = await store.get_run(run_id)
    if run is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Run not found")

    run_id_str = str(run_id)
    graph = create_graph(checkpointer=get_checkpointer())
    config = {"configurable": {"thread_id": run_id_str}}
    state = graph.get_state(config)

    plan_hash = state.values.get("plan_hash", "") if state and state.values else ""
    plan_version = state.values.get("plan_version", "v1") if state and state.values else "v1"

    decision = payload.decision
    normalized_decision = "approved" if decision == "approve" else ("rejected" if decision == "reject" else "edit")

    resume_payload = {
        "decision": normalized_decision,
        "feedback": payload.reason or f"Human decision '{decision}' recorded via REST API.",
        "plan_hash": plan_hash,
        "plan_version": plan_version,
    }
    if decision == "edit" and payload.edited_plan:
        resume_payload["edited_plan"] = payload.edited_plan

    # Schedule background execution to advance the graph
    background_tasks.add_task(_resume_graph_task, run_id_str, resume_payload)

    # Update run store status
    new_status = RunStatus.running if decision == "approve" else (RunStatus.failed if decision == "reject" else RunStatus.running)
    await store.update_run(
        run_id,
        status=new_status,
        current_step=f"resumed_{decision}",
    )

    return {
        "run_id": run_id_str,
        "decision": decision,
        "status": "resuming",
        "plan_hash": plan_hash,
        "plan_version": plan_version,
    }


@router.post(
    "/{run_id}/approve",
    status_code=status.HTTP_200_OK,
    summary="Approve the proposed plan for code modification",
)
async def approve_plan(
    run_id: UUID,
    background_tasks: BackgroundTasks,
    store: RunStore = Depends(get_run_store),
) -> Dict[str, Any]:
    """Convenience endpoint to approve the plan."""
    payload = PlanDecisionIn(decision="approve", reason="Approved via REST convenience endpoint")
    return await decide_plan(run_id, payload, background_tasks, store)


@router.post(
    "/{run_id}/reject",
    status_code=status.HTTP_200_OK,
    summary="Reject the proposed plan and halt workflow safely",
)
async def reject_plan(
    run_id: UUID,
    background_tasks: BackgroundTasks,
    store: RunStore = Depends(get_run_store),
) -> Dict[str, Any]:
    """Convenience endpoint to reject the plan."""
    payload = PlanDecisionIn(decision="reject", reason="Rejected via REST convenience endpoint")
    return await decide_plan(run_id, payload, background_tasks, store)
