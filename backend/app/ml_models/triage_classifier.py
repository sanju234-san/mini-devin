"""Triage classifier loading and inference.

Loads the scikit-learn pipeline lazily on first prediction and caches it.
Provides cache reset helper for testing.
"""

from __future__ import annotations

import json
import os

VALID_CLASSES = frozenset({"bug_fix", "small_feature", "test_writing", "out_of_scope"})
MIN_CONFIDENCE = float(os.getenv("MINI_DEVIN_MIN_CONFIDENCE", "0.6"))

ARTIFACTS_DIR = os.path.join(os.path.dirname(__file__), "artifacts")
PIPELINE_PATH = os.path.join(ARTIFACTS_DIR, "triage_pipeline.joblib")
METADATA_PATH = os.path.join(ARTIFACTS_DIR, "triage_metadata.json")
DISTILBERT_DIR = os.path.join(ARTIFACTS_DIR, "distilbert_candidate")

_PIPELINE_CACHE = None
_METADATA_CACHE = None
_DISTILBERT_MODEL = None
_DISTILBERT_TOKENIZER = None


class TriageModelNotFound(Exception):
    """Raised when the triage model artifact or metadata file is missing."""


class TriagePredictionError(Exception):
    """Raised when the model prediction is invalid or unexpected."""


def reset_cache() -> None:
    """Reset the cached model pipeline, DistilBERT model, and metadata."""
    global _PIPELINE_CACHE, _METADATA_CACHE, _DISTILBERT_MODEL, _DISTILBERT_TOKENIZER
    _PIPELINE_CACHE = None
    _METADATA_CACHE = None
    _DISTILBERT_MODEL = None
    _DISTILBERT_TOKENIZER = None


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
 
 
def load_distilbert(model_dir: str | None = None):
    """Load and cache the fine-tuned DistilBERT model and tokenizer."""
    global _DISTILBERT_MODEL, _DISTILBERT_TOKENIZER
    if _DISTILBERT_MODEL is not None and _DISTILBERT_TOKENIZER is not None:
        return _DISTILBERT_MODEL, _DISTILBERT_TOKENIZER

    target_dir = model_dir if model_dir is not None else DISTILBERT_DIR
    if not os.path.exists(target_dir):
        raise TriageModelNotFound(f"DistilBERT candidate directory not found at {target_dir}")

    try:
        from transformers import AutoModelForSequenceClassification, AutoTokenizer
        tokenizer = AutoTokenizer.from_pretrained(target_dir)
        model = AutoModelForSequenceClassification.from_pretrained(target_dir)
        model.eval()
        _DISTILBERT_MODEL = model
        _DISTILBERT_TOKENIZER = tokenizer
        return _DISTILBERT_MODEL, _DISTILBERT_TOKENIZER
    except Exception as exc:
        raise TriageModelNotFound(f"Failed to load DistilBERT model: {exc}") from exc


def classify_with_distilbert(issue_text: str) -> tuple[str, float]:
    """Classify issue using the fine-tuned DistilBERT candidate."""
    import torch
    model, tokenizer = load_distilbert()
    inputs = tokenizer(issue_text, return_tensors="pt", truncation=True, max_length=512)
    with torch.no_grad():
        outputs = model(**inputs)
        probs = torch.softmax(outputs.logits, dim=-1)[0].tolist()

    id2label = getattr(model.config, "id2label", None) or {
        0: "bug_fix", 1: "small_feature", 2: "test_writing", 3: "out_of_scope"
    }
    best_idx = int(max(range(len(probs)), key=lambda i: probs[i]))
    raw_label = id2label.get(best_idx, str(best_idx))
    category = raw_label if raw_label in VALID_CLASSES else "out_of_scope"
    confidence = float(probs[best_idx])
    return category, confidence


def classify_with_confidence(issue_text: str) -> tuple[str, float]:
    """Return tuple of (label, confidence) using active classifier."""
    if os.environ.get("MINI_DEVIN_TRIAGE_MODEL", "").lower() == "distilbert":
        try:
            return classify_with_distilbert(issue_text)
        except Exception:
            pass  # Fall back to calibrated baseline pipeline

    pipeline = load_pipeline()
    if hasattr(pipeline, "predict_proba"):
        probas = pipeline.predict_proba([issue_text])
        if len(probas) == 0 or len(probas[0]) == 0:
            raise TriagePredictionError("Triage pipeline returned empty probabilities.")
        proba = probas[0]
        if hasattr(pipeline, "classes_"):
            classes = list(pipeline.classes_)
            best_idx = int(max(range(len(proba)), key=lambda i: proba[i]))
            category = str(classes[best_idx])
            confidence = float(proba[best_idx])
        else:
            category = classify(issue_text)
            confidence = float(max(proba))
    else:
        category = classify(issue_text)
        confidence = 1.0

    if category not in VALID_CLASSES:
        raise TriagePredictionError(
            f"Triage pipeline returned unexpected class '{category}'. "
            f"Expected one of: {sorted(VALID_CLASSES)}."
        )

    return category, confidence
