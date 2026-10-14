/**
 * WebSocket Types for Mini-Devin Live Agent Telemetry
 *
 * Types strictly reflect the architectural boundary between:
 * - Tamanna (Backend WebSocket transport & lifecycle)
 * - Sanjeevni (Agent event envelope & step schemas)
 * - Nikunj (Frontend consumption hook & Task 4 Live Console)
 */

export type SocketConnectionState =
  | 'CONNECTING'
  | 'CONNECTED'
  | 'RECONNECTING'
  | 'DISCONNECTED';

// Native WebSocket readyState mappings:
// 0 = CONNECTING, 1 = OPEN, 2 = CLOSING, 3 = CLOSED
export type SocketReadyState = 0 | 1 | 2 | 3;

/**
 * CONTRACT GAP — PENDING SANJEEVNI SPECIFICATION
 * Event envelope schema is not yet defined in docs/api-contract.md.
 * Below is a non-speculative base envelope representing parsed JSON events.
 */
export interface AgentEventEnvelope {
  id?: string;
  eventType?: string;
  runId?: string;
  agent?: string;
  step?: string | number;
  tool?: string;
  model?: string;
  timestamp?: string;
  payload?: unknown;
  raw?: unknown;
}

export interface SocketTelemetry {
  connectionState: SocketConnectionState;
  readyState: SocketReadyState;
  uptimeSeconds: number;
  ingestedEventCount: number;
  parseErrorCount: number;
  lastMessageTimestamp: string | null;
  reconnectAttempt: number;
  targetUri: string;
}

export interface UseAgentRunSocketOptions {
  autoConnect?: boolean;
  bufferCap?: number;
  maxReconnectAttempts?: number;
  onEvent?: (event: AgentEventEnvelope) => void;
  onError?: (error: Event | Error) => void;
}

/**
 * Return signature of useAgentRunSocket().
 * Directly consumed by Task 4's LiveConsole.
 */
export interface UseAgentRunSocketReturn {
  connectionState: SocketConnectionState;
  readyState: SocketReadyState;
  events: AgentEventEnvelope[];
  latestEvent: AgentEventEnvelope | null;
  telemetry: SocketTelemetry;
  connect: () => void;
  disconnect: () => void;
  clearBuffer: () => void;
  error: Error | null;
}
