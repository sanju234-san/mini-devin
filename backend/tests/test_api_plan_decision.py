"""
Tests for REST Plan Decision and Approval Endpoints.
"""

from __future__ import annotations

import asyncio
from uuid import uuid4

import pytest
from fastapi.testclient import TestClient

from app.api.deps import get_run_store
from app.api.run_store import InMemoryRunStore
from app.main import create_app
from app.models.run import IssueIn, RunStatus


def test_get_plan_unknown_run():
    app = create_app()
    with TestClient(app) as client:
        fake_id = uuid4()
        resp = client.get(f"/runs/{fake_id}/plan")
        assert resp.status_code == 404


def test_decide_plan_approve():
    app = create_app()
    store: InMemoryRunStore = app.state.run_store

    issue = IssueIn(
        repo="pallets/flask",
        issue_number=1,
        title="test issue",
        body="test issue body",
    )
    run = asyncio.run(store.create_run(issue))

    with TestClient(app) as client:
        resp = client.post(
            f"/runs/{run.id}/plan/decision",
            json={"decision": "approve", "reason": "Looks good"},
        )
        assert resp.status_code == 200
        data = resp.json()
        assert data["decision"] == "approve"
        assert data["status"] == "resuming"

        updated = asyncio.run(store.get_run(run.id))
        assert updated.status == RunStatus.running


def test_decide_plan_reject():
    app = create_app()
    store: InMemoryRunStore = app.state.run_store

    issue = IssueIn(
        repo="pallets/flask",
        issue_number=2,
        title="test reject",
        body="test reject body",
    )
    run = asyncio.run(store.create_run(issue))

    with TestClient(app) as client:
        resp = client.post(f"/runs/{run.id}/reject")
        assert resp.status_code == 200
        data = resp.json()
        assert data["decision"] == "reject"

        updated = asyncio.run(store.get_run(run.id))
        assert updated.status == RunStatus.failed


def test_decide_plan_edit_requires_edited_plan():
    app = create_app()
    store: InMemoryRunStore = app.state.run_store

    issue = IssueIn(
        repo="pallets/flask",
        issue_number=3,
        title="test edit",
        body="test edit body",
    )
    run = asyncio.run(store.create_run(issue))

    with TestClient(app) as client:
        resp = client.post(
            f"/runs/{run.id}/plan/decision",
            json={"decision": "edit"},
        )
        assert resp.status_code == 422


def test_decide_plan_edit_success():
    app = create_app()
    store: InMemoryRunStore = app.state.run_store

    issue = IssueIn(
        repo="pallets/flask",
        issue_number=4,
        title="test edit ok",
        body="test edit ok body",
    )
    run = asyncio.run(store.create_run(issue))

    with TestClient(app) as client:
        resp = client.post(
            f"/runs/{run.id}/plan/decision",
            json={
                "decision": "edit",
                "edited_plan": {"steps": ["custom step"]},
                "reason": "Corrected file paths",
            },
        )
        assert resp.status_code == 200
        assert resp.json()["decision"] == "edit"
