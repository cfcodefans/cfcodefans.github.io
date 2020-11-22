webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default, getInitialProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _App; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialProps", function() { return getInitialProps; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var cache_mdMetas_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! cache/mdMetas.json */ "./src/cache/mdMetas.json");
var cache_mdMetas_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! cache/mdMetas.json */ "./src/cache/mdMetas.json", 1);
/* harmony import */ var cache_menus_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! cache/menus.json */ "./src/cache/menus.json");
var cache_menus_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! cache/menus.json */ "./src/cache/menus.json", 1);
/* harmony import */ var cache_route_tree_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! cache/route-tree.json */ "./src/cache/route-tree.json");
var cache_route_tree_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! cache/route-tree.json */ "./src/cache/route-tree.json", 1);
/* harmony import */ var cache_routes_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! cache/routes.json */ "./src/cache/routes.json");
var cache_routes_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! cache/routes.json */ "./src/cache/routes.json", 1);
/* harmony import */ var components_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/layout */ "./src/components/layout.tsx");
/* harmony import */ var components_mdx_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/mdx-ui */ "./src/components/mdx-ui.tsx");
/* harmony import */ var lib_commons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lib/commons */ "./src/lib/commons.ts");
/* harmony import */ var lib_analystic__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lib/analystic */ "./src/lib/analystic.ts");






var _jsxFileName = "D:\\git\\opensource\\cfcodefans.github.io\\src\\pages\\_app.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }














var MDX_Frame = function MDX_Frame(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("article", {
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 12
  }, _this);
};

_c = MDX_Frame;
function _App(_ref2) {
  _s();

  var Component = _ref2.Component,
      pageProps = _ref2.pageProps,
      router = _ref2.router;
  Object(lib_commons__WEBPACK_IMPORTED_MODULE_13__["i"])("_app.tsx", "router", router.asPath, "pageProps", Object.keys(pageProps)); // const { layoutProps } = pageProps

  var layoutProps = {
    menus: cache_menus_json__WEBPACK_IMPORTED_MODULE_8__,
    routeTree: cache_route_tree_json__WEBPACK_IMPORTED_MODULE_9__,
    routes: cache_routes_json__WEBPACK_IMPORTED_MODULE_10__,
    pathToMarkdowns: cache_mdMetas_json__WEBPACK_IMPORTED_MODULE_7__
  }; // const { routes, pathToMarkdowns } = layoutProps

  var content = null;
  var _path = router.asPath;
  var currentRoute = cache_routes_json__WEBPACK_IMPORTED_MODULE_10__.find(function (r) {
    return r._path == _path;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    var handleRouteChange = function handleRouteChange(url) {
      Object(lib_commons__WEBPACK_IMPORTED_MODULE_13__["i"])("_app.tsx", "url on routeChangeComplete event", url);
      lib_analystic__WEBPACK_IMPORTED_MODULE_14__["pageview"](url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return function () {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  if (_path.includes("404")) {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 19
    }, this);
  } else if (Object.keys(cache_mdMetas_json__WEBPACK_IMPORTED_MODULE_7__).includes(_path + ".mdx")) {
    //For markdown mdx content
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(components_layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
      home: true,
      layoutProps: layoutProps,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["MDXProvider"], {
        components: _objectSpread({
          wrapper: MDX_Frame
        }, components_mdx_ui__WEBPACK_IMPORTED_MODULE_12__["MDX_COMPONENTS"]),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "container d-flex flex-column pt-3 white rounded-1",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(components_mdx_ui__WEBPACK_IMPORTED_MODULE_12__["BlogHeader"], _objectSpread({}, cache_mdMetas_json__WEBPACK_IMPORTED_MODULE_7__[_path + ".mdx"]), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 19
    }, this);
  } else {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(components_layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
      home: true,
      layoutProps: layoutProps,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 58
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 19
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("meta", {
        name: "format-detection",
        content: "telephone=no"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("meta", {
        name: "X-FRAME-OPTIONS",
        content: "deny"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }, this), content]
  }, void 0, true);
}

_s(_App, "OD7bBpZva5O2jO+Puf00hKivP7c=");

function getInitialProps(_x) {
  return _getInitialProps.apply(this, arguments);
} // _App.getInitialProps = getInitialProps

function _getInitialProps() {
  _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(appContext) {
    var Component, ctx, layoutProps;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            Component = appContext.Component, ctx = appContext.ctx;
            layoutProps = {
              menus: cache_menus_json__WEBPACK_IMPORTED_MODULE_8__,
              routeTree: cache_route_tree_json__WEBPACK_IMPORTED_MODULE_9__,
              routes: cache_routes_json__WEBPACK_IMPORTED_MODULE_10__,
              pathToMarkdowns: cache_mdMetas_json__WEBPACK_IMPORTED_MODULE_7__
            };
            Object(lib_commons__WEBPACK_IMPORTED_MODULE_13__["i"])("_app.tsx", "menus", layoutProps.menus.length);
            return _context.abrupt("return", {
              pageProps: {
                layoutProps: layoutProps
              }
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getInitialProps.apply(this, arguments);
}

var _c;

$RefreshReg$(_c, "MDX_Frame");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4Il0sIm5hbWVzIjpbIk1EWF9GcmFtZSIsImNoaWxkcmVuIiwiX0FwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJvdXRlciIsImkiLCJhc1BhdGgiLCJPYmplY3QiLCJrZXlzIiwibGF5b3V0UHJvcHMiLCJtZW51cyIsInJvdXRlVHJlZSIsInJvdXRlcyIsInBhdGhUb01hcmtkb3ducyIsImNvbnRlbnQiLCJfcGF0aCIsImN1cnJlbnRSb3V0ZSIsImZpbmQiLCJyIiwidXNlRWZmZWN0IiwiaGFuZGxlUm91dGVDaGFuZ2UiLCJ1cmwiLCJndGFnIiwiZXZlbnRzIiwib24iLCJvZmYiLCJpbmNsdWRlcyIsIndyYXBwZXIiLCJNRFhfQ09NUE9ORU5UUyIsImdldEluaXRpYWxQcm9wcyIsImFwcENvbnRleHQiLCJjdHgiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOztBQUVBLElBQU1BLFNBQW1CLEdBQUcsU0FBdEJBLFNBQXNCLE9BQWdEO0FBQUEsTUFBN0NDLFFBQTZDLFFBQTdDQSxRQUE2QztBQUN4RSxzQkFBTztBQUFTLFlBQVEsRUFBRUE7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0gsQ0FGRDs7S0FBTUQsUztBQUlTLFNBQVNFLElBQVQsUUFBdUU7QUFBQTs7QUFBQSxNQUF2REMsU0FBdUQsU0FBdkRBLFNBQXVEO0FBQUEsTUFBNUNDLFNBQTRDLFNBQTVDQSxTQUE0QztBQUFBLE1BQWpDQyxNQUFpQyxTQUFqQ0EsTUFBaUM7QUFDbEZDLHdEQUFDLENBQUMsVUFBRCxFQUFhLFFBQWIsRUFBdUJELE1BQU0sQ0FBQ0UsTUFBOUIsRUFBc0MsV0FBdEMsRUFBbURDLE1BQU0sQ0FBQ0Ms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QURJLEVBTUhXLE9BTkc7QUFBQSxrQkFBUjtBQVFIOztHQS9DdUJiLEk7O0FBaURqQixTQUFlNEIsZUFBdEI7QUFBQTtBQUFBLEMsQ0FPQTs7O3NNQVBPLGlCQUErQkMsVUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0s1QixxQkFETCxHQUN5QjRCLFVBRHpCLENBQ0s1QixTQURMLEVBQ2dCNkIsR0FEaEIsR0FDeUJELFVBRHpCLENBQ2dCQyxHQURoQjtBQUVHdEIsdUJBRkgsR0FFOEI7QUFBRUMsbUJBQUssRUFBTEEsNkNBQUY7QUFBU0MsdUJBQVMsRUFBVEEsa0RBQVQ7QUFBb0JDLG9CQUFNLEVBQU5BLCtDQUFwQjtBQUE0QkMsNkJBQWUsRUFBZkEsK0NBQWVBO0FBQTNDLGFBRjlCO0FBR0hSLGtFQUFDLENBQUMsVUFBRCxFQUFhLE9BQWIsRUFBc0JJLFdBQVcsQ0FBQ0MsS0FBWixDQUFrQnNCLE1BQXhDLENBQUQ7QUFIRyw2Q0FJSTtBQUFFN0IsdUJBQVMsRUFBRTtBQUFFTSwyQkFBVyxFQUFYQTtBQUFGO0FBQWIsYUFKSjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuOWIzNzIzN2Y2YzkzOTBjMjdkZDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1EWFByb3ZpZGVyIH0gZnJvbSBcIkBtZHgtanMvcmVhY3RcIlxyXG5pbXBvcnQgeyBBcHBDb250ZXh0LCBBcHBJbml0aWFsUHJvcHMsIEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCJcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXHJcbmltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGVBcnJheSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBwYXRoVG9NYXJrZG93bnMgZnJvbSBcImNhY2hlL21kTWV0YXMuanNvblwiXHJcbmltcG9ydCBtZW51cyBmcm9tIFwiY2FjaGUvbWVudXMuanNvblwiXHJcbmltcG9ydCByb3V0ZVRyZWUgZnJvbSBcImNhY2hlL3JvdXRlLXRyZWUuanNvblwiXHJcbmltcG9ydCByb3V0ZXMgZnJvbSBcImNhY2hlL3JvdXRlcy5qc29uXCJcclxuaW1wb3J0IExheW91dCBmcm9tIFwiY29tcG9uZW50cy9sYXlvdXRcIlxyXG5pbXBvcnQgeyBCbG9nSGVhZGVyLCBNRFhfQ09NUE9ORU5UUyB9IGZyb20gXCJjb21wb25lbnRzL21keC11aVwiXHJcbmltcG9ydCB7IGkgfSBmcm9tIFwibGliL2NvbW1vbnNcIlxyXG5pbXBvcnQgeyBJTGF5b3V0UHJvcyB9IGZyb20gXCJ0eXBlc1wiXHJcblxyXG5pbXBvcnQgKiBhcyBndGFnIGZyb20gXCJsaWIvYW5hbHlzdGljXCJcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbmNvbnN0IE1EWF9GcmFtZTogUmVhY3QuRkMgPSAoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdE5vZGVBcnJheSB9KSA9PiB7XHJcbiAgICByZXR1cm4gPGFydGljbGUgY2hpbGRyZW49e2NoaWxkcmVufSAvPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHJvdXRlciB9OiBBcHBQcm9wcyk6IEpTWC5FbGVtZW50IHtcclxuICAgIGkoXCJfYXBwLnRzeFwiLCBcInJvdXRlclwiLCByb3V0ZXIuYXNQYXRoLCBcInBhZ2VQcm9wc1wiLCBPYmplY3Qua2V5cyhwYWdlUHJvcHMpKVxyXG5cclxuICAgIC8vIGNvbnN0IHsgbGF5b3V0UHJvcHMgfSA9IHBhZ2VQcm9wc1xyXG4gICAgY29uc3QgbGF5b3V0UHJvcHM6IElMYXlvdXRQcm9zID0geyBtZW51cywgcm91dGVUcmVlLCByb3V0ZXMsIHBhdGhUb01hcmtkb3ducyB9XHJcbiAgICAvLyBjb25zdCB7IHJvdXRlcywgcGF0aFRvTWFya2Rvd25zIH0gPSBsYXlvdXRQcm9wc1xyXG5cclxuICAgIGxldCBjb250ZW50OiBKU1guRWxlbWVudCA9IG51bGxcclxuXHJcbiAgICBjb25zdCBfcGF0aDogc3RyaW5nID0gcm91dGVyLmFzUGF0aFxyXG4gICAgY29uc3QgY3VycmVudFJvdXRlID0gcm91dGVzLmZpbmQociA9PiByLl9wYXRoID09IF9wYXRoKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGFuZGxlUm91dGVDaGFuZ2UgPSAodXJsOiBVUkwpID0+IHtcclxuICAgICAgICAgICAgaShcIl9hcHAudHN4XCIsIFwidXJsIG9uIHJvdXRlQ2hhbmdlQ29tcGxldGUgZXZlbnRcIiwgdXJsKVxyXG4gICAgICAgICAgICBndGFnLnBhZ2V2aWV3KHVybClcclxuICAgICAgICB9XHJcbiAgICAgICAgcm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgaGFuZGxlUm91dGVDaGFuZ2UpXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgcm91dGVyLmV2ZW50cy5vZmYoXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsIGhhbmRsZVJvdXRlQ2hhbmdlKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtyb3V0ZXIuZXZlbnRzXSlcclxuXHJcbiAgICBpZiAoX3BhdGguaW5jbHVkZXMoXCI0MDRcIikpIHtcclxuICAgICAgICBjb250ZW50ID0gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgfSBlbHNlIGlmIChPYmplY3Qua2V5cyhwYXRoVG9NYXJrZG93bnMpLmluY2x1ZGVzKF9wYXRoICsgXCIubWR4XCIpKSB7XHJcbiAgICAgICAgLy9Gb3IgbWFya2Rvd24gbWR4IGNvbnRlbnRcclxuICAgICAgICBjb250ZW50ID0gPExheW91dCBob21lIGxheW91dFByb3BzPXtsYXlvdXRQcm9wc30+XHJcbiAgICAgICAgICAgIDxNRFhQcm92aWRlciBjb21wb25lbnRzPXt7IHdyYXBwZXI6IE1EWF9GcmFtZSwgLi4uTURYX0NPTVBPTkVOVFMgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBkLWZsZXggZmxleC1jb2x1bW4gcHQtMyB3aGl0ZSByb3VuZGVkLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QmxvZ0hlYWRlciB7Li4ucGF0aFRvTWFya2Rvd25zW19wYXRoICsgXCIubWR4XCJdfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L01EWFByb3ZpZGVyPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb250ZW50ID0gPExheW91dCBob21lIGxheW91dFByb3BzPXtsYXlvdXRQcm9wc30+PENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPjwvTGF5b3V0PlxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoPD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCBtYXhpbXVtLXNjYWxlPTEsIHVzZXItc2NhbGFibGU9bm9cIiAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwiZm9ybWF0LWRldGVjdGlvblwiIGNvbnRlbnQ9XCJ0ZWxlcGhvbmU9bm9cIiAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwiWC1GUkFNRS1PUFRJT05TXCIgY29udGVudD1cImRlbnlcIiAvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICB7Y29udGVudH1cclxuICAgIDwvPilcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEluaXRpYWxQcm9wcyhhcHBDb250ZXh0OiBBcHBDb250ZXh0KTogUHJvbWlzZTxBcHBJbml0aWFsUHJvcHM+IHtcclxuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBjdHgsIH0gPSBhcHBDb250ZXh0XHJcbiAgICBjb25zdCBsYXlvdXRQcm9wczogSUxheW91dFByb3MgPSB7IG1lbnVzLCByb3V0ZVRyZWUsIHJvdXRlcywgcGF0aFRvTWFya2Rvd25zIH1cclxuICAgIGkoXCJfYXBwLnRzeFwiLCBcIm1lbnVzXCIsIGxheW91dFByb3BzLm1lbnVzLmxlbmd0aClcclxuICAgIHJldHVybiB7IHBhZ2VQcm9wczogeyBsYXlvdXRQcm9wcyB9IH1cclxufVxyXG5cclxuLy8gX0FwcC5nZXRJbml0aWFsUHJvcHMgPSBnZXRJbml0aWFsUHJvcHNcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==