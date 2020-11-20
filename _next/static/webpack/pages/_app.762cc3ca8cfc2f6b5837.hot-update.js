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





 // import "./nav-sidebar.less"


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
        className: "icon-".concat(modal.icon, " nav-link ").concat(isClosestMenu(_link, router.asPath) ? "active z-depth-1-half font-weight-bold" : "", " hoverable rounded-pill d-flex px-2 "),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
          className: "menu-label text-capitalize",
          children: modal.label
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
          className: " align-self-center",
          children: ["[", modal.leaveCount, "]"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }, this), children && children.filter(function (rn) {
      return rn;
    }).length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("nav", {
      className: "".concat(UL_STYLE, " "),
      children: children
    }, modal.label, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
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
      lineNumber: 54,
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
            lineNumber: 77,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
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
            lineNumber: 82,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
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
          lineNumber: 91,
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
              lineNumber: 101,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "navbar-collapse border border-0 z-depth-0 d-lg-block",
        id: "menu_box",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("nav", {
          className: "menu ".concat(UL_STYLE, " smooth-scroll w-100 "),
          children: menus.map(function (m) {
            return linkAndElements.get(m.link);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 73,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbmF2LXNpZGViYXIudHN4Il0sIm5hbWVzIjpbIlVMX1NUWUxFIiwiaXNDbG9zZXN0TWVudSIsIm1wIiwicnAiLCJfIiwiaXNFbXB0eSIsInJwcyIsInNwbGl0IiwibGVuZ3RoIiwic2xpY2UiLCJqb2luIiwiTWVudUl0ZW0iLCJjaGlsZHJlbiIsIm1vZGFsIiwiX2xpbmsiLCJsaW5rIiwicm91dGVyIiwidXNlUm91dGVyIiwibGF5ZXIiLCJpY29uIiwiYXNQYXRoIiwibGFiZWwiLCJsZWF2ZUNvdW50IiwiZmlsdGVyIiwicm4iLCJOYXZTaWRlQmFyIiwibWVudXMiLCJtb2RhbFN0YWNrIiwibGlua0FuZEVsZW1lbnRzIiwiTWFwIiwiZGVlcFRyYXZlcnNlIiwibWkiLCJzZXQiLCJjIiwibWVudUl0ZW1FbG0iLCJnZXQiLCJlbGVtZW50Q2hpbGRyZW5SZWYiLCJwcm9wcyIsInB1c2giLCJtYXAiLCJzdWJNSSIsInVzZVN0YXRlIiwiY3VycmVudFBhdGgiLCJzZXRDdXJyZW50UGF0aCIsInVzZUVmZmVjdCIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0NBRUE7O0FBQ0E7QUFFQSxJQUFNQSxRQUFnQixHQUFHLDRDQUF6Qjs7QUFFQSxTQUFTQyxhQUFULENBQXVCQyxFQUF2QixFQUFtQ0MsRUFBbkMsRUFBd0Q7QUFDcEQsTUFBSUMsNkNBQUMsQ0FBQ0MsT0FBRixDQUFVSCxFQUFWLEtBQWlCRSw2Q0FBQyxDQUFDQyxPQUFGLENBQVVGLEVBQVYsQ0FBckIsRUFBb0MsT0FBTyxLQUFQO0FBRXBDLE1BQUlELEVBQUUsSUFBSUMsRUFBVixFQUFjLE9BQU8sSUFBUDtBQUNkLE1BQU1HLEdBQWEsR0FBR0gsRUFBRSxDQUFDSSxLQUFILENBQVMsR0FBVCxDQUF0Qjs7QUFDQSxN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QUFKO0FBQUEsV0FBWDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUjtBQXlDSDs7SUFsRXVCVSxVOztNQUFBQSxVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNzYyY2MzY2E4Y2ZjMmY2YjU4MzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGVBcnJheSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IGRlZXBUcmF2ZXJzZSwgaSB9IGZyb20gXCIuLi9saWIvY29tbW9uc1wiXHJcbmltcG9ydCB7IElNZW51SXRlbU1vZGFsIH0gZnJvbSBcIi4uL3R5cGVzXCJcclxuaW1wb3J0IEJyZWFkQ3J1bWIgZnJvbSBcIi4vYnJlYWRjcnVtYlwiXHJcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIlxyXG4vLyBpbXBvcnQgXCIuL25hdi1zaWRlYmFyLmxlc3NcIlxyXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9yb3V0ZXJcIlxyXG5cclxuY29uc3QgVUxfU1RZTEU6IHN0cmluZyA9IFwibmF2IGRlZmF1bHQtcGlsbHMgbmF2LXBpbGxzIG5hdi1maWxscyBwdC0xXCJcclxuXHJcbmZ1bmN0aW9uIGlzQ2xvc2VzdE1lbnUobXA6IHN0cmluZywgcnA6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKF8uaXNFbXB0eShtcCkgfHwgXy5pc0VtcHR5KHJwKSkgcmV0dXJuIGZhbHNlXHJcblxyXG4gICAgaWYgKG1wID09IHJwKSByZXR1cm4gdHJ1ZVxyXG4gICAgY29uc3QgcnBzOiBzdHJpbmdbXSA9IHJwLnNwbGl0KFwiL1wiKVxyXG4gICAgaWYgKHJwcy5sZW5ndGggPj0gNSkge1xyXG4gICAgICAgIHJldHVybiBtcCA9PSBycHMuc2xpY2UoMCwgNCkuam9pbihcIi9cIilcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZVxyXG59XHJcblxyXG5mdW5jdGlvbiBNZW51SXRlbSh7IGNoaWxkcmVuLCBtb2RhbCB9OiB7IGNoaWxkcmVuOiBSZWFjdE5vZGVBcnJheSwgbW9kYWw6IElNZW51SXRlbU1vZGFsIH0pOiBKU1guRWxlbWVudCB7XHJcbiAgICBjb25zdCBfbGluazogc3RyaW5nID0gYC8ke21vZGFsLmxpbmt9YFxyXG5cclxuICAgIC8vIGNvbnN0IFtjdXJyZW50UGF0aCwgc2V0Q3VycmVudFBhdGhdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiBzZXRDdXJyZW50UGF0aCgod2luZG93ICYmIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSkgfHwgXCJcIikpIGJhZGdlIGJhZGdlLXBpbGwgYmFkZ2UtaW5mbyBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblxyXG4gICAgY29uc3Qgcm91dGVyOiBOZXh0Um91dGVyID0gdXNlUm91dGVyKClcclxuICAgIC8vIGkoXCJuYXYtc2lkZWJhci50c3hcIiwgXCJfbGlua1wiLCBfbGluaylcclxuXHJcbiAgICByZXR1cm4gKDxuYXYgY2xhc3NOYW1lPXtgbWVudS1sYXllci0ke21vZGFsLmxheWVyfSBuYXYtaXRlbSB3LTEwMGB9PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e19saW5rfT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgaWNvbi0ke21vZGFsLmljb259IG5hdi1saW5rICR7aXNDbG9zZXN0TWVudShfbGluaywgcm91dGVyLmFzUGF0aCkgPyBcImFjdGl2ZSB6LWRlcHRoLTEtaGFsZiBmb250LXdlaWdodC1ib2xkXCIgOiBcIlwifSBob3ZlcmFibGUgcm91bmRlZC1waWxsIGQtZmxleCBweC0yIGB9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWVudS1sYWJlbCB0ZXh0LWNhcGl0YWxpemVcIj57bW9kYWwubGFiZWx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiIGFsaWduLXNlbGYtY2VudGVyXCI+W3ttb2RhbC5sZWF2ZUNvdW50fV08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjaGlsZHJlblxyXG4gICAgICAgICAgICAmJiBjaGlsZHJlbi5maWx0ZXIocm4gPT4gcm4pLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgJiYgKDxuYXYgY2xhc3NOYW1lPXtgJHtVTF9TVFlMRX0gYH0ga2V5PXttb2RhbC5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvbmF2PilcclxuICAgICAgICB9XHJcbiAgICA8L25hdj4pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdlNpZGVCYXIoeyBtZW51cyB9OiB7IG1lbnVzOiBJTWVudUl0ZW1Nb2RhbFtdIH0pOiBKU1guRWxlbWVudCB7XHJcblxyXG4gICAgbGV0IG1vZGFsU3RhY2s6IElNZW51SXRlbU1vZGFsW10gPSBbLi4ubWVudXNdXHJcbiAgICBjb25zdCBsaW5rQW5kRWxlbWVudHM6IE1hcDxzdHJpbmcsIFJlYWN0RWxlbWVudD4gPSBuZXcgTWFwKClcclxuXHJcbiAgICBkZWVwVHJhdmVyc2UobW9kYWxTdGFjaywgKG1pOiBJTWVudUl0ZW1Nb2RhbCkgPT4ge1xyXG4gICAgICAgIGxpbmtBbmRFbGVtZW50cy5zZXQobWkubGluaywgPE1lbnVJdGVtIG1vZGFsPXttaX0gY2hpbGRyZW49e1tdfSBrZXk9e21pLmxpbmt9IC8+KVxyXG4gICAgICAgIGlmIChtaS5sYXllciA+PSAyKSByZXR1cm4gW11cclxuICAgICAgICByZXR1cm4gbWkuY2hpbGRyZW4uZmlsdGVyKGMgPT4gIV8uaXNFbXB0eShjLmNoaWxkcmVuKSlcclxuICAgIH0pXHJcblxyXG4gICAgZGVlcFRyYXZlcnNlKG1vZGFsU3RhY2ssIChtaTogSU1lbnVJdGVtTW9kYWwpID0+IHtcclxuICAgICAgICBpZiAoIV8uaXNFbXB0eShtaS5jaGlsZHJlbikpIHtcclxuICAgICAgICAgICAgbGV0IG1lbnVJdGVtRWxtOiBSZWFjdEVsZW1lbnQgPSBsaW5rQW5kRWxlbWVudHMuZ2V0KG1pLmxpbmspXHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50Q2hpbGRyZW5SZWY6IFJlYWN0Tm9kZUFycmF5ID0gbWVudUl0ZW1FbG0ucHJvcHMuY2hpbGRyZW5cclxuICAgICAgICAgICAgZWxlbWVudENoaWxkcmVuUmVmLnB1c2goLi4ubWkuY2hpbGRyZW4ubWFwKHN1Yk1JID0+IGxpbmtBbmRFbGVtZW50cy5nZXQoc3ViTUkubGluaykpKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1pLmxheWVyID49IDIpIHJldHVybiBbXVxyXG4gICAgICAgIHJldHVybiBtaS5jaGlsZHJlbi5maWx0ZXIoYyA9PiAhXy5pc0VtcHR5KGMpKVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBbY3VycmVudFBhdGgsIHNldEN1cnJlbnRQYXRoXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4gc2V0Q3VycmVudFBhdGgoKHdpbmRvdyAmJiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpIHx8IFwiXCIpKVxyXG5cclxuICAgIHJldHVybiAoPG5hdiBjbGFzc05hbWU9XCJuYXYtc2lkZWJhciBtZW51LXNpZGViYXIgZC1mbGV4IGZsZXgtY29sdW1uIG1yLWxnLTEgc2hhZG93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51X2hlYWRlciBmbGV4LWxnLWNvbHVtbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvIHRleHQtY2VudGVyIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgbS1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicm91bmRlZC1jaXJjbGUgdy0xMDAgaC0xMDAgaG92ZXJhYmxlXCIgc3JjPVwiL2ltYWdlcy9jZmNvZGVmYW5zLmpwZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi10aXRsZSB0ZXh0LWNlbnRlciBmbGV4LWdyb3ctMSB3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yZXN1bWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LWNhcGl0YWxpemUgZm9udC13ZWlnaHQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZmNvZGVmYW5zXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBpZD1cIm1lbnVfbmF2XCIgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBuYXZiYXIgcGwtMSBwci0xIGJvcmRlciBib3JkZXItMCB6LWRlcHRoLTAgXCI+XHJcbiAgICAgICAgICAgIDxuYXYgYXJpYS1sYWJlbD1cImJyZWFkY3J1bWJcIiBjbGFzc05hbWU9XCJkLWZsZXggZC1sZy1ub25lIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIHctMTAwIG1iLTIgcHJpbWFyeS1jb2xvciBmb250LXVwLWJvbGRcIj5cclxuICAgICAgICAgICAgICAgIDxCcmVhZENydW1iIF9wYXRoPXtjdXJyZW50UGF0aH0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNtZW51X2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cIm1lbnVfYm94XCJcclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGFyay1ibHVlLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJhcnMgZmEtMXhcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItY29sbGFwc2UgYm9yZGVyIGJvcmRlci0wIHotZGVwdGgtMCBkLWxnLWJsb2NrXCIgaWQ9XCJtZW51X2JveFwiPlxyXG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9e2BtZW51ICR7VUxfU1RZTEV9IHNtb290aC1zY3JvbGwgdy0xMDAgYH0+XHJcbiAgICAgICAgICAgICAgICAgICAge21lbnVzLm1hcChtID0+IGxpbmtBbmRFbGVtZW50cy5nZXQobS5saW5rKSl9XHJcbiAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L25hdj4pXHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==