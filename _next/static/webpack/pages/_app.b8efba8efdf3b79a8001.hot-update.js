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
/* harmony import */ var _cache_mdMetas_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../cache/mdMetas.json */ "./src/cache/mdMetas.json");
var _cache_mdMetas_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../cache/mdMetas.json */ "./src/cache/mdMetas.json", 1);
/* harmony import */ var _cache_menus_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../cache/menus.json */ "./src/cache/menus.json");
var _cache_menus_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../cache/menus.json */ "./src/cache/menus.json", 1);
/* harmony import */ var _cache_route_tree_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../cache/route-tree.json */ "./src/cache/route-tree.json");
var _cache_route_tree_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../cache/route-tree.json */ "./src/cache/route-tree.json", 1);
/* harmony import */ var _cache_routes_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../cache/routes.json */ "./src/cache/routes.json");
var _cache_routes_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../cache/routes.json */ "./src/cache/routes.json", 1);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.tsx");
/* harmony import */ var _components_mdx_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/mdx-ui */ "./src/components/mdx-ui.tsx");
/* harmony import */ var _lib_commons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../lib/commons */ "./src/lib/commons.ts");






var _jsxFileName = "D:\\workspace\\cfcodefans.github.io\\src\\pages\\_app.tsx",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












var MDX_Frame = function MDX_Frame(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("article", {
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 12
  }, _this);
};

_c = MDX_Frame;
function _App(_ref2) {
  var Component = _ref2.Component,
      pageProps = _ref2.pageProps,
      router = _ref2.router;
  Object(_lib_commons__WEBPACK_IMPORTED_MODULE_13__["i"])("_app.tsx", "router", router.asPath, "pageProps", Object.keys(pageProps));
  var layoutProps = pageProps.layoutProps;
  var routes = layoutProps.routes,
      pathToMarkdowns = layoutProps.pathToMarkdowns;
  var content = null;
  var _path = router.asPath;
  var currentRoute = routes.find(function (r) {
    return r._path == _path;
  });

  if (_path.includes("404")) {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 19
    }, this);
  } else if (Object.keys(pathToMarkdowns).includes(_path + ".mdx")) {
    //For markdown mdx content
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
      home: true,
      layoutProps: layoutProps,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["MDXProvider"], {
        components: _objectSpread({
          wrapper: MDX_Frame
        }, _components_mdx_ui__WEBPACK_IMPORTED_MODULE_12__["MDX_COMPONENTS"]),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "container d-flex flex-column pt-3 white rounded-1",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_mdx_ui__WEBPACK_IMPORTED_MODULE_12__["BlogHeader"], _objectSpread({}, pathToMarkdowns[_path + ".mdx"]), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 19
    }, this);
  } else {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
      home: true,
      layoutProps: layoutProps,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 58
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
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
        lineNumber: 47,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("meta", {
        name: "format-detection",
        content: "telephone=no"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("meta", {
        name: "X-FRAME-OPTIONS",
        content: "deny"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }, this), content]
  }, void 0, true);
}
function getInitialProps(_x) {
  return _getInitialProps.apply(this, arguments);
}

function _getInitialProps() {
  _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(appContext) {
    var Component, ctx, layoutProps;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            Component = appContext.Component, ctx = appContext.ctx; // const { bootstrap, } = await import("../lib/blogs")
            // const menus: IMenuItemModal[] = await LOAD_MENUS(await LOAD_PATHS(ROOT_PATH), BASE_PATH)
            // const layoutProps: ILayoutPros = await bootstrap()

            layoutProps = {
              menus: _cache_menus_json__WEBPACK_IMPORTED_MODULE_8__,
              routeTree: _cache_route_tree_json__WEBPACK_IMPORTED_MODULE_9__,
              routes: _cache_routes_json__WEBPACK_IMPORTED_MODULE_10__,
              pathToMarkdowns: _cache_mdMetas_json__WEBPACK_IMPORTED_MODULE_7__
            };
            Object(_lib_commons__WEBPACK_IMPORTED_MODULE_13__["i"])("_app.tsx", "menus", layoutProps.menus.length);
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

_App.getInitialProps = getInitialProps;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4Il0sIm5hbWVzIjpbIk1EWF9GcmFtZSIsImNoaWxkcmVuIiwiX0FwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJvdXRlciIsImkiLCJhc1BhdGgiLCJPYmplY3QiLCJrZXlzIiwibGF5b3V0UHJvcHMiLCJyb3V0ZXMiLCJwYXRoVG9NYXJrZG93bnMiLCJjb250ZW50IiwiX3BhdGgiLCJjdXJyZW50Um91dGUiLCJmaW5kIiwiciIsImluY2x1ZGVzIiwid3JhcHBlciIsIk1EWF9DT01QT05FTlRTIiwiZ2V0SW5pdGlhbFByb3BzIiwiYXBwQ29udGV4dCIsImN0eCIsIm1lbnVzIiwicm91dGVUcmVlIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxTQUFtQixHQUFHLFNBQXRCQSxTQUFzQixPQUFnRDtBQUFBLE1BQTdDQyxRQUE2QyxRQUE3Q0EsUUFBNkM7QUFDeEUsc0JBQU87QUFBUyxZQUFRLEVBQUVBO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNILENBRkQ7O0tBQU1ELFM7QUFJUyxTQUFTRSxJQUFULFFBQXVFO0FBQUEsTUFBdkRDLFNBQXVELFNBQXZEQSxTQUF1RDtBQUFBLE1BQTVDQyxTQUE0QyxTQUE1Q0EsU0FBNEM7QUFBQSxNQUFqQ0MsTUFBaUMsU0FBakNBLE1BQWlDO0FBQ2xGQyx5REFBQyxDQUFDLFVBQUQsRUFBYSxRQUFiLEVBQXVCRCxNQUFNLENBQUNFLE1BQTlCLEVBQXNDLFdBQXRDLEVBQW1EQyxNQUFNLENBQUNDLElBQVAsQ0FBWUwsU0FBWixDQUFuRCxDQUFEO0FBRGtGLE1BRzFFTSxXQUgwRSxHQUcxRE4sU0FIMEQsQ0FHMUVNLFdBSDBFO0FBQUEsTUFJMUVD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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQVdQUixJQUFJLENBQUNtQixlQUFMLEdBQXVCQSxlQUF2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmI4ZWZiYThlZmRmM2I3OWE4MDAxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNRFhQcm92aWRlciB9IGZyb20gXCJAbWR4LWpzL3JlYWN0XCJcclxuaW1wb3J0IHsgQXBwQ29udGV4dCwgQXBwSW5pdGlhbFByb3BzLCBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxyXG5pbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlQXJyYXkgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgcGF0aFRvTWFya2Rvd25zIGZyb20gXCIuLi9jYWNoZS9tZE1ldGFzLmpzb25cIlxyXG5pbXBvcnQgbWVudXMgZnJvbSBcIi4uL2NhY2hlL21lbnVzLmpzb25cIlxyXG5pbXBvcnQgcm91dGVUcmVlIGZyb20gXCIuLi9jYWNoZS9yb3V0ZS10cmVlLmpzb25cIlxyXG5pbXBvcnQgcm91dGVzIGZyb20gXCIuLi9jYWNoZS9yb3V0ZXMuanNvblwiXHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCJcclxuaW1wb3J0IHsgQmxvZ0hlYWRlciwgTURYX0NPTVBPTkVOVFMgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9tZHgtdWlcIlxyXG5pbXBvcnQgeyBpIH0gZnJvbSBcIi4uL2xpYi9jb21tb25zXCJcclxuaW1wb3J0IHsgSUxheW91dFByb3MgfSBmcm9tIFwiLi4vdHlwZXNcIlxyXG5cclxuY29uc3QgTURYX0ZyYW1lOiBSZWFjdC5GQyA9ICh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0Tm9kZUFycmF5IH0pID0+IHtcclxuICAgIHJldHVybiA8YXJ0aWNsZSBjaGlsZHJlbj17Y2hpbGRyZW59IC8+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9BcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgcm91dGVyIH06IEFwcFByb3BzKTogSlNYLkVsZW1lbnQge1xyXG4gICAgaShcIl9hcHAudHN4XCIsIFwicm91dGVyXCIsIHJvdXRlci5hc1BhdGgsIFwicGFnZVByb3BzXCIsIE9iamVjdC5rZXlzKHBhZ2VQcm9wcykpXHJcblxyXG4gICAgY29uc3QgeyBsYXlvdXRQcm9wcyB9ID0gcGFnZVByb3BzXHJcbiAgICBjb25zdCB7IHJvdXRlcywgcGF0aFRvTWFya2Rvd25zIH0gPSBsYXlvdXRQcm9wc1xyXG5cclxuICAgIGxldCBjb250ZW50OiBKU1guRWxlbWVudCA9IG51bGxcclxuXHJcbiAgICBjb25zdCBfcGF0aDogc3RyaW5nID0gcm91dGVyLmFzUGF0aFxyXG4gICAgY29uc3QgY3VycmVudFJvdXRlID0gcm91dGVzLmZpbmQociA9PiByLl9wYXRoID09IF9wYXRoKVxyXG5cclxuICAgIGlmIChfcGF0aC5pbmNsdWRlcyhcIjQwNFwiKSkge1xyXG4gICAgICAgIGNvbnRlbnQgPSA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5rZXlzKHBhdGhUb01hcmtkb3ducykuaW5jbHVkZXMoX3BhdGggKyBcIi5tZHhcIikpIHtcclxuICAgICAgICAvL0ZvciBtYXJrZG93biBtZHggY29udGVudFxyXG4gICAgICAgIGNvbnRlbnQgPSA8TGF5b3V0IGhvbWUgbGF5b3V0UHJvcHM9e2xheW91dFByb3BzfT5cclxuICAgICAgICAgICAgPE1EWFByb3ZpZGVyIGNvbXBvbmVudHM9e3sgd3JhcHBlcjogTURYX0ZyYW1lLCAuLi5NRFhfQ09NUE9ORU5UUyB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGQtZmxleCBmbGV4LWNvbHVtbiBwdC0zIHdoaXRlIHJvdW5kZWQtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCbG9nSGVhZGVyIHsuLi5wYXRoVG9NYXJrZG93bnNbX3BhdGggKyBcIi5tZHhcIl19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTURYUHJvdmlkZXI+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnRlbnQgPSA8TGF5b3V0IGhvbWUgbGF5b3V0UHJvcHM9e2xheW91dFByb3BzfT48Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+PC9MYXlvdXQ+XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICg8PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIG1heGltdW0tc2NhbGU9MSwgdXNlci1zY2FsYWJsZT1ub1wiIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJmb3JtYXQtZGV0ZWN0aW9uXCIgY29udGVudD1cInRlbGVwaG9uZT1ub1wiIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJYLUZSQU1FLU9QVElPTlNcIiBjb250ZW50PVwiZGVueVwiIC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIHtjb250ZW50fVxyXG4gICAgPC8+KVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SW5pdGlhbFByb3BzKGFwcENvbnRleHQ6IEFwcENvbnRleHQpOiBQcm9taXNlPEFwcEluaXRpYWxQcm9wcz4ge1xyXG4gICAgY29uc3QgeyBDb21wb25lbnQsIGN0eCwgfSA9IGFwcENvbnRleHRcclxuICAgIC8vIGNvbnN0IHsgYm9vdHN0cmFwLCB9ID0gYXdhaXQgaW1wb3J0KFwiLi4vbGliL2Jsb2dzXCIpXHJcblxyXG4gICAgLy8gY29uc3QgbWVudXM6IElNZW51SXRlbU1vZGFsW10gPSBhd2FpdCBMT0FEX01FTlVTKGF3YWl0IExPQURfUEFUSFMoUk9PVF9QQVRIKSwgQkFTRV9QQVRIKVxyXG4gICAgLy8gY29uc3QgbGF5b3V0UHJvcHM6IElMYXlvdXRQcm9zID0gYXdhaXQgYm9vdHN0cmFwKClcclxuICAgIGNvbnN0IGxheW91dFByb3BzOiBJTGF5b3V0UHJvcyA9IHsgbWVudXMsIHJvdXRlVHJlZSwgcm91dGVzLCBwYXRoVG9NYXJrZG93bnMgfVxyXG4gICAgaShcIl9hcHAudHN4XCIsIFwibWVudXNcIiwgbGF5b3V0UHJvcHMubWVudXMubGVuZ3RoKVxyXG4gICAgcmV0dXJuIHsgcGFnZVByb3BzOiB7IGxheW91dFByb3BzIH0gfVxyXG59XHJcblxyXG5fQXBwLmdldEluaXRpYWxQcm9wcyA9IGdldEluaXRpYWxQcm9wc1xyXG4iXSwic291cmNlUm9vdCI6IiJ9