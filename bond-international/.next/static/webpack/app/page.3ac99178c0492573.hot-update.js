"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/FormattedDate.jsx":
/*!******************************************!*\
  !*** ./src/components/FormattedDate.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FormattedDate: function() { return /* binding */ FormattedDate; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\nconst dateFormatter = new Intl.DateTimeFormat(\"en-US\", {\n    year: \"numeric\",\n    month: \"short\",\n    day: \"numeric\",\n    timeZone: \"UTC\"\n});\nfunction FormattedDate(param) {\n    let { date, ...props } = param;\n    date = typeof date === \"NULL\" ? new Date(date) : date;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"time\", {\n        dateTime: date.toISOString(),\n        ...props,\n        children: dateFormatter.format(date)\n    }, void 0, false, {\n        fileName: \"/Users/marcushudsonjoseph-strycharczyk/Desktop/Code/bond-international/bond-international/src/components/FormattedDate.jsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_c = FormattedDate;\nvar _c;\n$RefreshReg$(_c, \"FormattedDate\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0Zvcm1hdHRlZERhdGUuanN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE1BQU1BLGdCQUFnQixJQUFJQyxLQUFLQyxjQUFjLENBQUMsU0FBUztJQUNyREMsTUFBTTtJQUNOQyxPQUFPO0lBQ1BDLEtBQUs7SUFDTEMsVUFBVTtBQUNaO0FBRU8sU0FBU0MsY0FBYyxLQUFrQjtRQUFsQixFQUFFQyxJQUFJLEVBQUUsR0FBR0MsT0FBTyxHQUFsQjtJQUM1QkQsT0FBTyxPQUFPQSxTQUFTLFNBQVMsSUFBSUUsS0FBS0YsUUFBUUE7SUFFakQscUJBQ0UsOERBQUNHO1FBQUtDLFVBQVVKLEtBQUtLLFdBQVc7UUFBSyxHQUFHSixLQUFLO2tCQUMxQ1QsY0FBY2MsTUFBTSxDQUFDTjs7Ozs7O0FBRzVCO0tBUmdCRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Gb3JtYXR0ZWREYXRlLmpzeD81Y2FlIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRhdGVGb3JtYXR0ZXIgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgnZW4tVVMnLCB7XG4gIHllYXI6ICdudW1lcmljJyxcbiAgbW9udGg6ICdzaG9ydCcsXG4gIGRheTogJ251bWVyaWMnLFxuICB0aW1lWm9uZTogJ1VUQycsXG59KVxuXG5leHBvcnQgZnVuY3Rpb24gRm9ybWF0dGVkRGF0ZSh7IGRhdGUsIC4uLnByb3BzIH0pIHtcbiAgZGF0ZSA9IHR5cGVvZiBkYXRlID09PSAnTlVMTCcgPyBuZXcgRGF0ZShkYXRlKSA6IGRhdGVcblxuICByZXR1cm4gKFxuICAgIDx0aW1lIGRhdGVUaW1lPXtkYXRlLnRvSVNPU3RyaW5nKCl9IHsuLi5wcm9wc30+XG4gICAgICB7ZGF0ZUZvcm1hdHRlci5mb3JtYXQoZGF0ZSl9XG4gICAgPC90aW1lPlxuICApXG59XG4iXSwibmFtZXMiOlsiZGF0ZUZvcm1hdHRlciIsIkludGwiLCJEYXRlVGltZUZvcm1hdCIsInllYXIiLCJtb250aCIsImRheSIsInRpbWVab25lIiwiRm9ybWF0dGVkRGF0ZSIsImRhdGUiLCJwcm9wcyIsIkRhdGUiLCJ0aW1lIiwiZGF0ZVRpbWUiLCJ0b0lTT1N0cmluZyIsImZvcm1hdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FormattedDate.jsx\n"));

/***/ })

});