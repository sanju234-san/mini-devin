"""In-memory run and artifact store for Mini-Devin.

This module provides the persistence layer for tracking agent runs,
generated artifacts, and webhook idempotency tokens.

Architecture & Concurrency:
- Single-process only: Render's free tier runs a single Uvicorn worker process.
  State is stored in memory and resets whenever the server restarts.
- Concurrency safety: All mutations and reads in InMemoryRunStore are protected
  by an asyncio.Lock so concurrent HTTP requests cannot corrupt dictionary state.
- Run capacity & eviction: Storage is capped at 1000 runs by default. When capacity
  is reached upon creating a new run, the oldest finished runs (status completed,
  failed, or rejected) are evicted first to make space for the new run.
- Atomic delivery idempotency: `create_run_for_delivery` performs both the
  duplicate check and run creation inside the lock so simultaneous webhook
  deliveries cannot race to create duplicate runs.
- Delivery registry cap: Delivery tokens are capped at 5000 to prevent unbounded
  memory growth, with oldest entries evicted when the cap is reached.
"""

from __future__ import annotations

import asyncio
from datetime import datetime, timezone
from typing import Protocol, runtime_checkable
from uuid import UUID, uuid4

from app.models.artifact import ArtifactOut, ArtifactType
from app.models.run import (
    IssueIn,
    IssueRef,
    RunDetail,
    RunList,
    RunStatus,
    RunSummary,
)

# Finished terminal statuses that are eligible for LRU eviction when capacity is reached
EVICTION_STATUSES = frozenset({
    RunStatus.completed,
    RunStatus.failed,
    RunStatus.rejected,
})

# Maximum allowed length for GitHub delivery IDs (longer tokens are ignored)
MAX_DELIVERY_ID_LENGTH = 128


@runtime_checkable
class RunStore(Protocol):
    """Protocol defining the operations supported by the run store."""

    async def create_run(
        self,
        issue: IssueIn,
        run_id: UUID | None = None,
    ) -> RunDetail:
        """Create and store a new run initialized in 'queued' status."""
        ...

    async def create_run_for_delivery(
        self,
        delivery_id: str | None,
        issue: IssueIn,
    ) -> tuple[RunDetail, bool]:
        """Atomically get existing run or create a new run for a delivery ID.

        Returns (run, newly_created_boolean).
        """
        ...

    async def get_run(self, run_id: UUID) -> RunDetail | None:
        """Retrieve full details of a run by its ID."""
        ...

    async def list_runs(
        self,
        limit: int = 20,
        offset: int = 0,
    ) -> RunList:
        """List runs ordered newest-first with pagination."""
        ...

    async def update_run(
        self,
        run_id: UUID,
        status: RunStatus | None = None,
        current_step: str | None = None,
        error: str | None = None,
    ) -> RunDetail | None:
        """Update a run's status, step, or error message."""
        ...

    async def add_artifact(
        self,
        run_id: UUID,
        artifact_type: ArtifactType,
        name: str,
        content: str,
        content_type: str = "text/plain",
        agent: str | None = None,
        model_used: str | None = None,
    ) -> ArtifactOut:
        """Record an artifact associated with a run."""
        ...

    async def list_artifacts(self, run_id: UUID) -> list[ArtifactOut] | None:
        """List all artifacts for a run, or None if the run does not exist."""
        ...

    async def get_artifact(
        self,
        run_id: UUID,
        artifact_id: UUID,
    ) -> tuple[ArtifactOut, str] | None:
        """Retrieve an artifact and its content, or None if not found."""
        ...

    async def get_run_by_delivery(self, delivery_id: str) -> RunDetail | None:
        """Look up an existing run by its GitHub delivery ID (idempotency)."""
        ...

    async def record_delivery(self, delivery_id: str, run_id: UUID) -> None:
        """Map a GitHub delivery ID to a run ID for deduplication."""
        ...


class InMemoryRunStore:
    """Thread-safe, in-memory implementation of the RunStore protocol.

    Keeps runs, artifacts, and webhook delivery IDs in RAM. Suitable for
    single-process environments (such as Render free tier single worker).
    """

    def __init__(self, max_runs: int = 1000, max_deliveries: int = 5000) -> None:
        self._max_runs = max_runs
        self._max_deliveries = max_deliveries
        self._runs: dict[UUID, RunDetail] = {}
        # Stores artifacts keyed by run_id -> {artifact_id -> (ArtifactOut, content_str)}
        self._artifacts: dict[UUID, dict[UUID, tuple[ArtifactOut, str]]] = {}
        # Stores delivery_id -> run_id mapping for webhook idempotency
        self._deliveries: dict[str, UUID] = {}
        # Mutex lock to guard concurrent operations in async coroutines
        self._lock = asyncio.Lock()

    def _evict_oldest_finished_unlocked(self) -> None:
        """Evict the oldest completed/failed/rejected run. Must be called with lock held."""
        candidates = [
            r for r in self._runs.values()
            if r.status in EVICTION_STATUSES
        ]
        if candidates:
            # Sort by created_at ascending to find the oldest finished run
            victim = min(candidates, key=lambda r: r.created_at)
        else:
            # Fallback if no run is finished yet: evict the oldest run overall to respect cap
            victim = min(self._runs.values(), key=lambda r: r.created_at)

        victim_id = victim.id
        self._runs.pop(victim_id, None)
        self._artifacts.pop(victim_id, None)
        # Clean up any delivery mapping associated with the evicted run
        for delivery_id, run_id in list(self._deliveries.items()):
            if run_id == victim_id:
                del self._deliveries[delivery_id]

    def _record_delivery_unlocked(self, delivery_id: str, run_id: UUID) -> None:
        """Store a delivery ID mapping, evicting the oldest if capacity is reached."""
        if len(delivery_id) > MAX_DELIVERY_ID_LENGTH:
            # Reject overly long tokens by ignoring them to prevent memory abuse
            return
        if len(self._deliveries) >= self._max_deliveries and delivery_id not in self._deliveries:
            # Python dictionaries maintain insertion order, so next(iter(...)) yields the oldest entry
            oldest_id = next(iter(self._deliveries))
            del self._deliveries[oldest_id]
        self._deliveries[delivery_id] = run_id

    async def create_run(
        self,
        issue: IssueIn,
        run_id: UUID | None = None,
    ) -> RunDetail:
        """Create and store a new run initialized in 'queued' status."""
        async with self._lock:
            # If storage reached capacity, evict the oldest finished run
            if len(self._runs) >= self._max_runs:
                self._evict_oldest_finished_unlocked()

            # Always generate a UUIDv4 unless explicitly provided (e.g. for deterministic testing)
            rid = run_id or uuid4()
            now = datetime.now(timezone.utc)
            run = RunDetail(
                id=rid,
                status=RunStatus.queued,
                current_step=None,
                issue=IssueRef(
                    repo=issue.repo,
                    issue_number=issue.issue_number,
                    title=issue.title,
                ),
                issue_body=issue.body,
                created_at=now,
                updated_at=now,
                error=None,
            )
            self._runs[rid] = run
            self._artifacts[rid] = {}
            return run

    async def create_run_for_delivery(
        self,
        delivery_id: str | None,
        issue: IssueIn,
    ) -> tuple[RunDetail, bool]:
        """Atomically get existing run or create a new run for a delivery ID.

        WHY ATOMIC WITH LOCK:
        If two concurrent requests with the same delivery ID arrive simultaneously,
        checking for existence and inserting the run in separate operations creates
        a race condition where both requests see 'not found' and create duplicate runs.
        Running both check and create inside self._lock guarantees exactly one run is
        created and returned with created=True, while subsequent requests get created=False.
        """
        async with self._lock:
            # Validate delivery ID length: tokens over 128 characters are ignored (treated as missing)
            valid_delivery_id: str | None = None
            if delivery_id and len(delivery_id) <= MAX_DELIVERY_ID_LENGTH:
                valid_delivery_id = delivery_id

            # Check if this delivery was already processed
            if valid_delivery_id and valid_delivery_id in self._deliveries:
                existing_run_id = self._deliveries[valid_delivery_id]
                existing_run = self._runs.get(existing_run_id)
                if existing_run is not None:
                    return existing_run, False

            # Not seen before; create a new run
            if len(self._runs) >= self._max_runs:
                self._evict_oldest_finished_unlocked()

            rid = uuid4()
            now = datetime.now(timezone.utc)
            run = RunDetail(
                id=rid,
                status=RunStatus.queued,
                current_step=None,
                issue=IssueRef(
                    repo=issue.repo,
                    issue_number=issue.issue_number,
                    title=issue.title,
                ),
                issue_body=issue.body,
                created_at=now,
                updated_at=now,
                error=None,
            )
            self._runs[rid] = run
            self._artifacts[rid] = {}

            if valid_delivery_id:
                self._record_delivery_unlocked(valid_delivery_id, rid)

            return run, True

    async def get_run(self, run_id: UUID) -> RunDetail | None:
        """Retrieve full details of a run by its ID."""
        async with self._lock:
            return self._runs.get(run_id)

    async def list_runs(
        self,
        limit: int = 20,
        offset: int = 0,
    ) -> RunList:
        """List runs ordered newest-first with pagination."""
        async with self._lock:
            # Order newest first based on created_at descending
            sorted_runs = sorted(
                self._runs.values(),
                key=lambda r: r.created_at,
                reverse=True,
            )
            total = len(sorted_runs)
            page = sorted_runs[offset : offset + limit]
            # Convert to RunSummary so issue_body is excluded from list responses
            items = [
                RunSummary(
                    id=r.id,
                    status=r.status,
                    current_step=r.current_step,
                    issue=r.issue,
                    created_at=r.created_at,
                    updated_at=r.updated_at,
                    error=r.error,
                )
                for r in page
            ]
            return RunList(items=items, total=total, limit=limit, offset=offset)

    async def update_run(
        self,
        run_id: UUID,
        status: RunStatus | None = None,
        current_step: str | None = None,
        error: str | None = None,
    ) -> RunDetail | None:
        """Update a run's status, step, or error message."""
        async with self._lock:
            run = self._runs.get(run_id)
            if run is None:
                return None
            now = datetime.now(timezone.utc)
            updated = run.model_copy(
                update={
                    "status": status if status is not None else run.status,
                    "current_step": current_step if current_step is not None else run.current_step,
                    "error": error if error is not None else run.error,
                    "updated_at": now,
                }
            )
            self._runs[run_id] = updated
            return updated

    async def add_artifact(
        self,
        run_id: UUID,
        artifact_type: ArtifactType,
        name: str,
        content: str,
        content_type: str = "text/plain",
        agent: str | None = None,
        model_used: str | None = None,
    ) -> ArtifactOut:
        """Record an artifact associated with a run."""
        async with self._lock:
            if run_id not in self._runs:
                raise KeyError(f"Run {run_id} not found")
            artifact_id = uuid4()
            now = datetime.now(timezone.utc)
            # Calculate byte size using UTF-8 encoding
            size_bytes = len(content.encode("utf-8"))
            art_out = ArtifactOut(
                id=artifact_id,
                run_id=run_id,
                type=artifact_type,
                name=name,
                content_type=content_type,
                size_bytes=size_bytes,
                created_at=now,
                agent=agent,
                model_used=model_used,
            )
            if run_id not in self._artifacts:
                self._artifacts[run_id] = {}
            self._artifacts[run_id][artifact_id] = (art_out, content)
            return art_out

    async def list_artifacts(self, run_id: UUID) -> list[ArtifactOut] | None:
        """List all artifacts for a run, or None if the run does not exist."""
        async with self._lock:
            if run_id not in self._runs:
                return None
            run_arts = self._artifacts.get(run_id, {})
            # Return list of metadata objects
            return [meta for meta, _ in run_arts.values()]

    async def get_artifact(
        self,
        run_id: UUID,
        artifact_id: UUID,
    ) -> tuple[ArtifactOut, str] | None:
        """Retrieve an artifact and its content, scoped to the specific run_id."""
        async with self._lock:
            # Verify the run exists first
            if run_id not in self._runs:
                return None
            run_arts = self._artifacts.get(run_id, {})
            # Scoped lookup: artifact must belong to this specific run_id
            return run_arts.get(artifact_id)

    async def get_run_by_delivery(self, delivery_id: str) -> RunDetail | None:
        """Look up an existing run by its GitHub delivery ID (idempotency)."""
        async with self._lock:
            run_id = self._deliveries.get(delivery_id)
            if run_id is None:
                return None
            return self._runs.get(run_id)

    async def record_delivery(self, delivery_id: str, run_id: UUID) -> None:
        """Map a GitHub delivery ID to a run ID for deduplication."""
        async with self._lock:
            self._record_delivery_unlocked(delivery_id, run_id)
