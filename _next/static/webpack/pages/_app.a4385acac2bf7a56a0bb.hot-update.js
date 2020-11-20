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
    className: "menu-layer-".concat(modal.layer, " nav-item w-auto"),
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
        }, this), "\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
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
          className: "menu ".concat(UL_STYLE, " smooth-scroll w-auto "),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbmF2LXNpZGViYXIudHN4Il0sIm5hbWVzIjpbIlVMX1NUWUxFIiwiaXNDbG9zZXN0TWVudSIsIm1wIiwicnAiLCJfIiwiaXNFbXB0eSIsInJwcyIsInNwbGl0IiwibGVuZ3RoIiwic2xpY2UiLCJqb2luIiwiTWVudUl0ZW0iLCJjaGlsZHJlbiIsIm1vZGFsIiwiX2xpbmsiLCJsaW5rIiwicm91dGVyIiwidXNlUm91dGVyIiwibGF5ZXIiLCJpY29uIiwiYXNQYXRoIiwibGFiZWwiLCJsZWF2ZUNvdW50IiwiZmlsdGVyIiwicm4iLCJOYXZTaWRlQmFyIiwibWVudXMiLCJtb2RhbFN0YWNrIiwibGlua0FuZEVsZW1lbnRzIiwiTWFwIiwiZGVlcFRyYXZlcnNlIiwibWkiLCJzZXQiLCJjIiwibWVudUl0ZW1FbG0iLCJnZXQiLCJlbGVtZW50Q2hpbGRyZW5SZWYiLCJwcm9wcyIsInB1c2giLCJtYXAiLCJzdWJNSSIsInVzZVN0YXRlIiwiY3VycmVudFBhdGgiLCJzZXRDdXJyZW50UGF0aCIsInVzZUVmZmVjdCIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0NBRUE7O0FBQ0E7QUFFQSxJQUFNQSxRQUFnQixHQUFHLDRDQUF6Qjs7QUFFQSxTQUFTQyxhQUFULENBQXVCQyxFQUF2QixFQUFtQ0MsRUFBbkMsRUFBd0Q7QUFDcEQsTUFBSUMsNkNBQUMsQ0FBQ0MsT0FBRixDQUFVSCxFQUFWLEtBQWlCRSw2Q0FBQyxDQUFDQyxPQUFGLENBQVVGLEVBQVYsQ0FBckIsRUFBb0MsT0FBTyxLQUFQO0FBRXBDLE1BQUlELEVBQUUsSUFBSUMsRUFBVixFQUFjLE9BQU8sSUFBUDtBQUNkLE1BQU1HLEdBQWEsR0FBR0gsRUFBRSxDQUFDSSxLQUFILENBQVMsR0FBVCxDQUF0Qjs7QUFDQSxN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Q0FBSjtBQUFBLFdBQVg7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVI7QUF5Q0g7O0lBbEV1QlUsVTs7TUFBQUEsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmE0Mzg1YWNhYzJiZjdhNTZhMGJiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlQXJyYXksIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBkZWVwVHJhdmVyc2UsIGkgfSBmcm9tIFwiLi4vbGliL2NvbW1vbnNcIlxyXG5pbXBvcnQgeyBJTWVudUl0ZW1Nb2RhbCB9IGZyb20gXCIuLi90eXBlc1wiXHJcbmltcG9ydCBCcmVhZENydW1iIGZyb20gXCIuL2JyZWFkY3J1bWJcIlxyXG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCJcclxuLy8gaW1wb3J0IFwiLi9uYXYtc2lkZWJhci5sZXNzXCJcclxuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvcm91dGVyXCJcclxuXHJcbmNvbnN0IFVMX1NUWUxFOiBzdHJpbmcgPSBcIm5hdiBkZWZhdWx0LXBpbGxzIG5hdi1waWxscyBuYXYtZmlsbHMgcHQtMVwiXHJcblxyXG5mdW5jdGlvbiBpc0Nsb3Nlc3RNZW51KG1wOiBzdHJpbmcsIHJwOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGlmIChfLmlzRW1wdHkobXApIHx8IF8uaXNFbXB0eShycCkpIHJldHVybiBmYWxzZVxyXG5cclxuICAgIGlmIChtcCA9PSBycCkgcmV0dXJuIHRydWVcclxuICAgIGNvbnN0IHJwczogc3RyaW5nW10gPSBycC5zcGxpdChcIi9cIilcclxuICAgIGlmIChycHMubGVuZ3RoID49IDUpIHtcclxuICAgICAgICByZXR1cm4gbXAgPT0gcnBzLnNsaWNlKDAsIDQpLmpvaW4oXCIvXCIpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2VcclxufVxyXG5cclxuZnVuY3Rpb24gTWVudUl0ZW0oeyBjaGlsZHJlbiwgbW9kYWwgfTogeyBjaGlsZHJlbjogUmVhY3ROb2RlQXJyYXksIG1vZGFsOiBJTWVudUl0ZW1Nb2RhbCB9KTogSlNYLkVsZW1lbnQge1xyXG4gICAgY29uc3QgX2xpbms6IHN0cmluZyA9IGAvJHttb2RhbC5saW5rfWBcclxuXHJcbiAgICAvLyBjb25zdCBbY3VycmVudFBhdGgsIHNldEN1cnJlbnRQYXRoXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4gc2V0Q3VycmVudFBhdGgoKHdpbmRvdyAmJiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpIHx8IFwiXCIpKSBiYWRnZSBiYWRnZS1waWxsIGJhZGdlLWluZm8ganVzdGlmeS1jb250ZW50LWJldHdlZW5cclxuICAgIGNvbnN0IHJvdXRlcjogTmV4dFJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICAvLyBpKFwibmF2LXNpZGViYXIudHN4XCIsIFwiX2xpbmtcIiwgX2xpbmspXHJcblxyXG4gICAgcmV0dXJuICg8bmF2IGNsYXNzTmFtZT17YG1lbnUtbGF5ZXItJHttb2RhbC5sYXllcn0gbmF2LWl0ZW0gdy1hdXRvYH0+XHJcbiAgICAgICAgPExpbmsgaHJlZj17X2xpbmt9PlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpY29uLSR7bW9kYWwuaWNvbn0gbmF2LWxpbmsgJHtpc0Nsb3Nlc3RNZW51KF9saW5rLCByb3V0ZXIuYXNQYXRoKSA/IFwiYWN0aXZlIHotZGVwdGgtMS1oYWxmIGZvbnQtd2VpZ2h0LWJvbGRcIiA6IFwiXCJ9IGhvdmVyYWJsZSByb3VuZGVkLXBpbGwgZC1mbGV4IHB4LTIgYH0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtZW51LWxhYmVsIHRleHQtY2FwaXRhbGl6ZVwiPnttb2RhbC5sYWJlbH08L3NwYW4+Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCIgYWxpZ24tc2VsZi1jZW50ZXJcIj5be21vZGFsLmxlYXZlQ291bnR9XTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNoaWxkcmVuXHJcbiAgICAgICAgICAgICYmIGNoaWxkcmVuLmZpbHRlcihybiA9PiBybikubGVuZ3RoID4gMFxyXG4gICAgICAgICAgICAmJiAoPG5hdiBjbGFzc05hbWU9e2Ake1VMX1NUWUxFfSBgfSBrZXk9e21vZGFsLmxhYmVsfT5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9uYXY+KVxyXG4gICAgICAgIH1cclxuICAgIDwvbmF2PilcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2U2lkZUJhcih7IG1lbnVzIH06IHsgbWVudXM6IElNZW51SXRlbU1vZGFsW10gfSk6IEpTWC5FbGVtZW50IHtcclxuXHJcbiAgICBsZXQgbW9kYWxTdGFjazogSU1lbnVJdGVtTW9kYWxbXSA9IFsuLi5tZW51c11cclxuICAgIGNvbnN0IGxpbmtBbmRFbGVtZW50czogTWFwPHN0cmluZywgUmVhY3RFbGVtZW50PiA9IG5ldyBNYXAoKVxyXG5cclxuICAgIGRlZXBUcmF2ZXJzZShtb2RhbFN0YWNrLCAobWk6IElNZW51SXRlbU1vZGFsKSA9PiB7XHJcbiAgICAgICAgbGlua0FuZEVsZW1lbnRzLnNldChtaS5saW5rLCA8TWVudUl0ZW0gbW9kYWw9e21pfSBjaGlsZHJlbj17W119IGtleT17bWkubGlua30gLz4pXHJcbiAgICAgICAgaWYgKG1pLmxheWVyID49IDIpIHJldHVybiBbXVxyXG4gICAgICAgIHJldHVybiBtaS5jaGlsZHJlbi5maWx0ZXIoYyA9PiAhXy5pc0VtcHR5KGMuY2hpbGRyZW4pKVxyXG4gICAgfSlcclxuXHJcbiAgICBkZWVwVHJhdmVyc2UobW9kYWxTdGFjaywgKG1pOiBJTWVudUl0ZW1Nb2RhbCkgPT4ge1xyXG4gICAgICAgIGlmICghXy5pc0VtcHR5KG1pLmNoaWxkcmVuKSkge1xyXG4gICAgICAgICAgICBsZXQgbWVudUl0ZW1FbG06IFJlYWN0RWxlbWVudCA9IGxpbmtBbmRFbGVtZW50cy5nZXQobWkubGluaylcclxuICAgICAgICAgICAgbGV0IGVsZW1lbnRDaGlsZHJlblJlZjogUmVhY3ROb2RlQXJyYXkgPSBtZW51SXRlbUVsbS5wcm9wcy5jaGlsZHJlblxyXG4gICAgICAgICAgICBlbGVtZW50Q2hpbGRyZW5SZWYucHVzaCguLi5taS5jaGlsZHJlbi5tYXAoc3ViTUkgPT4gbGlua0FuZEVsZW1lbnRzLmdldChzdWJNSS5saW5rKSkpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobWkubGF5ZXIgPj0gMikgcmV0dXJuIFtdXHJcbiAgICAgICAgcmV0dXJuIG1pLmNoaWxkcmVuLmZpbHRlcihjID0+ICFfLmlzRW1wdHkoYykpXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IFtjdXJyZW50UGF0aCwgc2V0Q3VycmVudFBhdGhdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIHVzZUVmZmVjdCgoKSA9PiBzZXRDdXJyZW50UGF0aCgod2luZG93ICYmIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSkgfHwgXCJcIikpXHJcblxyXG4gICAgcmV0dXJuICg8bmF2IGNsYXNzTmFtZT1cIm5hdi1zaWRlYmFyIG1lbnUtc2lkZWJhciBkLWZsZXggZmxleC1jb2x1bW4gbXItbGctMSBzaGFkb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVfaGVhZGVyIGZsZXgtbGctY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28gdGV4dC1jZW50ZXIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJyb3VuZGVkLWNpcmNsZSB3LTEwMCBoLTEwMCBob3ZlcmFibGVcIiBzcmM9XCIvaW1hZ2VzL2NmY29kZWZhbnMuanBnXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LXRpdGxlIHRleHQtY2VudGVyIGZsZXgtZ3Jvdy0xIHctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Jlc3VtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtY2FwaXRhbGl6ZSBmb250LXdlaWdodC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNmY29kZWZhbnNcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGlkPVwibWVudV9uYXZcIiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIG5hdmJhciBwbC0xIHByLTEgYm9yZGVyIGJvcmRlci0wIHotZGVwdGgtMCBcIj5cclxuICAgICAgICAgICAgPG5hdiBhcmlhLWxhYmVsPVwiYnJlYWRjcnVtYlwiIGNsYXNzTmFtZT1cImQtZmxleCBkLWxnLW5vbmUganVzdGlmeS1jb250ZW50LWJldHdlZW4gdy0xMDAgbWItMiBwcmltYXJ5LWNvbG9yIGZvbnQtdXAtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgPEJyZWFkQ3J1bWIgX3BhdGg9e2N1cnJlbnRQYXRofSAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI21lbnVfYm94XCJcclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwibWVudV9ib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkYXJrLWJsdWUtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYmFycyBmYS0xeFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9uYXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1jb2xsYXBzZSBib3JkZXIgYm9yZGVyLTAgei1kZXB0aC0wIGQtbGctYmxvY2tcIiBpZD1cIm1lbnVfYm94XCI+XHJcbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17YG1lbnUgJHtVTF9TVFlMRX0gc21vb3RoLXNjcm9sbCB3LWF1dG8gYH0+XHJcbiAgICAgICAgICAgICAgICAgICAge21lbnVzLm1hcChtID0+IGxpbmtBbmRFbGVtZW50cy5nZXQobS5saW5rKSl9XHJcbiAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L25hdj4pXHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==