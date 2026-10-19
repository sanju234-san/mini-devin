"""
Query Transformation and Analysis for Mini-Devin Retrieval.

Extracts technical code identifiers, keywords, and domain concepts from issue
titles and descriptions. Optionally attempts LLM-based query rewriting when the
shared LLM provider client is functional, but gracefully falls back to deterministic
analysis when the LLM provider is not available.
"""

from __future__ import annotations

import logging
import re
from typing import Any, NamedTuple, Optional

logger = logging.getLogger(__name__)

# Common English stopwords to ignore in code retrieval keywords
_STOPWORDS = frozenset({
    "a", "about", "above", "after", "again", "against", "all", "am", "an", "and",
    "any", "are", "aren't", "as", "at", "be", "because", "been", "before", "being",
    "below", "between", "both", "but", "by", "can", "cannot", "could", "couldn't",
    "did", "didn't", "do", "does", "doesn't", "doing", "don't", "down", "during",
    "each", "few", "for", "from", "further", "had", "hadn't", "has", "hasn't",
    "have", "haven't", "having", "he", "he'd", "he'll", "he's", "her", "here",
    "here's", "hers", "herself", "him", "himself", "his", "how", "how's", "i",
    "i'd", "i'll", "i'm", "i've", "if", "in", "into", "is", "isn't", "it",
    "it's", "its", "itself", "let's", "me", "more", "most", "mustn't", "my",
    "myself", "no", "nor", "not", "of", "off", "on", "once", "only", "or",
    "other", "ought", "our", "ours", "ourselves", "out", "over", "own", "same",
    "shan't", "she", "she'd", "she'll", "she's", "should", "shouldn't", "so",
    "some", "such", "than", "that", "that's", "the", "their", "theirs", "them",
    "themselves", "then", "there", "there's", "these", "they", "they'd", "they'll",
    "they're", "they've", "this", "those", "through", "to", "too", "under",
    "until", "up", "very", "was", "wasn't", "we", "we'd", "we'll", "we're",
    "we've", "were", "weren't", "what", "what's", "when", "when's", "where",
    "where's", "which", "while", "who", "who's", "whom", "why", "why's", "with",
    "won't", "would", "wouldn't", "you", "you'd", "you'll", "you're", "you've",
    "your", "yours", "yourself", "yourselves", "issue", "bug", "fix", "please",
    "error", "fail", "failed", "failing", "fails", "problem", "broken",
})

# Regex patterns for code-specific identifiers
_CAMEL_CASE_RE = re.compile(r"\b[A-Z][a-zA-Z0-9]+(?:[A-Z][a-zA-Z0-9]*)+\b")
_SNAKE_CASE_RE = re.compile(r"\b[a-zA-Z0-9]+_[a-zA-Z0-9_]+\b")
_FILE_PATH_RE = re.compile(r"\b[a-zA-Z0-9_\-\.\/]+\.[a-zA-Z0-9]{1,4}\b")
_WORD_RE = re.compile(r"\b[a-zA-Z0-9_]{3,}\b")


class QueryAnalysis(NamedTuple):
    """Structured extraction of search terms from an issue."""
    raw_query: str
    expanded_query: str
    exact_identifiers: list[str]
    search_terms: list[str]
    method: str  # "llm_expanded" or "deterministic_extraction"


def extract_identifiers(text: str) -> list[str]:
    """Extract CamelCase, snake_case, and file paths from text."""
    seen: set[str] = set()
    results: list[str] = []

    for pattern in (_FILE_PATH_RE, _CAMEL_CASE_RE, _SNAKE_CASE_RE):
        for match in pattern.findall(text):
            cleaned = match.strip().rstrip(".,;:)")
            if cleaned and cleaned not in seen and len(cleaned) > 2:
                seen.add(cleaned)
                results.append(cleaned)

    return results


def extract_keywords(text: str) -> list[str]:
    """Extract meaningful alphanumeric keywords, filtering stopwords."""
    words = _WORD_RE.findall(text)
    keywords: list[str] = []
    seen: set[str] = set()

    for w in words:
        w_lower = w.lower()
        if w_lower not in _STOPWORDS and len(w_lower) >= 3 and w_lower not in seen:
            seen.add(w_lower)
            keywords.append(w_lower)

    return keywords


def try_llm_expand(query: str) -> Optional[str]:
    """
    Attempt to use the shared LLM client to expand code query terms.
    
    Returns None if the LLM client is unavailable, raising NotImplementedError,
    or failing.
    """
    try:
        from app.integrations.llm_provider_client import complete
        prompt = (
            f"Given this programming issue, provide 3 to 5 candidate file paths, "
            f"function names, or symbols to search for in the repository:\n\n{query}\n\n"
            f"Symbols:"
        )
        response = complete(prompt, agent_name="retrieval")
        if response and isinstance(response, str):
            return response.strip()
    except (NotImplementedError, ImportError, Exception) as exc:
        logger.debug("LLM query expansion skipped (provider unavailable: %s)", exc)
    return None


def transform_query(title: str, body: str = "") -> QueryAnalysis:
    """
    Produce structured query search terms from issue title and body.
    
    Combines exact identifier detection, keyword extraction, and optional LLM expansion.
    """
    combined = f"{title.strip()}\n{body.strip()}".strip()
    if not combined:
        return QueryAnalysis(
            raw_query="",
            expanded_query="",
            exact_identifiers=[],
            search_terms=[],
            method="deterministic_extraction",
        )

    # Deterministic extraction
    identifiers = extract_identifiers(combined)
    keywords = extract_keywords(combined)

    # Combine identifiers and keywords, prioritizing identifiers
    search_terms: list[str] = []
    seen: set[str] = set()
    for item in identifiers + keywords:
        item_lower = item.lower()
        if item_lower not in seen:
            seen.add(item_lower)
            search_terms.append(item)

    # Optional LLM expansion
    llm_expansion = try_llm_expand(title)
    if llm_expansion:
        method = "llm_expanded"
        expanded = f"{combined}\n{llm_expansion}"
        extra_kws = extract_keywords(llm_expansion)
        for kw in extra_kws:
            if kw.lower() not in seen:
                seen.add(kw.lower())
                search_terms.append(kw)
    else:
        method = "deterministic_extraction"
        expanded = combined

    return QueryAnalysis(
        raw_query=combined,
        expanded_query=expanded,
        exact_identifiers=identifiers,
        search_terms=search_terms,
        method=method,
    )
