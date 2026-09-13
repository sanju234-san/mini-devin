"""
Triage Agent's lightweight classifier.

Fine-tuned DistilBERT model that classifies an incoming GitHub issue as
bug fix / small feature / test-writing / out-of-scope -- a bounded
4-class task that doesn't need a full LLM call. Training script and
inference wrapper live here.
"""


def classify(issue_text: str) -> str:
    """Return one of: 'bug_fix', 'small_feature', 'test_writing', 'out_of_scope'."""
    raise NotImplementedError
