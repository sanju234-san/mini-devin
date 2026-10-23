"""Create, list, and fetch agent runs.

This module provides the read endpoints for tracking agent runs:
- GET /runs: Paginated list of recent runs (summaries, newest first).
- GET /runs/{run_id}: Full details of a single run, including issue body.

Note:
Plan approval/rejection endpoints are handled in a separate module.
"""

from __future__ import annotations

from uuid import UUID

from fastapi import APIRouter, Depends, HTTPException, Query, status

from app.api.deps import get_run_store
from app.api.run_store import RunStore
from app.models.run import RunDetail, RunList

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
    """Fetch complete details for a run, including the original issue body.

    Malformed UUIDs fail with HTTP 422; unknown IDs return HTTP 404.
    """
    run = await store.get_run(run_id)
    if run is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Run not found",
        )
    return run
