webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/nav-sidebar.tsx":
/*!****************************************!*\
  !*** ./src/components/nav-sidebar.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavSideBar; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_commons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/commons */ "./src/lib/commons.ts");
/* harmony import */ var _breadcrumb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./breadcrumb */ "./src/components/breadcrumb.tsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_7__);



var _jsxFileName = "D:\\workspace\\cfcodefans.github.io\\src\\components\\nav-sidebar.tsx",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();







var UL_STYLE = "nav default-pills nav-pills nav-fills pt-1";

function isClosestMenu(mp, rp) {
  if (lodash__WEBPACK_IMPORTED_MODULE_6___default.a.isEmpty(mp) || lodash__WEBPACK_IMPORTED_MODULE_6___default.a.isEmpty(rp)) return false;
  if (mp == rp) return true;
  var rps = rp.split("/");

  if (rps.length >= 5) {
    return mp == rps.slice(0, 4).join("/");
  }

  return false;
}

function MenuItem(_ref) {
  _s();

  var children = _ref.children,
      modal = _ref.modal;

  var _link = "/".concat(modal.link); // const [currentPath, setCurrentPath] = useState("")
  // useEffect(() => setCurrentPath((window && window.location.pathname) || "")) badge badge-pill badge-info justify-content-between


  var router = Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])(); // i("nav-sidebar.tsx", "_link", _link)

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("nav", {
    className: "menu-layer-".concat(modal.layer, " nav-item w-100"),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: _link,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
        className: "icon-".concat(modal.icon, " nav-link ").concat(isClosestMenu(_link, router.asPath) ? "active z-depth-1-half font-weight-bolder" : "", " hoverable rounded-pill d-flex px-2 justify-content-between"),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
          className: "menu-label text-capitalize",
          children: modal.label
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 17
        }, this), "\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
          className: "text-dark align-self-center",
          children: ["[", modal.leaveCount, "]"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }, this), children && children.filter(function (rn) {
      return rn;
    }).length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("nav", {
      className: "".concat(UL_STYLE, " "),
      children: children
    }, modal.label, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 13
  }, this);
}

_s(MenuItem, "hiS8qxSQ4/p4gtIvOT37RqZ02j0=", false, function () {
  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"]];
});

_c = MenuItem;
function NavSideBar(_ref2) {
  _s2();

  var _this = this;

  var menus = _ref2.menus;

  var modalStack = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(menus);

  var linkAndElements = new Map();
  Object(_lib_commons__WEBPACK_IMPORTED_MODULE_4__["deepTraverse"])(modalStack, function (mi) {
    linkAndElements.set(mi.link, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(MenuItem, {
      modal: mi,
      children: []
    }, mi.link, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 38
    }, _this));
    if (mi.layer >= 2) return [];
    return mi.children.filter(function (c) {
      return !lodash__WEBPACK_IMPORTED_MODULE_6___default.a.isEmpty(c.children);
    });
  });
  Object(_lib_commons__WEBPACK_IMPORTED_MODULE_4__["deepTraverse"])(modalStack, function (mi) {
    if (!lodash__WEBPACK_IMPORTED_MODULE_6___default.a.isEmpty(mi.children)) {
      var menuItemElm = linkAndElements.get(mi.link);
      var elementChildrenRef = menuItemElm.props.children;
      elementChildrenRef.push.apply(elementChildrenRef, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(mi.children.map(function (subMI) {
        return linkAndElements.get(subMI.link);
      })));
    }

    if (mi.layer >= 2) return [];
    return mi.children.filter(function (c) {
      return !lodash__WEBPACK_IMPORTED_MODULE_6___default.a.isEmpty(c);
    });
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      currentPath = _useState[0],
      setCurrentPath = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    return setCurrentPath(window && window.location.pathname || "");
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("nav", {
    className: "nav-sidebar menu-sidebar d-flex flex-column mr-lg-1 shadow",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "menu_header flex-lg-column align-items-center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "logo text-center d-flex align-items-center m-lg-4",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
            className: "rounded-circle w-100 h-100 hoverable",
            src: "/images/cfcodefans.jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "nav-title text-center flex-grow-1 w-100",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/resume",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
            className: "text-capitalize font-weight-bold",
            children: "cfcodefans"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      id: "menu_nav",
      className: "d-flex align-items-center navbar pl-1 pr-1 border border-0 z-depth-0 ",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("nav", {
        "aria-label": "breadcrumb",
        className: "d-flex d-lg-none justify-content-between w-100 mb-2 primary-color font-up-bold",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_breadcrumb__WEBPACK_IMPORTED_MODULE_5__["default"], {
          _path: currentPath
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
          className: "navbar-toggler",
          type: "button",
          "data-toggle": "collapse",
          "data-target": "#menu_box",
          "aria-controls": "menu_box",
          "aria-expanded": "true",
          "aria-label": "Toggle navigation",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            className: "dark-blue-text",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("i", {
              className: "fas fa-bars fa-1x"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "navbar-collapse border border-0 z-depth-0 d-lg-block pr-1",
        id: "menu_box",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("nav", {
          className: "menu ".concat(UL_STYLE, " smooth-scroll w-100 "),
          children: menus.map(function (m) {
            return linkAndElements.get(m.link);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 13
  }, this);
}

_s2(NavSideBar, "+5LReGXzNmKpSIomxLup6hX4RAs=");

_c2 = NavSideBar;

var _c, _c2;

$RefreshReg$(_c, "MenuItem");
$RefreshReg$(_c2, "NavSideBar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbmF2LXNpZGViYXIudHN4Il0sIm5hbWVzIjpbIlVMX1NUWUxFIiwiaXNDbG9zZXN0TWVudSIsIm1wIiwicnAiLCJfIiwiaXNFbXB0eSIsInJwcyIsInNwbGl0IiwibGVuZ3RoIiwic2xpY2UiLCJqb2luIiwiTWVudUl0ZW0iLCJjaGlsZHJlbiIsIm1vZGFsIiwiX2xpbmsiLCJsaW5rIiwicm91dGVyIiwidXNlUm91dGVyIiwibGF5ZXIiLCJpY29uIiwiYXNQYXRoIiwibGFiZWwiLCJsZWF2ZUNvdW50IiwiZmlsdGVyIiwicm4iLCJOYXZTaWRlQmFyIiwibWVudXMiLCJtb2RhbFN0YWNrIiwibGlua0FuZEVsZW1lbnRzIiwiTWFwIiwiZGVlcFRyYXZlcnNlIiwibWkiLCJzZXQiLCJjIiwibWVudUl0ZW1FbG0iLCJnZXQiLCJlbGVtZW50Q2hpbGRyZW5SZWYiLCJwcm9wcyIsInB1c2giLCJtYXAiLCJzdWJNSSIsInVzZVN0YXRlIiwiY3VycmVudFBhdGgiLCJzZXRDdXJyZW50UGF0aCIsInVzZUVmZmVjdCIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFFBQWdCLEdBQUcsNENBQXpCOztBQUVBLFNBQVNDLGFBQVQsQ0FBdUJDLEVBQXZCLEVBQW1DQyxFQUFuQyxFQUF3RDtBQUNwRCxNQUFJQyw2Q0FBQyxDQUFDQyxPQUFGLENBQVVILEVBQVYsS0FBaUJFLDZDQUFDLENBQUNDLE9BQUYsQ0FBVUYsRUFBVixDQUFyQixFQUFvQyxPQUFPLEtBQVA7QUFFcEMsTUFBSUQsRUFBRSxJQUFJQyxFQUFWLEVBQWMsT0FBTyxJQUFQO0FBQ2QsTUFBTUcsR0FBYSxHQUFHSCxFQUFFLENBQUNJLEtBQUgsQ0FBUyxHQUFULENBQXRCOztBQUNBLE1B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QUFKO0FBQUEsV0FBWDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUjtBQXlDSDs7SUFsRXVCVSxVOztNQUFBQSxVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuY2Y3YTg4OGE0NDYxZmMzNGIyZmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGVBcnJheSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IGRlZXBUcmF2ZXJzZSwgaSB9IGZyb20gXCIuLi9saWIvY29tbW9uc1wiXHJcbmltcG9ydCB7IElNZW51SXRlbU1vZGFsIH0gZnJvbSBcIi4uL3R5cGVzXCJcclxuaW1wb3J0IEJyZWFkQ3J1bWIgZnJvbSBcIi4vYnJlYWRjcnVtYlwiXHJcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIlxyXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9yb3V0ZXJcIlxyXG5cclxuY29uc3QgVUxfU1RZTEU6IHN0cmluZyA9IFwibmF2IGRlZmF1bHQtcGlsbHMgbmF2LXBpbGxzIG5hdi1maWxscyBwdC0xXCJcclxuXHJcbmZ1bmN0aW9uIGlzQ2xvc2VzdE1lbnUobXA6IHN0cmluZywgcnA6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKF8uaXNFbXB0eShtcCkgfHwgXy5pc0VtcHR5KHJwKSkgcmV0dXJuIGZhbHNlXHJcblxyXG4gICAgaWYgKG1wID09IHJwKSByZXR1cm4gdHJ1ZVxyXG4gICAgY29uc3QgcnBzOiBzdHJpbmdbXSA9IHJwLnNwbGl0KFwiL1wiKVxyXG4gICAgaWYgKHJwcy5sZW5ndGggPj0gNSkge1xyXG4gICAgICAgIHJldHVybiBtcCA9PSBycHMuc2xpY2UoMCwgNCkuam9pbihcIi9cIilcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZVxyXG59XHJcblxyXG5mdW5jdGlvbiBNZW51SXRlbSh7IGNoaWxkcmVuLCBtb2RhbCB9OiB7IGNoaWxkcmVuOiBSZWFjdE5vZGVBcnJheSwgbW9kYWw6IElNZW51SXRlbU1vZGFsIH0pOiBKU1guRWxlbWVudCB7XHJcbiAgICBjb25zdCBfbGluazogc3RyaW5nID0gYC8ke21vZGFsLmxpbmt9YFxyXG5cclxuICAgIC8vIGNvbnN0IFtjdXJyZW50UGF0aCwgc2V0Q3VycmVudFBhdGhdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiBzZXRDdXJyZW50UGF0aCgod2luZG93ICYmIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSkgfHwgXCJcIikpIGJhZGdlIGJhZGdlLXBpbGwgYmFkZ2UtaW5mbyBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblxyXG4gICAgY29uc3Qgcm91dGVyOiBOZXh0Um91dGVyID0gdXNlUm91dGVyKClcclxuICAgIC8vIGkoXCJuYXYtc2lkZWJhci50c3hcIiwgXCJfbGlua1wiLCBfbGluaylcclxuXHJcbiAgICByZXR1cm4gKDxuYXYgY2xhc3NOYW1lPXtgbWVudS1sYXllci0ke21vZGFsLmxheWVyfSBuYXYtaXRlbSB3LTEwMGB9PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e19saW5rfT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgaWNvbi0ke21vZGFsLmljb259IG5hdi1saW5rICR7aXNDbG9zZXN0TWVudShfbGluaywgcm91dGVyLmFzUGF0aCkgPyBcImFjdGl2ZSB6LWRlcHRoLTEtaGFsZiBmb250LXdlaWdodC1ib2xkZXJcIiA6IFwiXCJ9IGhvdmVyYWJsZSByb3VuZGVkLXBpbGwgZC1mbGV4IHB4LTIganVzdGlmeS1jb250ZW50LWJldHdlZW5gfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1lbnUtbGFiZWwgdGV4dC1jYXBpdGFsaXplXCI+e21vZGFsLmxhYmVsfTwvc3Bhbj4mbmJzcDtcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZGFyayBhbGlnbi1zZWxmLWNlbnRlclwiPlt7bW9kYWwubGVhdmVDb3VudH1dPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2hpbGRyZW5cclxuICAgICAgICAgICAgJiYgY2hpbGRyZW4uZmlsdGVyKHJuID0+IHJuKS5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgICYmICg8bmF2IGNsYXNzTmFtZT17YCR7VUxfU1RZTEV9IGB9IGtleT17bW9kYWwubGFiZWx9PlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L25hdj4pXHJcbiAgICAgICAgfVxyXG4gICAgPC9uYXY+KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZTaWRlQmFyKHsgbWVudXMgfTogeyBtZW51czogSU1lbnVJdGVtTW9kYWxbXSB9KTogSlNYLkVsZW1lbnQge1xyXG5cclxuICAgIGxldCBtb2RhbFN0YWNrOiBJTWVudUl0ZW1Nb2RhbFtdID0gWy4uLm1lbnVzXVxyXG4gICAgY29uc3QgbGlua0FuZEVsZW1lbnRzOiBNYXA8c3RyaW5nLCBSZWFjdEVsZW1lbnQ+ID0gbmV3IE1hcCgpXHJcblxyXG4gICAgZGVlcFRyYXZlcnNlKG1vZGFsU3RhY2ssIChtaTogSU1lbnVJdGVtTW9kYWwpID0+IHtcclxuICAgICAgICBsaW5rQW5kRWxlbWVudHMuc2V0KG1pLmxpbmssIDxNZW51SXRlbSBtb2RhbD17bWl9IGNoaWxkcmVuPXtbXX0ga2V5PXttaS5saW5rfSAvPilcclxuICAgICAgICBpZiAobWkubGF5ZXIgPj0gMikgcmV0dXJuIFtdXHJcbiAgICAgICAgcmV0dXJuIG1pLmNoaWxkcmVuLmZpbHRlcihjID0+ICFfLmlzRW1wdHkoYy5jaGlsZHJlbikpXHJcbiAgICB9KVxyXG5cclxuICAgIGRlZXBUcmF2ZXJzZShtb2RhbFN0YWNrLCAobWk6IElNZW51SXRlbU1vZGFsKSA9PiB7XHJcbiAgICAgICAgaWYgKCFfLmlzRW1wdHkobWkuY2hpbGRyZW4pKSB7XHJcbiAgICAgICAgICAgIGxldCBtZW51SXRlbUVsbTogUmVhY3RFbGVtZW50ID0gbGlua0FuZEVsZW1lbnRzLmdldChtaS5saW5rKVxyXG4gICAgICAgICAgICBsZXQgZWxlbWVudENoaWxkcmVuUmVmOiBSZWFjdE5vZGVBcnJheSA9IG1lbnVJdGVtRWxtLnByb3BzLmNoaWxkcmVuXHJcbiAgICAgICAgICAgIGVsZW1lbnRDaGlsZHJlblJlZi5wdXNoKC4uLm1pLmNoaWxkcmVuLm1hcChzdWJNSSA9PiBsaW5rQW5kRWxlbWVudHMuZ2V0KHN1Yk1JLmxpbmspKSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtaS5sYXllciA+PSAyKSByZXR1cm4gW11cclxuICAgICAgICByZXR1cm4gbWkuY2hpbGRyZW4uZmlsdGVyKGMgPT4gIV8uaXNFbXB0eShjKSlcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgW2N1cnJlbnRQYXRoLCBzZXRDdXJyZW50UGF0aF0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHNldEN1cnJlbnRQYXRoKCh3aW5kb3cgJiYgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKSB8fCBcIlwiKSlcclxuXHJcbiAgICByZXR1cm4gKDxuYXYgY2xhc3NOYW1lPVwibmF2LXNpZGViYXIgbWVudS1zaWRlYmFyIGQtZmxleCBmbGV4LWNvbHVtbiBtci1sZy0xIHNoYWRvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudV9oZWFkZXIgZmxleC1sZy1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nbyB0ZXh0LWNlbnRlciBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIG0tbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInJvdW5kZWQtY2lyY2xlIHctMTAwIGgtMTAwIGhvdmVyYWJsZVwiIHNyYz1cIi9pbWFnZXMvY2Zjb2RlZmFucy5qcGdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtdGl0bGUgdGV4dC1jZW50ZXIgZmxleC1ncm93LTEgdy0xMDBcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVzdW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1jYXBpdGFsaXplIGZvbnQtd2VpZ2h0LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2Zjb2RlZmFuc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgaWQ9XCJtZW51X25hdlwiIGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgbmF2YmFyIHBsLTEgcHItMSBib3JkZXIgYm9yZGVyLTAgei1kZXB0aC0wIFwiPlxyXG4gICAgICAgICAgICA8bmF2IGFyaWEtbGFiZWw9XCJicmVhZGNydW1iXCIgY2xhc3NOYW1lPVwiZC1mbGV4IGQtbGctbm9uZSBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB3LTEwMCBtYi0yIHByaW1hcnktY29sb3IgZm9udC11cC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICA8QnJlYWRDcnVtYiBfcGF0aD17Y3VycmVudFBhdGh9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjbWVudV9ib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJtZW51X2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRhcmstYmx1ZS10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1iYXJzIGZhLTF4XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L25hdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWNvbGxhcHNlIGJvcmRlciBib3JkZXItMCB6LWRlcHRoLTAgZC1sZy1ibG9jayBwci0xXCIgaWQ9XCJtZW51X2JveFwiPlxyXG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9e2BtZW51ICR7VUxfU1RZTEV9IHNtb290aC1zY3JvbGwgdy0xMDAgYH0+XHJcbiAgICAgICAgICAgICAgICAgICAge21lbnVzLm1hcChtID0+IGxpbmtBbmRFbGVtZW50cy5nZXQobS5saW5rKSl9XHJcbiAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L25hdj4pXHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==