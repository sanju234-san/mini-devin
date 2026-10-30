(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/TestsAndPreview/ExecutionLogControls.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExecutionLogControls",
    ()=>ExecutionLogControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const ExecutionLogControls = ({ activeCategory, onSelectCategory, categoryCounts, filterText, onFilterChange, autoScroll, onToggleAutoScroll, onClear, onCopy, isLive })=>{
    _s();
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleCopy = ()=>{
        onCopy();
        setCopied(true);
        setTimeout(()=>setCopied(false), 2000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col bg-surface-container-low border-b border-outline-variant/30",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-3.5 py-2.5 bg-surface-container-high/60 border-b border-outline-variant/20 flex flex-wrap items-center justify-between gap-2 text-xs font-mono select-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-3 h-3 rounded-full bg-[#ff5f56] inline-block shadow-xs"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TestsAndPreview/ExecutionLogControls.tsx",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-3 h-3 rounded-full bg-[#ffbd2e] inline-block shadow-xs"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TestsAndPreview/ExecutionLogControls.tsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-3 h-3 rounded-full bg-[#27c93f] inline-block shadow-xs"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TestsAndPreview/ExecutionLogControls.tsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TestsAndPreview/ExecutionLogControls.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 text-on-surface font-semibold text-xs ml-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-3.5 h-3.5 text-primary",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                points: "4 17 10 11 4 5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TestsAndPreview/ExecutionLogControls.tsx",
                                                lineNumber: 66,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "12",
                                                y1: "19",
                                                x2: "20",
                                                y2: "19"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TestsAndPreview/ExecutionLogControls.tsx",
                                                lineNumber: 67,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TestsAndPreview/ExecutionLogControls.tsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Execution Logs"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TestsAndPreview/ExecutionLogControls.tsx",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TestsAndPreview/ExecutionLogControls.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TestsAndPreview/ExecutionLogControls.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 text-[11px] font-mono",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "relative flex h-2 w-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isLive ? 'bg-emerald-400' : 'bg-outline'}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TestsAndPreview/ExecutionLogControls.tsx",
                                                lineNumber: 77,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `relative inline-flex rounded-full h-2 w-2 ${isLive ? 'bg-emerald-400' : 'bg-outline'}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TestsAndPreview/ExecutionLogControls.tsx",
                                                lineNumber: 82,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TestsAndPreview/ExecutionLogControls.tsx",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: isLive ? 'text-emerald-400 font-medium' : 'text-outline',
                                        children: isLive ? 'Live stream active (120 lines/sec)' : 'Stream Standby'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TestsAndPreview/ExecutionLogControls.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TestsAndPreview/ExecutionLogControls.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onToggleAutoScroll,
                                className: `flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-mono border transition-colors ${autoScroll ? 'bg-primary-container/20 text-primary border-primary/40 font-semibold' : 'bg-surface-container border-outline-variant/30 text-outline hover:text-on-surface'}`,
                                title: "Toggle terminal auto-scroll to bottom on new lines",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `w-1.5 h-1.5 rounded-full ${autoScroll ? 'bg-primary' : 'bg-outline'}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TestsAndPreview/ExecutionLogControls.tsx",
                                        lineNumber: 103,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Auto-scroll: ",
                                            autoScroll ? 'ON' : 'OFF'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TestsAndPreview/ExecutionLogControls.tsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TestsAndPreview/ExecutionLogControls.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TestsAndPreview/ExecutionLogControls.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TestsAndPreview/ExecutionLogControls.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-3.5 pt-2 pb-1.5 flex flex-wrap items-center justify-between gap-2 border-b border-outline-variant/20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-1.5 flex-wrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>onSelectCategory('all'),
                            className: `px-3 py-1 rounded-md text-xs font-mono transition-colors ${activeCategory === 'all' ? 'bg-surface-container-highest text-on-surface font-semibold border border-outline-variant/40' : 'text-outline hover:text-on-surface hover:bg-surface-container-high/50'}`,
                            children: [
                                "All Output (",
                                categoryCounts.all,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/TestsAndPreview/ExecutionLogControls.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>onSelectCategory('stdout'),
                            className: `px-3 py-1 rounded-md text-xs font-mono transition-colors ${activeCategory === 'stdout' ? 'bg-surface-container-highest text-on-surface font-semibold border border-outline-variant/40' : 'text-outline hover:text-on-surface hover:bg-surface-container-high/50'}`,
                            children: [
                                "stdout (",
                                categoryCounts.stdout,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/TestsAndPreview/ExecutionLogControls.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>onSelectCategory('stderr'),
                            className: `flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono transition-colors ${activeCategory === 'stderr' ? 'bg-surface-container-highest text-on-surface font-semibold border border-outline-variant/40' : 'text-outline hover:text-on-surface hover:bg-surface-container-high/50'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "stderr"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TestsAndPreview/ExecutionLogControls.tsx",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                categoryCounts.stderr > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-1.5 py-0.2 rounded text-[10px] bg-red-500/20 text-red-400 font-bold border border-red-500/30",
                                    children: categoryCounts.stderr
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TestsAndPreview/ExecutionLogControls.tsx",
                                    lineNumber: 151,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/TestsAndPreview/ExecutionLogControls.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>onSelectCategory('test_runner'),
                            className: `px-3 py-1 rounded-md text-xs font-mono transition-colors ${activeCategory === 'test_runner' ? 'bg-surface-container-highest text-on-surface font-semibold border border-outline-variant/40' : 'text-outline hover:text-on-surface hover:bg-surface-container-high/50'}`,
                            children: [
                                "Test Runner (",
                                categoryCounts.test_runner,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/TestsAndPreview/ExecutionLogControls.tsx",
                            lineNumber: 157,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/TestsAndPreview/ExecutionLogControls.tsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/TestsAndPreview/ExecutionLogControls.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-3.5 py-2 flex flex-wrap items-center justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex-1 min-w-[200px] max-w-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-outline",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-3.5 h-3.5",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "11",
                                            cy: "11",
                                            r: "8"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TestsAndPreview/ExecutionLogControls.tsx",
                                            lineNumber: 185,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "21",
                                            y1: "21",
                                            x2: "16.65",
                                            y2: "16.65"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TestsAndPreview/ExecutionLogControls.tsx",
                                            lineNumber: 186,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/TestsAndPreview/ExecutionLogControls.tsx",
                                    lineNumber: 176,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/TestsAndPreview/ExecutionLogControls.tsx",
                                lineNumber: 175,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: filterText,
                                onChange: (e)=>onFilterChange(e.target.value),
                                placeholder: "Filter logs (e.g. error, assertion, pass)...",
                                className: "w-full pl-8 pr-3 py-1 bg-surface-container-highest/60 border border-outline-variant/30 rounded text-xs font-mono text-on-surface placeholder:text-outline/60 focus:outline-hidden focus:border-primary transition-colors"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TestsAndPreview/ExecutionLogControls.tsx",
                                lineNumber: 189,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            filterText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onFilterChange(''),
                                className: "absolute inset-y-0 right-0 pr-2.5 flex items-center text-outline hover:text-on-surface",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TestsAndPreview/ExecutionLogControls.tsx",
                                lineNumber: 197,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TestsAndPreview/ExecutionLogControls.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleCopy,
                                className: "flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-highest border border-outline-variant/30 text-outline hover:text-on-surface text-xs font-mono transition-colors",
                                title: "Copy displayed terminal log buffer to clipboard",
                                children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-3.5 h-3.5 text-emerald-400",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                points: "20 6 9 17 4 12"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TestsAndPreview/ExecutionLogControls.tsx",
                                                lineNumber: 226,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TestsAndPreview/ExecutionLogControls.tsx",
                                            lineNumber: 217,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-emerald-400",
                                            children: "Copied"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TestsAndPreview/ExecutionLogControls.tsx",
                                            lineNumber: 228,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/TestsAndPreview/ExecutionLogControls.tsx",
                                    lineNumber: 216,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-3.5 h-3.5",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "9",
                                                    y: "9",
                                                    width: "13",
                                                    height: "13",
                                                    rx: "2",
                                                    ry: "2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TestsAndPreview/ExecutionLogControls.tsx",
                                                    lineNumber: 241,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TestsAndPreview/ExecutionLogControls.tsx",
                                                    lineNumber: 242,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/TestsAndPreview/ExecutionLogControls.tsx",
                                            lineNumber: 232,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Copy"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TestsAndPreview/ExecutionLogControls.tsx",
                                            lineNumber: 244,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/TestsAndPreview/ExecutionLogControls.tsx",
                                    lineNumber: 231,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/TestsAndPreview/ExecutionLogControls.tsx",
                                lineNumber: 209,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onClear,
                                className: "flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-highest border border-outline-variant/30 text-outline hover:text-red-400 text-xs font-mono transition-colors",
                                title: "Clear displayed log buffer locally (does not alter backend logs)",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-3.5 h-3.5",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                points: "3 6 5 6 21 6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TestsAndPreview/ExecutionLogControls.tsx",
                                                lineNumber: 264,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TestsAndPreview/ExecutionLogControls.tsx",
                                                lineNumber: 265,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TestsAndPreview/ExecutionLogControls.tsx",
                                        lineNumber: 255,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Clear"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TestsAndPreview/ExecutionLogControls.tsx",
                                        lineNumber: 267,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TestsAndPreview/ExecutionLogControls.tsx",
                                lineNumber: 249,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TestsAndPreview/ExecutionLogControls.tsx",
                        lineNumber: 208,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TestsAndPreview/ExecutionLogControls.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TestsAndPreview/ExecutionLogControls.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ExecutionLogControls, "NE86rL3vg4NVcTTWDavsT0hUBJs=");
_c = ExecutionLogControls;
var _c;
__turbopack_context__.k.register(_c, "ExecutionLogControls");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/TestsAndPreview/SandboxMetaHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SandboxMetaHeader",
    ()=>SandboxMetaHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const SandboxMetaHeader = ({ runId, summary, repository = 'octocat/linguist', issueNumber = '482', issueTitle = 'UTF-8 parser', targetBranch = 'fix/parser-multibyte' })=>{
    _s();
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleCopyRunId = ()=>{
        navigator.clipboard.writeText(runId);
        setCopied(true);
        setTimeout(()=>setCopied(false), 2000);
    };
    const isRunning = summary.status === 'RUNNING';
    const isPassed = summary.status === 'PASSED';
    const isFailed = summary.status === 'FAILED';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-md p-space-md rounded-xl bg-surface-container-low border border-outline-variant/30",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-lg font-bold tracking-tight text-on-surface",
                        children: "Terminal & Test Output"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TestsAndPreview/SandboxMetaHeader.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-outline",
                        children: "Monitor execution logs and inspect test results in real-time."
                    }, void 0, false, {
                        fileName: "[project]/src/components/TestsAndPreview/SandboxMetaHeader.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mt-1 flex-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface-container-high border border-outline-variant/40 text-xs font-mono text-primary",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: runId.startsWith('#') ? runId : `#${runId}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TestsAndPreview/SandboxMetaHeader.tsx",
                                        lineNumber: 49,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleCopyRunId,
                                        className: "text-outline hover:text-on-surface transition-colors",
                                        title: "Copy Run ID",
                                        children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-3.5 h-3.5 text-emerald-400",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                points: "20 6 9 17 4 12"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TestsAndPreview/SandboxMetaHeader.tsx",
                                                lineNumber: 66,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TestsAndPreview/SandboxMetaHeader.tsx",
                                            lineNumber: 57,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-3.5 h-3.5",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "9",
                                                    y: "9",
                                                    width: "13",
                                                    height: "13",
                                                    rx: "2",
                                                    ry: "2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TestsAndPreview/SandboxMetaHeader.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TestsAndPreview/SandboxMetaHeader.tsx",
                                                    lineNumber: 79,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/TestsAndPreview/SandboxMetaHeader.tsx",
                                            lineNumber: 69,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TestsAndPreview/SandboxMetaHeader.tsx",
                                        lineNumber: 50,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TestsAndPreview/SandboxMetaHeader.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-wider ${isRunning ? 'bg-blue-500/15 text-blue-400 border border-blue-500/30' : isPassed ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30' : isFailed ? 'bg-red-500/15 text-red-400 border border-red-500/30' : 'bg-surface-container-high text-outline border border-outline-variant/30'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `w-2 h-2 rounded-full ${isRunning ? 'bg-blue-400 animate-pulse' : isPassed ? 'bg-emerald-400' : isFailed ? 'bg-red-400' : 'bg-outline'}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TestsAndPreview/SandboxMetaHeader.tsx",
                                        lineNumber: 97,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: summary.status
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TestsAndPreview/SandboxMetaHeader.tsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TestsAndPreview/SandboxMetaHeader.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TestsAndPreview/SandboxMetaHeader.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TestsAndPreview/SandboxMetaHeader.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-start lg:items-end gap-2 text-xs font-mono",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 flex-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 text-on-surface bg-surface-container px-2 py-0.5 rounded border border-outline-variant/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-3.5 h-3.5 text-outline",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TestsAndPreview/SandboxMetaHeader.tsx",
                                            lineNumber: 127,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TestsAndPreview/SandboxMetaHeader.tsx",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: repository
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TestsAndPreview/SandboxMetaHeader.tsx",
                                        lineNumber: 129,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TestsAndPreview/SandboxMetaHeader.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 text-on-surface bg-surface-container px-2 py-0.5 rounded border border-outline-variant/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-amber-400",
                                        children: [
                                            "#",
                                            issueNumber
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TestsAndPreview/SandboxMetaHeader.tsx",
                                        lineNumber: 133,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-outline",
                                        children: [
                                            "(",
                                            issueTitle,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TestsAndPreview/SandboxMetaHeader.tsx",
                                        lineNumber: 134,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TestsAndPreview/SandboxMetaHeader.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 text-emerald-400 bg-surface-container px-2 py-0.5 rounded border border-outline-variant/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-3.5 h-3.5",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "6",
                                                y1: "3",
                                                x2: "6",
                                                y2: "15"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TestsAndPreview/SandboxMetaHeader.tsx",
                                                lineNumber: 147,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "18",
                                                cy: "6",
                                                r: "3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TestsAndPreview/SandboxMetaHeader.tsx",
                                                lineNumber: 148,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "6",
                                                cy: "18",
                                                r: "3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TestsAndPreview/SandboxMetaHeader.tsx",
                                                lineNumber: 149,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M18 9a9 9 0 0 1-9 9"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TestsAndPreview/SandboxMetaHeader.tsx",
                                                lineNumber: 150,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TestsAndPreview/SandboxMetaHeader.tsx",
                                        lineNumber: 138,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: targetBranch
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TestsAndPreview/SandboxMetaHeader.tsx",
                                        lineNumber: 152,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TestsAndPreview/SandboxMetaHeader.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TestsAndPreview/SandboxMetaHeader.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-[11px] text-outline flex-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-3.5 h-3.5",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "12",
                                                cy: "12",
                                                r: "10"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TestsAndPreview/SandboxMetaHeader.tsx",
                                                lineNumber: 168,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                points: "12 6 12 12 16 14"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TestsAndPreview/SandboxMetaHeader.tsx",
                                                lineNumber: 169,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TestsAndPreview/SandboxMetaHeader.tsx",
                                        lineNumber: 159,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "00:01:42"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TestsAndPreview/SandboxMetaHeader.tsx",
                                        lineNumber: 171,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TestsAndPreview/SandboxMetaHeader.tsx",
                                lineNumber: 158,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-outline-variant",
                                children: "/"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TestsAndPreview/SandboxMetaHeader.tsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-3.5 h-3.5",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "2",
                                                y: "2",
                                                width: "20",
                                                height: "8",
                                                rx: "2",
                                                ry: "2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TestsAndPreview/SandboxMetaHeader.tsx",
                                                lineNumber: 185,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "2",
                                                y: "14",
                                                width: "20",
                                                height: "8",
                                                rx: "2",
                                                ry: "2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TestsAndPreview/SandboxMetaHeader.tsx",
                                                lineNumber: 186,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "6",
                                                y1: "6",
                                                x2: "6.01",
                                                y2: "6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TestsAndPreview/SandboxMetaHeader.tsx",
                                                lineNumber: 187,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "6",
                                                y1: "18",
                                                x2: "6.01",
                                                y2: "18"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TestsAndPreview/SandboxMetaHeader.tsx",
                                                lineNumber: 188,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TestsAndPreview/SandboxMetaHeader.tsx",
                                        lineNumber: 176,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            summary.memoryUsageMb,
                                            " MB"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TestsAndPreview/SandboxMetaHeader.tsx",
                                        lineNumber: 190,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TestsAndPreview/SandboxMetaHeader.tsx",
                                lineNumber: 175,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-outline-variant",
                                children: "/"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TestsAndPreview/SandboxMetaHeader.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 text-primary",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-3.5 h-3.5",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "2",
                                                y: "3",
                                                width: "20",
                                                height: "14",
                                                rx: "2",
                                                ry: "2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TestsAndPreview/SandboxMetaHeader.tsx",
                                                lineNumber: 204,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "8",
                                                y1: "21",
                                                x2: "16",
                                                y2: "21"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TestsAndPreview/SandboxMetaHeader.tsx",
                                                lineNumber: 205,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "12",
                                                y1: "17",
                                                x2: "12",
                                                y2: "21"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TestsAndPreview/SandboxMetaHeader.tsx",
                                                lineNumber: 206,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TestsAndPreview/SandboxMetaHeader.tsx",
                                        lineNumber: 195,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: summary.sandboxVmId
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TestsAndPreview/SandboxMetaHeader.tsx",
                                        lineNumber: 208,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TestsAndPreview/SandboxMetaHeader.tsx",
                                lineNumber: 194,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TestsAndPreview/SandboxMetaHeader.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TestsAndPreview/SandboxMetaHeader.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TestsAndPreview/SandboxMetaHeader.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SandboxMetaHeader, "NE86rL3vg4NVcTTWDavsT0hUBJs=");
_c = SandboxMetaHeader;
var _c;
__turbopack_context__.k.register(_c, "SandboxMetaHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/TestsAndPreview/TerminalOutput.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TerminalOutput",
    ()=>TerminalOutput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TestsAndPreview$2f$testsAndPreviewUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TestsAndPreview/testsAndPreviewUtils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const TerminalOutput = ({ logs, autoScroll, filterText, activeCategory, isLive, isSkeleton = false })=>{
    _s();
    const terminalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const xtermInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [terminalReady, setTerminalReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeViewMode, setActiveViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('interactive');
    const resizeObserverRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Filter logs by category and search text
    const filteredLogs = logs.filter((line)=>{
        if (activeCategory !== 'all' && line.category !== activeCategory) {
            return false;
        }
        if (filterText.trim()) {
            const q = filterText.toLowerCase();
            const matchContent = line.content.toLowerCase().includes(q);
            const matchTag = line.tag.toLowerCase().includes(q);
            const matchExpected = line.details?.expected?.toLowerCase().includes(q);
            const matchActual = line.details?.actual?.toLowerCase().includes(q);
            return matchContent || matchTag || matchExpected || matchActual;
        }
        return true;
    });
    // Calculate buffer size
    const totalBufferSizeKb = Math.max(1, Math.round(logs.reduce((acc, l)=>acc + l.content.length + 30, 0) / 1024));
    // Initialize xterm client-side
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TerminalOutput.useEffect": ()=>{
            let isMounted = true;
            async function initXterm() {
                if (!terminalRef.current || xtermInstance.current) return;
                try {
                    const { Terminal } = await __turbopack_context__.A("[project]/node_modules/xterm/lib/xterm.js [app-client] (ecmascript, async loader)");
                    if (!isMounted || !terminalRef.current) return;
                    const term = new Terminal({
                        theme: {
                            background: '#080f17',
                            foreground: '#dce3f0',
                            cursor: '#adc6ff',
                            cursorAccent: '#080f17',
                            selectionBackground: '#2e353f',
                            black: '#151c25',
                            red: '#ffb4ab',
                            green: '#10b981',
                            yellow: '#fde047',
                            blue: '#adc6ff',
                            magenta: '#c0c1ff',
                            cyan: '#4cd7f6',
                            white: '#dce3f0',
                            brightBlack: '#424754',
                            brightRed: '#ffdad6',
                            brightGreen: '#34d399',
                            brightYellow: '#fef08a',
                            brightBlue: '#c0c1ff',
                            brightMagenta: '#e0e7ff',
                            brightCyan: '#67e8f9',
                            brightWhite: '#ffffff'
                        },
                        fontFamily: 'JetBrains Mono, Menlo, Monaco, Consolas, monospace',
                        fontSize: 12,
                        lineHeight: 1.5,
                        cursorBlink: false,
                        disableStdin: true,
                        convertEol: true,
                        scrollback: 5000,
                        allowTransparency: true
                    });
                    term.open(terminalRef.current);
                    xtermInstance.current = term;
                    setTerminalReady(true);
                    // Auto resize calculation
                    const handleResize = {
                        "TerminalOutput.useEffect.initXterm.handleResize": ()=>{
                            if (!terminalRef.current || !term) return;
                            const charWidth = 7.5;
                            const charHeight = 18;
                            const cols = Math.max(40, Math.floor(terminalRef.current.clientWidth / charWidth));
                            const rows = Math.max(10, Math.floor(terminalRef.current.clientHeight / charHeight));
                            try {
                                term.resize(cols, rows);
                            } catch  {
                            // Ignore resize errors during render
                            }
                        }
                    }["TerminalOutput.useEffect.initXterm.handleResize"];
                    handleResize();
                    resizeObserverRef.current = new ResizeObserver({
                        "TerminalOutput.useEffect.initXterm": ()=>handleResize()
                    }["TerminalOutput.useEffect.initXterm"]);
                    resizeObserverRef.current.observe(terminalRef.current);
                } catch (err) {
                    // Fallback to rich HTML view if xterm fails to load
                    console.warn('xterm.js dynamic load notice, using standard rich log viewport', err);
                }
            }
            if (activeViewMode === 'xterm') {
                initXterm();
            }
            return ({
                "TerminalOutput.useEffect": ()=>{
                    isMounted = false;
                    if (resizeObserverRef.current) {
                        resizeObserverRef.current.disconnect();
                    }
                    if (xtermInstance.current) {
                        try {
                            xtermInstance.current.dispose();
                        } catch  {
                        // Dispose safely
                        }
                        xtermInstance.current = null;
                    }
                    setTerminalReady(false);
                }
            })["TerminalOutput.useEffect"];
        }
    }["TerminalOutput.useEffect"], [
        activeViewMode
    ]);
    // Write logs to xterm when logs or filters change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TerminalOutput.useEffect": ()=>{
            if (activeViewMode === 'xterm' && xtermInstance.current && terminalReady) {
                xtermInstance.current.reset();
                filteredLogs.forEach({
                    "TerminalOutput.useEffect": (line, index)=>{
                        xtermInstance.current.write((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TestsAndPreview$2f$testsAndPreviewUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatLogLineForXterm"])(line, index));
                    }
                }["TerminalOutput.useEffect"]);
                if (autoScroll) {
                    xtermInstance.current.scrollToBottom();
                }
            }
        }
    }["TerminalOutput.useEffect"], [
        filteredLogs,
        activeViewMode,
        terminalReady,
        autoScroll
    ]);
    // Handle auto-scroll for interactive HTML view
    const interactiveScrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TerminalOutput.useEffect": ()=>{
            if (autoScroll && interactiveScrollRef.current) {
                interactiveScrollRef.current.scrollTop = interactiveScrollRef.current.scrollHeight;
            }
        }
    }["TerminalOutput.useEffect"], [
        filteredLogs,
        autoScroll
    ]);
    if (isSkeleton) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex flex-col bg-surface-container-lowest p-4 gap-3 animate-pulse font-mono text-xs",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-4 bg-surface-container-high rounded w-3/4"
                }, void 0, false, {
                    fileName: "[project]/src/components/TestsAndPreview/TerminalOutput.tsx",
                    lineNumber: 170,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-4 bg-surface-container-high rounded w-1/2"
                }, void 0, false, {
                    fileName: "[project]/src/components/TestsAndPreview/TerminalOutput.tsx",
                    lineNumber: 171,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-4 bg-surface-container-high rounded w-5/6"
                }, void 0, false, {
                    fileName: "[project]/src/components/TestsAndPreview/TerminalOutput.tsx",
                    lineNumber: 172,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-4 bg-surface-container-high rounded w-2/3"
                }, void 0, false, {
                    fileName: "[project]/src/components/TestsAndPreview/TerminalOutput.tsx",
                    lineNumber: 173,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-4 bg-surface-container-high rounded w-4/5"
                }, void 0, false, {
                    fileName: "[project]/src/components/TestsAndPreview/TerminalOutput.tsx",
                    lineNumber: 174,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-4 bg-surface-container-high rounded w-3/5"
                }, void 0, false, {
                    fileName: "[project]/src/components/TestsAndPreview/TerminalOutput.tsx",
                    lineNumber: 175,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-4 bg-surface-container-high rounded w-4/6"
                }, void 0, false, {
                    fileName: "[project]/src/components/TestsAndPreview/TerminalOutput.tsx",
                    lineNumber: 176,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-auto h-4 bg-surface-container-high rounded w-full"
                }, void 0, false, {
                    fileName: "[project]/src/components/TestsAndPreview/TerminalOutput.tsx",
                    lineNumber: 177,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TestsAndPreview/TerminalOutput.tsx",
            lineNumber: 169,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 flex flex-col min-h-0 bg-surface-container-lowest overflow-hidden relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-2 right-2 z-10 flex items-center gap-1 bg-surface-container-high/80 backdrop-blur-xs p-0.5 rounded border border-outline-variant/30 text-[10px] font-mono",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setActiveViewMode('interactive'),
                        className: `px-2 py-0.5 rounded transition-colors ${activeViewMode === 'interactive' ? 'bg-primary-container text-on-primary-container font-semibold' : 'text-outline hover:text-on-surface'}`,
                        title: "Enhanced formatted view with inline diff blocks",
                        children: "Rich Log View"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TestsAndPreview/TerminalOutput.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setActiveViewMode('xterm'),
                        className: `px-2 py-0.5 rounded transition-colors ${activeViewMode === 'xterm' ? 'bg-primary-container text-on-primary-container font-semibold' : 'text-outline hover:text-on-surface'}`,
                        title: "Standard xterm.js terminal stream",
                        children: "xterm.js"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TestsAndPreview/TerminalOutput.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TestsAndPreview/TerminalOutput.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            activeViewMode === 'xterm' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: terminalRef,
                className: "w-full h-full min-h-[460px] p-space-sm overflow-hidden",
                style: {
                    backgroundColor: '#080f17'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/TestsAndPreview/TerminalOutput.tsx",
                lineNumber: 213,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : /* Rich Interactive View matching Stitch reference precisely */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: interactiveScrollRef,
                className: "w-full flex-1 min-h-[460px] max-h-[580px] overflow-y-auto p-3 font-mono text-[12px] leading-relaxed selection:bg-surface-container-highest",
                children: filteredLogs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full flex flex-col items-center justify-center text-outline text-xs gap-2 py-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "No logs found matching current filter."
                        }, void 0, false, {
                            fileName: "[project]/src/components/TestsAndPreview/TerminalOutput.tsx",
                            lineNumber: 226,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[11px] text-outline/60",
                            children: [
                                "Category: ",
                                activeCategory,
                                ' | Search: "',
                                filterText,
                                '"'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/TestsAndPreview/TerminalOutput.tsx",
                            lineNumber: 227,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/TestsAndPreview/TerminalOutput.tsx",
                    lineNumber: 225,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-1.5",
                    children: filteredLogs.map((line, idx)=>{
                        const lineNum = String(idx + 1).padStart(2, '0');
                        const isFail = line.tag === 'fail';
                        const isPass = line.tag === 'pass';
                        const isWarn = line.tag === 'warn';
                        const isTest = line.tag === 'test';
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex flex-col rounded px-2 py-1 transition-colors ${isFail ? 'bg-red-950/20 border-l-2 border-red-500' : isPass ? 'hover:bg-surface-container-low/40' : 'hover:bg-surface-container-low/30'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-2.5 flex-wrap sm:flex-nowrap",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-outline/50 select-none text-[11px] w-6 shrink-0 text-right",
                                            children: lineNum
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TestsAndPreview/TerminalOutput.tsx",
                                            lineNumber: 253,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-outline/70 select-none text-[11px] shrink-0",
                                            children: [
                                                "[",
                                                line.timestamp,
                                                "]"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/TestsAndPreview/TerminalOutput.tsx",
                                            lineNumber: 258,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-[10px] uppercase font-bold px-1.5 py-0.2 rounded shrink-0 select-none ${isFail ? 'bg-red-500/20 text-red-400 border border-red-500/30' : isPass ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : isWarn ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : isTest ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'bg-surface-container-high text-outline'}`,
                                            children: [
                                                "[",
                                                line.tag,
                                                "]"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/TestsAndPreview/TerminalOutput.tsx",
                                            lineNumber: 263,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `font-mono break-all ${isFail ? 'text-red-300 font-semibold' : isPass ? 'text-emerald-300' : isWarn ? 'text-amber-300' : isTest ? 'text-cyan-300' : 'text-on-surface'}`,
                                            children: line.content
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TestsAndPreview/TerminalOutput.tsx",
                                            lineNumber: 280,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/TestsAndPreview/TerminalOutput.tsx",
                                    lineNumber: 251,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                line.details && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ml-8 sm:ml-12 my-2 p-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/30 text-xs font-mono flex flex-col gap-1.5 shadow-xs",
                                    children: [
                                        line.details.expected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-0.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] text-outline",
                                                    children: [
                                                        "Expected: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-emerald-400",
                                                            children: line.details.expected
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/TestsAndPreview/TerminalOutput.tsx",
                                                            lineNumber: 303,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/TestsAndPreview/TerminalOutput.tsx",
                                                    lineNumber: 302,
                                                    columnNumber: 29
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] text-outline",
                                                    children: [
                                                        "Actual: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-400",
                                                            children: line.details.actual
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/TestsAndPreview/TerminalOutput.tsx",
                                                            lineNumber: 306,
                                                            columnNumber: 39
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/TestsAndPreview/TerminalOutput.tsx",
                                                    lineNumber: 305,
                                                    columnNumber: 29
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/TestsAndPreview/TerminalOutput.tsx",
                                            lineNumber: 301,
                                            columnNumber: 27
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-2 rounded bg-[#04080e] border border-outline-variant/20 flex flex-col gap-0.5 text-[11px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] uppercase tracking-wider text-outline select-none",
                                                    children: "Inline Diff:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TestsAndPreview/TerminalOutput.tsx",
                                                    lineNumber: 312,
                                                    columnNumber: 27
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-400 font-bold bg-red-950/40 px-1 py-0.5 rounded",
                                                    children: [
                                                        "- [",
                                                        line.details.expected,
                                                        "]"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/TestsAndPreview/TerminalOutput.tsx",
                                                    lineNumber: 315,
                                                    columnNumber: 27
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-emerald-400 font-bold bg-emerald-950/40 px-1 py-0.5 rounded",
                                                    children: [
                                                        "+ [",
                                                        line.details.actual,
                                                        "]"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/TestsAndPreview/TerminalOutput.tsx",
                                                    lineNumber: 318,
                                                    columnNumber: 27
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/TestsAndPreview/TerminalOutput.tsx",
                                            lineNumber: 311,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        line.details.location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11px] text-outline flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-400",
                                                    children: "↗"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TestsAndPreview/TerminalOutput.tsx",
                                                    lineNumber: 325,
                                                    columnNumber: 29
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " at ",
                                                line.details.location
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/TestsAndPreview/TerminalOutput.tsx",
                                            lineNumber: 324,
                                            columnNumber: 27
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/TestsAndPreview/TerminalOutput.tsx",
                                    lineNumber: 299,
                                    columnNumber: 23
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, line.id || idx, true, {
                            fileName: "[project]/src/components/TestsAndPreview/TerminalOutput.tsx",
                            lineNumber: 241,
                            columnNumber: 19
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/TestsAndPreview/TerminalOutput.tsx",
                    lineNumber: 232,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/TestsAndPreview/TerminalOutput.tsx",
                lineNumber: 220,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-3 py-2 bg-surface-container-high/60 border-t border-outline-variant/20 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-outline select-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Showing lines 1-",
                                    filteredLogs.length,
                                    " of ",
                                    logs.length
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TestsAndPreview/TerminalOutput.tsx",
                                lineNumber: 341,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-outline-variant",
                                children: "|"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TestsAndPreview/TerminalOutput.tsx",
                                lineNumber: 344,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Buffer: ",
                                    totalBufferSizeKb,
                                    " KB"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TestsAndPreview/TerminalOutput.tsx",
                                lineNumber: 345,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-outline-variant",
                                children: "|"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TestsAndPreview/TerminalOutput.tsx",
                                lineNumber: 346,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "UTF-8"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TestsAndPreview/TerminalOutput.tsx",
                                lineNumber: 347,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TestsAndPreview/TerminalOutput.tsx",
                        lineNumber: 340,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1.5 text-outline",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-3.5 h-3.5 text-outline",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "3",
                                            y: "11",
                                            width: "18",
                                            height: "11",
                                            rx: "2",
                                            ry: "2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TestsAndPreview/TerminalOutput.tsx",
                                            lineNumber: 361,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M7 11V7a5 5 0 0 1 10 0v4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TestsAndPreview/TerminalOutput.tsx",
                                            lineNumber: 362,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/TestsAndPreview/TerminalOutput.tsx",
                                    lineNumber: 352,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Read-only stream"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TestsAndPreview/TerminalOutput.tsx",
                                    lineNumber: 364,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/TestsAndPreview/TerminalOutput.tsx",
                            lineNumber: 351,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/TestsAndPreview/TerminalOutput.tsx",
                        lineNumber: 350,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TestsAndPreview/TerminalOutput.tsx",
                lineNumber: 339,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TestsAndPreview/TerminalOutput.tsx",
        lineNumber: 183,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TerminalOutput, "k4hleJmNFrXhpAIehcysgCLQaxs=");
_c = TerminalOutput;
var _c;
__turbopack_context__.k.register(_c, "TerminalOutput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/TestsAndPreview/TestResultsPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TestResultsPanel",
    ()=>TestResultsPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const TestResultsPanel = ({ testCases, summary, onNavigateToDiff, isSkeleton = false })=>{
    _s();
    const [activeFilter, setActiveFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [downloadingXml, setDownloadingXml] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const filteredTests = testCases.filter((tc)=>{
        if (activeFilter === 'failed') return tc.status === 'failed';
        if (activeFilter === 'passed') return tc.status === 'passed';
        return true;
    });
    const failedCount = testCases.filter((tc)=>tc.status === 'failed').length;
    const passedCount = testCases.filter((tc)=>tc.status === 'passed').length;
    const handleDownloadJunitXml = ()=>{
        setDownloadingXml(true);
        // Generate a clean JUnit XML string client-side from real/preview test data
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<testsuite name="MiniDevin.SandboxSuite" tests="${summary.totalTests}" failures="${summary.failedCount}" skipped="${summary.skippedCount}" time="${summary.durationSec}">
${testCases.map((tc)=>`  <testcase name="${tc.name}" classname="${tc.filePath}" time="${(tc.durationMs / 1000).toFixed(3)}">
${tc.status === 'failed' ? `    <failure message="${tc.assertionError || 'Test failed'}">${tc.description || ''}</failure>` : ''}${tc.status === 'skipped' ? '    <skipped/>' : ''}
  </testcase>`).join('\n')}
</testsuite>`;
        const blob = new Blob([
            xml
        ], {
            type: 'application/xml'
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `junit-results-${summary.status.toLowerCase()}.xml`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        setTimeout(()=>setDownloadingXml(false), 1500);
    };
    if (isSkeleton) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col rounded-xl bg-surface-container-low border border-outline-variant/30 overflow-hidden p-space-md gap-3 animate-pulse",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-6 bg-surface-container-high rounded w-1/2"
                }, void 0, false, {
                    fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-8 bg-surface-container-high rounded w-full"
                }, void 0, false, {
                    fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-20 bg-surface-container-high rounded w-full"
                }, void 0, false, {
                    fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-20 bg-surface-container-high rounded w-full"
                }, void 0, false, {
                    fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-12 bg-surface-container-high rounded w-full"
                }, void 0, false, {
                    fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
            lineNumber: 64,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full rounded-xl bg-surface-container-low border border-outline-variant/30 overflow-hidden shadow-xs",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-space-md py-3 bg-surface-container-high/60 border-b border-outline-variant/20 flex items-center justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-4 h-4 text-primary",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                        points: "14 2 14 8 20 8"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "16",
                                        y1: "13",
                                        x2: "8",
                                        y2: "13"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                        lineNumber: 90,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "16",
                                        y1: "17",
                                        x2: "8",
                                        y2: "17"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                        points: "10 9 9 9 8 9"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold text-xs tracking-tight text-on-surface",
                                children: "Test Results"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-1.5 py-0.2 rounded text-[11px] font-mono bg-surface-container text-primary font-bold",
                                children: testCases.length
                            }, void 0, false, {
                                fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: handleDownloadJunitXml,
                        disabled: downloadingXml,
                        className: "flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-highest border border-outline-variant/30 text-outline hover:text-on-surface text-[11px] font-mono transition-colors",
                        title: "Download JUnit XML test report",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-3.5 h-3.5",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                        points: "7 10 12 15 17 10"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                        lineNumber: 120,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "12",
                                        y1: "15",
                                        x2: "12",
                                        y2: "3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                        lineNumber: 121,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: downloadingXml ? 'Generating...' : 'JUnit XML'
                            }, void 0, false, {
                                fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-space-md py-2 border-b border-outline-variant/20 flex items-center gap-1.5 font-mono text-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setActiveFilter('all'),
                        className: `px-3 py-1 rounded-md transition-colors ${activeFilter === 'all' ? 'bg-surface-container-highest text-on-surface font-semibold border border-outline-variant/40' : 'text-outline hover:text-on-surface'}`,
                        children: [
                            "All (",
                            testCases.length,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setActiveFilter('failed'),
                        className: `flex items-center gap-1.5 px-3 py-1 rounded-md transition-colors ${activeFilter === 'failed' ? 'bg-red-500/20 text-red-400 font-bold border border-red-500/40' : 'text-outline hover:text-red-400'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Failed"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            failedCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-1.5 h-1.5 rounded-full bg-red-400 inline-block"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                lineNumber: 152,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "(",
                                    failedCount,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setActiveFilter('passed'),
                        className: `px-3 py-1 rounded-md transition-colors ${activeFilter === 'passed' ? 'bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/40' : 'text-outline hover:text-emerald-400'}`,
                        children: [
                            "Passed (",
                            passedCount,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto p-space-md flex flex-col gap-2.5 max-h-[580px]",
                children: filteredTests.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-12 flex flex-col items-center justify-center text-outline text-xs font-mono",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "No test cases in this view."
                    }, void 0, false, {
                        fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                        lineNumber: 174,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                    lineNumber: 173,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : filteredTests.map((tc)=>{
                    const isFailed = tc.status === 'failed';
                    const isPassed = tc.status === 'passed';
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `p-3 rounded-lg border transition-all ${isFailed ? 'bg-red-950/15 border-red-500/30' : isPassed ? 'bg-surface-container/60 border-outline-variant/20 hover:border-outline-variant/40' : 'bg-surface-container/40 border-outline-variant/20'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-2 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mt-0.5 shrink-0",
                                                children: isFailed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-4 h-4 text-red-400",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2.5",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            cx: "12",
                                                            cy: "12",
                                                            r: "10"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                                            lineNumber: 206,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                            x1: "15",
                                                            y1: "9",
                                                            x2: "9",
                                                            y2: "15"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                                            lineNumber: 207,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                            x1: "9",
                                                            y1: "9",
                                                            x2: "15",
                                                            y2: "15"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                                            lineNumber: 208,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)) : isPassed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-4 h-4 text-emerald-400",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2.5",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            cx: "12",
                                                            cy: "12",
                                                            r: "10"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                                            lineNumber: 220,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                            points: "9 12 11 14 15 10"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                                            lineNumber: 221,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                                    lineNumber: 211,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-4 h-4 text-outline",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            cx: "12",
                                                            cy: "12",
                                                            r: "10"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                                            lineNumber: 233,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                                            points: "10 8 16 12 10 16 10 8"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                                            lineNumber: 234,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                                    lineNumber: 224,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                                lineNumber: 195,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `text-xs font-mono font-bold break-all ${isFailed ? 'text-red-300' : 'text-on-surface'}`,
                                                        children: tc.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                                        lineNumber: 240,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[11px] font-mono text-outline truncate",
                                                        children: tc.filePath
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                                        lineNumber: 247,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                                lineNumber: 239,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                        lineNumber: 194,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "shrink-0 px-2 py-0.5 rounded text-[10px] font-mono bg-surface-container-high text-outline",
                                        children: [
                                            tc.durationMs,
                                            "ms"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                        lineNumber: 253,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                lineNumber: 193,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            isFailed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2.5 p-2.5 rounded bg-surface-container-lowest border border-red-500/25 flex flex-col gap-2 font-mono text-xs",
                                children: [
                                    tc.assertionError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-1.5 text-red-400 font-medium",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-4 h-4 shrink-0 mt-0.5",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "12",
                                                        cy: "12",
                                                        r: "10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                                        lineNumber: 272,
                                                        columnNumber: 27
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "12",
                                                        y1: "8",
                                                        x2: "12",
                                                        y2: "12"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                                        lineNumber: 273,
                                                        columnNumber: 27
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "12",
                                                        y1: "16",
                                                        x2: "12.01",
                                                        y2: "16"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                                        lineNumber: 274,
                                                        columnNumber: 27
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                                lineNumber: 263,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: tc.assertionError
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                                lineNumber: 276,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                        lineNumber: 262,
                                        columnNumber: 23
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    tc.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-outline leading-relaxed",
                                        children: tc.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                        lineNumber: 281,
                                        columnNumber: 23
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    tc.inlineDiff && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-2 rounded bg-[#04080e] border border-outline-variant/20 flex flex-col gap-0.5 text-[11px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] uppercase tracking-wider text-outline select-none",
                                                children: "Inline Diff:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                                lineNumber: 289,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-400 font-bold bg-red-950/40 px-1 py-0.5 rounded",
                                                children: [
                                                    "- [",
                                                    tc.inlineDiff.expected,
                                                    "]"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                                lineNumber: 292,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-emerald-400 font-bold bg-emerald-950/40 px-1 py-0.5 rounded",
                                                children: [
                                                    "+ [",
                                                    tc.inlineDiff.actual,
                                                    "]"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                                lineNumber: 295,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                        lineNumber: 288,
                                        columnNumber: 23
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between pt-1 border-t border-outline-variant/20 text-[11px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-outline truncate",
                                                children: tc.stackTraceLocation || tc.filePath
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                                lineNumber: 303,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            onNavigateToDiff && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>onNavigateToDiff(tc.targetFile),
                                                className: "flex items-center gap-1 text-primary hover:text-primary/80 font-bold hover:underline shrink-0 ml-2",
                                                title: "Open modified file in Diff Viewer (Task 6)",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Inspect in Diff"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                                        lineNumber: 314,
                                                        columnNumber: 27
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-3 h-3",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2.5",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                                                lineNumber: 324,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                points: "15 3 21 3 21 9"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                                                lineNumber: 325,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "10",
                                                                y1: "14",
                                                                x2: "21",
                                                                y2: "3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                                                lineNumber: 326,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                                        lineNumber: 315,
                                                        columnNumber: 27
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                                lineNumber: 308,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                        lineNumber: 302,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                lineNumber: 260,
                                columnNumber: 19
                            }, ("TURBOPACK compile-time value", void 0)),
                            tc.status === 'skipped' && tc.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1.5 text-[11px] font-mono text-outline italic",
                                children: tc.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                lineNumber: 336,
                                columnNumber: 19
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, tc.id, true, {
                        fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                        lineNumber: 182,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-space-md py-2.5 bg-surface-container-high/60 border-t border-outline-variant/20 flex flex-col gap-1.5 font-mono text-[11px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between text-outline",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Sandbox Isolation Status"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                lineNumber: 349,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-emerald-400 font-bold",
                                children: summary.isolationStatus
                            }, void 0, false, {
                                fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                lineNumber: 350,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                        lineNumber: 348,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full bg-surface-container h-1.5 rounded-full overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `h-full rounded-full ${summary.isolationStatus === 'Healthy' ? 'bg-emerald-400' : summary.isolationStatus === 'Degraded' ? 'bg-amber-400' : 'bg-red-400'}`,
                            style: {
                                width: '100%'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                            lineNumber: 355,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                        lineNumber: 354,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between text-outline/80 pt-0.5 text-[10px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Concurrency: ",
                                    summary.concurrency
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                lineNumber: 368,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Exit Code:",
                                    ' ',
                                    summary.exitCode === 0 ? '0 (success)' : summary.exitCode !== null ? `${summary.exitCode} (${summary.status.toLowerCase()})` : 'N/A'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                                lineNumber: 369,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                        lineNumber: 367,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
                lineNumber: 347,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TestsAndPreview/TestResultsPanel.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TestResultsPanel, "oTtXWpmnNls0Fr6we3FydHYYMSg=");
_c = TestResultsPanel;
var _c;
__turbopack_context__.k.register(_c, "TestResultsPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/TestsAndPreview/TestSummaryBanner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TestSummaryBanner",
    ()=>TestSummaryBanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const TestSummaryBanner = ({ summary, activePreviewState, onSelectPreviewState, isLiveStream, onToggleLiveStream })=>{
    const isRunning = summary.status === 'RUNNING';
    const isPassed = summary.status === 'PASSED';
    const isFailed = summary.status === 'FAILED';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-surface-container-low border border-outline-variant/30 text-xs font-mono",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 flex-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `w-2.5 h-2.5 rounded-full ${isRunning ? 'bg-blue-400 animate-pulse' : isPassed ? 'bg-emerald-400' : isFailed ? 'bg-red-400' : 'bg-outline'}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/TestsAndPreview/TestSummaryBanner.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold text-on-surface tracking-wide",
                                children: [
                                    "SUITE STATUS: ",
                                    summary.status
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TestsAndPreview/TestSummaryBanner.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-outline",
                                children: [
                                    "(",
                                    summary.executedTests,
                                    "/",
                                    summary.totalTests,
                                    " tests executed)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TestsAndPreview/TestSummaryBanner.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TestsAndPreview/TestSummaryBanner.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 flex-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 font-semibold",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-3.5 h-3.5 text-emerald-400",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2.5",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                            points: "20 6 9 17 4 12"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TestsAndPreview/TestSummaryBanner.tsx",
                                            lineNumber: 63,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TestsAndPreview/TestSummaryBanner.tsx",
                                        lineNumber: 54,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            summary.passedCount,
                                            " PASSED"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TestsAndPreview/TestSummaryBanner.tsx",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TestsAndPreview/TestSummaryBanner.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex items-center gap-1.5 px-2.5 py-1 rounded-md font-semibold ${summary.failedCount > 0 ? 'bg-red-500/15 border border-red-500/30 text-red-400' : 'bg-surface-container border border-outline-variant/20 text-outline'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-3.5 h-3.5",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2.5",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "18",
                                                y1: "6",
                                                x2: "6",
                                                y2: "18"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TestsAndPreview/TestSummaryBanner.tsx",
                                                lineNumber: 85,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "6",
                                                y1: "6",
                                                x2: "18",
                                                y2: "18"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TestsAndPreview/TestSummaryBanner.tsx",
                                                lineNumber: 86,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TestsAndPreview/TestSummaryBanner.tsx",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            summary.failedCount,
                                            " FAILED"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TestsAndPreview/TestSummaryBanner.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TestsAndPreview/TestSummaryBanner.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface-container border border-outline-variant/20 text-outline font-semibold",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-3.5 h-3.5",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                                points: "5 4 15 12 5 20 5 4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TestsAndPreview/TestSummaryBanner.tsx",
                                                lineNumber: 102,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "19",
                                                y1: "5",
                                                x2: "19",
                                                y2: "19"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TestsAndPreview/TestSummaryBanner.tsx",
                                                lineNumber: 103,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TestsAndPreview/TestSummaryBanner.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            summary.skippedCount,
                                            " SKIPPED"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TestsAndPreview/TestSummaryBanner.tsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TestsAndPreview/TestSummaryBanner.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 text-outline",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-3.5 h-3.5",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "12",
                                                cy: "12",
                                                r: "10"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TestsAndPreview/TestSummaryBanner.tsx",
                                                lineNumber: 119,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                points: "12 6 12 12 16 14"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TestsAndPreview/TestSummaryBanner.tsx",
                                                lineNumber: 120,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TestsAndPreview/TestSummaryBanner.tsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            summary.durationSec,
                                            "s"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TestsAndPreview/TestSummaryBanner.tsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TestsAndPreview/TestSummaryBanner.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TestsAndPreview/TestSummaryBanner.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TestsAndPreview/TestSummaryBanner.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-between gap-2 px-1 text-xs font-mono",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 flex-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px] uppercase tracking-wider text-outline font-bold",
                                children: "PREVIEW STATES:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TestsAndPreview/TestSummaryBanner.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex rounded-lg bg-surface-container-high p-0.5 border border-outline-variant/30 flex-wrap",
                                children: [
                                    'running',
                                    'passed',
                                    'failed',
                                    'skeleton',
                                    'offline'
                                ].map((st)=>{
                                    const isActive = activePreviewState === st;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>onSelectPreviewState(st),
                                        className: `px-2.5 py-0.5 rounded text-[11px] capitalize transition-colors ${isActive ? 'bg-primary-container text-on-primary-container font-bold shadow-xs' : 'text-outline hover:text-on-surface'}`,
                                        children: st
                                    }, st, false, {
                                        fileName: "[project]/src/components/TestsAndPreview/TestSummaryBanner.tsx",
                                        lineNumber: 138,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0));
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/TestsAndPreview/TestSummaryBanner.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TestsAndPreview/TestSummaryBanner.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onToggleLiveStream,
                            className: `flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono border transition-colors ${isLiveStream ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40 font-semibold' : 'bg-surface-container text-outline hover:text-on-surface border-outline-variant/30'}`,
                            title: "Toggle between Live WebSocket Client stream and Static Preview states",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `w-2 h-2 rounded-full ${isLiveStream ? 'bg-emerald-400 animate-pulse' : 'bg-outline'}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TestsAndPreview/TestSummaryBanner.tsx",
                                    lineNumber: 168,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: isLiveStream ? 'Live WebSocket Hook: ON' : 'Preview State Fixtures'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TestsAndPreview/TestSummaryBanner.tsx",
                                    lineNumber: 173,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/TestsAndPreview/TestSummaryBanner.tsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/TestsAndPreview/TestSummaryBanner.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TestsAndPreview/TestSummaryBanner.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TestsAndPreview/TestSummaryBanner.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = TestSummaryBanner;
var _c;
__turbopack_context__.k.register(_c, "TestSummaryBanner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/TestsAndPreview/TestsAndPreview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TestsAndPreview",
    ()=>TestsAndPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAgentRunSocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useAgentRunSocket.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TestsAndPreview$2f$SandboxMetaHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TestsAndPreview/SandboxMetaHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TestsAndPreview$2f$TestSummaryBanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TestsAndPreview/TestSummaryBanner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TestsAndPreview$2f$ExecutionLogControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TestsAndPreview/ExecutionLogControls.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TestsAndPreview$2f$TerminalOutput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TestsAndPreview/TerminalOutput.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TestsAndPreview$2f$TestResultsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TestsAndPreview/TestResultsPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TestsAndPreview$2f$testsAndPreviewUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TestsAndPreview/testsAndPreviewUtils.ts [app-client] (ecmascript)");
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
const TestsAndPreview = ({ runId = 'run-8924a', onNavigateToDiff })=>{
    _s();
    // Mode toggle: Live Hook vs Preview State
    const [isLiveStream, setIsLiveStream] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activePreviewState, setActivePreviewState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('running');
    // Controls state
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [filterText, setFilterText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [autoScroll, setAutoScroll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [clearedBuffer, setClearedBuffer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Consume Task 3 WebSocket Client hook
    const { connectionState, events: liveEvents, telemetry, clearBuffer: clearSocketBuffer, error: socketError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAgentRunSocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAgentRunSocket"])(runId, {
        autoConnect: true,
        bufferCap: 500
    });
    const targetUri = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAgentRunSocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWebSocketUri"])(runId);
    // Derive active summary, test cases, and logs based on mode
    const currentSummary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TestsAndPreview.useMemo[currentSummary]": ()=>{
            if (isLiveStream) {
                if (connectionState === 'DISCONNECTED') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TestsAndPreview$2f$testsAndPreviewUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OFFLINE_SUMMARY"];
                return {
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TestsAndPreview$2f$testsAndPreviewUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RUNNING_SUMMARY"],
                    status: connectionState === 'CONNECTED' ? 'RUNNING' : 'OFFLINE',
                    executedTests: liveEvents.length
                };
            }
            switch(activePreviewState){
                case 'passed':
                    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TestsAndPreview$2f$testsAndPreviewUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PASSED_SUMMARY"];
                case 'failed':
                    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TestsAndPreview$2f$testsAndPreviewUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FAILED_SUMMARY"];
                case 'offline':
                    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TestsAndPreview$2f$testsAndPreviewUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OFFLINE_SUMMARY"];
                case 'skeleton':
                    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TestsAndPreview$2f$testsAndPreviewUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RUNNING_SUMMARY"];
                case 'running':
                default:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TestsAndPreview$2f$testsAndPreviewUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RUNNING_SUMMARY"];
            }
        }
    }["TestsAndPreview.useMemo[currentSummary]"], [
        isLiveStream,
        connectionState,
        liveEvents.length,
        activePreviewState
    ]);
    const currentTestCases = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TestsAndPreview.useMemo[currentTestCases]": ()=>{
            if (isLiveStream) {
                // In live stream mode, real test results schema is currently a contract gap
                return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TestsAndPreview$2f$testsAndPreviewUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RUNNING_TEST_CASES"];
            }
            switch(activePreviewState){
                case 'passed':
                    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TestsAndPreview$2f$testsAndPreviewUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PASSED_TEST_CASES"];
                case 'failed':
                    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TestsAndPreview$2f$testsAndPreviewUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FAILED_TEST_CASES"];
                case 'offline':
                    return [];
                case 'skeleton':
                    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TestsAndPreview$2f$testsAndPreviewUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RUNNING_TEST_CASES"];
                case 'running':
                default:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TestsAndPreview$2f$testsAndPreviewUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RUNNING_TEST_CASES"];
            }
        }
    }["TestsAndPreview.useMemo[currentTestCases]"], [
        isLiveStream,
        activePreviewState
    ]);
    const baseLogs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TestsAndPreview.useMemo[baseLogs]": ()=>{
            if (isLiveStream) {
                // Map live WebSocket events into readable terminal log lines
                if (liveEvents.length === 0) {
                    return [
                        {
                            id: 'ws-init',
                            timestamp: new Date().toLocaleTimeString(),
                            tag: 'info',
                            category: 'stdout',
                            content: `Connected to ${targetUri}. Awaiting sandbox execution stream...`
                        }
                    ];
                }
                return liveEvents.map({
                    "TestsAndPreview.useMemo[baseLogs]": (evt, idx)=>{
                        const time = evt.timestamp ? new Date(evt.timestamp).toLocaleTimeString() : new Date().toLocaleTimeString();
                        const tag = evt.eventType === 'failed' ? 'fail' : evt.eventType === 'completed' ? 'pass' : evt.eventType === 'tool_call' ? 'test' : 'info';
                        return {
                            id: evt.id || `evt-${idx}`,
                            timestamp: time,
                            tag,
                            category: tag === 'fail' ? 'stderr' : tag === 'test' ? 'test_runner' : 'stdout',
                            content: `${evt.agent ? `[${evt.agent}] ` : ''}${evt.tool ? `tool: ${evt.tool} - ` : ''}${JSON.stringify(evt.payload || evt.raw || '')}`
                        };
                    }
                }["TestsAndPreview.useMemo[baseLogs]"]);
            }
            switch(activePreviewState){
                case 'passed':
                    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TestsAndPreview$2f$testsAndPreviewUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PASSED_LOGS"];
                case 'failed':
                    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TestsAndPreview$2f$testsAndPreviewUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FAILED_LOGS"];
                case 'offline':
                    return [];
                case 'skeleton':
                    return [];
                case 'running':
                default:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TestsAndPreview$2f$testsAndPreviewUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RUNNING_LOGS"];
            }
        }
    }["TestsAndPreview.useMemo[baseLogs]"], [
        isLiveStream,
        liveEvents,
        targetUri,
        activePreviewState
    ]);
    const activeLogs = clearedBuffer ? [] : baseLogs;
    // Category counts
    const categoryCounts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TestsAndPreview.useMemo[categoryCounts]": ()=>{
            let stdout = 0;
            let stderr = 0;
            let test_runner = 0;
            activeLogs.forEach({
                "TestsAndPreview.useMemo[categoryCounts]": (l)=>{
                    if (l.category === 'stdout') stdout++;
                    if (l.category === 'stderr') stderr++;
                    if (l.category === 'test_runner') test_runner++;
                }
            }["TestsAndPreview.useMemo[categoryCounts]"]);
            return {
                all: activeLogs.length,
                stdout,
                stderr,
                test_runner
            };
        }
    }["TestsAndPreview.useMemo[categoryCounts]"], [
        activeLogs
    ]);
    // Local clear
    const handleClear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TestsAndPreview.useCallback[handleClear]": ()=>{
            setClearedBuffer(true);
            if (isLiveStream) {
                clearSocketBuffer();
            }
        }
    }["TestsAndPreview.useCallback[handleClear]"], [
        isLiveStream,
        clearSocketBuffer
    ]);
    // Copy to clipboard
    const handleCopyLogs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TestsAndPreview.useCallback[handleCopyLogs]": ()=>{
            const text = activeLogs.map({
                "TestsAndPreview.useCallback[handleCopyLogs].text": (l)=>`[${l.timestamp}] [${l.tag.toUpperCase()}] ${l.content}`
            }["TestsAndPreview.useCallback[handleCopyLogs].text"]).join('\n');
            navigator.clipboard.writeText(text);
        }
    }["TestsAndPreview.useCallback[handleCopyLogs]"], [
        activeLogs
    ]);
    // Reset clear buffer state when switching preview states or logs
    const handleSelectPreviewState = (st)=>{
        setActivePreviewState(st);
        setClearedBuffer(false);
    };
    const isSkeleton = !isLiveStream && activePreviewState === 'skeleton';
    const isOffline = !isLiveStream && activePreviewState === 'offline' || isLiveStream && connectionState === 'DISCONNECTED';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-space-lg w-full max-w-[1600px] mx-auto p-space-md sm:p-space-lg animate-fadeIn",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TestsAndPreview$2f$SandboxMetaHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SandboxMetaHeader"], {
                runId: runId,
                summary: currentSummary
            }, void 0, false, {
                fileName: "[project]/src/components/TestsAndPreview/TestsAndPreview.tsx",
                lineNumber: 213,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TestsAndPreview$2f$TestSummaryBanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TestSummaryBanner"], {
                summary: currentSummary,
                activePreviewState: activePreviewState,
                onSelectPreviewState: handleSelectPreviewState,
                isLiveStream: isLiveStream,
                onToggleLiveStream: ()=>{
                    setIsLiveStream((prev)=>!prev);
                    setClearedBuffer(false);
                }
            }, void 0, false, {
                fileName: "[project]/src/components/TestsAndPreview/TestsAndPreview.tsx",
                lineNumber: 216,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isOffline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-space-md rounded-xl bg-amber-950/20 border border-amber-500/30 text-amber-200 text-xs font-mono flex items-start gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-5 h-5 text-amber-400 shrink-0 mt-0.5",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "12",
                                cy: "12",
                                r: "10"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TestsAndPreview/TestsAndPreview.tsx",
                                lineNumber: 239,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "12",
                                y1: "8",
                                x2: "12",
                                y2: "12"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TestsAndPreview/TestsAndPreview.tsx",
                                lineNumber: 240,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "12",
                                y1: "16",
                                x2: "12.01",
                                y2: "16"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TestsAndPreview/TestsAndPreview.tsx",
                                lineNumber: 241,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TestsAndPreview/TestsAndPreview.tsx",
                        lineNumber: 230,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold text-amber-300",
                                children: "Sandbox Runner Offline / WebSocket Disconnected"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TestsAndPreview/TestsAndPreview.tsx",
                                lineNumber: 244,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px] text-amber-200/80 leading-relaxed",
                                children: [
                                    "Target endpoint: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        children: targetUri
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TestsAndPreview/TestsAndPreview.tsx",
                                        lineNumber: 248,
                                        columnNumber: 32
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " is unreachable. Ensure the backend FastAPI server and Docker sandbox are running. In the meantime, you can explore all interface states using the ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "PREVIEW STATES"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TestsAndPreview/TestsAndPreview.tsx",
                                        lineNumber: 250,
                                        columnNumber: 46
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " buttons above."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TestsAndPreview/TestsAndPreview.tsx",
                                lineNumber: 247,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            socketError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-amber-300/70",
                                children: [
                                    "Transport error: ",
                                    socketError.message
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TestsAndPreview/TestsAndPreview.tsx",
                                lineNumber: 253,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TestsAndPreview/TestsAndPreview.tsx",
                        lineNumber: 243,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TestsAndPreview/TestsAndPreview.tsx",
                lineNumber: 229,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-stretch",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-7 flex flex-col rounded-xl border border-outline-variant/30 overflow-hidden shadow-md bg-surface-container-low min-h-[520px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TestsAndPreview$2f$ExecutionLogControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExecutionLogControls"], {
                                activeCategory: activeCategory,
                                onSelectCategory: setActiveCategory,
                                categoryCounts: categoryCounts,
                                filterText: filterText,
                                onFilterChange: setFilterText,
                                autoScroll: autoScroll,
                                onToggleAutoScroll: ()=>setAutoScroll((prev)=>!prev),
                                onClear: handleClear,
                                onCopy: handleCopyLogs,
                                isLive: isLiveStream ? connectionState === 'CONNECTED' : activePreviewState === 'running'
                            }, void 0, false, {
                                fileName: "[project]/src/components/TestsAndPreview/TestsAndPreview.tsx",
                                lineNumber: 265,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TestsAndPreview$2f$TerminalOutput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TerminalOutput"], {
                                logs: activeLogs,
                                autoScroll: autoScroll,
                                filterText: filterText,
                                activeCategory: activeCategory,
                                isLive: isLiveStream ? connectionState === 'CONNECTED' : activePreviewState === 'running',
                                isSkeleton: isSkeleton
                            }, void 0, false, {
                                fileName: "[project]/src/components/TestsAndPreview/TestsAndPreview.tsx",
                                lineNumber: 278,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TestsAndPreview/TestsAndPreview.tsx",
                        lineNumber: 264,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-5 flex flex-col min-h-[520px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TestsAndPreview$2f$TestResultsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TestResultsPanel"], {
                            testCases: currentTestCases,
                            summary: currentSummary,
                            onNavigateToDiff: onNavigateToDiff,
                            isSkeleton: isSkeleton
                        }, void 0, false, {
                            fileName: "[project]/src/components/TestsAndPreview/TestsAndPreview.tsx",
                            lineNumber: 290,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/TestsAndPreview/TestsAndPreview.tsx",
                        lineNumber: 289,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TestsAndPreview/TestsAndPreview.tsx",
                lineNumber: 262,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TestsAndPreview/TestsAndPreview.tsx",
        lineNumber: 211,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TestsAndPreview, "HyeI2MKN0LPpCa0UgDYcjsY0WxQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAgentRunSocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAgentRunSocket"]
    ];
});
_c = TestsAndPreview;
var _c;
__turbopack_context__.k.register(_c, "TestsAndPreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/TestsAndPreview/index.tsx [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TestsAndPreview$2f$TestsAndPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TestsAndPreview/TestsAndPreview.tsx [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/TestsAndPreview/testsAndPreviewUtils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * TestsAndPreview Utility Types, Parsers, and Preview State Fixtures
 *
 * Implements Task 7 data structures and Stitch design specifications.
 * All preview fixtures are strictly quarantined for preview/demo modes.
 */ __turbopack_context__.s([
    "FAILED_LOGS",
    ()=>FAILED_LOGS,
    "FAILED_SUMMARY",
    ()=>FAILED_SUMMARY,
    "FAILED_TEST_CASES",
    ()=>FAILED_TEST_CASES,
    "OFFLINE_SUMMARY",
    ()=>OFFLINE_SUMMARY,
    "PASSED_LOGS",
    ()=>PASSED_LOGS,
    "PASSED_SUMMARY",
    ()=>PASSED_SUMMARY,
    "PASSED_TEST_CASES",
    ()=>PASSED_TEST_CASES,
    "RUNNING_LOGS",
    ()=>RUNNING_LOGS,
    "RUNNING_SUMMARY",
    ()=>RUNNING_SUMMARY,
    "RUNNING_TEST_CASES",
    ()=>RUNNING_TEST_CASES,
    "formatLogLineForXterm",
    ()=>formatLogLineForXterm
]);
const RUNNING_LOGS = [
    {
        id: 'log-01',
        timestamp: '10:42:01',
        tag: 'info',
        category: 'stdout',
        content: 'Bootstrapping Docker sandbox: ruby-3.2.2-slim with jemalloc allocator...'
    },
    {
        id: 'log-02',
        timestamp: '10:42:03',
        tag: 'info',
        category: 'stdout',
        content: 'Cloning octocat/linguist @ fix/parser-multibyte (commit 4b8d72e)...'
    },
    {
        id: 'log-03',
        timestamp: '10:42:04',
        tag: 'info',
        category: 'stdout',
        content: 'Applying AST patch to lib/linguist/tokenizer.rb (+28, -12 lines)...'
    },
    {
        id: 'log-04',
        timestamp: '10:42:05',
        tag: 'info',
        category: 'stdout',
        content: 'Running dependency audit: bundle install --frozen-lockfile (cache hit 2.1s)...'
    },
    {
        id: 'log-05',
        timestamp: '10:42:07',
        tag: 'test',
        category: 'test_runner',
        content: 'Starting Minitest runner suite (15 total tests, concurrency: 4 workers)...'
    },
    {
        id: 'log-06',
        timestamp: '10:42:08',
        tag: 'pass',
        category: 'test_runner',
        content: 'PASS test/test_basic_tokenization.rb (0.12s)'
    },
    {
        id: 'log-07',
        timestamp: '10:42:09',
        tag: 'pass',
        category: 'test_runner',
        content: 'PASS test/test_c_lexer_fallback.rb (0.24s)'
    },
    {
        id: 'log-08',
        timestamp: '10:42:10',
        tag: 'pass',
        category: 'test_runner',
        content: 'PASS test/test_shebang_heuristics.rb (0.08s)'
    },
    {
        id: 'log-09',
        timestamp: '10:42:11',
        tag: 'fail',
        category: 'stderr',
        content: 'FAIL test/tokenizer_test.rb:42:test_multibyte_utf8_boundary',
        details: {
            expected: '["\\u3053\\u3093\\u306B\\u306F", "world"]',
            actual: '["\\uFFFD\\uFFFD", "world"]',
            location: 'lib/linguist/tokenizer.rb:45:in `tokenize\''
        }
    },
    {
        id: 'log-10',
        timestamp: '10:42:13',
        tag: 'warn',
        category: 'stderr',
        content: 'WARN: Deprecated regexp flag /u ignored in modern Ruby 3.2 runtime context'
    },
    {
        id: 'log-11',
        timestamp: '10:42:14',
        tag: 'fail',
        category: 'stderr',
        content: 'FAIL test/test_json_benchmark.rb:18:test_payload_roundtrip\n      AssertionError: Tokenizer length mismatch: expected 148, got 146'
    },
    {
        id: 'log-12',
        timestamp: '10:42:15',
        tag: 'skip',
        category: 'test_runner',
        content: 'SKIP test/test_fixture_corpus.rb (flag --fast enabled)'
    },
    {
        id: 'log-13',
        timestamp: '10:42:16',
        tag: 'info',
        category: 'test_runner',
        content: '12 passed, 2 failed, 1 skipped in 14.82s'
    }
];
const PASSED_LOGS = [
    {
        id: 'pass-01',
        timestamp: '10:42:01',
        tag: 'info',
        category: 'stdout',
        content: 'Bootstrapping Docker sandbox: ruby-3.2.2-slim with jemalloc allocator...'
    },
    {
        id: 'pass-02',
        timestamp: '10:42:03',
        tag: 'info',
        category: 'stdout',
        content: 'Applying updated AST patch to lib/linguist/tokenizer.rb...'
    },
    {
        id: 'pass-03',
        timestamp: '10:42:06',
        tag: 'test',
        category: 'test_runner',
        content: 'Running Minitest suite with full UTF-8 codepoint regression assertions...'
    },
    {
        id: 'pass-04',
        timestamp: '10:42:08',
        tag: 'pass',
        category: 'test_runner',
        content: 'PASS test/tokenizer_test.rb:42:test_multibyte_utf8_boundary (0.04s)'
    },
    {
        id: 'pass-05',
        timestamp: '10:42:09',
        tag: 'pass',
        category: 'test_runner',
        content: 'PASS test/test_json_benchmark.rb:18:test_payload_roundtrip (0.02s)'
    },
    {
        id: 'pass-06',
        timestamp: '10:42:10',
        tag: 'pass',
        category: 'test_runner',
        content: 'PASS test/test_basic_tokenization.rb (0.11s)'
    },
    {
        id: 'pass-07',
        timestamp: '10:42:12',
        tag: 'info',
        category: 'test_runner',
        content: 'ALL 15 TESTS PASSED in 11.45s (Exit Code: 0). Verification gate cleared.'
    }
];
const FAILED_LOGS = [
    ...RUNNING_LOGS,
    {
        id: 'fail-01',
        timestamp: '10:42:18',
        tag: 'fail',
        category: 'stderr',
        content: 'ERROR: Test suite terminated with non-zero exit code (1). 2 regression tests failed.'
    },
    {
        id: 'fail-02',
        timestamp: '10:42:19',
        tag: 'warn',
        category: 'stderr',
        content: 'Sandbox container halted. Logs preserved for Debugger agent revision.'
    }
];
const RUNNING_TEST_CASES = [
    {
        id: 'tc-1',
        name: 'test_multibyte_utf8_boundary',
        status: 'failed',
        durationMs: 42,
        filePath: 'test/tokenizer_test.rb:42',
        assertionError: 'Expected token match for UTF-8 boundary',
        description: 'Multibyte characters were sliced mid-rune resulting in replacement chars \\uFFFD.',
        inlineDiff: {
            expected: '["\\u3053\\u3093\\u306B\\u306F", "world"]',
            actual: '["\\uFFFD\\uFFFD", "world"]'
        },
        stackTraceLocation: 'at lib/linguist/tokenizer.rb:45:in `tokenize\'',
        targetFile: 'lib/linguist/tokenizer.rb'
    },
    {
        id: 'tc-2',
        name: 'test_payload_roundtrip',
        status: 'failed',
        durationMs: 18,
        filePath: 'test/test_json_benchmark.rb:18',
        assertionError: 'AssertionError: Tokenizer length mismatch: expected 148, got 146',
        targetFile: 'lib/linguist/tokenizer.rb'
    },
    {
        id: 'tc-3',
        name: 'test_basic_tokenization',
        status: 'passed',
        durationMs: 120,
        filePath: 'test/test_basic_tokenization.rb'
    },
    {
        id: 'tc-4',
        name: 'test_c_lexer_fallback',
        status: 'passed',
        durationMs: 240,
        filePath: 'test/test_c_lexer_fallback.rb'
    },
    {
        id: 'tc-5',
        name: 'test_shebang_heuristics',
        status: 'passed',
        durationMs: 80,
        filePath: 'test/test_shebang_heuristics.rb'
    },
    {
        id: 'tc-6',
        name: 'test_fixture_corpus',
        status: 'skipped',
        durationMs: 0,
        filePath: 'test/test_fixture_corpus.rb',
        description: 'Skipped: --fast flag enabled'
    }
];
const PASSED_TEST_CASES = RUNNING_TEST_CASES.map(_c = (tc)=>({
        ...tc,
        status: tc.status === 'skipped' ? 'skipped' : 'passed',
        assertionError: undefined,
        inlineDiff: undefined,
        description: tc.status === 'skipped' ? tc.description : undefined
    }));
_c1 = PASSED_TEST_CASES;
const FAILED_TEST_CASES = RUNNING_TEST_CASES;
const RUNNING_SUMMARY = {
    status: 'RUNNING',
    totalTests: 15,
    executedTests: 15,
    passedCount: 12,
    failedCount: 2,
    skippedCount: 1,
    durationSec: 14.8,
    concurrency: '4/4',
    exitCode: 1,
    isolationStatus: 'Healthy',
    resourceLoadPercent: 38,
    memoryUsageMb: 412,
    sandboxVmId: 'sandbox-vm-e8a'
};
const PASSED_SUMMARY = {
    status: 'PASSED',
    totalTests: 15,
    executedTests: 15,
    passedCount: 14,
    failedCount: 0,
    skippedCount: 1,
    durationSec: 11.4,
    concurrency: '4/4',
    exitCode: 0,
    isolationStatus: 'Healthy',
    resourceLoadPercent: 24,
    memoryUsageMb: 380,
    sandboxVmId: 'sandbox-vm-e8a'
};
const FAILED_SUMMARY = {
    status: 'FAILED',
    totalTests: 15,
    executedTests: 15,
    passedCount: 12,
    failedCount: 2,
    skippedCount: 1,
    durationSec: 14.8,
    concurrency: '4/4',
    exitCode: 1,
    isolationStatus: 'Healthy',
    resourceLoadPercent: 42,
    memoryUsageMb: 430,
    sandboxVmId: 'sandbox-vm-e8a'
};
const OFFLINE_SUMMARY = {
    status: 'OFFLINE',
    totalTests: 0,
    executedTests: 0,
    passedCount: 0,
    failedCount: 0,
    skippedCount: 0,
    durationSec: 0,
    concurrency: '0/0',
    exitCode: null,
    isolationStatus: 'Offline',
    resourceLoadPercent: 0,
    memoryUsageMb: 0,
    sandboxVmId: 'none'
};
function formatLogLineForXterm(line, index) {
    const lineNum = String(index + 1).padStart(2, '0');
    const dim = '\x1b[90m';
    const reset = '\x1b[0m';
    const bold = '\x1b[1m';
    // Tag styling
    let tagColor = '\x1b[36m'; // cyan
    if (line.tag === 'pass') tagColor = '\x1b[32m'; // green
    if (line.tag === 'fail') tagColor = '\x1b[91m'; // bright red
    if (line.tag === 'warn') tagColor = '\x1b[33m'; // yellow
    if (line.tag === 'skip') tagColor = '\x1b[90m'; // gray
    let formatted = `${dim}${lineNum}${reset}  ${dim}[${line.timestamp}]${reset} ${tagColor}[${line.tag}]${reset} `;
    if (line.tag === 'fail') {
        formatted += `\x1b[91m${line.content}${reset}\r\n`;
        if (line.details) {
            if (line.details.expected && line.details.actual) {
                formatted += `      ${dim}Expected:${reset} \x1b[32m${line.details.expected}${reset}\r\n`;
                formatted += `      ${dim}Actual:  ${reset} \x1b[31m${line.details.actual}${reset}\r\n`;
                formatted += `      ${dim}Inline Diff:${reset}\r\n`;
                formatted += `      \x1b[31m- ${line.details.expected}\x1b[0m\r\n`;
                formatted += `      \x1b[32m+ ${line.details.actual}\x1b[0m\r\n`;
            }
            if (line.details.location) {
                formatted += `      ${dim}at ${line.details.location}${reset}\r\n`;
            }
        }
    } else if (line.tag === 'pass') {
        formatted += `\x1b[32m${line.content}${reset}\r\n`;
    } else if (line.tag === 'warn') {
        formatted += `\x1b[33m${line.content}${reset}\r\n`;
    } else if (line.tag === 'test') {
        formatted += `\x1b[36m${line.content}${reset}\r\n`;
    } else {
        formatted += `${line.content}\r\n`;
    }
    return formatted;
}
var _c, _c1;
__turbopack_context__.k.register(_c, "PASSED_TEST_CASES$RUNNING_TEST_CASES.map");
__turbopack_context__.k.register(_c1, "PASSED_TEST_CASES");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_TestsAndPreview_041--yp._.js.map