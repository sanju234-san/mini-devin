"""
Sentence-transformer embedding model used by the Retrieval Agent.

Wraps the embedding model that feeds backend/app/retrieval/vector_store.py's
FAISS index -- a discriminative deep-learning task, not a generative one.
"""


def is_embedding_available() -> bool:
    """Check if an embedding model is currently configured, loaded, and available.

    Returns False when model weights or dependencies are not loaded, ensuring
    honest fallback to lexical BM25 without downloading weights.
    """
    return False


def embed(texts: list[str]) -> list[list[float]]:
    """Return embedding vectors for a list of code/text chunks.
    
    Raises NotImplementedError because embedding weights are not downloaded
    in this environment. Retrieval gracefully falls back to LexicalIndex.
    """
    raise NotImplementedError(
        "Sentence-Transformer embedding model weights are not loaded. "
        "Use LexicalIndex or configure an offline embedding provider."
    )
