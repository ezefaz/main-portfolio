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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction MainNav() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), showMobileMenu = ref[0], setMobileMenu = ref[1];\n    var handleMobileMenu = function() {\n        setMobileMenu(!showMobileMenu);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"main-nav-wrapper\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"main-nav \".concat(showMobileMenu ? \"show-menu\" : \"\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"menu-close-btn\",\n                    onClick: handleMobileMenu,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: \"bi bi-x-lg\"\n                    }, void 0, false, {\n                        fileName: \"/Users/eze/Desktop/backup/eze-portfolio/src/components/header/MainNav.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/eze/Desktop/backup/eze-portfolio/src/components/header/MainNav.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"menu-list\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: router.pathname === \"/\" ? \"active\" : \"\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"assets/images/icons/home-icon.svg\",\n                                            alt: \"Home\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/eze/Desktop/backup/eze-portfolio/src/components/header/MainNav.jsx\",\n                                            lineNumber: 24,\n                                            columnNumber: 17\n                                        }, this),\n                                        \"Home\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/eze/Desktop/backup/eze-portfolio/src/components/header/MainNav.jsx\",\n                                    lineNumber: 23,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/eze/Desktop/backup/eze-portfolio/src/components/header/MainNav.jsx\",\n                                lineNumber: 22,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/eze/Desktop/backup/eze-portfolio/src/components/header/MainNav.jsx\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/destination\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: router.pathname.includes(\"/destination\") ? \"active\" : \"\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"assets/images/icons/desitnation-icon.svg\",\n                                            alt: \"Work\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/eze/Desktop/backup/eze-portfolio/src/components/header/MainNav.jsx\",\n                                            lineNumber: 32,\n                                            columnNumber: 17\n                                        }, this),\n                                        \"Work\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/eze/Desktop/backup/eze-portfolio/src/components/header/MainNav.jsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/eze/Desktop/backup/eze-portfolio/src/components/header/MainNav.jsx\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/eze/Desktop/backup/eze-portfolio/src/components/header/MainNav.jsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/tour-package\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: router.pathname.includes(\"/tour-package\") ? \"active\" : \"\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"assets/images/icons/tour-icon.svg\",\n                                            alt: \"Experiences\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/eze/Desktop/backup/eze-portfolio/src/components/header/MainNav.jsx\",\n                                            lineNumber: 40,\n                                            columnNumber: 17\n                                        }, this),\n                                        \"Experiences\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/eze/Desktop/backup/eze-portfolio/src/components/header/MainNav.jsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/eze/Desktop/backup/eze-portfolio/src/components/header/MainNav.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/eze/Desktop/backup/eze-portfolio/src/components/header/MainNav.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/about\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: router.pathname.includes(\"/about\") || router.pathname.includes(\"/tour-guide\") || router.pathname.includes(\"/gallery\") || router.pathname.includes(\"/faq\") || router.pathname.includes(\"/error\") ? \"active\" : \"\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"assets/images/icons/pages.svg\",\n                                            alt: \"Testimonials\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/eze/Desktop/backup/eze-portfolio/src/components/header/MainNav.jsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 17\n                                        }, this),\n                                        \"Testimonials\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/eze/Desktop/backup/eze-portfolio/src/components/header/MainNav.jsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/eze/Desktop/backup/eze-portfolio/src/components/header/MainNav.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/eze/Desktop/backup/eze-portfolio/src/components/header/MainNav.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/contact\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: router.pathname === \"/contact\" ? \"active\" : \"\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"assets/images/icons/contact-icon.svg\",\n                                            alt: \"Contact\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/eze/Desktop/backup/eze-portfolio/src/components/header/MainNav.jsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 17\n                                        }, this),\n                                        \"Contact\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/eze/Desktop/backup/eze-portfolio/src/components/header/MainNav.jsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/eze/Desktop/backup/eze-portfolio/src/components/header/MainNav.jsx\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/eze/Desktop/backup/eze-portfolio/src/components/header/MainNav.jsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/eze/Desktop/backup/eze-portfolio/src/components/header/MainNav.jsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/eze/Desktop/backup/eze-portfolio/src/components/header/MainNav.jsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/eze/Desktop/backup/eze-portfolio/src/components/header/MainNav.jsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(MainNav, \"kip7PLEoj5zu8mMumTu/W/gd4s8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = MainNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainNav);\nvar _c;\n$RefreshReg$(_c, \"MainNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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USxHQUNSLEVBQUU7O3NEQUdSLDhEQUFDSCxLQUFHOzRDQUFDQyxHQUFHLEVBQUMsK0JBQStCOzRDQUFDQyxHQUFHLEVBQUMsY0FBYzs7Ozs7Z0RBQUc7d0NBQUEsY0FFaEU7Ozs7Ozt3Q0FBSTs7Ozs7b0NBQ0M7Ozs7O2dDQUNKO3NDQUNMLDhEQUFDTixJQUFFO3NDQUNELDRFQUFDZCxrREFBSTtnQ0FBQ2UsSUFBSSxFQUFDLFVBQVU7MENBQ25CLDRFQUFDQyxHQUFDO29DQUFDUCxTQUFTLEVBQUVMLE1BQU0sQ0FBQ2EsUUFBUSxLQUFLLFVBQVUsR0FBRyxRQUFRLEdBQUcsRUFBRTs7c0RBQzFELDhEQUFDQyxLQUFHOzRDQUFDQyxHQUFHLEVBQUMsc0NBQXNDOzRDQUFDQyxHQUFHLEVBQUMsU0FBUzs7Ozs7Z0RBQUc7d0NBQUEsU0FFbEU7Ozs7Ozt3Q0FBSTs7Ozs7b0NBQ0M7Ozs7O2dDQUNKOzs7Ozs7d0JBQ0Y7Ozs7OztnQkFDRDs7Ozs7WUFDRixDQUNOO0NBQ0g7R0F0RVFqQixPQUFPOztRQUNDRixrREFBUzs7O0FBRGpCRSxLQUFBQSxPQUFPO0FBd0VoQiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9NYWluTmF2LmpzeD9kMmQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBNYWluTmF2KCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBbc2hvd01vYmlsZU1lbnUsIHNldE1vYmlsZU1lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVNb2JpbGVNZW51ID0gKCkgPT4ge1xyXG4gICAgc2V0TW9iaWxlTWVudSghc2hvd01vYmlsZU1lbnUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT0nbWFpbi1uYXYtd3JhcHBlcic+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbWFpbi1uYXYgJHtzaG93TW9iaWxlTWVudSA/ICdzaG93LW1lbnUnIDogJyd9YH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lbnUtY2xvc2UtYnRuJyBvbkNsaWNrPXtoYW5kbGVNb2JpbGVNZW51fT5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT0nYmkgYmkteC1sZyc+PC9pPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9J21lbnUtbGlzdCc+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09PSAnLycgPyAnYWN0aXZlJyA6ICcnfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPSdhc3NldHMvaW1hZ2VzL2ljb25zL2hvbWUtaWNvbi5zdmcnIGFsdD0nSG9tZScgLz5cclxuICAgICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9kZXN0aW5hdGlvbic+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUuaW5jbHVkZXMoJy9kZXN0aW5hdGlvbicpID8gJ2FjdGl2ZScgOiAnJ30+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz0nYXNzZXRzL2ltYWdlcy9pY29ucy9kZXNpdG5hdGlvbi1pY29uLnN2ZycgYWx0PSdXb3JrJyAvPlxyXG4gICAgICAgICAgICAgICAgV29ya1xyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj0nL3RvdXItcGFja2FnZSc+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUuaW5jbHVkZXMoJy90b3VyLXBhY2thZ2UnKSA/ICdhY3RpdmUnIDogJyd9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9J2Fzc2V0cy9pbWFnZXMvaWNvbnMvdG91ci1pY29uLnN2ZycgYWx0PSdFeHBlcmllbmNlcycgLz5cclxuICAgICAgICAgICAgICAgIEV4cGVyaWVuY2VzXHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPScvYWJvdXQnPlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUuaW5jbHVkZXMoJy9hYm91dCcpIHx8XHJcbiAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZS5pbmNsdWRlcygnL3RvdXItZ3VpZGUnKSB8fFxyXG4gICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUuaW5jbHVkZXMoJy9nYWxsZXJ5JykgfHxcclxuICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lLmluY2x1ZGVzKCcvZmFxJykgfHxcclxuICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lLmluY2x1ZGVzKCcvZXJyb3InKVxyXG4gICAgICAgICAgICAgICAgICAgID8gJ2FjdGl2ZSdcclxuICAgICAgICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9J2Fzc2V0cy9pbWFnZXMvaWNvbnMvcGFnZXMuc3ZnJyBhbHQ9J1Rlc3RpbW9uaWFscycgLz5cclxuICAgICAgICAgICAgICAgIFRlc3RpbW9uaWFsc1xyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj0nL2NvbnRhY3QnPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09PSAnL2NvbnRhY3QnID8gJ2FjdGl2ZScgOiAnJ30+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz0nYXNzZXRzL2ltYWdlcy9pY29ucy9jb250YWN0LWljb24uc3ZnJyBhbHQ9J0NvbnRhY3QnIC8+XHJcbiAgICAgICAgICAgICAgICBDb250YWN0XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbk5hdjtcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsIk1haW5OYXYiLCJyb3V0ZXIiLCJzaG93TW9iaWxlTWVudSIsInNldE1vYmlsZU1lbnUiLCJoYW5kbGVNb2JpbGVNZW51IiwibmF2IiwiY2xhc3NOYW1lIiwiZGl2Iiwib25DbGljayIsImkiLCJ1bCIsImxpIiwiaHJlZiIsImEiLCJwYXRobmFtZSIsImltZyIsInNyYyIsImFsdCIsImluY2x1ZGVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/header/MainNav.jsx\n"));

/***/ })

});