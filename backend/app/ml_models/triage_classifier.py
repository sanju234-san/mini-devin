"""Triage classifier loading and inference.

Loads the scikit-learn pipeline lazily on first prediction and caches it.
Provides cache reset helper for testing.
"""

from __future__ import annotations

import json
import os

VALID_CLASSES = frozenset({"bug_fix", "small_feature", "test_writing", "out_of_scope"})

ARTIFACTS_DIR = os.path.join(os.path.dirname(__file__), "artifacts")
PIPELINE_PATH = os.path.join(ARTIFACTS_DIR, "triage_pipeline.joblib")
METADATA_PATH = os.path.join(ARTIFACTS_DIR, "triage_metadata.json")

_PIPELINE_CACHE = None
_METADATA_CACHE = None


class TriageModelNotFound(Exception):
    """Raised when the triage model artifact or metadata file is missing."""


class TriagePredictionError(Exception):
    """Raised when the model prediction is invalid or unexpected."""


def reset_cache() -> None:
    """Reset the cached model pipeline and metadata."""
    global _PIPELINE_CACHE, _METADATA_CACHE
    _PIPELINE_CACHE = None
    _METADATA_CACHE = None


def load_pipeline(
    pipeline_path: str | None = None,
    metadata_path: str | None = None,
):
    """Load and cache the triage pipeline and metadata.

    Isolated function to allow replacing the model without changing agent nodes.
    """
    global _PIPELINE_CACHE, _METADATA_CACHE
    if _PIPELINE_CACHE is not None:
        return _PIPELINE_CACHE

    pipe_file = pipeline_path if pipeline_path is not None else PIPELINE_PATH
    meta_file = metadata_path if metadata_path is not None else METADATA_PATH

    if not os.path.exists(pipe_file):
        raise TriageModelNotFound(
            f"Triage model pipeline not found at {pipe_file}. "
            f"Train the model first using train_triage.py."
        )

    if not os.path.exists(meta_file):
        raise TriageModelNotFound(
            f"Triage model metadata not found at {meta_file}. "
            f"Train the model first using train_triage.py."
        )

    import joblib

    try:
        pipeline = joblib.load(pipe_file)
    except Exception as e:
        raise TriageModelNotFound(f"Failed to load triage pipeline: {e}") from e

    with open(meta_file, "r", encoding="utf-8") as f:
        metadata = json.load(f)

    _PIPELINE_CACHE = pipeline
    _METADATA_CACHE = metadata
    return _PIPELINE_CACHE


def classify(issue_text: str) -> str:
    """Return one of: 'bug_fix', 'small_feature', 'test_writing', 'out_of_scope'."""
    pipeline = load_pipeline()
    predictions = pipeline.predict([issue_text])
    if len(predictions) == 0:
        raise TriagePredictionError("Triage pipeline returned empty prediction.")

    category = str(predictions[0])
    if category not in VALID_CLASSES:
        raise TriagePredictionError(
            f"Triage pipeline returned unexpected class '{category}'. "
            f"Expected one of: {sorted(VALID_CLASSES)}."
        )

    return category
