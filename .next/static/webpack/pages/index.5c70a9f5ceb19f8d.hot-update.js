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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Quadrado; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Quadrado() {\n    _s();\n    const [sideA, setSideA] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [sideB, setSideB] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [area, setArea] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [perimeter, setPerimeter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const calculateAreaAndPerimeter = ()=>{\n        const parsedSideA = parseFloat(sideA);\n        const parsedSideB = parseFloat(sideB);\n        if (!isNaN(parsedSideA) && !isNaN(parsedSideB)) {\n            const calculatedArea = parsedSideA * parsedSideB;\n            const calculatedPerimeter = 2 * (parsedSideA + parsedSideB);\n            setArea(calculatedArea.toFixed(2));\n            setPerimeter(calculatedPerimeter.toFixed(2));\n        } else {\n            setArea(\"\");\n            setPerimeter(\"\");\n        }\n    };\n    const resetValues = ()=>{\n        setSideA(\"\");\n        setSideB(\"\");\n        setArea(\"\");\n        setPerimeter(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white p-4 shadow-lg rounded-lg\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-2xl mb-4\",\n                    children: \"\\xc1rea e Per\\xedmetro do Ret\\xe2ngulo\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center items-center h-40 w-40 bg-cyan-500\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"sideA\",\n                                    className: \"mr-2\",\n                                    children: \"Lado A:\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"number\",\n                                    id: \"sideA\",\n                                    className: \"border w-12 mb-2\",\n                                    value: sideA,\n                                    onChange: (e)=>setSideA(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"sideB\",\n                                    className: \"mr-2\",\n                                    children: \"Lado B:\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"number\",\n                                    id: \"sideB\",\n                                    className: \"border w-12\",\n                                    value: sideB,\n                                    onChange: (e)=>setSideB(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded\",\n                    onClick: calculateAreaAndPerimeter,\n                    children: \"Calcular\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this),\n                area && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"font-bold\",\n                            children: \"\\xc1rea:\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, this),\n                        \" \",\n                        area\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                    lineNumber: 70,\n                    columnNumber: 11\n                }, this),\n                perimeter && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"font-bold\",\n                            children: \"Per\\xedmetro:\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                            lineNumber: 76,\n                            columnNumber: 13\n                        }, this),\n                        \" \",\n                        perimeter\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                    lineNumber: 75,\n                    columnNumber: 11\n                }, this),\n                area && perimeter && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded\",\n                    onClick: resetValues,\n                    children: \"Limpar\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                    lineNumber: 80,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(Quadrado, \"WkVy+HBQWGJON/LeHEYRmEweCf8=\");\n_c = Quadrado;\nvar _c;\n$RefreshReg$(_c, \"Quadrado\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvUXVhZHJhZG8uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUM7QUFFbEIsU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNJLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTSxNQUFNQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ1EsV0FBV0MsYUFBYSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNVSw0QkFBNEI7UUFDaEMsTUFBTUMsY0FBY0MsV0FBV1Y7UUFDL0IsTUFBTVcsY0FBY0QsV0FBV1I7UUFFL0IsSUFBSSxDQUFDVSxNQUFNSCxnQkFBZ0IsQ0FBQ0csTUFBTUQsY0FBYztZQUM5QyxNQUFNRSxpQkFBaUJKLGNBQWNFO1lBQ3JDLE1BQU1HLHNCQUFzQixJQUFLTCxDQUFBQSxjQUFjRSxXQUFVO1lBRXpETixRQUFRUSxlQUFlRSxRQUFRO1lBQy9CUixhQUFhTyxvQkFBb0JDLFFBQVE7UUFDM0MsT0FBTztZQUNMVixRQUFRO1lBQ1JFLGFBQWE7UUFDZjtJQUNGO0lBRUEsTUFBTVMsY0FBYztRQUNsQmYsU0FBUztRQUNURSxTQUFTO1FBQ1RFLFFBQVE7UUFDUkUsYUFBYTtJQUNmO0lBRUEscUJBQ0UsOERBQUNVO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBZ0I7Ozs7Ozs4QkFDOUIsOERBQUNEO29CQUFJQyxXQUFVOzs7Ozs7OEJBQ2YsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDRTtvQ0FBTUMsU0FBUTtvQ0FBUUgsV0FBVTs4Q0FBTzs7Ozs7OzhDQUd4Qyw4REFBQ0k7b0NBQ0NDLE1BQUs7b0NBQ0xDLElBQUc7b0NBQ0hOLFdBQVU7b0NBQ1ZPLE9BQU96QjtvQ0FDUDBCLFVBQVUsQ0FBQ0MsSUFBTTFCLFNBQVMwQixFQUFFQyxPQUFPSDs7Ozs7Ozs7Ozs7O3NDQUd2Qyw4REFBQ1I7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDRTtvQ0FBTUMsU0FBUTtvQ0FBUUgsV0FBVTs4Q0FBTzs7Ozs7OzhDQUd4Qyw4REFBQ0k7b0NBQ0NDLE1BQUs7b0NBQ0xDLElBQUc7b0NBQ0hOLFdBQVU7b0NBQ1ZPLE9BQU92QjtvQ0FDUHdCLFVBQVUsQ0FBQ0MsSUFBTXhCLFNBQVN3QixFQUFFQyxPQUFPSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUl6Qyw4REFBQ0k7b0JBQ0NYLFdBQVU7b0JBQ1ZZLFNBQVN0Qjs4QkFDVjs7Ozs7O2dCQUdBSixzQkFDQyw4REFBQ2E7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDYTs0QkFBS2IsV0FBVTtzQ0FBWTs7Ozs7O3dCQUFZO3dCQUFFZDs7Ozs7OztnQkFHN0NFLDJCQUNDLDhEQUFDVztvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNhOzRCQUFLYixXQUFVO3NDQUFZOzs7Ozs7d0JBQWlCO3dCQUFFWjs7Ozs7OztnQkFHbERGLFFBQVFFLDJCQUNQLDhEQUFDdUI7b0JBQ0NYLFdBQVU7b0JBQ1ZZLFNBQVNkOzhCQUNWOzs7Ozs7Ozs7Ozs7Ozs7OztBQU9YO0dBdkZ3QmpCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9RdWFkcmFkby5qc3g/NGQ2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFF1YWRyYWRvKCkge1xyXG4gIGNvbnN0IFtzaWRlQSwgc2V0U2lkZUFdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtzaWRlQiwgc2V0U2lkZUJdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFthcmVhLCBzZXRBcmVhXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGVyaW1ldGVyLCBzZXRQZXJpbWV0ZXJdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBjYWxjdWxhdGVBcmVhQW5kUGVyaW1ldGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcGFyc2VkU2lkZUEgPSBwYXJzZUZsb2F0KHNpZGVBKTtcclxuICAgIGNvbnN0IHBhcnNlZFNpZGVCID0gcGFyc2VGbG9hdChzaWRlQik7XHJcblxyXG4gICAgaWYgKCFpc05hTihwYXJzZWRTaWRlQSkgJiYgIWlzTmFOKHBhcnNlZFNpZGVCKSkge1xyXG4gICAgICBjb25zdCBjYWxjdWxhdGVkQXJlYSA9IHBhcnNlZFNpZGVBICogcGFyc2VkU2lkZUI7XHJcbiAgICAgIGNvbnN0IGNhbGN1bGF0ZWRQZXJpbWV0ZXIgPSAyICogKHBhcnNlZFNpZGVBICsgcGFyc2VkU2lkZUIpO1xyXG5cclxuICAgICAgc2V0QXJlYShjYWxjdWxhdGVkQXJlYS50b0ZpeGVkKDIpKTtcclxuICAgICAgc2V0UGVyaW1ldGVyKGNhbGN1bGF0ZWRQZXJpbWV0ZXIudG9GaXhlZCgyKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRBcmVhKCcnKTtcclxuICAgICAgc2V0UGVyaW1ldGVyKCcnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCByZXNldFZhbHVlcyA9ICgpID0+IHtcclxuICAgIHNldFNpZGVBKCcnKTtcclxuICAgIHNldFNpZGVCKCcnKTtcclxuICAgIHNldEFyZWEoJycpO1xyXG4gICAgc2V0UGVyaW1ldGVyKCcnKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtNCBzaGFkb3ctbGcgcm91bmRlZC1sZ1wiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtYi00XCI+w4FyZWEgZSBQZXLDrW1ldHJvIGRvIFJldMOibmd1bG88L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC00MCB3LTQwIGJnLWN5YW4tNTAwXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBtYi00XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzaWRlQVwiIGNsYXNzTmFtZT1cIm1yLTJcIj5cclxuICAgICAgICAgICAgICBMYWRvIEE6XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgIGlkPVwic2lkZUFcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciB3LTEyIG1iLTJcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzaWRlQX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNpZGVBKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2lkZUJcIiBjbGFzc05hbWU9XCJtci0yXCI+XHJcbiAgICAgICAgICAgICAgTGFkbyBCOlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICBpZD1cInNpZGVCXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgdy0xMlwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3NpZGVCfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2lkZUIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgbXQtMiBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtjYWxjdWxhdGVBcmVhQW5kUGVyaW1ldGVyfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIENhbGN1bGFyXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAge2FyZWEgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPsOBcmVhOjwvc3Bhbj4ge2FyZWF9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtwZXJpbWV0ZXIgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPlBlcsOtbWV0cm86PC9zcGFuPiB7cGVyaW1ldGVyfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7YXJlYSAmJiBwZXJpbWV0ZXIgJiYgKFxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtdC00IGJnLWdyYXktNTAwIGhvdmVyOmJnLWdyYXktNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkXCJcclxuICAgICAgICAgICAgb25DbGljaz17cmVzZXRWYWx1ZXN9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIExpbXBhclxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlF1YWRyYWRvIiwic2lkZUEiLCJzZXRTaWRlQSIsInNpZGVCIiwic2V0U2lkZUIiLCJhcmVhIiwic2V0QXJlYSIsInBlcmltZXRlciIsInNldFBlcmltZXRlciIsImNhbGN1bGF0ZUFyZWFBbmRQZXJpbWV0ZXIiLCJwYXJzZWRTaWRlQSIsInBhcnNlRmxvYXQiLCJwYXJzZWRTaWRlQiIsImlzTmFOIiwiY2FsY3VsYXRlZEFyZWEiLCJjYWxjdWxhdGVkUGVyaW1ldGVyIiwidG9GaXhlZCIsInJlc2V0VmFsdWVzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/Quadrado.jsx\n"));

/***/ })

});