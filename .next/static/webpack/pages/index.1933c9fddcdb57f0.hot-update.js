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

/***/ "./src/components/offer/ProjectData.js":
/*!*********************************************!*\
  !*** ./src/components/offer/ProjectData.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"offers\": function() { return /* binding */ offers; }\n/* harmony export */ });\nvar offers = [\n    {\n        imageSrc: \"assets/images/bg/palermo-jai.jpg\",\n        images: [\n            \"assets/images/bg/palermo-jai2.jpg\",\n            \"assets/images/bg/palermo-jai2.jpg\",\n            \"assets/images/bg/palermo-jai2.jpg\", \n        ],\n        badgeSrc: \"assets/images/bg/palermo-jai2.jpg\",\n        reviewCount: 10,\n        category: \"Rental Apartment\",\n        title: \"Palermojai\",\n        link: \"https://palermojai.com\",\n        duration: \"03 days / from $2500\",\n        description: \"PalermoJai, a new and ambitious business specializing in fully furnished temporary apartments, approached us with a vision to establish a strong online presence and boost reservations. Their goal was to create a captivating website that showcased the allure of their apartments and provided a seamless booking experience for either their local and tourist guests. With enthusiasm and determination, we embraced the challenge, partnering closely with PalermoJai to understand their unique offerings and target audience. As a new business, they sought to make a lasting impression in the competitive market of temporary lodging.\",\n        technologies: \"React, Node.js, MongoDB\"\n    },\n    {\n        imageSrc: \"assets/images/bg/webgeenix-bg.jpg\",\n        images: [\n            \"assets/images/bg/webgeenix-3.jpg\",\n            \"assets/images/bg/webgeenix-3.jpg\",\n            \"assets/images/bg/webgeenix-2.jpg\", \n        ],\n        badgeSrc: \"assets/images/bg/webgeenix-2.jpg\",\n        reviewCount: 10,\n        title: \"WebGeenix\",\n        link: \"https://webgeenix.com\",\n        duration: \"5 days / from $900\",\n        category: \"Digital Agency\",\n        description: \"WebGeenix is a full-stack web development agency. We create dynamic and responsive websites that empower businesses to succeed online. Let us bring your digital vision to life!\",\n        technologies: \"HTML, CSS, JavaScript, React, Node.js\"\n    },\n    {\n        imageSrc: \"assets/images/bg/psicoapp-bg1.jpg\",\n        images: [\n            \"assets/images/bg/psicoapp-3.jpg\",\n            \"assets/images/bg/psicoapp-bg.jpg\",\n            \"assets/images/bg/psicoapp-3.jpg\"\n        ],\n        badgeSrc: \"assets/images/bg/psicoapp-bg.jpg\",\n        reviewCount: 10,\n        title: \"PsicoApp\",\n        link: \"https://psico-app.vercel.app/\",\n        duration: \"5 days / from $900\",\n        category: \"All in one platform\",\n        description: \"Participation on the development of an application that helps psychologists find clients and grow their carrer. In which agile methodologies SCRUM are used, and once a week the proyect were presented to the product owner.\",\n        technologies: \"React, JavaScript, Tailwind, Socket IO, Redux, Github, Scrum, Node.js\"\n    },\n    {\n        imageSrc: \"assets/images/bg/savemelin1.jpg\",\n        images: [\n            \"assets/images/bg/savemelin2.jpg\",\n            \"assets/images/bg/savemelin3.jpg\"\n        ],\n        badgeSrc: \"assets/images/bg/psicoapp-bg.jpg\",\n        reviewCount: 10,\n        title: \"Savemelin\",\n        link: \"https://savemelin.vercel.app/\",\n        // duration: '5 days / from $',\n        category: \"Smart Savings App\",\n        description: \"Development of an app that allows users to save money on their mercadolibre products \",\n        technologies: \"React, NextJs, Tailwind, Mongo Db, Github, Node.js\"\n    }, \n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9vZmZlci9Qcm9qZWN0RGF0YS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sSUFBTUEsTUFBTSxHQUFHO0lBQ3BCO1FBQ0VDLFFBQVEsRUFBRSxrQ0FBa0M7UUFDNUNDLE1BQU0sRUFBRTtZQUNOLG1DQUFtQztZQUNuQyxtQ0FBbUM7WUFDbkMsbUNBQW1DO1NBQ3BDO1FBQ0RDLFFBQVEsRUFBRSxtQ0FBbUM7UUFDN0NDLFdBQVcsRUFBRSxFQUFFO1FBQ2ZDLFFBQVEsRUFBRSxrQkFBa0I7UUFDNUJDLEtBQUssRUFBRSxZQUFZO1FBQ25CQyxJQUFJLEVBQUUsd0JBQXdCO1FBQzlCQyxRQUFRLEVBQUUsc0JBQXNCO1FBQ2hDQyxXQUFXLEVBQ1Qsb25CQUFvbkI7UUFDdG5CQyxZQUFZLEVBQUUseUJBQXlCO0tBQ3hDO0lBQ0Q7UUFDRVQsUUFBUSxFQUFFLG1DQUFtQztRQUM3Q0MsTUFBTSxFQUFFO1lBQ04sa0NBQWtDO1lBQ2xDLGtDQUFrQztZQUNsQyxrQ0FBa0M7U0FDbkM7UUFDREMsUUFBUSxFQUFFLGtDQUFrQztRQUM1Q0MsV0FBVyxFQUFFLEVBQUU7UUFDZkUsS0FBSyxFQUFFLFdBQVc7UUFDbEJDLElBQUksRUFBRSx1QkFBdUI7UUFDN0JDLFFBQVEsRUFBRSxvQkFBb0I7UUFDOUJILFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUJJLFdBQVcsRUFDVCxrTEFBa0w7UUFDcExDLFlBQVksRUFBRSx1Q0FBdUM7S0FDdEQ7SUFDRDtRQUNFVCxRQUFRLEVBQUUsbUNBQW1DO1FBQzdDQyxNQUFNLEVBQUU7WUFBQyxpQ0FBaUM7WUFBRSxrQ0FBa0M7WUFBRSxpQ0FBaUM7U0FBQztRQUNsSEMsUUFBUSxFQUFFLGtDQUFrQztRQUM1Q0MsV0FBVyxFQUFFLEVBQUU7UUFDZkUsS0FBSyxFQUFFLFVBQVU7UUFDakJDLElBQUksRUFBRSwrQkFBK0I7UUFDckNDLFFBQVEsRUFBRSxvQkFBb0I7UUFDOUJILFFBQVEsRUFBRSxxQkFBcUI7UUFDL0JJLFdBQVcsRUFDVCwrTkFBK047UUFDak9DLFlBQVksRUFBRSx1RUFBdUU7S0FDdEY7SUFDRDtRQUNFVCxRQUFRLEVBQUUsaUNBQWlDO1FBQzNDQyxNQUFNLEVBQUU7WUFBQyxpQ0FBaUM7WUFBRSxpQ0FBaUM7U0FBQztRQUM5RUMsUUFBUSxFQUFFLGtDQUFrQztRQUM1Q0MsV0FBVyxFQUFFLEVBQUU7UUFDZkUsS0FBSyxFQUFFLFdBQVc7UUFDbEJDLElBQUksRUFBRSwrQkFBK0I7UUFDckMsK0JBQStCO1FBQy9CRixRQUFRLEVBQUUsbUJBQW1CO1FBQzdCSSxXQUFXLEVBQUUsdUZBQXVGO1FBQ3BHQyxZQUFZLEVBQUUsb0RBQW9EO0tBQ25FO0NBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9vZmZlci9Qcm9qZWN0RGF0YS5qcz81NGFkIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBvZmZlcnMgPSBbXG4gIHtcbiAgICBpbWFnZVNyYzogJ2Fzc2V0cy9pbWFnZXMvYmcvcGFsZXJtby1qYWkuanBnJyxcbiAgICBpbWFnZXM6IFtcbiAgICAgICdhc3NldHMvaW1hZ2VzL2JnL3BhbGVybW8tamFpMi5qcGcnLFxuICAgICAgJ2Fzc2V0cy9pbWFnZXMvYmcvcGFsZXJtby1qYWkyLmpwZycsXG4gICAgICAnYXNzZXRzL2ltYWdlcy9iZy9wYWxlcm1vLWphaTIuanBnJyxcbiAgICBdLFxuICAgIGJhZGdlU3JjOiAnYXNzZXRzL2ltYWdlcy9iZy9wYWxlcm1vLWphaTIuanBnJyxcbiAgICByZXZpZXdDb3VudDogMTAsXG4gICAgY2F0ZWdvcnk6ICdSZW50YWwgQXBhcnRtZW50JyxcbiAgICB0aXRsZTogJ1BhbGVybW9qYWknLFxuICAgIGxpbms6ICdodHRwczovL3BhbGVybW9qYWkuY29tJyxcbiAgICBkdXJhdGlvbjogJzAzIGRheXMgLyBmcm9tICQyNTAwJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdQYWxlcm1vSmFpLCBhIG5ldyBhbmQgYW1iaXRpb3VzIGJ1c2luZXNzIHNwZWNpYWxpemluZyBpbiBmdWxseSBmdXJuaXNoZWQgdGVtcG9yYXJ5IGFwYXJ0bWVudHMsIGFwcHJvYWNoZWQgdXMgd2l0aCBhIHZpc2lvbiB0byBlc3RhYmxpc2ggYSBzdHJvbmcgb25saW5lIHByZXNlbmNlIGFuZCBib29zdCByZXNlcnZhdGlvbnMuIFRoZWlyIGdvYWwgd2FzIHRvIGNyZWF0ZSBhIGNhcHRpdmF0aW5nIHdlYnNpdGUgdGhhdCBzaG93Y2FzZWQgdGhlIGFsbHVyZSBvZiB0aGVpciBhcGFydG1lbnRzIGFuZCBwcm92aWRlZCBhIHNlYW1sZXNzIGJvb2tpbmcgZXhwZXJpZW5jZSBmb3IgZWl0aGVyIHRoZWlyIGxvY2FsIGFuZCB0b3VyaXN0IGd1ZXN0cy4gV2l0aCBlbnRodXNpYXNtIGFuZCBkZXRlcm1pbmF0aW9uLCB3ZSBlbWJyYWNlZCB0aGUgY2hhbGxlbmdlLCBwYXJ0bmVyaW5nIGNsb3NlbHkgd2l0aCBQYWxlcm1vSmFpIHRvIHVuZGVyc3RhbmQgdGhlaXIgdW5pcXVlIG9mZmVyaW5ncyBhbmQgdGFyZ2V0IGF1ZGllbmNlLiBBcyBhIG5ldyBidXNpbmVzcywgdGhleSBzb3VnaHQgdG8gbWFrZSBhIGxhc3RpbmcgaW1wcmVzc2lvbiBpbiB0aGUgY29tcGV0aXRpdmUgbWFya2V0IG9mIHRlbXBvcmFyeSBsb2RnaW5nLicsXG4gICAgdGVjaG5vbG9naWVzOiAnUmVhY3QsIE5vZGUuanMsIE1vbmdvREInLFxuICB9LFxuICB7XG4gICAgaW1hZ2VTcmM6ICdhc3NldHMvaW1hZ2VzL2JnL3dlYmdlZW5peC1iZy5qcGcnLFxuICAgIGltYWdlczogW1xuICAgICAgJ2Fzc2V0cy9pbWFnZXMvYmcvd2ViZ2Vlbml4LTMuanBnJyxcbiAgICAgICdhc3NldHMvaW1hZ2VzL2JnL3dlYmdlZW5peC0zLmpwZycsXG4gICAgICAnYXNzZXRzL2ltYWdlcy9iZy93ZWJnZWVuaXgtMi5qcGcnLFxuICAgIF0sXG4gICAgYmFkZ2VTcmM6ICdhc3NldHMvaW1hZ2VzL2JnL3dlYmdlZW5peC0yLmpwZycsXG4gICAgcmV2aWV3Q291bnQ6IDEwLFxuICAgIHRpdGxlOiAnV2ViR2Vlbml4JyxcbiAgICBsaW5rOiAnaHR0cHM6Ly93ZWJnZWVuaXguY29tJyxcbiAgICBkdXJhdGlvbjogJzUgZGF5cyAvIGZyb20gJDkwMCcsXG4gICAgY2F0ZWdvcnk6ICdEaWdpdGFsIEFnZW5jeScsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnV2ViR2Vlbml4IGlzIGEgZnVsbC1zdGFjayB3ZWIgZGV2ZWxvcG1lbnQgYWdlbmN5LiBXZSBjcmVhdGUgZHluYW1pYyBhbmQgcmVzcG9uc2l2ZSB3ZWJzaXRlcyB0aGF0IGVtcG93ZXIgYnVzaW5lc3NlcyB0byBzdWNjZWVkIG9ubGluZS4gTGV0IHVzIGJyaW5nIHlvdXIgZGlnaXRhbCB2aXNpb24gdG8gbGlmZSEnLFxuICAgIHRlY2hub2xvZ2llczogJ0hUTUwsIENTUywgSmF2YVNjcmlwdCwgUmVhY3QsIE5vZGUuanMnLFxuICB9LFxuICB7XG4gICAgaW1hZ2VTcmM6ICdhc3NldHMvaW1hZ2VzL2JnL3BzaWNvYXBwLWJnMS5qcGcnLFxuICAgIGltYWdlczogWydhc3NldHMvaW1hZ2VzL2JnL3BzaWNvYXBwLTMuanBnJywgJ2Fzc2V0cy9pbWFnZXMvYmcvcHNpY29hcHAtYmcuanBnJywgJ2Fzc2V0cy9pbWFnZXMvYmcvcHNpY29hcHAtMy5qcGcnXSxcbiAgICBiYWRnZVNyYzogJ2Fzc2V0cy9pbWFnZXMvYmcvcHNpY29hcHAtYmcuanBnJyxcbiAgICByZXZpZXdDb3VudDogMTAsXG4gICAgdGl0bGU6ICdQc2ljb0FwcCcsXG4gICAgbGluazogJ2h0dHBzOi8vcHNpY28tYXBwLnZlcmNlbC5hcHAvJyxcbiAgICBkdXJhdGlvbjogJzUgZGF5cyAvIGZyb20gJDkwMCcsXG4gICAgY2F0ZWdvcnk6ICdBbGwgaW4gb25lIHBsYXRmb3JtJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdQYXJ0aWNpcGF0aW9uIG9uIHRoZSBkZXZlbG9wbWVudCBvZiBhbiBhcHBsaWNhdGlvbiB0aGF0IGhlbHBzIHBzeWNob2xvZ2lzdHMgZmluZCBjbGllbnRzIGFuZCBncm93IHRoZWlyIGNhcnJlci4gSW4gd2hpY2ggYWdpbGUgbWV0aG9kb2xvZ2llcyBTQ1JVTSBhcmUgdXNlZCwgYW5kIG9uY2UgYSB3ZWVrIHRoZSBwcm95ZWN0IHdlcmUgcHJlc2VudGVkIHRvIHRoZSBwcm9kdWN0IG93bmVyLicsXG4gICAgdGVjaG5vbG9naWVzOiAnUmVhY3QsIEphdmFTY3JpcHQsIFRhaWx3aW5kLCBTb2NrZXQgSU8sIFJlZHV4LCBHaXRodWIsIFNjcnVtLCBOb2RlLmpzJyxcbiAgfSxcbiAge1xuICAgIGltYWdlU3JjOiAnYXNzZXRzL2ltYWdlcy9iZy9zYXZlbWVsaW4xLmpwZycsXG4gICAgaW1hZ2VzOiBbJ2Fzc2V0cy9pbWFnZXMvYmcvc2F2ZW1lbGluMi5qcGcnLCAnYXNzZXRzL2ltYWdlcy9iZy9zYXZlbWVsaW4zLmpwZyddLFxuICAgIGJhZGdlU3JjOiAnYXNzZXRzL2ltYWdlcy9iZy9wc2ljb2FwcC1iZy5qcGcnLFxuICAgIHJldmlld0NvdW50OiAxMCxcbiAgICB0aXRsZTogJ1NhdmVtZWxpbicsXG4gICAgbGluazogJ2h0dHBzOi8vc2F2ZW1lbGluLnZlcmNlbC5hcHAvJyxcbiAgICAvLyBkdXJhdGlvbjogJzUgZGF5cyAvIGZyb20gJCcsXG4gICAgY2F0ZWdvcnk6ICdTbWFydCBTYXZpbmdzIEFwcCcsXG4gICAgZGVzY3JpcHRpb246ICdEZXZlbG9wbWVudCBvZiBhbiBhcHAgdGhhdCBhbGxvd3MgdXNlcnMgdG8gc2F2ZSBtb25leSBvbiB0aGVpciBtZXJjYWRvbGlicmUgcHJvZHVjdHMgJyxcbiAgICB0ZWNobm9sb2dpZXM6ICdSZWFjdCwgTmV4dEpzLCBUYWlsd2luZCwgTW9uZ28gRGIsIEdpdGh1YiwgTm9kZS5qcycsXG4gIH0sXG5dO1xuIl0sIm5hbWVzIjpbIm9mZmVycyIsImltYWdlU3JjIiwiaW1hZ2VzIiwiYmFkZ2VTcmMiLCJyZXZpZXdDb3VudCIsImNhdGVnb3J5IiwidGl0bGUiLCJsaW5rIiwiZHVyYXRpb24iLCJkZXNjcmlwdGlvbiIsInRlY2hub2xvZ2llcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/offer/ProjectData.js\n"));

/***/ })

});