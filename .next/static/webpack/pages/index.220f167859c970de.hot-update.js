"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/Quadrado.jsx":
/*!********************************!*\
  !*** ./src/pages/Quadrado.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Quadrado; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Quadrado() {\n    _s();\n    const [sideA, setSideA] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [sideB, setSideB] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [area, setArea] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [perimeter, setPerimeter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const calculateAreaAndPerimeter = ()=>{\n        const parsedSideA = parseFloat(sideA);\n        const parsedSideB = parseFloat(sideB);\n        if (!isNaN(parsedSideA) && !isNaN(parsedSideB)) {\n            const calculatedArea = parsedSideA * parsedSideB;\n            const calculatedPerimeter = 2 * (parsedSideA + parsedSideB);\n            setArea(calculatedArea.toFixed(2));\n            setPerimeter(calculatedPerimeter.toFixed(2));\n        } else {\n            setArea(\"\");\n            setPerimeter(\"\");\n        }\n    };\n    const resetValues = ()=>{\n        setSideA(\"\");\n        setSideB(\"\");\n        setArea(\"\");\n        setPerimeter(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white p-4 shadow-lg rounded-lg\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-2xl mb-4\",\n                    children: \"\\xc1rea e Per\\xedmetro do Ret\\xe2ngulo\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"sideA\",\n                                    className: \"mr-2\",\n                                    children: \"Lado A:\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"number\",\n                                    id: \"sideA\",\n                                    className: \"border w-12 mb-2\",\n                                    value: sideA,\n                                    onChange: (e)=>setSideA(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 19\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center items-center h-40 w-40 bg-cyan-500\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                            lineNumber: 52,\n                            columnNumber: 19\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"sideB\",\n                                    className: \"mr-2 mt-24\",\n                                    children: \"Lado B:\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"number\",\n                                    id: \"sideB\",\n                                    className: \"border w-12\",\n                                    value: sideB,\n                                    onChange: (e)=>setSideB(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 19\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded\",\n                    onClick: calculateAreaAndPerimeter,\n                    children: \"Calcular\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                    lineNumber: 66,\n                    columnNumber: 17\n                }, this),\n                area && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"font-bold\",\n                            children: \"\\xc1rea:\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                            lineNumber: 74,\n                            columnNumber: 21\n                        }, this),\n                        \" \",\n                        area\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                    lineNumber: 73,\n                    columnNumber: 19\n                }, this),\n                perimeter && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"font-bold\",\n                            children: \"Per\\xedmetro:\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                            lineNumber: 79,\n                            columnNumber: 21\n                        }, this),\n                        \" \",\n                        perimeter\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                    lineNumber: 78,\n                    columnNumber: 19\n                }, this),\n                area && perimeter && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded\",\n                    onClick: resetValues,\n                    children: \"Limpar\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                    lineNumber: 83,\n                    columnNumber: 19\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n            lineNumber: 36,\n            columnNumber: 15\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n        lineNumber: 35,\n        columnNumber: 13\n    }, this);\n}\n_s(Quadrado, \"WkVy+HBQWGJON/LeHEYRmEweCf8=\");\n_c = Quadrado;\nvar _c;\n$RefreshReg$(_c, \"Quadrado\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvUXVhZHJhZG8uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFeUM7QUFFbEIsU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNJLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTSxNQUFNQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ1EsV0FBV0MsYUFBYSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNVSw0QkFBNEI7UUFDaEMsTUFBTUMsY0FBY0MsV0FBV1Y7UUFDL0IsTUFBTVcsY0FBY0QsV0FBV1I7UUFFL0IsSUFBSSxDQUFDVSxNQUFNSCxnQkFBZ0IsQ0FBQ0csTUFBTUQsY0FBYztZQUM5QyxNQUFNRSxpQkFBaUJKLGNBQWNFO1lBQ3JDLE1BQU1HLHNCQUFzQixJQUFLTCxDQUFBQSxjQUFjRSxXQUFVO1lBRXpETixRQUFRUSxlQUFlRSxRQUFRO1lBQy9CUixhQUFhTyxvQkFBb0JDLFFBQVE7UUFDM0MsT0FBTztZQUNMVixRQUFRO1lBQ1JFLGFBQWE7UUFDZjtJQUNGO0lBRUEsTUFBTVMsY0FBYztRQUNsQmYsU0FBUztRQUNURSxTQUFTO1FBQ1RFLFFBQVE7UUFDUkUsYUFBYTtJQUNmO0lBRUEscUJBQ0UsOERBQUNVO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBZ0I7Ozs7Ozs4QkFFOUIsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDRTtvQ0FBTUMsU0FBUTtvQ0FBUUgsV0FBVTs4Q0FBTzs7Ozs7OzhDQUd4Qyw4REFBQ0k7b0NBQ0NDLE1BQUs7b0NBQ0xDLElBQUc7b0NBQ0hOLFdBQVU7b0NBQ1ZPLE9BQU96QjtvQ0FDUDBCLFVBQVUsQ0FBQ0MsSUFBTTFCLFNBQVMwQixFQUFFQyxPQUFPSDs7Ozs7Ozs7Ozs7O3NDQUd2Qyw4REFBQ1I7NEJBQUlDLFdBQVU7Ozs7OztzQ0FDZiw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDRTtvQ0FBTUMsU0FBUTtvQ0FBUUgsV0FBVTs4Q0FBYTs7Ozs7OzhDQUc5Qyw4REFBQ0k7b0NBQ0NDLE1BQUs7b0NBQ0xDLElBQUc7b0NBQ0hOLFdBQVU7b0NBQ1ZPLE9BQU92QjtvQ0FDUHdCLFVBQVUsQ0FBQ0MsSUFBTXhCLFNBQVN3QixFQUFFQyxPQUFPSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUl6Qyw4REFBQ0k7b0JBQ0NYLFdBQVU7b0JBQ1ZZLFNBQVN0Qjs4QkFDVjs7Ozs7O2dCQUdBSixzQkFDQyw4REFBQ2E7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDYTs0QkFBS2IsV0FBVTtzQ0FBWTs7Ozs7O3dCQUFZO3dCQUFFZDs7Ozs7OztnQkFHN0NFLDJCQUNDLDhEQUFDVztvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNhOzRCQUFLYixXQUFVO3NDQUFZOzs7Ozs7d0JBQWlCO3dCQUFFWjs7Ozs7OztnQkFHbERGLFFBQVFFLDJCQUNQLDhEQUFDdUI7b0JBQ0NYLFdBQVU7b0JBQ1ZZLFNBQVNkOzhCQUNWOzs7Ozs7Ozs7Ozs7Ozs7OztBQU9YO0dBeEZ3QmpCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9RdWFkcmFkby5qc3g/NGQ2NSJdLCJzb3VyY2VzQ29udGVudCI6WyIgICAgIFxyXG4gICBcclxuICAgICAgICBpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVhZHJhZG8oKSB7XHJcbiAgICAgICAgICBjb25zdCBbc2lkZUEsIHNldFNpZGVBXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgICAgICAgIGNvbnN0IFtzaWRlQiwgc2V0U2lkZUJdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgICAgICAgY29uc3QgW2FyZWEsIHNldEFyZWFdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgICAgICAgY29uc3QgW3BlcmltZXRlciwgc2V0UGVyaW1ldGVyXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgICAgICBcclxuICAgICAgICAgIGNvbnN0IGNhbGN1bGF0ZUFyZWFBbmRQZXJpbWV0ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZFNpZGVBID0gcGFyc2VGbG9hdChzaWRlQSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZFNpZGVCID0gcGFyc2VGbG9hdChzaWRlQik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VkU2lkZUEpICYmICFpc05hTihwYXJzZWRTaWRlQikpIHtcclxuICAgICAgICAgICAgICBjb25zdCBjYWxjdWxhdGVkQXJlYSA9IHBhcnNlZFNpZGVBICogcGFyc2VkU2lkZUI7XHJcbiAgICAgICAgICAgICAgY29uc3QgY2FsY3VsYXRlZFBlcmltZXRlciA9IDIgKiAocGFyc2VkU2lkZUEgKyBwYXJzZWRTaWRlQik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgc2V0QXJlYShjYWxjdWxhdGVkQXJlYS50b0ZpeGVkKDIpKTtcclxuICAgICAgICAgICAgICBzZXRQZXJpbWV0ZXIoY2FsY3VsYXRlZFBlcmltZXRlci50b0ZpeGVkKDIpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBzZXRBcmVhKCcnKTtcclxuICAgICAgICAgICAgICBzZXRQZXJpbWV0ZXIoJycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgY29uc3QgcmVzZXRWYWx1ZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFNpZGVBKCcnKTtcclxuICAgICAgICAgICAgc2V0U2lkZUIoJycpO1xyXG4gICAgICAgICAgICBzZXRBcmVhKCcnKTtcclxuICAgICAgICAgICAgc2V0UGVyaW1ldGVyKCcnKTtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTQgc2hhZG93LWxnIHJvdW5kZWQtbGdcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtYi00XCI+w4FyZWEgZSBQZXLDrW1ldHJvIGRvIFJldMOibmd1bG88L2gxPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzaWRlQVwiIGNsYXNzTmFtZT1cIm1yLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIExhZG8gQTpcclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInNpZGVBXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciB3LTEyIG1iLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NpZGVBfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTaWRlQShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC00MCB3LTQwIGJnLWN5YW4tNTAwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2lkZUJcIiBjbGFzc05hbWU9XCJtci0yIG10LTI0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBMYWRvIEI6XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlQlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgdy0xMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2lkZUJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNpZGVCKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCBtdC0yIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2FsY3VsYXRlQXJlYUFuZFBlcmltZXRlcn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgQ2FsY3VsYXJcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAge2FyZWEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj7DgXJlYTo8L3NwYW4+IHthcmVhfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7cGVyaW1ldGVyICYmIChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+UGVyw61tZXRybzo8L3NwYW4+IHtwZXJpbWV0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIHthcmVhICYmIHBlcmltZXRlciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC00IGJnLWdyYXktNTAwIGhvdmVyOmJnLWdyYXktNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtyZXNldFZhbHVlc31cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIExpbXBhclxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgICJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlF1YWRyYWRvIiwic2lkZUEiLCJzZXRTaWRlQSIsInNpZGVCIiwic2V0U2lkZUIiLCJhcmVhIiwic2V0QXJlYSIsInBlcmltZXRlciIsInNldFBlcmltZXRlciIsImNhbGN1bGF0ZUFyZWFBbmRQZXJpbWV0ZXIiLCJwYXJzZWRTaWRlQSIsInBhcnNlRmxvYXQiLCJwYXJzZWRTaWRlQiIsImlzTmFOIiwiY2FsY3VsYXRlZEFyZWEiLCJjYWxjdWxhdGVkUGVyaW1ldGVyIiwidG9GaXhlZCIsInJlc2V0VmFsdWVzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/Quadrado.jsx\n"));

/***/ })

});