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
      Object(lib_commons__WEBPACK_IMPORTED_MODULE_13__["i"])("_app.tsx", "url on routeChangeComplete event");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4Il0sIm5hbWVzIjpbIk1EWF9GcmFtZSIsImNoaWxkcmVuIiwiX0FwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJvdXRlciIsImkiLCJhc1BhdGgiLCJPYmplY3QiLCJrZXlzIiwibGF5b3V0UHJvcHMiLCJtZW51cyIsInJvdXRlVHJlZSIsInJvdXRlcyIsInBhdGhUb01hcmtkb3ducyIsImNvbnRlbnQiLCJfcGF0aCIsImN1cnJlbnRSb3V0ZSIsImZpbmQiLCJyIiwidXNlRWZmZWN0IiwiaGFuZGxlUm91dGVDaGFuZ2UiLCJ1cmwiLCJndGFnIiwiZXZlbnRzIiwib24iLCJvZmYiLCJpbmNsdWRlcyIsIndyYXBwZXIiLCJNRFhfQ09NUE9ORU5UUyIsImdldEluaXRpYWxQcm9wcyIsImFwcENvbnRleHQiLCJjdHgiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOztBQUVBLElBQU1BLFNBQW1CLEdBQUcsU0FBdEJBLFNBQXNCLE9BQWdEO0FBQUEsTUFBN0NDLFFBQTZDLFFBQTdDQSxRQUE2QztBQUN4RSxzQkFBTztBQUFTLFlBQVEsRUFBRUE7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0gsQ0FGRDs7S0FBTUQsUztBQUlTLFNBQVNFLElBQVQsUUFBdUU7QUFBQTs7QUFBQSxNQUF2REMsU0FBdUQsU0FBdkRBLFNBQXVEO0FBQUEsTUFBNUNDLFNBQTRDLFNBQTVDQSxTQUE0QztBQUFBLE1BQWpDQyxNQUFpQyxTQUFqQ0EsTUFBaUM7QUFDbEZDLHdEQUFDLENBQUMsVUFBRCxFQUFhLFFBQWIsRUFBdUJELE1BQU0sQ0FBQ0UsTUFBOUIsRUFBc0MsV0FBdEMsRUFBbURDLE1BQU0sQ0FBQ0Ms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RztBQUFBLGtCQUFSO0FBUUg7O0dBL0N1QmIsSTs7QUFpRGpCLFNBQWU0QixlQUF0QjtBQUFBO0FBQUEsQyxDQU9BOzs7c01BUE8saUJBQStCQyxVQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSzVCLHFCQURMLEdBQ3lCNEIsVUFEekIsQ0FDSzVCLFNBREwsRUFDZ0I2QixHQURoQixHQUN5QkQsVUFEekIsQ0FDZ0JDLEdBRGhCO0FBRUd0Qix1QkFGSCxHQUU4QjtBQUFFQyxtQkFBSyxFQUFMQSw2Q0FBRjtBQUFTQyx1QkFBUyxFQUFUQSxrREFBVDtBQUFvQkMsb0JBQU0sRUFBTkEsK0NBQXBCO0FBQTRCQyw2QkFBZSxFQUFmQSwrQ0FBZUE7QUFBM0MsYUFGOUI7QUFHSFIsa0VBQUMsQ0FBQyxVQUFELEVBQWEsT0FBYixFQUFzQkksV0FBVyxDQUFDQyxLQUFaLENBQWtCc0IsTUFBeEMsQ0FBRDtBQUhHLDZDQUlJO0FBQUU3Qix1QkFBUyxFQUFFO0FBQUVNLDJCQUFXLEVBQVhBO0FBQUY7QUFBYixhQUpKOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC44OTE5NmI3OTAzMTViNTA0OTIyNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTURYUHJvdmlkZXIgfSBmcm9tIFwiQG1keC1qcy9yZWFjdFwiXHJcbmltcG9ydCB7IEFwcENvbnRleHQsIEFwcEluaXRpYWxQcm9wcywgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIlxyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcclxuaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZUFycmF5IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHBhdGhUb01hcmtkb3ducyBmcm9tIFwiY2FjaGUvbWRNZXRhcy5qc29uXCJcclxuaW1wb3J0IG1lbnVzIGZyb20gXCJjYWNoZS9tZW51cy5qc29uXCJcclxuaW1wb3J0IHJvdXRlVHJlZSBmcm9tIFwiY2FjaGUvcm91dGUtdHJlZS5qc29uXCJcclxuaW1wb3J0IHJvdXRlcyBmcm9tIFwiY2FjaGUvcm91dGVzLmpzb25cIlxyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCJjb21wb25lbnRzL2xheW91dFwiXHJcbmltcG9ydCB7IEJsb2dIZWFkZXIsIE1EWF9DT01QT05FTlRTIH0gZnJvbSBcImNvbXBvbmVudHMvbWR4LXVpXCJcclxuaW1wb3J0IHsgaSB9IGZyb20gXCJsaWIvY29tbW9uc1wiXHJcbmltcG9ydCB7IElMYXlvdXRQcm9zIH0gZnJvbSBcInR5cGVzXCJcclxuXHJcbmltcG9ydCAqIGFzIGd0YWcgZnJvbSBcImxpYi9hbmFseXN0aWNcIlxyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuY29uc3QgTURYX0ZyYW1lOiBSZWFjdC5GQyA9ICh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0Tm9kZUFycmF5IH0pID0+IHtcclxuICAgIHJldHVybiA8YXJ0aWNsZSBjaGlsZHJlbj17Y2hpbGRyZW59IC8+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9BcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgcm91dGVyIH06IEFwcFByb3BzKTogSlNYLkVsZW1lbnQge1xyXG4gICAgaShcIl9hcHAudHN4XCIsIFwicm91dGVyXCIsIHJvdXRlci5hc1BhdGgsIFwicGFnZVByb3BzXCIsIE9iamVjdC5rZXlzKHBhZ2VQcm9wcykpXHJcblxyXG4gICAgLy8gY29uc3QgeyBsYXlvdXRQcm9wcyB9ID0gcGFnZVByb3BzXHJcbiAgICBjb25zdCBsYXlvdXRQcm9wczogSUxheW91dFByb3MgPSB7IG1lbnVzLCByb3V0ZVRyZWUsIHJvdXRlcywgcGF0aFRvTWFya2Rvd25zIH1cclxuICAgIC8vIGNvbnN0IHsgcm91dGVzLCBwYXRoVG9NYXJrZG93bnMgfSA9IGxheW91dFByb3BzXHJcblxyXG4gICAgbGV0IGNvbnRlbnQ6IEpTWC5FbGVtZW50ID0gbnVsbFxyXG5cclxuICAgIGNvbnN0IF9wYXRoOiBzdHJpbmcgPSByb3V0ZXIuYXNQYXRoXHJcbiAgICBjb25zdCBjdXJyZW50Um91dGUgPSByb3V0ZXMuZmluZChyID0+IHIuX3BhdGggPT0gX3BhdGgpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZSA9ICh1cmw6IFVSTCkgPT4ge1xyXG4gICAgICAgICAgICBpKFwiX2FwcC50c3hcIiwgXCJ1cmwgb24gcm91dGVDaGFuZ2VDb21wbGV0ZSBldmVudFwiKVxyXG4gICAgICAgICAgICBndGFnLnBhZ2V2aWV3KHVybClcclxuICAgICAgICB9XHJcbiAgICAgICAgcm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgaGFuZGxlUm91dGVDaGFuZ2UpXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgcm91dGVyLmV2ZW50cy5vZmYoXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsIGhhbmRsZVJvdXRlQ2hhbmdlKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtyb3V0ZXIuZXZlbnRzXSlcclxuXHJcbiAgICBpZiAoX3BhdGguaW5jbHVkZXMoXCI0MDRcIikpIHtcclxuICAgICAgICBjb250ZW50ID0gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgfSBlbHNlIGlmIChPYmplY3Qua2V5cyhwYXRoVG9NYXJrZG93bnMpLmluY2x1ZGVzKF9wYXRoICsgXCIubWR4XCIpKSB7XHJcbiAgICAgICAgLy9Gb3IgbWFya2Rvd24gbWR4IGNvbnRlbnRcclxuICAgICAgICBjb250ZW50ID0gPExheW91dCBob21lIGxheW91dFByb3BzPXtsYXlvdXRQcm9wc30+XHJcbiAgICAgICAgICAgIDxNRFhQcm92aWRlciBjb21wb25lbnRzPXt7IHdyYXBwZXI6IE1EWF9GcmFtZSwgLi4uTURYX0NPTVBPTkVOVFMgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBkLWZsZXggZmxleC1jb2x1bW4gcHQtMyB3aGl0ZSByb3VuZGVkLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QmxvZ0hlYWRlciB7Li4ucGF0aFRvTWFya2Rvd25zW19wYXRoICsgXCIubWR4XCJdfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L01EWFByb3ZpZGVyPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb250ZW50ID0gPExheW91dCBob21lIGxheW91dFByb3BzPXtsYXlvdXRQcm9wc30+PENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPjwvTGF5b3V0PlxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoPD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCBtYXhpbXVtLXNjYWxlPTEsIHVzZXItc2NhbGFibGU9bm9cIiAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwiZm9ybWF0LWRldGVjdGlvblwiIGNvbnRlbnQ9XCJ0ZWxlcGhvbmU9bm9cIiAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwiWC1GUkFNRS1PUFRJT05TXCIgY29udGVudD1cImRlbnlcIiAvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICB7Y29udGVudH1cclxuICAgIDwvPilcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEluaXRpYWxQcm9wcyhhcHBDb250ZXh0OiBBcHBDb250ZXh0KTogUHJvbWlzZTxBcHBJbml0aWFsUHJvcHM+IHtcclxuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBjdHgsIH0gPSBhcHBDb250ZXh0XHJcbiAgICBjb25zdCBsYXlvdXRQcm9wczogSUxheW91dFByb3MgPSB7IG1lbnVzLCByb3V0ZVRyZWUsIHJvdXRlcywgcGF0aFRvTWFya2Rvd25zIH1cclxuICAgIGkoXCJfYXBwLnRzeFwiLCBcIm1lbnVzXCIsIGxheW91dFByb3BzLm1lbnVzLmxlbmd0aClcclxuICAgIHJldHVybiB7IHBhZ2VQcm9wczogeyBsYXlvdXRQcm9wcyB9IH1cclxufVxyXG5cclxuLy8gX0FwcC5nZXRJbml0aWFsUHJvcHMgPSBnZXRJbml0aWFsUHJvcHNcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==