'use client';

import React, { useState } from 'react';
import { AppShell } from '../components/layout/AppShell';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { EmptyStatePanel } from '../components/dashboard/EmptyStatePanel';
import { RestClientStateSection } from '../components/rest/RestClientStateSection';
import { ConnectionMonitorSection } from '../components/websocket/ConnectionMonitorSection';
import { CapabilitiesGrid } from '../components/dashboard/CapabilitiesGrid';
import { FooterStrip } from '../components/dashboard/FooterStrip';
import { LiveConsole } from '../components/LiveConsole';
import { PlanApproval } from '../components/PlanApproval';
import { TerminalIcon, GridIcon, ChecklistIcon } from '../components/icons/Icons';

type NavView = 'dashboard' | 'live-console' | 'plan-approval';

export default function DashboardPage() {
  const [activeNav, setActiveNav] = useState<NavView>('dashboard');

  return (
    <AppShell
      activeNav={activeNav}
      onSelectNav={(id) => {
        if (id === 'dashboard' || id === 'live-console' || id === 'plan-approval') {
          setActiveNav(id as NavView);
        }
      }}
    >
      {/* Top View Toggle Banner for immediate visibility and testing */}
      <div className="bg-surface-container-low/70 border-b border-outline-variant/20 px-space-md py-2 flex items-center justify-between">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs text-on-surface-variant font-mono">View:</span>
          <div className="inline-flex rounded-lg bg-surface-container-high p-0.5 border border-outline-variant/30 flex-wrap">
            <button
              type="button"
              onClick={() => setActiveNav('dashboard')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                activeNav === 'dashboard'
                  ? 'bg-primary-container text-on-primary-container font-semibold shadow-xs'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <GridIcon className="w-3.5 h-3.5" />
              <span>Dashboard (Tasks 1–3)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveNav('live-console')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                activeNav === 'live-console'
                  ? 'bg-primary-container text-on-primary-container font-semibold shadow-xs'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <TerminalIcon className="w-3.5 h-3.5" />
              <span>Live Console (Task 4)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveNav('plan-approval')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                activeNav === 'plan-approval'
                  ? 'bg-primary-container text-on-primary-container font-semibold shadow-xs'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <ChecklistIcon className="w-3.5 h-3.5" />
              <span>Plan Approval (Task 5)</span>
            </button>
          </div>
        </div>
        <span className="text-[11px] font-mono text-outline hidden sm:inline">
          Nikunj Nanda · Frontend/UI Scope
        </span>
      </div>

      {activeNav === 'plan-approval' ? (
        <div className="p-space-md sm:p-space-lg max-w-[1600px] mx-auto w-full">
          <PlanApproval />
        </div>
      ) : activeNav === 'live-console' ? (
        <div className="p-space-md sm:p-space-lg max-w-[1600px] mx-auto w-full">
          <LiveConsole />
        </div>
      ) : (
        <div className="flex flex-col w-full">
          <div className="p-space-lg md:p-space-xl flex flex-col gap-space-xl max-w-7xl mx-auto w-full">
            {/* 1. Dashboard Header */}
            <DashboardHeader />

            {/* 2. Initial / Empty State Banner with Pipeline Visualization */}
            <EmptyStatePanel />

            {/* 3. REST Client State Orchestration (Task 2) */}
            <RestClientStateSection />

            {/* 4. WebSocket Client & Connection Monitor (Task 3) */}
            <ConnectionMonitorSection />

            {/* 5. Platform Capabilities & Subsystems Grid */}
            <CapabilitiesGrid />

            {/* 6. Architecture Footer Note */}
            <FooterStrip />
          </div>
        </div>
      )}
    </AppShell>
  );
}
