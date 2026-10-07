"""Issue text cleaning for retrieval and triage.

This is not a security control; the injection scan runs on the raw text before Triage;
cleaned text remains untrusted. Cleaning removes noise only.
"""

from __future__ import annotations

import re
import unicodedata

# Allowlist of tag names for bounded HTML tag removal
_ALLOWED_TAGS = (
    r"a|b|blockquote|br|code|details|div|em|h1|h2|h3|h4|h5|h6|hr|i|img|kbd|"
    r"li|ol|p|picture|pre|source|span|strong|sub|summary|sup|table|tbody|td|th|thead|tr|ul"
)
_TAG_RE = re.compile(rf"</?(?:{_ALLOWED_TAGS})(?=[\s/>])[^<>]{{0,200}}>", re.IGNORECASE)

# Bounded markdown image removal pattern
_IMAGE_RE = re.compile(r"!\[[^\[\]]{0,300}\]\([^()\s]{0,500}\)")

# Checkbox markers at the start of a line only; does not consume newline
_CHECKBOX_RE = re.compile(r"^[ \t]*[-*][ \t]*\[[ xX]\][ \t]*", re.MULTILINE)

# Inline code: single-backtick spans on one line of at most 300 characters
_INLINE_RE = re.compile(r"`[^`\n]{0,300}`")

# Control characters except \n and \t (all Cc codepoints in Unicode are <= 0x9f)
_CONTROL_CHAR_RE = re.compile(r"[\x00-\x08\x0b\x0c\x0e-\x1f\x7f-\x9f]")

_GREETING_WORDS = {"hi", "hello", "hey", "dear"}
_GREETING_AUDIENCE = {
    "all", "everyone", "team", "there", "folks", "guys",
    "maintainers", "developers", "sir", "madam",
}

_SIGNOFF_EXACT = {
    ("thanks",),
    ("thank", "you"),
    ("many", "thanks"),
    ("thanks", "in", "advance"),
    ("thanks", "a", "lot"),
    ("regards",),
    ("best", "regards"),
    ("kind", "regards"),
    ("cheers",),
    ("best",),
}


def _is_pure_greeting(line: str) -> bool:
    """Return True if line is purely a greeting."""
    stripped = line.strip().rstrip(".,!?:; \t").lower()
    words = stripped.split()
    if not words:
        return False
    if len(words) == 1 and words[0] in _GREETING_WORDS:
        return True
    if len(words) == 2 and words[0] in _GREETING_WORDS and words[1] in _GREETING_AUDIENCE:
        return True
    return False


def _is_pure_signoff(line: str) -> bool:
    """Return True if line is purely a sign-off."""
    stripped = line.strip().rstrip(".,!?:; \t").lower()
    words = tuple(stripped.split())
    return words in _SIGNOFF_EXACT


def clean_issue_text(text: str | None, max_chars: int = 4000) -> str:
    """Clean noisy markdown issue text for retrieval and triage.
    This is not a security control; cleaned text remains untrusted.
    """
    if max_chars <= 0:
        return ""
    if text is None or not text.strip():
        return ""

    # 2. Normalise NFKC, convert line endings, remove control characters except \n and \t
    text = unicodedata.normalize("NFKC", text)
    text = text.replace("\r\n", "\n").replace("\r", "\n")
    text = _CONTROL_CHAR_RE.sub("", text)
    if not text.strip():
        return ""

    # 3. Split on triple-backtick fences; inside fences kept as is (except trailing whitespace)
    parts = text.split("```")
    fences: dict[str, str] = {}
    inlines: dict[str, str] = {}
    assembled_parts: list[str] = []
    inline_counter = 0

    for i, part in enumerate(parts):
        if i % 2 == 1:
            # Inside code fence
            cleaned_code = "\n".join(line.rstrip(" \t") for line in part.split("\n"))
            token = f"\x00FENCE_{i}\x00"
            if i == len(parts) - 1 and len(parts) % 2 == 0:
                fences[token] = f"```{cleaned_code}"
            else:
                fences[token] = f"```{cleaned_code}```"
            assembled_parts.append(token)
        else:
            # Outside code fence: protect single-backtick inline code first
            def _protect_inline(m: re.Match) -> str:
                nonlocal inline_counter
                t = f"\x00INLINE_{inline_counter}\x00"
                inlines[t] = m.group(0)
                inline_counter += 1
                return t

            out = _INLINE_RE.sub(_protect_inline, part)

            # 4. Remove HTML comments (unclosed removed to end of segment)
            out = re.sub(r"<!--[\s\S]*?(?:-->|$)", "", out)
            # Remove allowlisted HTML tags with bounded length, keeping inner text
            out = _TAG_RE.sub("", out)
            # Remove bounded markdown images
            out = _IMAGE_RE.sub("", out)
            # Remove bare http/https URLs
            out = re.sub(r"https?://\S+", "", out)
            # Strip checkbox markers only at start of line
            out = _CHECKBOX_RE.sub("", out)
            # Remove category So (symbols/emoji) and Cf (invisible chars, directional overrides)
            if not out.isascii():
                out = "".join(c for c in out if c.isascii() or unicodedata.category(c) not in ("So", "Cf"))
            assembled_parts.append(out)

    combined = "".join(assembled_parts)

    # 7. Greeting and sign-off removal
    lines = combined.split("\n")
    non_empty_indices = [idx for idx, line in enumerate(lines) if line.strip()]
    first_3 = set(non_empty_indices[:3])
    last_3 = set(non_empty_indices[-3:])

    filtered_lines: list[str] = []
    for idx, line in enumerate(lines):
        if "\x00FENCE_" in line or "\x00INLINE_" in line:
            filtered_lines.append(line)
            continue

        if idx in first_3 and _is_pure_greeting(line):
            continue
        if idx in last_3 and _is_pure_signoff(line):
            continue

        filtered_lines.append(line)

    # 8. Collapse runs of spaces/tabs, strip trailing whitespace, collapse newlines
    combined = "\n".join(filtered_lines)
    combined = re.sub(r"[ \t]+", " ", combined)
    combined = "\n".join(line.rstrip(" \t") for line in combined.split("\n"))
    combined = re.sub(r"\n{3,}", "\n\n", combined)
    combined = combined.strip("\n")

    # Restore inline code spans
    if inlines:
        combined = re.sub(r"\x00INLINE_\d+\x00", lambda m: inlines[m.group(0)], combined)

    # Restore fenced code blocks
    if fences:
        combined = re.sub(r"\x00FENCE_\d+\x00", lambda m: fences[m.group(0)], combined)

    combined = combined.strip("\n")
    if not combined:
        return ""

    # 9. Truncation to max_chars
    if len(combined) > max_chars:
        suffix = "\n[truncated]"
        if max_chars <= len(suffix):
            combined = suffix[:max_chars]
        else:
            budget = max_chars - len(suffix)
            cut_pos = combined.rfind("\n", 0, budget + 1)
            if cut_pos != -1:
                combined = combined[:cut_pos] + suffix
            else:
                combined = combined[:budget] + suffix

    return combined
