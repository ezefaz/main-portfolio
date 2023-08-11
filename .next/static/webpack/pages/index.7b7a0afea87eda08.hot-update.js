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

/***/ "./src/components/header/MainNav.jsx":
/*!*******************************************!*\
  !*** ./src/components/header/MainNav.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nvar initialState = {\n    activeMenu: \"\"\n};\nfunction reducer(state, action) {\n    switch(action.type){\n        case \"home\":\n            return {\n                activeMenu: \"home\"\n            };\n        case \"destination\":\n            return {\n                activeMenu: \"destination\"\n            };\n        case \"tour\":\n            return {\n                activeMenu: \"tour\"\n            };\n        case \"pages\":\n            return {\n                activeMenu: \"pages\"\n            };\n        case \"blog\":\n            return {\n                activeMenu: \"blog\"\n            };\n        case \"childmenu\":\n            return {\n                activeMenu: \"childmenu\"\n            };\n        default:\n            return {\n                activeMenu: \"\"\n            };\n    }\n}\nfunction MainNav() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useReducer)(reducer, initialState), state = ref[0], dispatch = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), showMobileMenu = ref1[0], setMobileMenu = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), loading = ref2[0], setLoading = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        setLoading(!loading);\n        setTimeout(function() {\n            setLoading(!loading);\n        }, 2000);\n    }, []);\n    // sidebar menu hnadle function\n    var handleMobileMenu = function() {\n        if (showMobileMenu === false || showMobileMenu === 0) {\n            setMobileMenu(1);\n        } else {\n            setMobileMenu(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"main-nav-wrapper\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"main-nav \".concat(showMobileMenu ? \"show-menu\" : \"\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"menu-close-btn\",\n                    onClick: handleMobileMenu,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: \"bi bi-x-lg\"\n                    }, void 0, false, {\n                        fileName: \"/Users/eze/Desktop/backup/eze-portfolio/src/components/header/MainNav.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/eze/Desktop/backup/eze-portfolio/src/components/header/MainNav.jsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"menu-list\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: router.pathname === \"/\" ? \"active\" : \"\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"assets/images/icons/home-icon.svg\",\n                                            alt: \"Home\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/eze/Desktop/backup/eze-portfolio/src/components/header/MainNav.jsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 17\n                                        }, this),\n                                        \"Home\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/eze/Desktop/backup/eze-portfolio/src/components/header/MainNav.jsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/eze/Desktop/backup/eze-portfolio/src/components/header/MainNav.jsx\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/eze/Desktop/backup/eze-portfolio/src/components/header/MainNav.jsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"#work\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: router.pathname.includes(\"#work\") ? \"active\" : \"\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"assets/images/icons/desitnation-icon.svg\",\n                                            alt: \"Work\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/eze/Desktop/backup/eze-portfolio/src/components/header/MainNav.jsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 17\n                                        }, this),\n                                        \"Work\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/eze/Desktop/backup/eze-portfolio/src/components/header/MainNav.jsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/eze/Desktop/backup/eze-portfolio/src/components/header/MainNav.jsx\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/eze/Desktop/backup/eze-portfolio/src/components/header/MainNav.jsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"#experiences\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: router.pathname.includes(\"#experiences\") ? \"active\" : \"\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"assets/images/icons/tour-icon.svg\",\n                                            alt: \"Experiences\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/eze/Desktop/backup/eze-portfolio/src/components/header/MainNav.jsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 17\n                                        }, this),\n                                        \"Experiences\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/eze/Desktop/backup/eze-portfolio/src/components/header/MainNav.jsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/eze/Desktop/backup/eze-portfolio/src/components/header/MainNav.jsx\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/eze/Desktop/backup/eze-portfolio/src/components/header/MainNav.jsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/about\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: router.pathname.includes(\"#testimonials\") ? \"active\" : \"\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"assets/images/icons/pages.svg\",\n                                            alt: \"Testimonials\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/eze/Desktop/backup/eze-portfolio/src/components/header/MainNav.jsx\",\n                                            lineNumber: 83,\n                                            columnNumber: 17\n                                        }, this),\n                                        \"Testimonials\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/eze/Desktop/backup/eze-portfolio/src/components/header/MainNav.jsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/eze/Desktop/backup/eze-portfolio/src/components/header/MainNav.jsx\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/eze/Desktop/backup/eze-portfolio/src/components/header/MainNav.jsx\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/contact\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: router.pathname === \"/contact\" ? \"active\" : \"\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"assets/images/icons/contact-icon.svg\",\n                                            alt: \"Contact\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/eze/Desktop/backup/eze-portfolio/src/components/header/MainNav.jsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 17\n                                        }, this),\n                                        \"Contact\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/eze/Desktop/backup/eze-portfolio/src/components/header/MainNav.jsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/eze/Desktop/backup/eze-portfolio/src/components/header/MainNav.jsx\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/eze/Desktop/backup/eze-portfolio/src/components/header/MainNav.jsx\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/eze/Desktop/backup/eze-portfolio/src/components/header/MainNav.jsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/eze/Desktop/backup/eze-portfolio/src/components/header/MainNav.jsx\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/eze/Desktop/backup/eze-portfolio/src/components/header/MainNav.jsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n_s(MainNav, \"fYJuUVMqpaENAdVA7gMxwVF/knk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = MainNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainNav);\nvar _c;\n$RefreshReg$(_c, \"MainNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFjOzs7OztnREFBRzt3Q0FBQSxjQUVoRTs7Ozs7O3dDQUFJOzs7OztvQ0FDQzs7Ozs7Z0NBQ0o7c0NBQ0wsOERBQUNOLElBQUU7c0NBQ0QsNEVBQUM1QixrREFBSTtnQ0FBQzZCLElBQUksRUFBQyxVQUFVOzBDQUNuQiw0RUFBQ0MsR0FBQztvQ0FBQ1AsU0FBUyxFQUFFVCxNQUFNLENBQUNpQixRQUFRLEtBQUssVUFBVSxHQUFHLFFBQVEsR0FBRyxFQUFFOztzREFDMUQsOERBQUNDLEtBQUc7NENBQUNDLEdBQUcsRUFBQyxzQ0FBc0M7NENBQUNDLEdBQUcsRUFBQyxTQUFTOzs7OztnREFBRzt3Q0FBQSxTQUVsRTs7Ozs7O3dDQUFJOzs7OztvQ0FDQzs7Ozs7Z0NBQ0o7Ozs7Ozt3QkFDRjs7Ozs7O2dCQUNEOzs7OztZQUNGLENBQ047Q0FDSDtHQTFFUXJCLE9BQU87O1FBQ0NaLGtEQUFTOzs7QUFEakJZLEtBQUFBLE9BQU87QUE0RWhCLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL01haW5OYXYuanN4P2QyZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0geyBhY3RpdmVNZW51OiAnJyB9O1xyXG5cclxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSAnaG9tZSc6XHJcbiAgICAgIHJldHVybiB7IGFjdGl2ZU1lbnU6ICdob21lJyB9O1xyXG4gICAgY2FzZSAnZGVzdGluYXRpb24nOlxyXG4gICAgICByZXR1cm4geyBhY3RpdmVNZW51OiAnZGVzdGluYXRpb24nIH07XHJcbiAgICBjYXNlICd0b3VyJzpcclxuICAgICAgcmV0dXJuIHsgYWN0aXZlTWVudTogJ3RvdXInIH07XHJcbiAgICBjYXNlICdwYWdlcyc6XHJcbiAgICAgIHJldHVybiB7IGFjdGl2ZU1lbnU6ICdwYWdlcycgfTtcclxuICAgIGNhc2UgJ2Jsb2cnOlxyXG4gICAgICByZXR1cm4geyBhY3RpdmVNZW51OiAnYmxvZycgfTtcclxuICAgIGNhc2UgJ2NoaWxkbWVudSc6XHJcbiAgICAgIHJldHVybiB7IGFjdGl2ZU1lbnU6ICdjaGlsZG1lbnUnIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4geyBhY3RpdmVNZW51OiAnJyB9O1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gTWFpbk5hdigpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XHJcbiAgY29uc3QgW3Nob3dNb2JpbGVNZW51LCBzZXRNb2JpbGVNZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyghbG9hZGluZyk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyghbG9hZGluZyk7XHJcbiAgICB9LCAyMDAwKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIHNpZGViYXIgbWVudSBobmFkbGUgZnVuY3Rpb25cclxuICBjb25zdCBoYW5kbGVNb2JpbGVNZW51ID0gKCkgPT4ge1xyXG4gICAgaWYgKHNob3dNb2JpbGVNZW51ID09PSBmYWxzZSB8fCBzaG93TW9iaWxlTWVudSA9PT0gMCkge1xyXG4gICAgICBzZXRNb2JpbGVNZW51KDEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0TW9iaWxlTWVudShmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPSdtYWluLW5hdi13cmFwcGVyJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BtYWluLW5hdiAke3Nob3dNb2JpbGVNZW51ID8gJ3Nob3ctbWVudScgOiAnJ31gfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVudS1jbG9zZS1idG4nIG9uQ2xpY2s9e2hhbmRsZU1vYmlsZU1lbnV9PlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPSdiaSBiaS14LWxnJz48L2k+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT0nbWVudS1saXN0Jz5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT09ICcvJyA/ICdhY3RpdmUnIDogJyd9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9J2Fzc2V0cy9pbWFnZXMvaWNvbnMvaG9tZS1pY29uLnN2ZycgYWx0PSdIb21lJyAvPlxyXG4gICAgICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj0nI3dvcmsnPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lLmluY2x1ZGVzKCcjd29yaycpID8gJ2FjdGl2ZScgOiAnJ30+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz0nYXNzZXRzL2ltYWdlcy9pY29ucy9kZXNpdG5hdGlvbi1pY29uLnN2ZycgYWx0PSdXb3JrJyAvPlxyXG4gICAgICAgICAgICAgICAgV29ya1xyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj0nI2V4cGVyaWVuY2VzJz5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZS5pbmNsdWRlcygnI2V4cGVyaWVuY2VzJykgPyAnYWN0aXZlJyA6ICcnfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPSdhc3NldHMvaW1hZ2VzL2ljb25zL3RvdXItaWNvbi5zdmcnIGFsdD0nRXhwZXJpZW5jZXMnIC8+XHJcbiAgICAgICAgICAgICAgICBFeHBlcmllbmNlc1xyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj0nL2Fib3V0Jz5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZS5pbmNsdWRlcygnI3Rlc3RpbW9uaWFscycpID8gJ2FjdGl2ZScgOiAnJ30+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz0nYXNzZXRzL2ltYWdlcy9pY29ucy9wYWdlcy5zdmcnIGFsdD0nVGVzdGltb25pYWxzJyAvPlxyXG4gICAgICAgICAgICAgICAgVGVzdGltb25pYWxzXHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPScvY29udGFjdCc+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT09ICcvY29udGFjdCcgPyAnYWN0aXZlJyA6ICcnfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPSdhc3NldHMvaW1hZ2VzL2ljb25zL2NvbnRhY3QtaWNvbi5zdmcnIGFsdD0nQ29udGFjdCcgLz5cclxuICAgICAgICAgICAgICAgIENvbnRhY3RcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluTmF2O1xyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVkdWNlciIsInVzZVJlZiIsInVzZVN0YXRlIiwiaW5pdGlhbFN0YXRlIiwiYWN0aXZlTWVudSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJNYWluTmF2Iiwicm91dGVyIiwiZGlzcGF0Y2giLCJzaG93TW9iaWxlTWVudSIsInNldE1vYmlsZU1lbnUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNldFRpbWVvdXQiLCJoYW5kbGVNb2JpbGVNZW51IiwibmF2IiwiY2xhc3NOYW1lIiwiZGl2Iiwib25DbGljayIsImkiLCJ1bCIsImxpIiwiaHJlZiIsImEiLCJwYXRobmFtZSIsImltZyIsInNyYyIsImFsdCIsImluY2x1ZGVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/header/MainNav.jsx\n"));

/***/ })

});