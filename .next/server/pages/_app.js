/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "__barrel_optimize__?names=Container,Nav,Navbar!=!./node_modules/react-bootstrap/esm/index.js":
/*!****************************************************************************************************!*\
  !*** __barrel_optimize__?names=Container,Nav,Navbar!=!./node_modules/react-bootstrap/esm/index.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Container: () => (/* reexport safe */ _Container__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   Nav: () => (/* reexport safe */ _Nav__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   Navbar: () => (/* reexport safe */ _Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav */ \"./node_modules/react-bootstrap/esm/Nav.js\");\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ \"./node_modules/react-bootstrap/esm/Navbar.js\");\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19iYXJyZWxfb3B0aW1pemVfXz9uYW1lcz1Db250YWluZXIsTmF2LE5hdmJhciE9IS4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9lc20vaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNrRDtBQUNaIiwic291cmNlcyI6WyJDOlxcV0VCNDIyXFxsaXN0aW5nc0FQSVxcbm9kZV9tb2R1bGVzXFxyZWFjdC1ib290c3RyYXBcXGVzbVxcaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbnRhaW5lciB9IGZyb20gXCIuL0NvbnRhaW5lclwiXG5leHBvcnQgeyBkZWZhdWx0IGFzIE5hdiB9IGZyb20gXCIuL05hdlwiXG5leHBvcnQgeyBkZWZhdWx0IGFzIE5hdmJhciB9IGZyb20gXCIuL05hdmJhclwiIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///__barrel_optimize__?names=Container,Nav,Navbar!=!./node_modules/react-bootstrap/esm/index.js\n");

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var _MainNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainNav */ \"./components/MainNav.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);\nswr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst fetcher = async (...args)=>{\n    const response = await fetch(...args);\n    if (!response.ok) {\n        throw new Error(`Request failed with status: ${response.status}`);\n    }\n    return response.json();\n};\nfunction Layout({ children }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swr__WEBPACK_IMPORTED_MODULE_1__.SWRConfig, {\n        value: {\n            fetcher\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MainNav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\WEB422\\\\listingsAPI\\\\components\\\\Layout.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mt-5 pt-5\",\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\WEB422\\\\listingsAPI\\\\components\\\\Layout.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\WEB422\\\\listingsAPI\\\\components\\\\Layout.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDQTtBQUVoQyxNQUFNRSxVQUFVLE9BQU8sR0FBR0M7SUFDeEIsTUFBTUMsV0FBVyxNQUFNQyxTQUFTRjtJQUVoQyxJQUFJLENBQUNDLFNBQVNFLEVBQUUsRUFBRTtRQUNoQixNQUFNLElBQUlDLE1BQU0sQ0FBQyw0QkFBNEIsRUFBRUgsU0FBU0ksTUFBTSxFQUFFO0lBQ2xFO0lBRUEsT0FBT0osU0FBU0ssSUFBSTtBQUN0QjtBQUVlLFNBQVNDLE9BQU8sRUFBRUMsUUFBUSxFQUFFO0lBQ3pDLHFCQUNFLDhEQUFDWCwwQ0FBU0E7UUFBQ1ksT0FBTztZQUFFVjtRQUFROzswQkFDMUIsOERBQUNELGdEQUFPQTs7Ozs7MEJBQ1IsOERBQUNZO2dCQUFJQyxXQUFVOzBCQUF1Qkg7Ozs7Ozs7Ozs7OztBQUc1QyIsInNvdXJjZXMiOlsiQzpcXFdFQjQyMlxcbGlzdGluZ3NBUElcXGNvbXBvbmVudHNcXExheW91dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTV1JDb25maWcgfSBmcm9tICdzd3InO1xyXG5pbXBvcnQgTWFpbk5hdiBmcm9tICcuL01haW5OYXYnO1xyXG5cclxuY29uc3QgZmV0Y2hlciA9IGFzeW5jICguLi5hcmdzKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCguLi5hcmdzKTtcclxuXHJcbiAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8U1dSQ29uZmlnIHZhbHVlPXt7IGZldGNoZXIgfX0+XHJcbiAgICAgIDxNYWluTmF2IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG10LTUgcHQtNVwiPntjaGlsZHJlbn08L2Rpdj5cclxuICAgIDwvU1dSQ29uZmlnPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlNXUkNvbmZpZyIsIk1haW5OYXYiLCJmZXRjaGVyIiwiYXJncyIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsIkVycm9yIiwic3RhdHVzIiwianNvbiIsIkxheW91dCIsImNoaWxkcmVuIiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ }),

/***/ "./components/MainNav.js":
/*!*******************************!*\
  !*** ./components/MainNav.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MainNav)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Container,Nav,Navbar!=!react-bootstrap */ \"__barrel_optimize__?names=Container,Nav,Navbar!=!./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction MainNav() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar, {\n        className: \"fixed-top navbar-dark bg-dark\",\n        expand: \"lg\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar.Brand, {\n                    children: \"Alexandru Zaporojan\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\WEB422\\\\listingsAPI\\\\components\\\\MainNav.js\",\n                    lineNumber: 8,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Nav, {\n                    className: \"ml-auto\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/\",\n                            passHref: true,\n                            legacyBehavior: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Nav.Link, {\n                                children: \"Listings\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\WEB422\\\\listingsAPI\\\\components\\\\MainNav.js\",\n                                lineNumber: 11,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\WEB422\\\\listingsAPI\\\\components\\\\MainNav.js\",\n                            lineNumber: 10,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/about\",\n                            passHref: true,\n                            legacyBehavior: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Nav.Link, {\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\WEB422\\\\listingsAPI\\\\components\\\\MainNav.js\",\n                                lineNumber: 14,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\WEB422\\\\listingsAPI\\\\components\\\\MainNav.js\",\n                            lineNumber: 13,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\WEB422\\\\listingsAPI\\\\components\\\\MainNav.js\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\WEB422\\\\listingsAPI\\\\components\\\\MainNav.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\WEB422\\\\listingsAPI\\\\components\\\\MainNav.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01haW5OYXYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF5RDtBQUM1QjtBQUVkLFNBQVNJO0lBQ3RCLHFCQUNFLDhEQUFDRiwrRkFBTUE7UUFBQ0csV0FBVTtRQUFnQ0MsUUFBTztrQkFDdkQsNEVBQUNOLGtHQUFTQTs7OEJBQ1IsOERBQUNFLCtGQUFNQSxDQUFDSyxLQUFLOzhCQUFDOzs7Ozs7OEJBQ2QsOERBQUNOLDRGQUFHQTtvQkFBQ0ksV0FBVTs7c0NBQ2IsOERBQUNGLGtEQUFJQTs0QkFBQ0ssTUFBSzs0QkFBSUMsUUFBUTs0QkFBQ0MsY0FBYztzQ0FDcEMsNEVBQUNULDRGQUFHQSxDQUFDRSxJQUFJOzBDQUFDOzs7Ozs7Ozs7OztzQ0FFWiw4REFBQ0Esa0RBQUlBOzRCQUFDSyxNQUFLOzRCQUFTQyxRQUFROzRCQUFDQyxjQUFjO3NDQUN6Qyw0RUFBQ1QsNEZBQUdBLENBQUNFLElBQUk7MENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdEIiLCJzb3VyY2VzIjpbIkM6XFxXRUI0MjJcXGxpc3RpbmdzQVBJXFxjb21wb25lbnRzXFxNYWluTmF2LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRhaW5lciwgTmF2LCBOYXZiYXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbk5hdigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPE5hdmJhciBjbGFzc05hbWU9XCJmaXhlZC10b3AgbmF2YmFyLWRhcmsgYmctZGFya1wiIGV4cGFuZD1cImxnXCI+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPE5hdmJhci5CcmFuZD5BbGV4YW5kcnUgWmFwb3JvamFuPC9OYXZiYXIuQnJhbmQ+XHJcbiAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtbC1hdXRvXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiIHBhc3NIcmVmIGxlZ2FjeUJlaGF2aW9yPlxyXG4gICAgICAgICAgICA8TmF2Lkxpbms+TGlzdGluZ3M8L05hdi5MaW5rPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiIHBhc3NIcmVmIGxlZ2FjeUJlaGF2aW9yPlxyXG4gICAgICAgICAgICA8TmF2Lkxpbms+QWJvdXQ8L05hdi5MaW5rPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvTmF2PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvTmF2YmFyPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsIk5hdiIsIk5hdmJhciIsIkxpbmsiLCJNYWluTmF2IiwiY2xhc3NOYW1lIiwiZXhwYW5kIiwiQnJhbmQiLCJocmVmIiwicGFzc0hyZWYiLCJsZWdhY3lCZWhhdmlvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MainNav.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/main.css */ \"./styles/main.css\");\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_main_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Layout__WEBPACK_IMPORTED_MODULE_1__, swr__WEBPACK_IMPORTED_MODULE_2__]);\n([_components_Layout__WEBPACK_IMPORTED_MODULE_1__, swr__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// pages/_app.js\n\n // Ensure the correct import path\n\n // Ensure styles are globally applied\n // Import Bootstrap CSS globally\n// Fetcher function to handle data fetching\nconst fetcher = async (url)=>{\n    const response = await fetch(url);\n    if (!response.ok) {\n        throw new Error(`Request failed with status: ${response.status}`);\n    }\n    return response.json();\n};\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swr__WEBPACK_IMPORTED_MODULE_2__.SWRConfig, {\n        value: {\n            fetcher\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\WEB422\\\\listingsAPI\\\\pages\\\\_app.js\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\WEB422\\\\listingsAPI\\\\pages\\\\_app.js\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\WEB422\\\\listingsAPI\\\\pages\\\\_app.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdCQUFnQjs7QUFFMEIsQ0FBQyxpQ0FBaUM7QUFDNUM7QUFDSixDQUFDLHFDQUFxQztBQUNwQixDQUFDLGdDQUFnQztBQUUvRSwyQ0FBMkM7QUFDM0MsTUFBTUUsVUFBVSxPQUFPQztJQUNyQixNQUFNQyxXQUFXLE1BQU1DLE1BQU1GO0lBQzdCLElBQUksQ0FBQ0MsU0FBU0UsRUFBRSxFQUFFO1FBQ2hCLE1BQU0sSUFBSUMsTUFBTSxDQUFDLDRCQUE0QixFQUFFSCxTQUFTSSxNQUFNLEVBQUU7SUFDbEU7SUFDQSxPQUFPSixTQUFTSyxJQUFJO0FBQ3RCO0FBRUEsU0FBU0MsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNyQyxxQkFDRSw4REFBQ1gsMENBQVNBO1FBQUNZLE9BQU87WUFBRVg7UUFBUTtrQkFDMUIsNEVBQUNGLDBEQUFNQTtzQkFDTCw0RUFBQ1c7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7OztBQUloQztBQUVBLGlFQUFlRixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJDOlxcV0VCNDIyXFxsaXN0aW5nc0FQSVxccGFnZXNcXF9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvX2FwcC5qc1xyXG5cclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7IC8vIEVuc3VyZSB0aGUgY29ycmVjdCBpbXBvcnQgcGF0aFxyXG5pbXBvcnQgeyBTV1JDb25maWcgfSBmcm9tICdzd3InOyAgXHJcbmltcG9ydCAnLi4vc3R5bGVzL21haW4uY3NzJzsgLy8gRW5zdXJlIHN0eWxlcyBhcmUgZ2xvYmFsbHkgYXBwbGllZFxyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7IC8vIEltcG9ydCBCb290c3RyYXAgQ1NTIGdsb2JhbGx5XHJcblxyXG4vLyBGZXRjaGVyIGZ1bmN0aW9uIHRvIGhhbmRsZSBkYXRhIGZldGNoaW5nXHJcbmNvbnN0IGZldGNoZXIgPSBhc3luYyAodXJsKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihgUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xyXG4gIH1cclxuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTV1JDb25maWcgdmFsdWU9e3sgZmV0Y2hlciB9fT5cclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC9TV1JDb25maWc+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7Il0sIm5hbWVzIjpbIkxheW91dCIsIlNXUkNvbmZpZyIsImZldGNoZXIiLCJ1cmwiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJFcnJvciIsInN0YXR1cyIsImpzb24iLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInZhbHVlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/main.css":
/*!*************************!*\
  !*** ./styles/main.css ***!
  \*************************/
/***/ (() => {



/***/ }),

/***/ "@restart/hooks/useBreakpoint":
/*!***********************************************!*\
  !*** external "@restart/hooks/useBreakpoint" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/hooks/useBreakpoint");

/***/ }),

/***/ "@restart/hooks/useEventCallback":
/*!**************************************************!*\
  !*** external "@restart/hooks/useEventCallback" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/hooks/useEventCallback");

/***/ }),

/***/ "@restart/hooks/useMergedRefs":
/*!***********************************************!*\
  !*** external "@restart/hooks/useMergedRefs" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/hooks/useMergedRefs");

/***/ }),

/***/ "@restart/ui/Anchor":
/*!*************************************!*\
  !*** external "@restart/ui/Anchor" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/Anchor");

/***/ }),

/***/ "@restart/ui/Modal":
/*!************************************!*\
  !*** external "@restart/ui/Modal" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/Modal");

/***/ }),

/***/ "@restart/ui/ModalManager":
/*!*******************************************!*\
  !*** external "@restart/ui/ModalManager" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/ModalManager");

/***/ }),

/***/ "@restart/ui/Nav":
/*!**********************************!*\
  !*** external "@restart/ui/Nav" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/Nav");

/***/ }),

/***/ "@restart/ui/NavItem":
/*!**************************************!*\
  !*** external "@restart/ui/NavItem" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/NavItem");

/***/ }),

/***/ "@restart/ui/SelectableContext":
/*!************************************************!*\
  !*** external "@restart/ui/SelectableContext" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/SelectableContext");

/***/ }),

/***/ "@restart/ui/utils":
/*!************************************!*\
  !*** external "@restart/ui/utils" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/utils");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ "dom-helpers/addClass":
/*!***************************************!*\
  !*** external "dom-helpers/addClass" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/addClass");

/***/ }),

/***/ "dom-helpers/css":
/*!**********************************!*\
  !*** external "dom-helpers/css" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/css");

/***/ }),

/***/ "dom-helpers/querySelectorAll":
/*!***********************************************!*\
  !*** external "dom-helpers/querySelectorAll" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/querySelectorAll");

/***/ }),

/***/ "dom-helpers/removeClass":
/*!******************************************!*\
  !*** external "dom-helpers/removeClass" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/removeClass");

/***/ }),

/***/ "dom-helpers/transitionEnd":
/*!********************************************!*\
  !*** external "dom-helpers/transitionEnd" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/transitionEnd");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react-transition-group/Transition":
/*!****************************************************!*\
  !*** external "react-transition-group/Transition" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-transition-group/Transition");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "uncontrollable":
/*!*********************************!*\
  !*** external "uncontrollable" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("uncontrollable");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/react-bootstrap","vendor-chunks/bootstrap"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();