"""
Supervisor StateGraph wiring.

Routes execution across the eight specialised sub-agents:
Triage -> Retrieval -> Planner -> (human approval) -> Coder -> Test-Runner
-> Debugger (on failure, bounded retry loop) -> Reviewer -> PR.
"""
