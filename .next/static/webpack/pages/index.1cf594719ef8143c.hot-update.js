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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Quadrado; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Quadrado() {\n    _s();\n    const [sideA, setSideA] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [sideB, setSideB] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [area, setArea] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [perimeter, setPerimeter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const calculateAreaAndPerimeter = ()=>{\n        const parsedSideA = parseFloat(sideA);\n        const parsedSideB = parseFloat(sideB);\n        if (!isNaN(parsedSideA) && !isNaN(parsedSideB)) {\n            const calculatedArea = parsedSideA * parsedSideB;\n            const calculatedPerimeter = 2 * (parsedSideA + parsedSideB);\n            setArea(calculatedArea.toFixed(2));\n            setPerimeter(calculatedPerimeter.toFixed(2));\n        } else {\n            setArea(\"\");\n            setPerimeter(\"\");\n        }\n    };\n    const resetValues = ()=>{\n        setSideA(\"\");\n        setSideB(\"\");\n        setArea(\"\");\n        setPerimeter(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white p-4 shadow-lg rounded-lg\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-2xl mb-4\",\n                    children: \"\\xc1rea e Per\\xedmetro do Ret\\xe2ngulo\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"sideA\",\n                                    className: \"mr-2\",\n                                    children: \"Lado A:\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"number\",\n                                    id: \"sideA\",\n                                    className: \"border w-12 mb-2\",\n                                    value: sideA,\n                                    onChange: (e)=>setSideA(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col justify-center items-center h-40 w-40 bg-cyan-500\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 19\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"sideB\",\n                                    className: \"mr-2 mt-36\",\n                                    children: \"Lado B:\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"number\",\n                                    id: \"sideB\",\n                                    className: \"border w-12\",\n                                    value: sideB,\n                                    onChange: (e)=>setSideB(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                            lineNumber: 55,\n                            columnNumber: 19\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded\",\n                    onClick: calculateAreaAndPerimeter,\n                    children: \"Calcular\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                    lineNumber: 68,\n                    columnNumber: 17\n                }, this),\n                area && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"font-bold\",\n                            children: \"\\xc1rea:\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                            lineNumber: 76,\n                            columnNumber: 21\n                        }, this),\n                        \" \",\n                        area\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                    lineNumber: 75,\n                    columnNumber: 19\n                }, this),\n                perimeter && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"font-bold\",\n                            children: \"Per\\xedmetro:\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                            lineNumber: 81,\n                            columnNumber: 21\n                        }, this),\n                        \" \",\n                        perimeter\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                    lineNumber: 80,\n                    columnNumber: 19\n                }, this),\n                area && perimeter && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded\",\n                    onClick: resetValues,\n                    children: \"Limpar\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                    lineNumber: 85,\n                    columnNumber: 19\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n            lineNumber: 36,\n            columnNumber: 15\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n        lineNumber: 35,\n        columnNumber: 13\n    }, this);\n}\n_s(Quadrado, \"WkVy+HBQWGJON/LeHEYRmEweCf8=\");\n_c = Quadrado;\nvar _c;\n$RefreshReg$(_c, \"Quadrado\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvUXVhZHJhZG8uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFeUM7QUFFbEIsU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNJLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTSxNQUFNQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ1EsV0FBV0MsYUFBYSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNVSw0QkFBNEI7UUFDaEMsTUFBTUMsY0FBY0MsV0FBV1Y7UUFDL0IsTUFBTVcsY0FBY0QsV0FBV1I7UUFFL0IsSUFBSSxDQUFDVSxNQUFNSCxnQkFBZ0IsQ0FBQ0csTUFBTUQsY0FBYztZQUM5QyxNQUFNRSxpQkFBaUJKLGNBQWNFO1lBQ3JDLE1BQU1HLHNCQUFzQixJQUFLTCxDQUFBQSxjQUFjRSxXQUFVO1lBRXpETixRQUFRUSxlQUFlRSxRQUFRO1lBQy9CUixhQUFhTyxvQkFBb0JDLFFBQVE7UUFDM0MsT0FBTztZQUNMVixRQUFRO1lBQ1JFLGFBQWE7UUFDZjtJQUNGO0lBRUEsTUFBTVMsY0FBYztRQUNsQmYsU0FBUztRQUNURSxTQUFTO1FBQ1RFLFFBQVE7UUFDUkUsYUFBYTtJQUNmO0lBRUEscUJBQ0UsOERBQUNVO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBZ0I7Ozs7Ozs4QkFFOUIsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUViLDhEQUFDRTtvQ0FBTUMsU0FBUTtvQ0FBUUgsV0FBVTs4Q0FBTzs7Ozs7OzhDQUd4Qyw4REFBQ0k7b0NBQ0NDLE1BQUs7b0NBQ0xDLElBQUc7b0NBQ0hOLFdBQVU7b0NBQ1ZPLE9BQU96QjtvQ0FDUDBCLFVBQVUsQ0FBQ0MsSUFBTTFCLFNBQVMwQixFQUFFQyxPQUFPSDs7Ozs7OzhDQUVyQyw4REFBQ1I7b0NBQUlDLFdBQVU7Ozs7Ozs7Ozs7OztzQ0FHakIsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0U7b0NBQU1DLFNBQVE7b0NBQVFILFdBQVU7OENBQWE7Ozs7Ozs4Q0FHOUMsOERBQUNJO29DQUNDQyxNQUFLO29DQUNMQyxJQUFHO29DQUNITixXQUFVO29DQUNWTyxPQUFPdkI7b0NBQ1B3QixVQUFVLENBQUNDLElBQU14QixTQUFTd0IsRUFBRUMsT0FBT0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFJekMsOERBQUNJO29CQUNDWCxXQUFVO29CQUNWWSxTQUFTdEI7OEJBQ1Y7Ozs7OztnQkFHQUosc0JBQ0MsOERBQUNhO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ2E7NEJBQUtiLFdBQVU7c0NBQVk7Ozs7Ozt3QkFBWTt3QkFBRWQ7Ozs7Ozs7Z0JBRzdDRSwyQkFDQyw4REFBQ1c7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDYTs0QkFBS2IsV0FBVTtzQ0FBWTs7Ozs7O3dCQUFpQjt3QkFBRVo7Ozs7Ozs7Z0JBR2xERixRQUFRRSwyQkFDUCw4REFBQ3VCO29CQUNDWCxXQUFVO29CQUNWWSxTQUFTZDs4QkFDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWDtHQTFGd0JqQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvUXVhZHJhZG8uanN4PzRkNjUiXSwic291cmNlc0NvbnRlbnQiOlsiICAgICBcclxuICAgXHJcbiAgICAgICAgaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFF1YWRyYWRvKCkge1xyXG4gICAgICAgICAgY29uc3QgW3NpZGVBLCBzZXRTaWRlQV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICAgICAgICBjb25zdCBbc2lkZUIsIHNldFNpZGVCXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgICAgICAgIGNvbnN0IFthcmVhLCBzZXRBcmVhXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgICAgICAgIGNvbnN0IFtwZXJpbWV0ZXIsIHNldFBlcmltZXRlcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICBjb25zdCBjYWxjdWxhdGVBcmVhQW5kUGVyaW1ldGVyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJzZWRTaWRlQSA9IHBhcnNlRmxvYXQoc2lkZUEpO1xyXG4gICAgICAgICAgICBjb25zdCBwYXJzZWRTaWRlQiA9IHBhcnNlRmxvYXQoc2lkZUIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlZFNpZGVBKSAmJiAhaXNOYU4ocGFyc2VkU2lkZUIpKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgY2FsY3VsYXRlZEFyZWEgPSBwYXJzZWRTaWRlQSAqIHBhcnNlZFNpZGVCO1xyXG4gICAgICAgICAgICAgIGNvbnN0IGNhbGN1bGF0ZWRQZXJpbWV0ZXIgPSAyICogKHBhcnNlZFNpZGVBICsgcGFyc2VkU2lkZUIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgIHNldEFyZWEoY2FsY3VsYXRlZEFyZWEudG9GaXhlZCgyKSk7XHJcbiAgICAgICAgICAgICAgc2V0UGVyaW1ldGVyKGNhbGN1bGF0ZWRQZXJpbWV0ZXIudG9GaXhlZCgyKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgc2V0QXJlYSgnJyk7XHJcbiAgICAgICAgICAgICAgc2V0UGVyaW1ldGVyKCcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICAgIGNvbnN0IHJlc2V0VmFsdWVzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRTaWRlQSgnJyk7XHJcbiAgICAgICAgICAgIHNldFNpZGVCKCcnKTtcclxuICAgICAgICAgICAgc2V0QXJlYSgnJyk7XHJcbiAgICAgICAgICAgIHNldFBlcmltZXRlcignJyk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC00IHNoYWRvdy1sZyByb3VuZGVkLWxnXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgbWItNFwiPsOBcmVhIGUgUGVyw61tZXRybyBkbyBSZXTDom5ndWxvPC9oMT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2lkZUFcIiBjbGFzc05hbWU9XCJtci0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBMYWRvIEE6XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaWRlQVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgdy0xMiBtYi0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzaWRlQX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2lkZUEoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLTQwIHctNDAgYmctY3lhbi01MDBcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNpZGVCXCIgY2xhc3NOYW1lPVwibXItMiBtdC0zNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgTGFkbyBCOlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2lkZUJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIHctMTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NpZGVCfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTaWRlQihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgbXQtMiBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NhbGN1bGF0ZUFyZWFBbmRQZXJpbWV0ZXJ9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIENhbGN1bGFyXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIHthcmVhICYmIChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+w4FyZWE6PC9zcGFuPiB7YXJlYX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAge3BlcmltZXRlciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPlBlcsOtbWV0cm86PC9zcGFuPiB7cGVyaW1ldGVyfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7YXJlYSAmJiBwZXJpbWV0ZXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNCBiZy1ncmF5LTUwMCBob3ZlcjpiZy1ncmF5LTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cmVzZXRWYWx1ZXN9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBMaW1wYXJcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJRdWFkcmFkbyIsInNpZGVBIiwic2V0U2lkZUEiLCJzaWRlQiIsInNldFNpZGVCIiwiYXJlYSIsInNldEFyZWEiLCJwZXJpbWV0ZXIiLCJzZXRQZXJpbWV0ZXIiLCJjYWxjdWxhdGVBcmVhQW5kUGVyaW1ldGVyIiwicGFyc2VkU2lkZUEiLCJwYXJzZUZsb2F0IiwicGFyc2VkU2lkZUIiLCJpc05hTiIsImNhbGN1bGF0ZWRBcmVhIiwiY2FsY3VsYXRlZFBlcmltZXRlciIsInRvRml4ZWQiLCJyZXNldFZhbHVlcyIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/Quadrado.jsx\n"));

/***/ })

});