"""
Sentence-transformer embedding model used by the Retrieval Agent.

Wraps the embedding model that feeds backend/app/retrieval/vector_store.py's
FAISS index -- a discriminative deep-learning task, not a generative one.
"""


def embed(texts: list[str]):
    """Return embedding vectors for a list of code/text chunks."""
    raise NotImplementedError
