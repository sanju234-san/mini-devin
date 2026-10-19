"""
Retrieval Agent Implementation for Mini-Devin.

Performs genuine repository indexing and snippet retrieval.
Preserves strict provenance, never fabricates file paths, code, or line ranges,
and accurately reports whether retrieval succeeded, yielded no results,
encountered an unindexed/missing checkout, or ran via lexical vs. vector search.
"""

from __future__ import annotations

import logging
from pathlib import Path
from typing import Any, Optional

from app.agents.model_router import route
from app.agents.schemas import (
    AgentState,
    RetrievedContext,
    RetrievedSnippet,
    create_event,
)
from app.retrieval.indexer import RepositoryIndexer, resolve_permitted_repo_path
from app.retrieval.query_transform import transform_query

logger = logging.getLogger(__name__)

# Process-level cache for repository indexers to enable fast incremental indexing
_INDEXER_CACHE: dict[str, RepositoryIndexer] = {}


def get_or_create_indexer(repo_path: Path) -> RepositoryIndexer:
    """Retrieve or initialize a RepositoryIndexer for the given directory."""
    path_key = str(repo_path.resolve())
    if path_key not in _INDEXER_CACHE:
        _INDEXER_CACHE[path_key] = RepositoryIndexer(repo_path=repo_path)
    return _INDEXER_CACHE[path_key]


def retrieval_node(state: AgentState) -> dict[str, Any]:
    """
    Retrieval Agent Node: Locates real repository code context.
    
    Validates repository location, scans and chunks authentic repository files,
    extracts query keywords/identifiers, and returns genuine evidence.
    If repository checkout is not available, reports a truthful structured
    missing_checkout result without inventing synthetic code or filenames.
    """
    tier = route("retrieval")
    title = state.get("issue_title", "")
    body = state.get("issue_body", "")
    repo_raw = state.get("repo", "")

    logger.info("Executing Retrieval node [tier=%s] for repo='%s'", tier, repo_raw)

    # 1. Resolve local repository directory safely
    repo_dir = resolve_permitted_repo_path(repo_raw)

    if repo_dir is None:
        # Truthful handling when repository checkout is not available locally
        logger.info(
            "Target repository checkout for '%s' is not available locally. "
            "Reporting truthful missing_checkout status.",
            repo_raw,
        )
        retrieved = RetrievedContext(
            files=[],
            snippets=[],
            summary=(
                f"Target repository '{repo_raw}' is not available as a local directory. "
                "Backend repository checkout service contract required."
            ),
            is_mock=False,
            retrieval_status="missing_checkout",
            retrieval_method="none",
            error_message=f"Local repository checkout not found for '{repo_raw}'.",
        )
        event = create_event(
            agent_name="retrieval",
            event_type="retrieval_completed",
            status="success",
            message=f"Retrieval evaluated for '{repo_raw}' (checkout not found locally)",
            metadata={
                "tier": tier.value,
                "is_mock": False,
                "retrieval_status": "missing_checkout",
                "retrieval_method": "none",
                "files": [],
            },
        )
        return {
            "retrieved_context": retrieved.model_dump(mode="json"),
            "status": "retrieved",
            "current_agent": "retrieval",
            "events": [event],
        }

    # 2. Authentically index the repository
    indexer = get_or_create_indexer(repo_dir)
    force_reindex = bool(state.get("force_reindex", False))

    try:
        index_summary = indexer.index_repository(force=force_reindex)
    except Exception as exc:
        logger.exception("Failed to index repository at %s: %s", repo_dir, exc)
        retrieved = RetrievedContext(
            files=[],
            snippets=[],
            summary=f"Indexing failed for repository '{repo_raw}': {exc}",
            is_mock=False,
            retrieval_status="indexing_failed",
            retrieval_method=indexer.index.method_name,
            error_message=str(exc),
        )
        event = create_event(
            agent_name="retrieval",
            event_type="retrieval_completed",
            status="failed",
            message=f"Repository indexing failed for '{repo_raw}': {exc}",
            metadata={
                "tier": tier.value,
                "is_mock": False,
                "retrieval_status": "indexing_failed",
                "retrieval_method": indexer.index.method_name,
                "files": [],
            },
        )
        return {
            "retrieved_context": retrieved.model_dump(mode="json"),
            "status": "retrieved",
            "current_agent": "retrieval",
            "events": [event],
        }

    if index_summary.get("indexed_files", 0) == 0:
        retrieved = RetrievedContext(
            files=[],
            snippets=[],
            summary=f"Repository '{repo_raw}' is empty or contains no indexable files.",
            is_mock=False,
            retrieval_status="no_results",
            retrieval_method=indexer.index.method_name,
        )
        event = create_event(
            agent_name="retrieval",
            event_type="retrieval_completed",
            status="success",
            message=f"Repository '{repo_raw}' contains no indexable files",
            metadata={
                "tier": tier.value,
                "is_mock": False,
                "retrieval_status": "no_results",
                "retrieval_method": indexer.index.method_name,
                "files": [],
            },
        )
        return {
            "retrieved_context": retrieved.model_dump(mode="json"),
            "status": "retrieved",
            "current_agent": "retrieval",
            "events": [event],
        }

    # 3. Transform query into search terms
    query_info = transform_query(title=title, body=body)

    # 4. Search index for genuine snippets
    search_results = indexer.search(
        query=query_info.expanded_query,
        query_terms=query_info.search_terms,
        top_k=5,
    )

    if not search_results:
        retrieved = RetrievedContext(
            files=[],
            snippets=[],
            summary=f"No matching code snippets found in repository '{repo_raw}'.",
            is_mock=False,
            retrieval_status="no_results",
            retrieval_method=indexer.index.method_name,
        )
        event = create_event(
            agent_name="retrieval",
            event_type="retrieval_completed",
            status="success",
            message=f"Retrieved 0 files (no matches found for query) via {indexer.index.method_name}",
            metadata={
                "tier": tier.value,
                "is_mock": False,
                "retrieval_status": "no_results",
                "retrieval_method": indexer.index.method_name,
                "files": [],
            },
        )
        return {
            "retrieved_context": retrieved.model_dump(mode="json"),
            "status": "retrieved",
            "current_agent": "retrieval",
            "events": [event],
        }

    # 5. Build authentic retrieved evidence
    snippets = [
        RetrievedSnippet(
            file_path=r.file_path,
            start_line=r.start_line,
            end_line=r.end_line,
            content=r.content,
            score=r.score,
            score_type=r.score_type,
        )
        for r in search_results
    ]

    # Deduplicate candidate files while preserving rank order
    candidate_files = list(dict.fromkeys(r.file_path for r in search_results))

    retrieved = RetrievedContext(
        files=candidate_files,
        snippets=snippets,
        summary=(
            f"Retrieved {len(snippets)} snippets across {len(candidate_files)} files "
            f"via {indexer.index.method_name}."
        ),
        is_mock=False,
        retrieval_status="success",
        retrieval_method=indexer.index.method_name,
    )

    event = create_event(
        agent_name="retrieval",
        event_type="retrieval_completed",
        status="success",
        message=f"Retrieved {len(candidate_files)} files via {indexer.index.method_name}",
        metadata={
            "tier": tier.value,
            "is_mock": False,
            "retrieval_status": "success",
            "retrieval_method": indexer.index.method_name,
            "files": candidate_files,
            "snippet_count": len(snippets),
        },
    )

    return {
        "retrieved_context": retrieved.model_dump(mode="json"),
        "status": "retrieved",
        "current_agent": "retrieval",
        "events": [event],
    }
