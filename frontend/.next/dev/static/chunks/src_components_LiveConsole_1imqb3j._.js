(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/LiveConsole/ActiveAgentPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActiveAgentPanel",
    ()=>ActiveAgentPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const ActiveAgentPanel = ({ latestEvent })=>{
    const agentName = latestEvent?.agent || 'None (Idle)';
    const currentStep = latestEvent?.step ? String(latestEvent.step) : 'n/a';
    const description = latestEvent?.payload?.message || latestEvent?.payload?.details || (latestEvent ? `Executing ${latestEvent.eventType || 'event'}` : 'Awaiting agent activity');
    const activeModel = latestEvent?.model || 'n/a';
    const activeTool = latestEvent?.tool || 'None';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl bg-surface-container-low border border-outline-variant/30 p-space-md flex flex-col justify-between shadow-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-space-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-2 h-2 rounded-full bg-primary animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LiveConsole/ActiveAgentPanel.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-mono text-[11px] uppercase tracking-wider font-semibold text-on-surface",
                                    children: "Active Agent"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LiveConsole/ActiveAgentPanel.tsx",
                                    lineNumber: 27,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LiveConsole/ActiveAgentPanel.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-mono text-[10px] text-outline",
                            children: latestEvent ? 'Live Frame' : 'Standby'
                        }, void 0, false, {
                            fileName: "[project]/src/components/LiveConsole/ActiveAgentPanel.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/LiveConsole/ActiveAgentPanel.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-3 rounded-lg bg-surface-container border border-outline-variant/20 flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-9 h-9 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-bold font-mono text-sm",
                            children: agentName.charAt(0).toUpperCase()
                        }, void 0, false, {
                            fileName: "[project]/src/components/LiveConsole/ActiveAgentPanel.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-sm text-on-surface truncate",
                                            children: agentName
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LiveConsole/ActiveAgentPanel.tsx",
                                            lineNumber: 43,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "px-1 py-0.2 rounded font-mono text-[9px] uppercase bg-surface-container-high text-outline",
                                            children: "Agent"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LiveConsole/ActiveAgentPanel.tsx",
                                            lineNumber: 46,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/LiveConsole/ActiveAgentPanel.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-mono text-[10px] text-outline truncate",
                                    children: [
                                        "Step: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-on-surface-variant font-medium",
                                            children: currentStep
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LiveConsole/ActiveAgentPanel.tsx",
                                            lineNumber: 51,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/LiveConsole/ActiveAgentPanel.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LiveConsole/ActiveAgentPanel.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/LiveConsole/ActiveAgentPanel.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-2.5 rounded bg-surface-container-lowest border border-outline-variant/20 text-xs text-on-surface-variant leading-relaxed",
                    children: description
                }, void 0, false, {
                    fileName: "[project]/src/components/LiveConsole/ActiveAgentPanel.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-2 pt-1 font-mono text-[11px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2 rounded bg-surface-container border border-outline-variant/15 flex flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] text-outline uppercase tracking-wider",
                                    children: "Active Model"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LiveConsole/ActiveAgentPanel.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold text-primary truncate mt-0.5",
                                    children: activeModel
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LiveConsole/ActiveAgentPanel.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LiveConsole/ActiveAgentPanel.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2 rounded bg-surface-container border border-outline-variant/15 flex flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] text-outline uppercase tracking-wider",
                                    children: "Active Tool"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LiveConsole/ActiveAgentPanel.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold text-tertiary truncate mt-0.5",
                                    children: activeTool
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LiveConsole/ActiveAgentPanel.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LiveConsole/ActiveAgentPanel.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2 rounded bg-surface-container border border-outline-variant/15 flex flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] text-outline uppercase tracking-wider",
                                    children: "Prompt Tokens"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LiveConsole/ActiveAgentPanel.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-outline-variant mt-0.5",
                                    children: "n/a"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LiveConsole/ActiveAgentPanel.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LiveConsole/ActiveAgentPanel.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2 rounded bg-surface-container border border-outline-variant/15 flex flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] text-outline uppercase tracking-wider",
                                    children: "Completion"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LiveConsole/ActiveAgentPanel.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-outline-variant mt-0.5",
                                    children: "n/a"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LiveConsole/ActiveAgentPanel.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LiveConsole/ActiveAgentPanel.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/LiveConsole/ActiveAgentPanel.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/LiveConsole/ActiveAgentPanel.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/LiveConsole/ActiveAgentPanel.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ActiveAgentPanel;
var _c;
__turbopack_context__.k.register(_c, "ActiveAgentPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/LiveConsole/ConsoleControls.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConsoleControls",
    ()=>ConsoleControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const ConsoleControls = ({ connectionState, activeFilter, onFilterChange, counts, autoScroll, onToggleAutoScroll, isPaused, onTogglePause, pausedNewCount, onClear, totalEvents })=>{
    const isConnected = connectionState === 'CONNECTED';
    const isConnecting = connectionState === 'CONNECTING' || connectionState === 'RECONNECTING';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-space-sm rounded-xl bg-surface-container-low border border-outline-variant/30 text-xs",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 flex-wrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex items-center gap-1.5 px-2.5 py-1 rounded-full font-mono text-[11px] font-semibold border ${isConnected ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' : isConnecting ? 'bg-amber-500/10 text-amber-400 border-amber-500/30' : 'bg-surface-container-high text-outline border-outline-variant/30'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative flex h-2 w-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `inline-flex rounded-full h-2 w-2 ${isConnected ? 'bg-emerald-400 animate-pulse' : isConnecting ? 'bg-amber-400 animate-ping' : 'bg-outline'}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LiveConsole/ConsoleControls.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/LiveConsole/ConsoleControls.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: isConnected ? 'Streaming Live' : connectionState
                            }, void 0, false, {
                                fileName: "[project]/src/components/LiveConsole/ConsoleControls.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/LiveConsole/ConsoleControls.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-flex p-0.5 rounded-lg bg-surface-container border border-outline-variant/20 font-mono text-xs",
                        children: [
                            {
                                id: 'all',
                                label: 'All',
                                count: counts.all
                            },
                            {
                                id: 'tools',
                                label: 'Tools',
                                count: counts.tools
                            },
                            {
                                id: 'thoughts',
                                label: 'Thoughts',
                                count: counts.thoughts
                            },
                            {
                                id: 'errors',
                                label: 'Errors',
                                count: counts.errors
                            }
                        ].map((tab)=>{
                            const isActive = activeFilter === tab.id;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onFilterChange(tab.id),
                                className: `px-2.5 py-1 rounded transition-all flex items-center gap-1 ${isActive ? 'bg-primary-container text-on-primary-container font-semibold shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: tab.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LiveConsole/ConsoleControls.tsx",
                                        lineNumber: 85,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-[10px] px-1 py-0.2 rounded ${isActive ? 'bg-on-primary-container/20 text-on-primary-container' : 'bg-surface-container-high text-outline'}`,
                                        children: tab.count
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LiveConsole/ConsoleControls.tsx",
                                        lineNumber: 86,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, tab.id, true, {
                                fileName: "[project]/src/components/LiveConsole/ConsoleControls.tsx",
                                lineNumber: 75,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/LiveConsole/ConsoleControls.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/LiveConsole/ConsoleControls.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 font-mono text-xs flex-wrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onToggleAutoScroll,
                        className: `flex items-center gap-1 px-2.5 py-1 rounded border text-[11px] transition-colors ${autoScroll ? 'bg-primary/10 border-primary/30 text-primary' : 'bg-surface-container-high border-outline-variant/30 text-outline'}`,
                        title: "Auto-scroll to latest incoming events",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-3 h-3",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                    points: "6 9 12 15 18 9"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LiveConsole/ConsoleControls.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/LiveConsole/ConsoleControls.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Auto-scroll: ",
                                    autoScroll ? 'ON' : 'OFF'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/LiveConsole/ConsoleControls.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/LiveConsole/ConsoleControls.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onTogglePause,
                        className: `flex items-center gap-1.5 px-2.5 py-1 rounded border text-[11px] transition-colors ${isPaused ? 'bg-amber-500/20 border-amber-500/40 text-amber-300 font-semibold' : 'bg-surface-container-high hover:bg-surface-container-highest border-outline-variant/30 text-outline hover:text-on-surface'}`,
                        title: isPaused ? 'Resume live event stream' : 'Pause stream (snapshot view)',
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-3 h-3",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                children: isPaused ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                    points: "5 3 19 12 5 21 5 3"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LiveConsole/ConsoleControls.tsx",
                                    lineNumber: 133,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "6",
                                            y: "4",
                                            width: "4",
                                            height: "16"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LiveConsole/ConsoleControls.tsx",
                                            lineNumber: 136,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "14",
                                            y: "4",
                                            width: "4",
                                            height: "16"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LiveConsole/ConsoleControls.tsx",
                                            lineNumber: 137,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/LiveConsole/ConsoleControls.tsx",
                                    lineNumber: 135,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/LiveConsole/ConsoleControls.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: isPaused ? 'Resume Stream' : 'Pause Stream'
                            }, void 0, false, {
                                fileName: "[project]/src/components/LiveConsole/ConsoleControls.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            isPaused && pausedNewCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-1.5 py-0.2 rounded-full bg-amber-400 text-surface-container-lowest font-bold text-[10px]",
                                children: [
                                    "+",
                                    pausedNewCount
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/LiveConsole/ConsoleControls.tsx",
                                lineNumber: 143,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/LiveConsole/ConsoleControls.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onClear,
                        disabled: totalEvents === 0,
                        className: "px-2.5 py-1 rounded bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant/30 text-outline hover:text-on-surface text-[11px] disabled:opacity-40 transition-colors",
                        title: "Clear local in-memory event buffer",
                        children: "Clear"
                    }, void 0, false, {
                        fileName: "[project]/src/components/LiveConsole/ConsoleControls.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/LiveConsole/ConsoleControls.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/LiveConsole/ConsoleControls.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ConsoleControls;
var _c;
__turbopack_context__.k.register(_c, "ConsoleControls");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/LiveConsole/EventCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EventCard",
    ()=>EventCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const EventCard = ({ event, isSelected, onSelect })=>{
    const agentName = event.agent || 'SYSTEM';
    const eventTitle = event.payload?.message || event.eventType || 'Agent step execution';
    const timestampStr = event.timestamp ? new Date(event.timestamp).toLocaleTimeString() : 'n/a';
    const eventId = event.id || 'evt_unspecified';
    // Agent badge color scheme
    const agentLower = agentName.toLowerCase();
    let agentBadgeStyle = 'bg-primary/10 text-primary border-primary/30';
    if (agentLower.includes('plan')) {
        agentBadgeStyle = 'bg-secondary/15 text-secondary border-secondary/30';
    } else if (agentLower.includes('coder') || agentLower.includes('code')) {
        agentBadgeStyle = 'bg-teal-500/15 text-teal-400 border-teal-500/30';
    } else if (agentLower.includes('retriev')) {
        agentBadgeStyle = 'bg-tertiary/15 text-tertiary border-tertiary/30';
    } else if (agentLower.includes('test')) {
        agentBadgeStyle = 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30';
    }
    // Derive status badge
    const typeLower = (event.eventType || '').toLowerCase();
    let statusBadge = 'RUNNING';
    let statusColor = 'text-amber-400 bg-amber-500/10 border-amber-500/30';
    if (typeLower.includes('finish') || typeLower.includes('complete')) {
        statusBadge = 'COMPLETED';
        statusColor = 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';
    } else if (typeLower.includes('error') || typeLower.includes('fail')) {
        statusBadge = 'FAILED';
        statusColor = 'text-red-400 bg-red-500/10 border-red-500/30';
    }
    // Snippet description
    const payloadDetails = event.payload?.details || event.payload?.query || event.payload?.tokenDelta || event.payload?.targetFile;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "button",
        tabIndex: 0,
        "aria-selected": isSelected,
        onClick: ()=>onSelect(event),
        onKeyDown: (e)=>{
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelect(event);
            }
        },
        className: `rounded-lg p-space-md border transition-all text-left cursor-pointer flex flex-col gap-2 ${isSelected ? 'bg-surface-container-high border-primary ring-1 ring-primary/40 shadow-md' : 'bg-surface-container/70 border-outline-variant/30 hover:bg-surface-container-high hover:border-outline-variant/50'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between gap-2 flex-wrap text-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 flex-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-[11px] text-outline",
                                children: timestampStr
                            }, void 0, false, {
                                fileName: "[project]/src/components/LiveConsole/EventCard.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `px-1.5 py-0.5 rounded font-mono text-[10px] uppercase font-semibold border ${agentBadgeStyle}`,
                                children: [
                                    "[",
                                    agentName.toUpperCase(),
                                    "]"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/LiveConsole/EventCard.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-on-surface text-xs",
                                children: eventTitle
                            }, void 0, false, {
                                fileName: "[project]/src/components/LiveConsole/EventCard.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/LiveConsole/EventCard.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `px-2 py-0.5 rounded font-mono text-[10px] uppercase tracking-wider font-semibold border ${statusColor}`,
                        children: statusBadge
                    }, void 0, false, {
                        fileName: "[project]/src/components/LiveConsole/EventCard.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/LiveConsole/EventCard.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            payloadDetails && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-2 rounded bg-surface-container-lowest border border-outline-variant/20 font-mono text-[11px] text-on-surface-variant overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                    children: payloadDetails
                }, void 0, false, {
                    fileName: "[project]/src/components/LiveConsole/EventCard.tsx",
                    lineNumber: 102,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/LiveConsole/EventCard.tsx",
                lineNumber: 101,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-2 font-mono text-[10px] text-outline pt-1 border-t border-outline-variant/15 flex-wrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            event.model ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1 text-on-surface-variant",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Model:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LiveConsole/EventCard.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-primary font-medium",
                                        children: event.model
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LiveConsole/EventCard.tsx",
                                        lineNumber: 112,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/LiveConsole/EventCard.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Model: n/a"
                            }, void 0, false, {
                                fileName: "[project]/src/components/LiveConsole/EventCard.tsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            event.tool ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1 text-on-surface-variant",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Tool:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LiveConsole/EventCard.tsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-tertiary font-medium",
                                        children: event.tool
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LiveConsole/EventCard.tsx",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/LiveConsole/EventCard.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Tool: None"
                            }, void 0, false, {
                                fileName: "[project]/src/components/LiveConsole/EventCard.tsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/LiveConsole/EventCard.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-outline-variant text-[10px]",
                        children: [
                            "# id: ",
                            eventId
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/LiveConsole/EventCard.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/LiveConsole/EventCard.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/LiveConsole/EventCard.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = EventCard;
var _c;
__turbopack_context__.k.register(_c, "EventCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/LiveConsole/EventEnvelopeInspector.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EventEnvelopeInspector",
    ()=>EventEnvelopeInspector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const EventEnvelopeInspector = ({ selectedEvent })=>{
    _s();
    const [showRawJson, setShowRawJson] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (!selectedEvent) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl bg-surface-container-low border border-outline-variant/30 p-space-md text-xs font-mono text-outline text-center shadow-sm",
            children: "Select an event from the stream to inspect its envelope."
        }, void 0, false, {
            fileName: "[project]/src/components/LiveConsole/EventEnvelopeInspector.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    const rawJsonString = JSON.stringify(selectedEvent.raw || selectedEvent, null, 2);
    const isTruncated = rawJsonString.length > 5000;
    const displayJson = isTruncated ? rawJsonString.substring(0, 5000) + '\n... [Truncated for display performance]' : rawJsonString;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl bg-surface-container-low border border-outline-variant/30 p-space-md flex flex-col gap-space-sm shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between border-b border-outline-variant/20 pb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-3.5 h-3.5 text-primary",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                        points: "16 18 22 12 16 6"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LiveConsole/EventEnvelopeInspector.tsx",
                                        lineNumber: 33,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                        points: "8 6 2 12 8 18"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LiveConsole/EventEnvelopeInspector.tsx",
                                        lineNumber: 34,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/LiveConsole/EventEnvelopeInspector.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-[11px] uppercase tracking-wider font-semibold text-on-surface",
                                children: "Event Envelope Inspector"
                            }, void 0, false, {
                                fileName: "[project]/src/components/LiveConsole/EventEnvelopeInspector.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/LiveConsole/EventEnvelopeInspector.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-[10px] text-primary truncate max-w-[140px]",
                        children: selectedEvent.id || 'evt_unspecified'
                    }, void 0, false, {
                        fileName: "[project]/src/components/LiveConsole/EventEnvelopeInspector.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/LiveConsole/EventEnvelopeInspector.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-x-2 gap-y-1 text-[11px] font-mono py-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-outline",
                        children: "Timestamp:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/LiveConsole/EventEnvelopeInspector.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-on-surface truncate",
                        children: selectedEvent.timestamp ? new Date(selectedEvent.timestamp).toLocaleTimeString() : 'n/a'
                    }, void 0, false, {
                        fileName: "[project]/src/components/LiveConsole/EventEnvelopeInspector.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-outline",
                        children: "Agent:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/LiveConsole/EventEnvelopeInspector.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-on-surface truncate font-semibold",
                        children: selectedEvent.agent || 'n/a'
                    }, void 0, false, {
                        fileName: "[project]/src/components/LiveConsole/EventEnvelopeInspector.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-outline",
                        children: "Step:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/LiveConsole/EventEnvelopeInspector.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-on-surface truncate",
                        children: selectedEvent.step ? String(selectedEvent.step) : 'n/a'
                    }, void 0, false, {
                        fileName: "[project]/src/components/LiveConsole/EventEnvelopeInspector.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-outline",
                        children: "Event Type:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/LiveConsole/EventEnvelopeInspector.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-on-surface truncate",
                        children: selectedEvent.eventType || 'n/a'
                    }, void 0, false, {
                        fileName: "[project]/src/components/LiveConsole/EventEnvelopeInspector.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-outline",
                        children: "Tool:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/LiveConsole/EventEnvelopeInspector.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-tertiary truncate",
                        children: selectedEvent.tool || 'None'
                    }, void 0, false, {
                        fileName: "[project]/src/components/LiveConsole/EventEnvelopeInspector.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-outline",
                        children: "Model:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/LiveConsole/EventEnvelopeInspector.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-primary truncate",
                        children: selectedEvent.model || 'n/a'
                    }, void 0, false, {
                        fileName: "[project]/src/components/LiveConsole/EventEnvelopeInspector.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/LiveConsole/EventEnvelopeInspector.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pt-2 border-t border-outline-variant/20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setShowRawJson((prev)=>!prev),
                        className: "flex items-center justify-between w-full py-1 text-xs font-mono text-outline hover:text-on-surface transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "<>"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LiveConsole/EventEnvelopeInspector.tsx",
                                        lineNumber: 86,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "View Raw JSON Envelope"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LiveConsole/EventEnvelopeInspector.tsx",
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/LiveConsole/EventEnvelopeInspector.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px]",
                                children: showRawJson ? '▲ Hide' : '▼ Expand'
                            }, void 0, false, {
                                fileName: "[project]/src/components/LiveConsole/EventEnvelopeInspector.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/LiveConsole/EventEnvelopeInspector.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    showRawJson && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                        className: "mt-2 p-2.5 rounded bg-surface-container-lowest border border-outline-variant/20 font-mono text-[10px] text-on-surface-variant overflow-x-auto max-h-48 whitespace-pre-wrap",
                        children: displayJson
                    }, void 0, false, {
                        fileName: "[project]/src/components/LiveConsole/EventEnvelopeInspector.tsx",
                        lineNumber: 93,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/LiveConsole/EventEnvelopeInspector.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-2 rounded bg-surface-container/60 border border-outline-variant/15 text-[10px] font-mono text-outline leading-tight",
                children: "Client Verification: Frontend-only rendering. Consumes WebSocket events from Tamanna's backend and Sanjeevni's LangGraph agents. Zero teammate backend mutations required."
            }, void 0, false, {
                fileName: "[project]/src/components/LiveConsole/EventEnvelopeInspector.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/LiveConsole/EventEnvelopeInspector.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(EventEnvelopeInspector, "pwEnW6lz+qIFoDl3ONj24Wm6Vz8=");
_c = EventEnvelopeInspector;
var _c;
__turbopack_context__.k.register(_c, "EventEnvelopeInspector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/LiveConsole/EventStream.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EventStream",
    ()=>EventStream
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LiveConsole$2f$EventCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LiveConsole/EventCard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const EventStream = ({ events, connectionState, selectedEventId, onSelectEvent, autoScroll, parseErrorCount, bufferCap, runId, error, targetUri })=>{
    _s();
    const streamBottomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EventStream.useEffect": ()=>{
            if (autoScroll && streamBottomRef.current) {
                streamBottomRef.current.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    }["EventStream.useEffect"], [
        events,
        autoScroll
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl bg-surface-container-low border border-outline-variant/30 flex flex-col justify-between overflow-hidden shadow-sm h-[680px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 p-space-md overflow-y-auto flex flex-col gap-space-sm",
                role: "log",
                "aria-label": "Agent Event Stream",
                children: [
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 rounded-lg bg-red-950/30 border border-red-500/30 text-xs font-mono text-red-300 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-4 h-4 text-red-400 flex-shrink-0",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "12",
                                        cy: "12",
                                        r: "10"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LiveConsole/EventStream.tsx",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "12",
                                        y1: "8",
                                        x2: "12",
                                        y2: "12"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LiveConsole/EventStream.tsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "12",
                                        y1: "16",
                                        x2: "12.01",
                                        y2: "16"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LiveConsole/EventStream.tsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/LiveConsole/EventStream.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "truncate",
                                children: error.message
                            }, void 0, false, {
                                fileName: "[project]/src/components/LiveConsole/EventStream.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/LiveConsole/EventStream.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    events.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-full flex flex-col items-center justify-center text-center p-8 text-outline",
                        children: connectionState === 'CONNECTING' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-6 h-6 rounded-full border-2 border-primary border-t-transparent animate-spin mb-3"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LiveConsole/EventStream.tsx",
                                    lineNumber: 59,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold text-sm text-on-surface",
                                    children: "Connecting to WebSocket Stream..."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LiveConsole/EventStream.tsx",
                                    lineNumber: 60,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-mono text-xs text-outline mt-1 truncate max-w-sm",
                                    children: targetUri
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LiveConsole/EventStream.tsx",
                                    lineNumber: 63,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LiveConsole/EventStream.tsx",
                            lineNumber: 58,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)) : connectionState === 'RECONNECTING' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-6 h-6 rounded-full border-2 border-amber-400 border-t-transparent animate-spin mb-3"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LiveConsole/EventStream.tsx",
                                    lineNumber: 69,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold text-sm text-amber-300",
                                    children: "Reconnecting to Stream (Exponential Backoff)..."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LiveConsole/EventStream.tsx",
                                    lineNumber: 70,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-mono text-xs text-outline mt-1",
                                    children: "Awaiting socket reconnection"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LiveConsole/EventStream.tsx",
                                    lineNumber: 73,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LiveConsole/EventStream.tsx",
                            lineNumber: 68,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-10 h-10 text-outline/40 mb-3",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "2",
                                            y: "3",
                                            width: "20",
                                            height: "14",
                                            rx: "2",
                                            ry: "2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LiveConsole/EventStream.tsx",
                                            lineNumber: 80,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "8",
                                            y1: "21",
                                            x2: "16",
                                            y2: "21"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LiveConsole/EventStream.tsx",
                                            lineNumber: 81,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "12",
                                            y1: "17",
                                            x2: "12",
                                            y2: "21"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LiveConsole/EventStream.tsx",
                                            lineNumber: 82,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/LiveConsole/EventStream.tsx",
                                    lineNumber: 79,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold text-sm text-on-surface",
                                    children: "No WebSocket Events Recorded Yet"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LiveConsole/EventStream.tsx",
                                    lineNumber: 84,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-on-surface-variant max-w-sm mt-1 leading-relaxed",
                                    children: "Start an autonomous agent run to ingest real-time step execution frames, tool calls, and model reasoning traces."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LiveConsole/EventStream.tsx",
                                    lineNumber: 87,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LiveConsole/EventStream.tsx",
                            lineNumber: 78,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/LiveConsole/EventStream.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : events.map((evt, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LiveConsole$2f$EventCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventCard"], {
                            event: evt,
                            isSelected: selectedEventId === (evt.id || String(idx)),
                            onSelect: onSelectEvent
                        }, evt.id || idx, false, {
                            fileName: "[project]/src/components/LiveConsole/EventStream.tsx",
                            lineNumber: 95,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: streamBottomRef
                    }, void 0, false, {
                        fileName: "[project]/src/components/LiveConsole/EventStream.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/LiveConsole/EventStream.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-space-md py-2 bg-surface-container border-t border-outline-variant/20 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-outline",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 truncate",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-3.5 h-3.5 text-primary flex-shrink-0",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                        points: "4 17 10 11 4 5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LiveConsole/EventStream.tsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "12",
                                        y1: "19",
                                        x2: "20",
                                        y2: "19"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LiveConsole/EventStream.tsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/LiveConsole/EventStream.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "truncate",
                                children: [
                                    "Raw frame receiver connected: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        className: "text-on-surface",
                                        children: [
                                            'useAgentRunSocket("',
                                            runId || 'default',
                                            '")'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/LiveConsole/EventStream.tsx",
                                        lineNumber: 115,
                                        columnNumber: 43
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/LiveConsole/EventStream.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/LiveConsole/EventStream.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 flex-shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `w-1.5 h-1.5 rounded-full ${parseErrorCount > 0 ? 'bg-amber-400' : 'bg-emerald-400'}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LiveConsole/EventStream.tsx",
                                        lineNumber: 121,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            parseErrorCount,
                                            " dropped frames"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/LiveConsole/EventStream.tsx",
                                        lineNumber: 126,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/LiveConsole/EventStream.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-outline-variant",
                                children: "|"
                            }, void 0, false, {
                                fileName: "[project]/src/components/LiveConsole/EventStream.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Buffer: ",
                                    events.length,
                                    "/",
                                    bufferCap
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/LiveConsole/EventStream.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/LiveConsole/EventStream.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/LiveConsole/EventStream.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/LiveConsole/EventStream.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(EventStream, "6L2Wquq1d2PijZSFDXNcfIl3LYA=");
_c = EventStream;
var _c;
__turbopack_context__.k.register(_c, "EventStream");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/LiveConsole/LiveConsole.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LiveConsole",
    ()=>LiveConsole
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAgentRunSocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useAgentRunSocket.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LiveConsole$2f$liveConsoleUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LiveConsole/liveConsoleUtils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LiveConsole$2f$WorkflowTimeline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LiveConsole/WorkflowTimeline.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LiveConsole$2f$ConsoleControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LiveConsole/ConsoleControls.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LiveConsole$2f$EventStream$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LiveConsole/EventStream.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LiveConsole$2f$ActiveAgentPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LiveConsole/ActiveAgentPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LiveConsole$2f$ToolActivityPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LiveConsole/ToolActivityPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LiveConsole$2f$EventEnvelopeInspector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LiveConsole/EventEnvelopeInspector.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
const LiveConsole = ({ runId = 'sample-run' })=>{
    _s();
    const [useStaticPreview, setUseStaticPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeFilter, setActiveFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [autoScroll, setAutoScroll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isPaused, setIsPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [frozenSnapshot, setFrozenSnapshot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedEventId, setSelectedEventId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Consume Task 3 WebSocket Client hook
    const { connectionState, events: liveEvents, latestEvent: liveLatestEvent, telemetry, clearBuffer: clearSocketBuffer, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAgentRunSocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAgentRunSocket"])(runId, {
        autoConnect: true,
        bufferCap: 500
    });
    // Events source: either live hook events or quarantined static preview events
    const rawEvents = useStaticPreview ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LiveConsole$2f$liveConsoleUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATIC_PREVIEW_EVENTS"] : liveEvents;
    // Handle Pause / Snapshot Freeze
    const handleTogglePause = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LiveConsole.useCallback[handleTogglePause]": ()=>{
            setIsPaused({
                "LiveConsole.useCallback[handleTogglePause]": (prev)=>{
                    if (!prev) {
                        // Pausing: freeze current list
                        setFrozenSnapshot([
                            ...rawEvents
                        ]);
                        return true;
                    } else {
                        // Resuming: unfreeze
                        setFrozenSnapshot(null);
                        return false;
                    }
                }
            }["LiveConsole.useCallback[handleTogglePause]"]);
        }
    }["LiveConsole.useCallback[handleTogglePause]"], [
        rawEvents
    ]);
    // Displayed events
    const displayedEvents = isPaused && frozenSnapshot ? frozenSnapshot : rawEvents;
    const pausedNewCount = isPaused && frozenSnapshot ? Math.max(0, rawEvents.length - frozenSnapshot.length) : 0;
    // Filtered events
    const filteredEvents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LiveConsole.useMemo[filteredEvents]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LiveConsole$2f$liveConsoleUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterEvents"])(displayedEvents, activeFilter)
    }["LiveConsole.useMemo[filteredEvents]"], [
        displayedEvents,
        activeFilter
    ]);
    // Filter counts computed honestly from current stream
    const counts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LiveConsole.useMemo[counts]": ()=>{
            let tools = 0;
            let thoughts = 0;
            let errors = 0;
            for (const evt of displayedEvents){
                const cat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LiveConsole$2f$liveConsoleUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categorizeEvent"])(evt);
                if (cat === 'tools') tools++;
                if (cat === 'thoughts') thoughts++;
                if (cat === 'errors') errors++;
            }
            return {
                all: displayedEvents.length,
                tools,
                thoughts,
                errors
            };
        }
    }["LiveConsole.useMemo[counts]"], [
        displayedEvents
    ]);
    // Derived 8-stage pipeline statuses
    const pipelineStages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LiveConsole.useMemo[pipelineStages]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LiveConsole$2f$liveConsoleUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["derivePipelineStages"])(rawEvents)
    }["LiveConsole.useMemo[pipelineStages]"], [
        rawEvents
    ]);
    // Active / Latest event
    const effectiveLatestEvent = useStaticPreview ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LiveConsole$2f$liveConsoleUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATIC_PREVIEW_EVENTS"][__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LiveConsole$2f$liveConsoleUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATIC_PREVIEW_EVENTS"].length - 1] : liveLatestEvent;
    // Selected event for inspector
    const selectedEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LiveConsole.useMemo[selectedEvent]": ()=>{
            if (!selectedEventId) return effectiveLatestEvent;
            return rawEvents.find({
                "LiveConsole.useMemo[selectedEvent]": (e, idx)=>(e.id || String(idx)) === selectedEventId
            }["LiveConsole.useMemo[selectedEvent]"]) || effectiveLatestEvent;
        }
    }["LiveConsole.useMemo[selectedEvent]"], [
        selectedEventId,
        rawEvents,
        effectiveLatestEvent
    ]);
    const handleSelectEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LiveConsole.useCallback[handleSelectEvent]": (event)=>{
            setSelectedEventId(event.id || null);
        }
    }["LiveConsole.useCallback[handleSelectEvent]"], []);
    const handleClear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LiveConsole.useCallback[handleClear]": ()=>{
            if (useStaticPreview) {
                setFrozenSnapshot([]);
            } else {
                clearSocketBuffer();
            }
            setSelectedEventId(null);
        }
    }["LiveConsole.useCallback[handleClear]"], [
        useStaticPreview,
        clearSocketBuffer
    ]);
    const targetUri = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAgentRunSocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWebSocketUri"])(runId);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-space-md w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm p-space-sm rounded-xl bg-surface-container-low border border-outline-variant/30 text-xs font-mono",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 flex-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative flex h-2 w-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `inline-flex rounded-full h-2 w-2 ${useStaticPreview ? 'bg-primary' : connectionState === 'CONNECTED' ? 'bg-emerald-400' : 'bg-outline'}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LiveConsole/LiveConsole.tsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/LiveConsole/LiveConsole.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-on-surface",
                                children: useStaticPreview ? 'STATIC PREVIEW MODE' : connectionState
                            }, void 0, false, {
                                fileName: "[project]/src/components/LiveConsole/LiveConsole.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-outline-variant",
                                children: "|"
                            }, void 0, false, {
                                fileName: "[project]/src/components/LiveConsole/LiveConsole.tsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-outline text-[11px] truncate max-w-xs",
                                children: targetUri
                            }, void 0, false, {
                                fileName: "[project]/src/components/LiveConsole/LiveConsole.tsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/LiveConsole/LiveConsole.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-flex p-0.5 rounded-lg bg-surface-container border border-outline-variant/30 text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setUseStaticPreview(false),
                                className: `px-2.5 py-1 rounded font-medium transition-all ${!useStaticPreview ? 'bg-primary-container text-on-primary-container font-semibold shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`,
                                children: "Live Hook Stream"
                            }, void 0, false, {
                                fileName: "[project]/src/components/LiveConsole/LiveConsole.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setUseStaticPreview(true),
                                className: `px-2.5 py-1 rounded font-medium transition-all ${useStaticPreview ? 'bg-teal-500 text-surface-container-lowest font-bold shadow-sm' : 'text-teal-400 hover:text-teal-300'}`,
                                children: "Static Preview"
                            }, void 0, false, {
                                fileName: "[project]/src/components/LiveConsole/LiveConsole.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/LiveConsole/LiveConsole.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/LiveConsole/LiveConsole.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LiveConsole$2f$WorkflowTimeline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WorkflowTimeline"], {
                stages: pipelineStages
            }, void 0, false, {
                fileName: "[project]/src/components/LiveConsole/LiveConsole.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LiveConsole$2f$ConsoleControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConsoleControls"], {
                connectionState: useStaticPreview ? 'CONNECTED' : connectionState,
                activeFilter: activeFilter,
                onFilterChange: setActiveFilter,
                counts: counts,
                autoScroll: autoScroll,
                onToggleAutoScroll: ()=>setAutoScroll((prev)=>!prev),
                isPaused: isPaused,
                onTogglePause: handleTogglePause,
                pausedNewCount: pausedNewCount,
                onClear: handleClear,
                totalEvents: displayedEvents.length
            }, void 0, false, {
                fileName: "[project]/src/components/LiveConsole/LiveConsole.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-12 gap-space-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-7 flex flex-col",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LiveConsole$2f$EventStream$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventStream"], {
                            events: filteredEvents,
                            connectionState: useStaticPreview ? 'CONNECTED' : connectionState,
                            selectedEventId: selectedEventId,
                            onSelectEvent: handleSelectEvent,
                            autoScroll: autoScroll,
                            parseErrorCount: telemetry.parseErrorCount,
                            bufferCap: 500,
                            runId: runId,
                            error: error,
                            targetUri: targetUri
                        }, void 0, false, {
                            fileName: "[project]/src/components/LiveConsole/LiveConsole.tsx",
                            lineNumber: 203,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/LiveConsole/LiveConsole.tsx",
                        lineNumber: 202,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-5 flex flex-col gap-space-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LiveConsole$2f$ActiveAgentPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActiveAgentPanel"], {
                                latestEvent: effectiveLatestEvent
                            }, void 0, false, {
                                fileName: "[project]/src/components/LiveConsole/LiveConsole.tsx",
                                lineNumber: 220,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LiveConsole$2f$ToolActivityPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolActivityPanel"], {
                                events: rawEvents
                            }, void 0, false, {
                                fileName: "[project]/src/components/LiveConsole/LiveConsole.tsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LiveConsole$2f$EventEnvelopeInspector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventEnvelopeInspector"], {
                                selectedEvent: selectedEvent
                            }, void 0, false, {
                                fileName: "[project]/src/components/LiveConsole/LiveConsole.tsx",
                                lineNumber: 226,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/LiveConsole/LiveConsole.tsx",
                        lineNumber: 218,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/LiveConsole/LiveConsole.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/LiveConsole/LiveConsole.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LiveConsole, "gw/RFTjm7n+qdqZ9aPUpDCbyIYc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAgentRunSocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAgentRunSocket"]
    ];
});
_c = LiveConsole;
var _c;
__turbopack_context__.k.register(_c, "LiveConsole");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/LiveConsole/ToolActivityPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToolActivityPanel",
    ()=>ToolActivityPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const ToolActivityPanel = ({ events })=>{
    // Extract all events that involve a tool
    const toolEvents = events.filter((e)=>e.tool || e.eventType && e.eventType.toLowerCase().includes('tool'));
    const recentTools = toolEvents.slice(-5).reverse();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl bg-surface-container-low border border-outline-variant/30 p-space-md flex flex-col justify-between shadow-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-space-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-3.5 h-3.5 text-tertiary",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LiveConsole/ToolActivityPanel.tsx",
                                        lineNumber: 23,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LiveConsole/ToolActivityPanel.tsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-mono text-[11px] uppercase tracking-wider font-semibold text-on-surface",
                                    children: "Live Tool Activity"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LiveConsole/ToolActivityPanel.tsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LiveConsole/ToolActivityPanel.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-mono text-[10px] text-outline",
                            children: [
                                toolEvents.length,
                                " Recorded"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LiveConsole/ToolActivityPanel.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/LiveConsole/ToolActivityPanel.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                recentTools.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 rounded-lg bg-surface-container text-center text-xs text-outline font-mono",
                    children: "No tool invocations recorded yet."
                }, void 0, false, {
                    fileName: "[project]/src/components/LiveConsole/ToolActivityPanel.tsx",
                    lineNumber: 36,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-1.5 font-mono text-xs",
                    children: recentTools.map((evt, idx)=>{
                        const toolName = evt.tool || 'Unknown Tool';
                        const timeStr = evt.timestamp ? new Date(evt.timestamp).toLocaleTimeString() : 'Recent';
                        const isFinish = (evt.eventType || '').toLowerCase().includes('finish');
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2 rounded bg-surface-container border border-outline-variant/15 flex items-center justify-between gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `w-1.5 h-1.5 rounded-full flex-shrink-0 ${isFinish ? 'bg-emerald-400' : 'bg-primary'}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LiveConsole/ToolActivityPanel.tsx",
                                            lineNumber: 54,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-on-surface truncate text-[11px]",
                                            children: toolName
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LiveConsole/ToolActivityPanel.tsx",
                                            lineNumber: 59,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/LiveConsole/ToolActivityPanel.tsx",
                                    lineNumber: 53,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 text-[10px] text-outline flex-shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "px-1.5 py-0.2 rounded bg-surface-container-high text-outline-variant",
                                            children: isFinish ? 'DONE' : 'IN-FLIGHT'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LiveConsole/ToolActivityPanel.tsx",
                                            lineNumber: 65,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: timeStr
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LiveConsole/ToolActivityPanel.tsx",
                                            lineNumber: 68,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/LiveConsole/ToolActivityPanel.tsx",
                                    lineNumber: 64,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, evt.id || idx, true, {
                            fileName: "[project]/src/components/LiveConsole/ToolActivityPanel.tsx",
                            lineNumber: 49,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/LiveConsole/ToolActivityPanel.tsx",
                    lineNumber: 40,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/LiveConsole/ToolActivityPanel.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/LiveConsole/ToolActivityPanel.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ToolActivityPanel;
var _c;
__turbopack_context__.k.register(_c, "ToolActivityPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/LiveConsole/WorkflowTimeline.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WorkflowTimeline",
    ()=>WorkflowTimeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const WorkflowTimeline = ({ stages })=>{
    const activeCount = stages.filter((s)=>s.status === 'running').length;
    const completedCount = stages.filter((s)=>s.status === 'completed').length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl bg-surface-container-low border border-outline-variant/30 p-space-md flex flex-col gap-2 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between flex-wrap gap-2 text-xs font-mono",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-3.5 h-3.5 text-primary flex-shrink-0",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                    points: "22 12 18 12 15 21 9 3 6 12 2 12"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LiveConsole/WorkflowTimeline.tsx",
                                    lineNumber: 18,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/LiveConsole/WorkflowTimeline.tsx",
                                lineNumber: 17,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-on-surface uppercase tracking-wider text-[11px]",
                                children: "Autonomous Pipeline Execution"
                            }, void 0, false, {
                                fileName: "[project]/src/components/LiveConsole/WorkflowTimeline.tsx",
                                lineNumber: 20,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/LiveConsole/WorkflowTimeline.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-[10px] text-outline",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                completedCount > 0 ? `${completedCount} Completed · ` : '',
                                activeCount > 0 ? `${activeCount} Running` : 'Awaiting Pipeline Events'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LiveConsole/WorkflowTimeline.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/LiveConsole/WorkflowTimeline.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/LiveConsole/WorkflowTimeline.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 pt-1 overflow-x-auto",
                children: stages.map((stage)=>{
                    let statusBadgeClass = 'bg-surface-container text-outline border-outline-variant/20';
                    let statusLabel = 'Standby';
                    let indicatorIcon = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "w-1.5 h-1.5 rounded-full bg-outline/40"
                    }, void 0, false, {
                        fileName: "[project]/src/components/LiveConsole/WorkflowTimeline.tsx",
                        lineNumber: 41,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                    if (stage.status === 'completed') {
                        statusBadgeClass = 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
                        statusLabel = 'Completed';
                        indicatorIcon = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-2.5 h-2.5 text-emerald-400",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                points: "20 6 9 17 4 12"
                            }, void 0, false, {
                                fileName: "[project]/src/components/LiveConsole/WorkflowTimeline.tsx",
                                lineNumber: 49,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/LiveConsole/WorkflowTimeline.tsx",
                            lineNumber: 48,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0));
                    } else if (stage.status === 'running') {
                        statusBadgeClass = 'bg-primary/20 text-primary border-primary/40 ring-1 ring-primary/30';
                        statusLabel = 'Active';
                        indicatorIcon = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "w-1.5 h-1.5 rounded-full bg-primary animate-ping"
                        }, void 0, false, {
                            fileName: "[project]/src/components/LiveConsole/WorkflowTimeline.tsx",
                            lineNumber: 56,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0));
                    } else if (stage.status === 'failed') {
                        statusBadgeClass = 'bg-red-500/10 text-red-400 border-red-500/30';
                        statusLabel = 'Failed';
                        indicatorIcon = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "w-1.5 h-1.5 rounded-full bg-red-400"
                        }, void 0, false, {
                            fileName: "[project]/src/components/LiveConsole/WorkflowTimeline.tsx",
                            lineNumber: 62,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0));
                    }
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `p-2 rounded-lg border flex flex-col justify-between gap-1 transition-all ${stage.status === 'running' ? 'bg-surface-container-high border-primary/40 shadow-sm' : 'bg-surface-container border-outline-variant/20'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between text-[10px] font-mono text-outline",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "0",
                                            stage.stageNumber
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/LiveConsole/WorkflowTimeline.tsx",
                                        lineNumber: 76,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    indicatorIcon
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/LiveConsole/WorkflowTimeline.tsx",
                                lineNumber: 75,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-semibold text-xs text-on-surface truncate mt-0.5",
                                children: stage.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/LiveConsole/WorkflowTimeline.tsx",
                                lineNumber: 80,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `inline-flex items-center px-1.5 py-0.2 rounded font-mono text-[9px] uppercase tracking-wider border ${statusBadgeClass}`,
                                    children: statusLabel
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LiveConsole/WorkflowTimeline.tsx",
                                    lineNumber: 85,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/LiveConsole/WorkflowTimeline.tsx",
                                lineNumber: 84,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, stage.id, true, {
                        fileName: "[project]/src/components/LiveConsole/WorkflowTimeline.tsx",
                        lineNumber: 67,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/src/components/LiveConsole/WorkflowTimeline.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/LiveConsole/WorkflowTimeline.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = WorkflowTimeline;
var _c;
__turbopack_context__.k.register(_c, "WorkflowTimeline");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/LiveConsole/index.tsx [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
// Real-time streaming feed of agent steps, sourced from the WebSocket live-stream.
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LiveConsole$2f$LiveConsole$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LiveConsole/LiveConsole.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LiveConsole$2f$WorkflowTimeline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LiveConsole/WorkflowTimeline.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LiveConsole$2f$ConsoleControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LiveConsole/ConsoleControls.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LiveConsole$2f$EventStream$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LiveConsole/EventStream.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LiveConsole$2f$ActiveAgentPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LiveConsole/ActiveAgentPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LiveConsole$2f$ToolActivityPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LiveConsole/ToolActivityPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LiveConsole$2f$EventEnvelopeInspector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LiveConsole/EventEnvelopeInspector.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LiveConsole$2f$liveConsoleUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LiveConsole/liveConsoleUtils.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/LiveConsole/liveConsoleUtils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Helper utilities for Task 4: Live Agent Console
 *
 * Implements pure frontend event derivation, filtering, and stage classification
 * without modifying any backend or contract files.
 */ __turbopack_context__.s([
    "PIPELINE_STAGES",
    ()=>PIPELINE_STAGES,
    "STATIC_PREVIEW_EVENTS",
    ()=>STATIC_PREVIEW_EVENTS,
    "categorizeEvent",
    ()=>categorizeEvent,
    "derivePipelineStages",
    ()=>derivePipelineStages,
    "filterEvents",
    ()=>filterEvents
]);
const PIPELINE_STAGES = [
    {
        id: 'triage',
        name: 'Triage',
        agentKey: 'triage'
    },
    {
        id: 'retrieval',
        name: 'Retrieval',
        agentKey: 'retrieval'
    },
    {
        id: 'planner',
        name: 'Planner',
        agentKey: 'planner'
    },
    {
        id: 'coder',
        name: 'Coder',
        agentKey: 'coder'
    },
    {
        id: 'test_runner',
        name: 'Test Runner',
        agentKey: 'test_runner'
    },
    {
        id: 'debugger',
        name: 'Debugger',
        agentKey: 'debugger'
    },
    {
        id: 'reviewer',
        name: 'Reviewer',
        agentKey: 'reviewer'
    },
    {
        id: 'pr_agent',
        name: 'PR Agent',
        agentKey: 'pr_agent'
    }
];
function categorizeEvent(evt) {
    const type = (evt.eventType || '').toLowerCase();
    const payloadStr = typeof evt.payload === 'object' ? JSON.stringify(evt.payload).toLowerCase() : '';
    if (type.includes('error') || type.includes('fail') || payloadStr.includes('error')) {
        return 'errors';
    }
    if (evt.tool || type.includes('tool')) {
        return 'tools';
    }
    if (type.includes('thought') || type.includes('plan') || type.includes('reason') || type.includes('step')) {
        return 'thoughts';
    }
    return 'other';
}
function filterEvents(events, category) {
    if (category === 'all') return events;
    return events.filter((evt)=>{
        const cat = categorizeEvent(evt);
        if (category === 'tools') return cat === 'tools';
        if (category === 'thoughts') return cat === 'thoughts';
        if (category === 'errors') return cat === 'errors';
        return true;
    });
}
function derivePipelineStages(events) {
    return PIPELINE_STAGES.map((def, idx)=>{
        // Find all events associated with this stage's agent
        const matchingEvents = events.filter((evt)=>{
            const agent = (evt.agent || '').toLowerCase().replace(/[\s_-]+/g, '');
            const target = def.agentKey.toLowerCase().replace(/[\s_-]+/g, '');
            return agent.includes(target) || target.includes(agent);
        });
        if (matchingEvents.length === 0) {
            return {
                id: def.id,
                name: def.name,
                stageNumber: idx + 1,
                status: 'no_data',
                agentKey: def.agentKey
            };
        }
        const latest = matchingEvents[matchingEvents.length - 1];
        const type = (latest.eventType || '').toLowerCase();
        let status = 'running';
        if (type.includes('finish') || type.includes('complete') || type.includes('pass')) {
            status = 'completed';
        } else if (type.includes('fail') || type.includes('error')) {
            status = 'failed';
        }
        return {
            id: def.id,
            name: def.name,
            stageNumber: idx + 1,
            status,
            lastActiveTime: latest.timestamp,
            agentKey: def.agentKey
        };
    });
}
const STATIC_PREVIEW_EVENTS = [
    {
        id: 'evt_preview_01',
        agent: 'Planner',
        step: '1.1',
        eventType: 'agent.step_finish',
        model: 'preview-llm-1',
        timestamp: new Date(Date.now() - 45000).toISOString(),
        payload: {
            message: 'Decomposed repository requirements and identified target files.',
            details: 'Architecture plan finalized with 3 phase deliverables.'
        }
    },
    {
        id: 'evt_preview_02',
        agent: 'Retrieval',
        step: '1.2',
        eventType: 'tool.call_finish',
        tool: 'ripgrep',
        model: 'preview-llm-1',
        timestamp: new Date(Date.now() - 30000).toISOString(),
        payload: {
            query: 'useAgentRunSocket',
            matches: 4,
            path: 'frontend/src/hooks'
        }
    },
    {
        id: 'evt_preview_03',
        agent: 'Coder',
        step: '2.1',
        eventType: 'llm.stream_chunk',
        model: 'preview-llm-2',
        timestamp: new Date(Date.now() - 15000).toISOString(),
        payload: {
            tokenDelta: 'export function LiveConsole({ runId }: LiveConsoleProps)',
            stage: 'implementation'
        }
    },
    {
        id: 'evt_preview_04',
        agent: 'Coder',
        step: '2.2',
        eventType: 'tool.call_start',
        tool: 'patch_file',
        model: 'preview-llm-2',
        timestamp: new Date().toISOString(),
        payload: {
            targetFile: 'frontend/src/components/LiveConsole/LiveConsole.tsx',
            operation: 'modify',
            status: 'in-flight'
        }
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_LiveConsole_1imqb3j._.js.map