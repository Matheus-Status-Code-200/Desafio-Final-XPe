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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Quadrado; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Quadrado() {\n    _s();\n    const [sideA, setSideA] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [sideB, setSideB] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [area, setArea] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [perimeter, setPerimeter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const calculateAreaAndPerimeter = ()=>{\n        const parsedSideA = parseFloat(sideA);\n        const parsedSideB = parseFloat(sideB);\n        if (!isNaN(parsedSideA) && !isNaN(parsedSideB)) {\n            const calculatedArea = parsedSideA * parsedSideB;\n            const calculatedPerimeter = 2 * (parsedSideA + parsedSideB);\n            setArea(calculatedArea.toFixed(2));\n            setPerimeter(calculatedPerimeter.toFixed(2));\n        } else {\n            setArea(\"\");\n            setPerimeter(\"\");\n        }\n    };\n    const resetValues = ()=>{\n        setSideA(\"\");\n        setSideB(\"\");\n        setArea(\"\");\n        setPerimeter(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white p-4 shadow-lg rounded-lg\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-2xl mb-4\",\n                    children: \"\\xc1rea e Per\\xedmetro do Ret\\xe2ngulo\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"sideA\",\n                            className: \"mr-2\",\n                            children: \"Lado A:\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"number\",\n                            id: \"sideA\",\n                            className: \"border w-12 mr-2\",\n                            value: sideA,\n                            onChange: (e)=>setSideA(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center items-center h-40 w-40 bg-cyan-500\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                            lineNumber: 47,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"sideB\",\n                            className: \"mr-2\",\n                            children: \"Lado B:\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"number\",\n                            id: \"sideB\",\n                            className: \"border w-12 ml-2 mt-8\",\n                            value: sideB,\n                            onChange: (e)=>setSideB(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded\",\n                    onClick: calculateAreaAndPerimeter,\n                    children: \"Calcular\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this),\n                area && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"font-bold\",\n                            children: \"\\xc1rea:\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                            lineNumber: 68,\n                            columnNumber: 13\n                        }, this),\n                        \" \",\n                        area\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                    lineNumber: 67,\n                    columnNumber: 11\n                }, this),\n                perimeter && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"font-bold\",\n                            children: \"Per\\xedmetro:\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                            lineNumber: 73,\n                            columnNumber: 13\n                        }, this),\n                        \" \",\n                        perimeter\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                    lineNumber: 72,\n                    columnNumber: 11\n                }, this),\n                area && perimeter && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded\",\n                    onClick: resetValues,\n                    children: \"Limpar\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n                    lineNumber: 77,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\XPe materiais\\\\Bootcamp 01\\\\Desafio Final B_01\\\\calcular-areas\\\\src\\\\pages\\\\Quadrado.jsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(Quadrado, \"WkVy+HBQWGJON/LeHEYRmEweCf8=\");\n_c = Quadrado;\nvar _c;\n$RefreshReg$(_c, \"Quadrado\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvUXVhZHJhZG8uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUM7QUFFbEIsU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNJLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTSxNQUFNQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ1EsV0FBV0MsYUFBYSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNVSw0QkFBNEI7UUFDaEMsTUFBTUMsY0FBY0MsV0FBV1Y7UUFDL0IsTUFBTVcsY0FBY0QsV0FBV1I7UUFFL0IsSUFBSSxDQUFDVSxNQUFNSCxnQkFBZ0IsQ0FBQ0csTUFBTUQsY0FBYztZQUM5QyxNQUFNRSxpQkFBaUJKLGNBQWNFO1lBQ3JDLE1BQU1HLHNCQUFzQixJQUFLTCxDQUFBQSxjQUFjRSxXQUFVO1lBRXpETixRQUFRUSxlQUFlRSxRQUFRO1lBQy9CUixhQUFhTyxvQkFBb0JDLFFBQVE7UUFDM0MsT0FBTztZQUNMVixRQUFRO1lBQ1JFLGFBQWE7UUFDZjtJQUNGO0lBRUEsTUFBTVMsY0FBYztRQUNsQmYsU0FBUztRQUNURSxTQUFTO1FBQ1RFLFFBQVE7UUFDUkUsYUFBYTtJQUNmO0lBRUEscUJBQ0UsOERBQUNVO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBZ0I7Ozs7Ozs4QkFDOUIsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDZiw4REFBQ0U7NEJBQU1DLFNBQVE7NEJBQVFILFdBQVU7c0NBQU87Ozs7OztzQ0FHdEMsOERBQUNJOzRCQUNDQyxNQUFLOzRCQUNMQyxJQUFHOzRCQUNITixXQUFVOzRCQUNWTyxPQUFPekI7NEJBQ1AwQixVQUFVLENBQUNDLElBQU0xQixTQUFTMEIsRUFBRUMsT0FBT0g7Ozs7OztzQ0FFdkMsOERBQUNSOzRCQUFJQyxXQUFVOzs7Ozs7c0NBRWIsOERBQUNFOzRCQUFNQyxTQUFROzRCQUFRSCxXQUFVO3NDQUFPOzs7Ozs7c0NBR3hDLDhEQUFDSTs0QkFDQ0MsTUFBSzs0QkFDTEMsSUFBRzs0QkFDSE4sV0FBVTs0QkFDVk8sT0FBT3ZCOzRCQUNQd0IsVUFBVSxDQUFDQyxJQUFNeEIsU0FBU3dCLEVBQUVDLE9BQU9IOzs7Ozs7Ozs7Ozs7OEJBR3ZDLDhEQUFDSTtvQkFDQ1gsV0FBVTtvQkFDVlksU0FBU3RCOzhCQUNWOzs7Ozs7Z0JBR0FKLHNCQUNDLDhEQUFDYTtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNhOzRCQUFLYixXQUFVO3NDQUFZOzs7Ozs7d0JBQVk7d0JBQUVkOzs7Ozs7O2dCQUc3Q0UsMkJBQ0MsOERBQUNXO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ2E7NEJBQUtiLFdBQVU7c0NBQVk7Ozs7Ozt3QkFBaUI7d0JBQUVaOzs7Ozs7O2dCQUdsREYsUUFBUUUsMkJBQ1AsOERBQUN1QjtvQkFDQ1gsV0FBVTtvQkFDVlksU0FBU2Q7OEJBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1g7R0FwRndCakI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL1F1YWRyYWRvLmpzeD80ZDY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVhZHJhZG8oKSB7XHJcbiAgY29uc3QgW3NpZGVBLCBzZXRTaWRlQV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3NpZGVCLCBzZXRTaWRlQl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2FyZWEsIHNldEFyZWFdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtwZXJpbWV0ZXIsIHNldFBlcmltZXRlcl0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IGNhbGN1bGF0ZUFyZWFBbmRQZXJpbWV0ZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwYXJzZWRTaWRlQSA9IHBhcnNlRmxvYXQoc2lkZUEpO1xyXG4gICAgY29uc3QgcGFyc2VkU2lkZUIgPSBwYXJzZUZsb2F0KHNpZGVCKTtcclxuXHJcbiAgICBpZiAoIWlzTmFOKHBhcnNlZFNpZGVBKSAmJiAhaXNOYU4ocGFyc2VkU2lkZUIpKSB7XHJcbiAgICAgIGNvbnN0IGNhbGN1bGF0ZWRBcmVhID0gcGFyc2VkU2lkZUEgKiBwYXJzZWRTaWRlQjtcclxuICAgICAgY29uc3QgY2FsY3VsYXRlZFBlcmltZXRlciA9IDIgKiAocGFyc2VkU2lkZUEgKyBwYXJzZWRTaWRlQik7XHJcblxyXG4gICAgICBzZXRBcmVhKGNhbGN1bGF0ZWRBcmVhLnRvRml4ZWQoMikpO1xyXG4gICAgICBzZXRQZXJpbWV0ZXIoY2FsY3VsYXRlZFBlcmltZXRlci50b0ZpeGVkKDIpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEFyZWEoJycpO1xyXG4gICAgICBzZXRQZXJpbWV0ZXIoJycpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlc2V0VmFsdWVzID0gKCkgPT4ge1xyXG4gICAgc2V0U2lkZUEoJycpO1xyXG4gICAgc2V0U2lkZUIoJycpO1xyXG4gICAgc2V0QXJlYSgnJyk7XHJcbiAgICBzZXRQZXJpbWV0ZXIoJycpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC00IHNoYWRvdy1sZyByb3VuZGVkLWxnXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIG1iLTRcIj7DgXJlYSBlIFBlcsOtbWV0cm8gZG8gUmV0w6JuZ3VsbzwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBtYi00XCI+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzaWRlQVwiIGNsYXNzTmFtZT1cIm1yLTJcIj5cclxuICAgICAgICAgICAgTGFkbyBBOlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgaWQ9XCJzaWRlQVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciB3LTEyIG1yLTJcIlxyXG4gICAgICAgICAgICB2YWx1ZT17c2lkZUF9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2lkZUEoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtNDAgdy00MCBiZy1jeWFuLTUwMFwiPjwvZGl2PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNpZGVCXCIgY2xhc3NOYW1lPVwibXItMlwiPlxyXG4gICAgICAgICAgICBMYWRvIEI6XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICBpZD1cInNpZGVCXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIHctMTIgbWwtMiBtdC04XCJcclxuICAgICAgICAgICAgdmFsdWU9e3NpZGVCfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNpZGVCKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgbXQtMiBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtjYWxjdWxhdGVBcmVhQW5kUGVyaW1ldGVyfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIENhbGN1bGFyXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAge2FyZWEgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPsOBcmVhOjwvc3Bhbj4ge2FyZWF9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtwZXJpbWV0ZXIgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPlBlcsOtbWV0cm86PC9zcGFuPiB7cGVyaW1ldGVyfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7YXJlYSAmJiBwZXJpbWV0ZXIgJiYgKFxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtdC00IGJnLWdyYXktNTAwIGhvdmVyOmJnLWdyYXktNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkXCJcclxuICAgICAgICAgICAgb25DbGljaz17cmVzZXRWYWx1ZXN9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIExpbXBhclxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlF1YWRyYWRvIiwic2lkZUEiLCJzZXRTaWRlQSIsInNpZGVCIiwic2V0U2lkZUIiLCJhcmVhIiwic2V0QXJlYSIsInBlcmltZXRlciIsInNldFBlcmltZXRlciIsImNhbGN1bGF0ZUFyZWFBbmRQZXJpbWV0ZXIiLCJwYXJzZWRTaWRlQSIsInBhcnNlRmxvYXQiLCJwYXJzZWRTaWRlQiIsImlzTmFOIiwiY2FsY3VsYXRlZEFyZWEiLCJjYWxjdWxhdGVkUGVyaW1ldGVyIiwidG9GaXhlZCIsInJlc2V0VmFsdWVzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/Quadrado.jsx\n"));

/***/ })

});