"""Agent gateway and metrics provider protocols and default stubs.

This module defines the boundaries between the REST API layer (owned by
Tamanna) and the multi-agent orchestration layer (owned by Sanjeevni).

By depending on these protocols rather than importing `app.agents` directly:
1. The REST API runs independently without waiting for agent implementation.
2. Unit and integration tests can easily substitute mock gateways.
3. Merge conflicts between backend routes and agent logic are prevented.
"""

from __future__ import annotations

import logging
from typing import Protocol, runtime_checkable
from uuid import UUID

from app.models.metrics import MetricsOut
from app.models.run import IssueIn, RunStatus

logger = logging.getLogger(__name__)


@runtime_checkable
class AgentGateway(Protocol):
    """Protocol for initiating autonomous agent workflow runs."""

    async def start_run(self, run_id: UUID, issue: IssueIn) -> None:
        """Start the multi-agent graph execution for a given issue."""
        ...


@runtime_checkable
class MetricsProvider(Protocol):
    """Protocol for fetching evaluation and benchmark statistics."""

    async def get_metrics(self) -> MetricsOut:
        """Retrieve aggregated evaluation metrics."""
        ...


class NoOpAgentGateway:
    """Default no-op agent gateway stub.

    Logs that no agent layer is currently wired and leaves the run in
    its initial 'queued' status.
    """

    async def start_run(self, run_id: UUID, issue: IssueIn) -> None:
        # Logging hygiene: logs contain only run_id, no issue contents or repos
        logger.info(
            "NoOpAgentGateway: No agent layer wired. Run %s remains queued.",
            run_id,
        )


class EmptyMetricsProvider:
    """Default empty metrics provider stub.

    Returns an unavailable MetricsOut instance with all metric values unset.
    """

    async def get_metrics(self) -> MetricsOut:
        return MetricsOut(
            available=False,
            fix_accuracy=None,
            test_pass_rate=None,
            avg_self_correction_iterations=None,
            swe_bench_lite=None,
            updated_at=None,
        )


async def run_agent_background_task(
    run_id: UUID,
    issue: IssueIn,
    gateway: AgentGateway,
    store: object,
) -> None:
    """Safely execute the agent workflow in the background.

    WHY THIS WRAPPER IS NEEDED:
    Background tasks execute outside the HTTP request/response cycle. If an unhandled
    exception bubbles up from the agent layer, it would crash or corrupt worker task loops.
    This wrapper catches every Exception, logs only the run_id (never secrets or issue text),
    and updates the run status in the store with a clean generic error message so the
    server process remains stable and the client can see the run failed.
    """
    try:
        await gateway.start_run(run_id, issue)
    except Exception:
        # Log only the run_id without leaking issue text or stack trace to users
        logger.error("Agent run %s failed to start", run_id)
        # store is RunStore; call update_run safely
        if hasattr(store, "update_run"):
            await store.update_run(
                run_id,
                status=RunStatus.failed,
                error="Failed to start agent run",
            )
