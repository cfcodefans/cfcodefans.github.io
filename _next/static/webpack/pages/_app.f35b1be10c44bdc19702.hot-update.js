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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4Il0sIm5hbWVzIjpbIk1EWF9GcmFtZSIsImNoaWxkcmVuIiwiX0FwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJvdXRlciIsImkiLCJhc1BhdGgiLCJPYmplY3QiLCJrZXlzIiwibGF5b3V0UHJvcHMiLCJtZW51cyIsInJvdXRlVHJlZSIsInJvdXRlcyIsInBhdGhUb01hcmtkb3ducyIsImNvbnRlbnQiLCJfcGF0aCIsImN1cnJlbnRSb3V0ZSIsImZpbmQiLCJyIiwidXNlRWZmZWN0IiwiaGFuZGxlUm91dGVDaGFuZ2UiLCJ1cmwiLCJndGFnIiwiZXZlbnRzIiwib24iLCJvZmYiLCJpbmNsdWRlcyIsIndyYXBwZXIiLCJNRFhfQ09NUE9ORU5UUyIsImdldEluaXRpYWxQcm9wcyIsImFwcENvbnRleHQiLCJjdHgiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOztBQUVBLElBQU1BLFNBQW1CLEdBQUcsU0FBdEJBLFNBQXNCLE9BQWdEO0FBQUEsTUFBN0NDLFFBQTZDLFFBQTdDQSxRQUE2QztBQUN4RSxzQkFBTztBQUFTLFlBQVEsRUFBRUE7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0gsQ0FGRDs7S0FBTUQsUztBQUlTLFNBQVNFLElBQVQsUUFBdUU7QUFBQTs7QUFBQSxNQUF2REMsU0FBdUQsU0FBdkRBLFNBQXVEO0FBQUEsTUFBNUNDLFNBQTRDLFNBQTVDQSxTQUE0QztBQUFBLE1BQWpDQyxNQUFpQyxTQUFqQ0EsTUFBaUM7QUFDbEZDLHdEQUFDLENBQUMsVUFBRCxFQUFhLFFBQWIsRUFBdUJELE1BQU0sQ0FBQ0UsTUFBOUIsRUFBc0MsV0FBdEMsRUFBbURDLE1BQU0sQ0FBQ0Ms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ZTRCLGVBQXRCO0FBQUE7QUFBQSxDLENBT0E7OztzTUFQTyxpQkFBK0JDLFVBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNLNUIscUJBREwsR0FDeUI0QixVQUR6QixDQUNLNUIsU0FETCxFQUNnQjZCLEdBRGhCLEdBQ3lCRCxVQUR6QixDQUNnQkMsR0FEaEI7QUFFR3RCLHVCQUZILEdBRThCO0FBQUVDLG1CQUFLLEVBQUxBLDZDQUFGO0FBQVNDLHVCQUFTLEVBQVRBLGtEQUFUO0FBQW9CQyxvQkFBTSxFQUFOQSwrQ0FBcEI7QUFBNEJDLDZCQUFlLEVBQWZBLCtDQUFlQTtBQUEzQyxhQUY5QjtBQUdIUixrRUFBQyxDQUFDLFVBQUQsRUFBYSxPQUFiLEVBQXNCSSxXQUFXLENBQUNDLEtBQVosQ0FBa0JzQixNQUF4QyxDQUFEO0FBSEcsNkNBSUk7QUFBRTdCLHVCQUFTLEVBQUU7QUFBRU0sMkJBQVcsRUFBWEE7QUFBRjtBQUFiLGFBSko7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmYzNWIxYmUxMGM0NGJkYzE5NzAyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNRFhQcm92aWRlciB9IGZyb20gXCJAbWR4LWpzL3JlYWN0XCJcclxuaW1wb3J0IHsgQXBwQ29udGV4dCwgQXBwSW5pdGlhbFByb3BzLCBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxyXG5pbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlQXJyYXkgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgcGF0aFRvTWFya2Rvd25zIGZyb20gXCJjYWNoZS9tZE1ldGFzLmpzb25cIlxyXG5pbXBvcnQgbWVudXMgZnJvbSBcImNhY2hlL21lbnVzLmpzb25cIlxyXG5pbXBvcnQgcm91dGVUcmVlIGZyb20gXCJjYWNoZS9yb3V0ZS10cmVlLmpzb25cIlxyXG5pbXBvcnQgcm91dGVzIGZyb20gXCJjYWNoZS9yb3V0ZXMuanNvblwiXHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcImNvbXBvbmVudHMvbGF5b3V0XCJcclxuaW1wb3J0IHsgQmxvZ0hlYWRlciwgTURYX0NPTVBPTkVOVFMgfSBmcm9tIFwiY29tcG9uZW50cy9tZHgtdWlcIlxyXG5pbXBvcnQgeyBpIH0gZnJvbSBcImxpYi9jb21tb25zXCJcclxuaW1wb3J0IHsgSUxheW91dFByb3MgfSBmcm9tIFwidHlwZXNcIlxyXG5cclxuaW1wb3J0ICogYXMgZ3RhZyBmcm9tIFwibGliL2FuYWx5c3RpY1wiXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5jb25zdCBNRFhfRnJhbWU6IFJlYWN0LkZDID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3ROb2RlQXJyYXkgfSkgPT4ge1xyXG4gICAgcmV0dXJuIDxhcnRpY2xlIGNoaWxkcmVuPXtjaGlsZHJlbn0gLz5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX0FwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzLCByb3V0ZXIgfTogQXBwUHJvcHMpOiBKU1guRWxlbWVudCB7XHJcbiAgICBpKFwiX2FwcC50c3hcIiwgXCJyb3V0ZXJcIiwgcm91dGVyLmFzUGF0aCwgXCJwYWdlUHJvcHNcIiwgT2JqZWN0LmtleXMocGFnZVByb3BzKSlcclxuXHJcbiAgICAvLyBjb25zdCB7IGxheW91dFByb3BzIH0gPSBwYWdlUHJvcHNcclxuICAgIGNvbnN0IGxheW91dFByb3BzOiBJTGF5b3V0UHJvcyA9IHsgbWVudXMsIHJvdXRlVHJlZSwgcm91dGVzLCBwYXRoVG9NYXJrZG93bnMgfVxyXG4gICAgLy8gY29uc3QgeyByb3V0ZXMsIHBhdGhUb01hcmtkb3ducyB9ID0gbGF5b3V0UHJvcHNcclxuXHJcbiAgICBsZXQgY29udGVudDogSlNYLkVsZW1lbnQgPSBudWxsXHJcblxyXG4gICAgY29uc3QgX3BhdGg6IHN0cmluZyA9IHJvdXRlci5hc1BhdGhcclxuICAgIGNvbnN0IGN1cnJlbnRSb3V0ZSA9IHJvdXRlcy5maW5kKHIgPT4gci5fcGF0aCA9PSBfcGF0aClcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhhbmRsZVJvdXRlQ2hhbmdlID0gKHVybDogVVJMKSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgZ3RhZy5wYWdldmlldyh1cmwpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsIGhhbmRsZVJvdXRlQ2hhbmdlKVxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICByb3V0ZXIuZXZlbnRzLm9mZihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgaGFuZGxlUm91dGVDaGFuZ2UpXHJcbiAgICAgICAgfVxyXG4gICAgICB9LCBbcm91dGVyLmV2ZW50c10pXHJcblxyXG4gICAgaWYgKF9wYXRoLmluY2x1ZGVzKFwiNDA0XCIpKSB7XHJcbiAgICAgICAgY29udGVudCA9IDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmtleXMocGF0aFRvTWFya2Rvd25zKS5pbmNsdWRlcyhfcGF0aCArIFwiLm1keFwiKSkge1xyXG4gICAgICAgIC8vRm9yIG1hcmtkb3duIG1keCBjb250ZW50XHJcbiAgICAgICAgY29udGVudCA9IDxMYXlvdXQgaG9tZSBsYXlvdXRQcm9wcz17bGF5b3V0UHJvcHN9PlxyXG4gICAgICAgICAgICA8TURYUHJvdmlkZXIgY29tcG9uZW50cz17eyB3cmFwcGVyOiBNRFhfRnJhbWUsIC4uLk1EWF9DT01QT05FTlRTIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZC1mbGV4IGZsZXgtY29sdW1uIHB0LTMgd2hpdGUgcm91bmRlZC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJsb2dIZWFkZXIgey4uLnBhdGhUb01hcmtkb3duc1tfcGF0aCArIFwiLm1keFwiXX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9NRFhQcm92aWRlcj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29udGVudCA9IDxMYXlvdXQgaG9tZSBsYXlvdXRQcm9wcz17bGF5b3V0UHJvcHN9PjxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz48L0xheW91dD5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKDw+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgbWF4aW11bS1zY2FsZT0xLCB1c2VyLXNjYWxhYmxlPW5vXCIgLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cImZvcm1hdC1kZXRlY3Rpb25cIiBjb250ZW50PVwidGVsZXBob25lPW5vXCIgLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cIlgtRlJBTUUtT1BUSU9OU1wiIGNvbnRlbnQ9XCJkZW55XCIgLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAge2NvbnRlbnR9XHJcbiAgICA8Lz4pXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJbml0aWFsUHJvcHMoYXBwQ29udGV4dDogQXBwQ29udGV4dCk6IFByb21pc2U8QXBwSW5pdGlhbFByb3BzPiB7XHJcbiAgICBjb25zdCB7IENvbXBvbmVudCwgY3R4LCB9ID0gYXBwQ29udGV4dFxyXG4gICAgY29uc3QgbGF5b3V0UHJvcHM6IElMYXlvdXRQcm9zID0geyBtZW51cywgcm91dGVUcmVlLCByb3V0ZXMsIHBhdGhUb01hcmtkb3ducyB9XHJcbiAgICBpKFwiX2FwcC50c3hcIiwgXCJtZW51c1wiLCBsYXlvdXRQcm9wcy5tZW51cy5sZW5ndGgpXHJcbiAgICByZXR1cm4geyBwYWdlUHJvcHM6IHsgbGF5b3V0UHJvcHMgfSB9XHJcbn1cclxuXHJcbi8vIF9BcHAuZ2V0SW5pdGlhbFByb3BzID0gZ2V0SW5pdGlhbFByb3BzXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=