"""
Controlled ACI-Style Repository Tools for Mini-Devin Coder Agent.

Provides safe, sandboxed read, inspection, and patch preparation tools:
1. read_file: inspect file contents with line-range bounding.
2. list_directory: inspect repository directory structure safely.
3. search_code: search text/identifiers across permitted repository files.
4. generate_unified_patch: compute standard unified diff from original to modified code.
5. parse_diff_header_paths: extract genuine file paths directly from diff headers.

Safety Invariants:
- Strict path traversal prevention ('..' and absolute escapes blocked).
- Action denylist enforcement (.env, .git/, .github/, private keys, tokens).
- Secret redaction on all returned observations.
- All operations are bounded within the resolved repository workspace.
"""

from __future__ import annotations

import difflib
import fnmatch
import logging
import os
from pathlib import Path
import re
from typing import Any, Optional

from app.guardrails.output_guardrails import (
    redact_secrets,
    validate_path_safety,
)

logger = logging.getLogger(__name__)

_TOOL_INVOCATION_LOG: list[dict[str, Any]] = []


def get_tool_log() -> list[dict[str, Any]]:
    """Return an audit copy of logged tool invocations."""
    return list(_TOOL_INVOCATION_LOG)


def clear_tool_log() -> None:
    """Clear the in-memory tool invocation log (for testing)."""
    _TOOL_INVOCATION_LOG.clear()


def _log_tool_invocation(tool_name: str, arguments: dict[str, Any], success: bool, reason: str = "") -> None:
    """Audit log tool invocations with secret redaction."""
    safe_args = {k: redact_secrets(str(v)) for k, v in arguments.items()}
    entry = {
        "tool": tool_name,
        "arguments": safe_args,
        "success": success,
        "reason": redact_secrets(reason),
    }
    _TOOL_INVOCATION_LOG.append(entry)
    logger.info("ACI Tool [%s] success=%s reason=%s", tool_name, success, entry["reason"])


def resolve_safe_path(base_dir: str | Path, rel_path: str) -> tuple[bool, Optional[Path], str]:
    """
    Resolve and validate that a relative file path is safe and strictly inside base_dir.
    
    Returns (is_safe, resolved_path, violation_reason).
    """
    safe_path, reason = validate_path_safety(rel_path)
    if not safe_path:
        return False, None, reason

    base = Path(base_dir).resolve()
    try:
        target = (base / rel_path).resolve()
    except Exception as exc:
        return False, None, f"Path resolution failed: {exc}"

    # Verify target path is strictly within base directory (no escape)
    if base != target and base not in target.parents:
        return False, None, f"Path escape detected: '{rel_path}' is outside repository workspace."

    return True, target, ""


def read_file(
    repo_path: str | Path,
    file_path: str,
    start_line: int = 1,
    end_line: int = 300,
    max_lines: int = 500,
) -> dict[str, Any]:
    """
    Read bounded line range from a repository file.
    """
    is_safe, resolved, reason = resolve_safe_path(repo_path, file_path)
    if not is_safe or resolved is None:
        _log_tool_invocation("read_file", {"file_path": file_path}, False, reason)
        return {"success": False, "error": reason, "content": ""}

    if not resolved.is_file():
        err = f"File not found: {file_path}"
        _log_tool_invocation("read_file", {"file_path": file_path}, False, err)
        return {"success": False, "error": err, "content": ""}

    try:
        with open(resolved, "r", encoding="utf-8", errors="replace") as f:
            all_lines = f.readlines()

        total_lines = len(all_lines)
        s = max(1, start_line)
        e = min(total_lines, max(s, end_line))
        if (e - s + 1) > max_lines:
            e = s + max_lines - 1

        selected = all_lines[s - 1 : e]
        numbered_content = "".join(f"{s + idx}: {line}" for idx, line in enumerate(selected))
        safe_content = redact_secrets(numbered_content)

        _log_tool_invocation("read_file", {"file_path": file_path, "lines": f"{s}-{e}"}, True, "OK")
        return {
            "success": True,
            "file_path": file_path,
            "start_line": s,
            "end_line": e,
            "total_lines": total_lines,
            "content": safe_content,
        }
    except Exception as exc:
        err = f"Failed to read file '{file_path}': {exc}"
        _log_tool_invocation("read_file", {"file_path": file_path}, False, err)
        return {"success": False, "error": err, "content": ""}


def list_directory(
    repo_path: str | Path,
    dir_path: str = ".",
    max_entries: int = 100,
) -> dict[str, Any]:
    """
    Safely list directories and files within the permitted repository tree.
    """
    is_safe, resolved, reason = resolve_safe_path(repo_path, dir_path)
    if not is_safe or resolved is None:
        _log_tool_invocation("list_directory", {"dir_path": dir_path}, False, reason)
        return {"success": False, "error": reason, "entries": []}

    if not resolved.is_dir():
        err = f"Directory not found: {dir_path}"
        _log_tool_invocation("list_directory", {"dir_path": dir_path}, False, err)
        return {"success": False, "error": err, "entries": []}

    entries = []
    try:
        for item in sorted(os.listdir(resolved)):
            rel_entry = os.path.join(dir_path, item) if dir_path not in (".", "") else item
            safe_item, _ = validate_path_safety(rel_entry)
            if not safe_item:
                continue

            full = resolved / item
            entries.append({
                "name": item,
                "is_dir": full.is_dir(),
                "size_bytes": full.stat().st_size if full.is_file() else None,
            })
            if len(entries) >= max_entries:
                break

        _log_tool_invocation("list_directory", {"dir_path": dir_path, "count": len(entries)}, True, "OK")
        return {"success": True, "dir_path": dir_path, "entries": entries}
    except Exception as exc:
        err = f"Failed to list directory '{dir_path}': {exc}"
        _log_tool_invocation("list_directory", {"dir_path": dir_path}, False, err)
        return {"success": False, "error": err, "entries": []}


def search_code(
    repo_path: str | Path,
    query: str,
    file_pattern: str = "*.py",
    max_matches: int = 20,
) -> dict[str, Any]:
    """
    Search permitted repository source files for specific symbols, keywords, or patterns.
    """
    base = Path(repo_path).resolve()
    if not base.is_dir():
        return {"success": False, "error": "Invalid repository directory", "matches": []}

    matches: list[dict[str, Any]] = []
    regex = re.compile(re.escape(query), re.IGNORECASE)

    try:
        for root, dirs, files in os.walk(base):
            # Prune protected directories from traversal
            dirs[:] = [d for d in dirs if not d.startswith(".") and d not in ("node_modules", "dist", "build", "venv")]
            for f in files:
                if not fnmatch.fnmatch(f, file_pattern):
                    continue

                full_path = Path(root) / f
                rel_path = str(full_path.relative_to(base)).replace("\\", "/")
                is_safe, reason = validate_path_safety(rel_path)
                if not is_safe:
                    continue

                try:
                    with open(full_path, "r", encoding="utf-8", errors="replace") as fh:
                        for line_num, line in enumerate(fh, 1):
                            if regex.search(line):
                                matches.append({
                                    "file_path": rel_path,
                                    "line_number": line_num,
                                    "line_content": redact_secrets(line.strip()),
                                })
                                if len(matches) >= max_matches:
                                    break
                except Exception:
                    continue
                if len(matches) >= max_matches:
                    break
            if len(matches) >= max_matches:
                break

        _log_tool_invocation("search_code", {"query": query, "matches": len(matches)}, True, "OK")
        return {"success": True, "query": query, "matches": matches}
    except Exception as exc:
        err = f"Search failed: {exc}"
        _log_tool_invocation("search_code", {"query": query}, False, err)
        return {"success": False, "error": err, "matches": []}


def generate_unified_patch(
    file_path: str,
    original_content: str,
    modified_content: str,
) -> str:
    """
    Generate unified diff format string for a single file modification.
    Produces canonical '--- a/file +++ b/file' headers.
    """
    norm_path = file_path.replace("\\", "/")
    orig_lines = original_content.splitlines(keepends=True)
    mod_lines = modified_content.splitlines(keepends=True)
    diff_lines = list(
        difflib.unified_diff(
            orig_lines,
            mod_lines,
            fromfile=f"a/{norm_path}",
            tofile=f"b/{norm_path}",
        )
    )
    return "".join(diff_lines)


def parse_diff_header_paths(diff_text: str) -> list[str]:
    """
    Parse actual affected file paths from unified diff headers.
    Never trusts metadata alone; verifies real '--- a/...' and '+++ b/...' headers.
    """
    paths: list[str] = []
    # Match +++ b/path/to/file or +++ path/to/file
    pattern = re.compile(r"^\+\+\+\s+(?:b/)?([^\s\t\n]+)", re.MULTILINE)
    for match in pattern.finditer(diff_text):
        target = match.group(1).strip()
        if target and target != "/dev/null":
            norm = target.replace("\\", "/")
            if norm not in paths:
                paths.append(norm)
    return paths
