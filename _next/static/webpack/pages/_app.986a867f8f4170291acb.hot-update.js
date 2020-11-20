webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/lib/commons.ts":
/*!****************************!*\
  !*** ./src/lib/commons.ts ***!
  \****************************/
/*! exports provided: compare, deepTraverse, deepTraverse_a, iterateTree_a, iterateTree, i, jsf, getNameAndExt, prependIfMissing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compare", function() { return compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepTraverse", function() { return deepTraverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepTraverse_a", function() { return deepTraverse_a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterateTree_a", function() { return iterateTree_a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterateTree", function() { return iterateTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsf", function() { return jsf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNameAndExt", function() { return getNameAndExt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prependIfMissing", function() { return prependIfMissing; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types */ "./src/types.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_4__);




function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function compare(s1, s2) {
  return s1 == s2 ? 0 : s1 > s2 ? 1 : -1;
}
function deepTraverse(nodes, traverser) {
  var nodeStack = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(nodes.reverse());

  var result = [];

  while (nodeStack.length > 0) {
    var _node = nodeStack.pop();

    result.push(_node);
    var subNodes = (traverser ? traverser(_node) : _node.children) || _node.children || [];
    nodeStack.push.apply(nodeStack, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(subNodes.reverse()));
  }

  return result;
}
function deepTraverse_a(_x, _x2) {
  return _deepTraverse_a.apply(this, arguments);
}

function _deepTraverse_a() {
  _deepTraverse_a = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(nodes, traverser) {
    var nodeStack, result, _node2, subNodes;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            nodeStack = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(nodes.reverse());
            result = [];

          case 2:
            if (!(nodeStack.length > 0)) {
              _context.next = 19;
              break;
            }

            _node2 = nodeStack.pop();
            result.push(_node2);

            if (!traverser) {
              _context.next = 11;
              break;
            }

            _context.next = 8;
            return traverser(_node2);

          case 8:
            _context.t1 = _context.sent;
            _context.next = 12;
            break;

          case 11:
            _context.t1 = _node2.children;

          case 12:
            _context.t0 = _context.t1;

            if (_context.t0) {
              _context.next = 15;
              break;
            }

            _context.t0 = _node2.children;

          case 15:
            subNodes = _context.t0;
            nodeStack.push.apply(nodeStack, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(subNodes.reverse()));
            _context.next = 2;
            break;

          case 19:
            return _context.abrupt("return", result);

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _deepTraverse_a.apply(this, arguments);
}

function iterateTree_a(_x3, _x4) {
  return _iterateTree_a.apply(this, arguments);
}

function _iterateTree_a() {
  _iterateTree_a = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(roots, visitor) {
    var nodeStack, ancestors, _loop2;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            nodeStack = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(roots);
            ancestors = [];
            _loop2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _loop2() {
              var currentNode, parent, _parent2;

              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _loop2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      currentNode = nodeStack.pop();

                      for (parent = lodash__WEBPACK_IMPORTED_MODULE_3__["last"](ancestors); // parent && _.findIndex(parent.children, currentNode) < 0;
                      parent && parent.children && parent.children.findIndex(function (c) {
                        return c.comparedTo(currentNode) == 0;
                      }) < 0; parent = lodash__WEBPACK_IMPORTED_MODULE_3__["last"](ancestors)) {
                        ancestors.pop();
                      }

                      _context2.t1 = visitor;

                      if (!_context2.t1) {
                        _context2.next = 7;
                        break;
                      }

                      _context2.next = 6;
                      return visitor(currentNode, ancestors);

                    case 6:
                      _context2.t1 = _context2.sent;

                    case 7:
                      _context2.t0 = _context2.t1;

                      if (_context2.t0) {
                        _context2.next = 10;
                        break;
                      }

                      _context2.t0 = currentNode.children;

                    case 10:
                      currentNode.children = _context2.t0;

                      if (!lodash__WEBPACK_IMPORTED_MODULE_3__["isEmpty"](currentNode.children)) {
                        for (_parent2 = lodash__WEBPACK_IMPORTED_MODULE_3__["last"](ancestors); // parent && _.findIndex(parent.children, currentNode) < 0;
                        _parent2 && _parent2.children && _parent2.children.findIndex(function (c) {
                          return c.comparedTo(currentNode) == 0;
                        }) < 0; _parent2 = lodash__WEBPACK_IMPORTED_MODULE_3__["last"](ancestors)) {
                          ancestors.pop();
                        }

                        ancestors.push(currentNode);
                        nodeStack.push.apply(nodeStack, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(currentNode.children));
                      }

                    case 12:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _loop2);
            });

          case 3:
            if (!(nodeStack.length > 0)) {
              _context3.next = 7;
              break;
            }

            return _context3.delegateYield(_loop2(), "t0", 5);

          case 5:
            _context3.next = 3;
            break;

          case 7:
            return _context3.abrupt("return", Promise.resolve(roots));

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee2);
  }));
  return _iterateTree_a.apply(this, arguments);
}

function iterateTree(roots, visitor) {
  var nodeStack = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(roots);

  var ancestors = [];

  var _loop = function _loop() {
    var currentNode = nodeStack.pop();

    for (var parent = lodash__WEBPACK_IMPORTED_MODULE_3__["last"](ancestors); // parent && _.findIndex(parent.children, currentNode) < 0;
    parent && parent.children && parent.children.findIndex(function (c) {
      return c.comparedTo(currentNode) == 0;
    }) < 0; parent = lodash__WEBPACK_IMPORTED_MODULE_3__["last"](ancestors)) {
      ancestors.pop();
    }

    currentNode.children = visitor && visitor(currentNode, ancestors) || currentNode.children;

    if (!lodash__WEBPACK_IMPORTED_MODULE_3__["isEmpty"](currentNode.children)) {
      for (var _parent = lodash__WEBPACK_IMPORTED_MODULE_3__["last"](ancestors); // parent && _.findIndex(parent.children, currentNode) < 0;
      _parent && _parent.children && _parent.children.findIndex(function (c) {
        return c.comparedTo(currentNode) == 0;
      }) < 0; _parent = lodash__WEBPACK_IMPORTED_MODULE_3__["last"](ancestors)) {
        ancestors.pop();
      }

      ancestors.push(currentNode);
      nodeStack.push.apply(nodeStack, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(currentNode.children));
    }
  };

  while (nodeStack.length > 0) {
    _loop();
  }

  return roots;
}
function i(filename) {
  var _console;

  var stackTrace = new Error().stack;
  var frames = stackTrace.match(/[^\r\n]+/g);
  var idx = frames.findIndex(function (frame) {
    return frame.includes("at i (");
  }) + 1;

  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  (_console = console).info.apply(_console, ["\n", filename, frames[idx], "\n\t"].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])((rest || []).map(function (obj) {
    return jsf(obj);
  })), ["\n"]));
}
function jsf(v) {
  var indent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "  ";
  return v instanceof Object ? JSON.stringify(v, null, indent) : v;
} //org.apache.commons.io.FilenameUtils#getExtension

function getNameAndExt(pathStr) {
  if (lodash__WEBPACK_IMPORTED_MODULE_3__["isEmpty"](pathStr)) return [pathStr, ""];

  var extPos = lodash__WEBPACK_IMPORTED_MODULE_3__["lastIndexOf"](pathStr, ".");

  var lastSep = Math.max(lodash__WEBPACK_IMPORTED_MODULE_3__["lastIndexOf"](pathStr, WINDOWS_SEPARATOR), lodash__WEBPACK_IMPORTED_MODULE_3__["lastIndexOf"](pathStr, UNIX_SEPARATOR));
  if (lastSep > extPos) return [pathStr, ""];
  return [pathStr.substring(0, extPos), pathStr.substring(extPos + 1)];
}
var WINDOWS_SEPARATOR = "\\";
var UNIX_SEPARATOR = "/";
function prependIfMissing(str, prefix) {
  if (lodash__WEBPACK_IMPORTED_MODULE_3__["isEmpty"](str) || lodash__WEBPACK_IMPORTED_MODULE_3__["isEmpty"](prefix) || str.startsWith(prefix)) return str;

  for (var _len2 = arguments.length, prefixes = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    prefixes[_key2 - 2] = arguments[_key2];
  }

  if (!lodash__WEBPACK_IMPORTED_MODULE_3__["isEmpty"](prefixes)) {
    var _iterator = _createForOfIteratorHelper(prefix),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var p = _step.value;
        if (str.startsWith(p)) return str;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  return prefix + str;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xpYi9jb21tb25zLnRzIl0sIm5hbWVzIjpbImNvbXBhcmUiLCJzMSIsInMyIiwiZGVlcFRyYXZlcnNlIiwibm9kZXMiLCJ0cmF2ZXJzZXIiLCJub2RlU3RhY2siLCJyZXZlcnNlIiwicmVzdWx0IiwibGVuZ3RoIiwibm9kZSIsInBvcCIsInB1c2giLCJzdWJOb2RlcyIsImNoaWxkcmVuIiwiZGVlcFRyYXZlcnNlX2EiLCJpdGVyYXRlVHJlZV9hIiwicm9vdHMiLCJ2aXNpdG9yIiwiYW5jZXN0b3JzIiwiY3VycmVudE5vZGUiLCJwYXJlbnQiLCJfIiwiZmluZEluZGV4IiwiYyIsImNvbXBhcmVkVG8iLCJQcm9taXNlIiwicmVzb2x2ZSIsIml0ZXJhdGVUcmVlIiwiaSIsImZpbGVuYW1lIiwic3RhY2tUcmFjZSIsIkVycm9yIiwic3RhY2siLCJmcmFtZXMiLCJtYXRjaCIsImlkeCIsImZyYW1lIiwiaW5jbHVkZXMiLCJyZXN0IiwiY29uc29sZSIsImluZm8iLCJtYXAiLCJvYmoiLCJqc2YiLCJ2IiwiaW5kZW50IiwiT2JqZWN0IiwiSlNPTiIsInN0cmluZ2lmeSIsImdldE5hbWVBbmRFeHQiLCJwYXRoU3RyIiwiZXh0UG9zIiwibGFzdFNlcCIsIk1hdGgiLCJtYXgiLCJXSU5ET1dTX1NFUEFSQVRPUiIsIlVOSVhfU0VQQVJBVE9SIiwic3Vic3RyaW5nIiwicHJlcGVuZElmTWlzc2luZyIsInN0ciIsInByZWZpeCIsInN0YXJ0c1dpdGgiLCJwcmVmaXhlcyIsInAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdPLFNBQVNBLE9BQVQsQ0FBb0JDLEVBQXBCLEVBQTJCQyxFQUEzQixFQUEwQztBQUM3QyxTQUFRRCxFQUFFLElBQUlDLEVBQVAsR0FBYSxDQUFiLEdBQWtCRCxFQUFFLEdBQUdDLEVBQUwsR0FBVSxDQUFWLEdBQWMsQ0FBQyxDQUF4QztBQUNI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QUFkLEVBQXVCSyxpQkFBdkIsQ0FBVCxFQUFvRGxDLGtEQUFBLENBQWM2QixPQUFkLEVBQXVCTSxjQUF2QixDQUFwRCxDQUF4QjtBQUNBLE1BQUlKLE9BQU8sR0FBR0QsTUFBZCxFQUFzQixPQUFPLENBQUNELE9BQUQsRUFBVSxFQUFWLENBQVA7QUFDdEIsU0FBTyxDQUFDQSxPQUFPLENBQUNPLFNBQVIsQ0FBa0IsQ0FBbEIsRUFBcUJOLE1BQXJCLENBQUQsRUFBK0JELE9BQU8sQ0FBQ08sU0FBUixDQUFrQk4sTUFBTSxHQUFHLENBQTNCLENBQS9CLENBQVA7QUFDSDtBQUVELElBQU1JLGlCQUFpQixHQUFHLElBQTFCO0FBQ0EsSUFBTUMsY0FBYyxHQUFHLEdBQXZCO0FBRU8sU0FBU0UsZ0JBQVQsQ0FBMEJDLEdBQTFCLEVBQXVDQyxNQUF2QyxFQUFzRjtBQUN6RixNQUFJdkMsOENBQUEsQ0FBVXNDLEdBQVYsS0FBa0J0Qyw4Q0FBQSxDQUFVdUMsTUFBVixDQUFsQixJQUF1Q0QsR0FBRyxDQUFDRSxVQUFKLENBQWVELE1BQWYsQ0FBM0MsRUFBbUUsT0FBT0QsR0FBUDs7QUFEc0IscUNBQTVCRyxRQUE0QjtBQUE1QkEsWUFBNEI7QUFBQTs7QUFFekYsTUFBSSxDQUFDekMsOENBQUEsQ0FBVXlDLFFBQVYsQ0FBTCxFQUEwQjtBQUFBLCtDQUNSRixNQURRO0FBQUE7O0FBQUE7QUFDdEIsMERBQXNCO0FBQUEsWUFBYkcsQ0FBYTtBQUNsQixZQUFJSixHQUFHLENBQUNFLFVBQUosQ0FBZUUsQ0FBZixDQUFKLEVBQXVCLE9BQU9KLEdBQVA7QUFDMUI7QUFIcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUl6Qjs7QUFDRCxTQUFPQyxNQUFNLEdBQUdELEdBQWhCO0FBQ0giLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC45ODZhODY3ZjhmNDE3MDI5MWFjYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCJcclxuaW1wb3J0IHsgSVBhdGhJbmZvLCBJVE5vZGUsIFROb2RlLCBUVHJhdmVyc2VyIH0gZnJvbSBcIi4uL3R5cGVzXCJcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZTxUPihzMTogVCwgczI6IFQpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIChzMSA9PSBzMikgPyAwIDogKHMxID4gczIgPyAxIDogLTEpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWVwVHJhdmVyc2U8TiBleHRlbmRzIFROb2RlID0gVE5vZGU+KG5vZGVzOiBOW10sIHRyYXZlcnNlcj86IFRUcmF2ZXJzZXIpOiBOW10ge1xyXG4gICAgY29uc3Qgbm9kZVN0YWNrOiBOW10gPSBbLi4ubm9kZXMucmV2ZXJzZSgpXVxyXG4gICAgY29uc3QgcmVzdWx0OiBOW10gPSBbXVxyXG5cclxuICAgIHdoaWxlIChub2RlU3RhY2subGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGxldCBub2RlOiBOID0gbm9kZVN0YWNrLnBvcCgpXHJcbiAgICAgICAgcmVzdWx0LnB1c2gobm9kZSlcclxuICAgICAgICBsZXQgc3ViTm9kZXM6IE5bXSA9ICgodHJhdmVyc2VyID8gdHJhdmVyc2VyKG5vZGUpIDogbm9kZS5jaGlsZHJlbikgfHwgbm9kZS5jaGlsZHJlbiB8fCBbXSkgYXMgTltdXHJcbiAgICAgICAgbm9kZVN0YWNrLnB1c2goLi4uc3ViTm9kZXMucmV2ZXJzZSgpKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHRcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgVFRyYXZlcnNlcl9hID0gKFROb2RlKSA9PiBQcm9taXNlPFROb2RlW10+XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVlcFRyYXZlcnNlX2Eobm9kZXM6IFROb2RlW10sIHRyYXZlcnNlcj86IFRUcmF2ZXJzZXJfYSk6IFByb21pc2U8VE5vZGVbXT4ge1xyXG4gICAgY29uc3Qgbm9kZVN0YWNrOiBUTm9kZVtdID0gWy4uLm5vZGVzLnJldmVyc2UoKV1cclxuICAgIGNvbnN0IHJlc3VsdDogVE5vZGVbXSA9IFtdXHJcblxyXG4gICAgd2hpbGUgKG5vZGVTdGFjay5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgbGV0IG5vZGU6IFROb2RlID0gbm9kZVN0YWNrLnBvcCgpXHJcbiAgICAgICAgcmVzdWx0LnB1c2gobm9kZSlcclxuICAgICAgICBsZXQgc3ViTm9kZXM6IFROb2RlW10gPSAodHJhdmVyc2VyID8gYXdhaXQgdHJhdmVyc2VyKG5vZGUpIDogbm9kZS5jaGlsZHJlbikgfHwgbm9kZS5jaGlsZHJlblxyXG4gICAgICAgIG5vZGVTdGFjay5wdXNoKC4uLnN1Yk5vZGVzLnJldmVyc2UoKSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbn1cclxuXHJcblxyXG5leHBvcnQgdHlwZSBUcmVlVmlzaXRvcl9hID0gKG5vZGU6IElUTm9kZSwgYW5jZXN0b3JzOiBJVE5vZGVbXSkgPT4gUHJvbWlzZTxJVE5vZGVbXT5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpdGVyYXRlVHJlZV9hKHJvb3RzOiBJVE5vZGVbXSwgdmlzaXRvcjogVHJlZVZpc2l0b3JfYSk6IFByb21pc2U8SVROb2RlW10+IHtcclxuXHJcbiAgICBsZXQgbm9kZVN0YWNrOiBJVE5vZGVbXSA9IFsuLi5yb290c11cclxuICAgIGxldCBhbmNlc3RvcnM6IElUTm9kZVtdID0gW11cclxuXHJcbiAgICB3aGlsZSAobm9kZVN0YWNrLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBsZXQgY3VycmVudE5vZGU6IElUTm9kZSA9IG5vZGVTdGFjay5wb3AoKVxyXG5cclxuICAgICAgICBmb3IgKGxldCBwYXJlbnQ6IElUTm9kZSA9IF8ubGFzdChhbmNlc3RvcnMpO1xyXG4gICAgICAgICAgICAvLyBwYXJlbnQgJiYgXy5maW5kSW5kZXgocGFyZW50LmNoaWxkcmVuLCBjdXJyZW50Tm9kZSkgPCAwO1xyXG4gICAgICAgICAgICBwYXJlbnQgJiYgcGFyZW50LmNoaWxkcmVuICYmIHBhcmVudC5jaGlsZHJlbi5maW5kSW5kZXgoKGMpID0+IGMuY29tcGFyZWRUbyhjdXJyZW50Tm9kZSkgPT0gMCkgPCAwO1xyXG4gICAgICAgICAgICBwYXJlbnQgPSBfLmxhc3QoYW5jZXN0b3JzKSkge1xyXG4gICAgICAgICAgICBhbmNlc3RvcnMucG9wKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGN1cnJlbnROb2RlLmNoaWxkcmVuID0gKHZpc2l0b3IgJiYgYXdhaXQgdmlzaXRvcihjdXJyZW50Tm9kZSwgYW5jZXN0b3JzKSkgfHwgY3VycmVudE5vZGUuY2hpbGRyZW5cclxuXHJcbiAgICAgICAgaWYgKCFfLmlzRW1wdHkoY3VycmVudE5vZGUuY2hpbGRyZW4pKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHBhcmVudDogSVROb2RlID0gXy5sYXN0KGFuY2VzdG9ycyk7XHJcbiAgICAgICAgICAgICAgICAvLyBwYXJlbnQgJiYgXy5maW5kSW5kZXgocGFyZW50LmNoaWxkcmVuLCBjdXJyZW50Tm9kZSkgPCAwO1xyXG4gICAgICAgICAgICAgICAgcGFyZW50ICYmIHBhcmVudC5jaGlsZHJlbiAmJiBwYXJlbnQuY2hpbGRyZW4uZmluZEluZGV4KChjKSA9PiBjLmNvbXBhcmVkVG8oY3VycmVudE5vZGUpID09IDApIDwgMDtcclxuICAgICAgICAgICAgICAgIHBhcmVudCA9IF8ubGFzdChhbmNlc3RvcnMpKSB7XHJcbiAgICAgICAgICAgICAgICBhbmNlc3RvcnMucG9wKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhbmNlc3RvcnMucHVzaChjdXJyZW50Tm9kZSlcclxuICAgICAgICAgICAgbm9kZVN0YWNrLnB1c2goLi4uY3VycmVudE5vZGUuY2hpbGRyZW4pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocm9vdHMpXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFRyZWVWaXNpdG9yID0gKG5vZGU6IElUTm9kZSwgYW5jZXN0b3JzOiBJVE5vZGVbXSkgPT4gSVROb2RlW11cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpdGVyYXRlVHJlZShyb290czogSVROb2RlW10sIHZpc2l0b3I6IFRyZWVWaXNpdG9yKTogSVROb2RlW10ge1xyXG5cclxuICAgIGxldCBub2RlU3RhY2s6IElUTm9kZVtdID0gWy4uLnJvb3RzXVxyXG4gICAgbGV0IGFuY2VzdG9yczogSVROb2RlW10gPSBbXVxyXG5cclxuICAgIHdoaWxlIChub2RlU3RhY2subGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGxldCBjdXJyZW50Tm9kZTogSVROb2RlID0gbm9kZVN0YWNrLnBvcCgpXHJcblxyXG4gICAgICAgIGZvciAobGV0IHBhcmVudDogSVROb2RlID0gXy5sYXN0KGFuY2VzdG9ycyk7XHJcbiAgICAgICAgICAgIC8vIHBhcmVudCAmJiBfLmZpbmRJbmRleChwYXJlbnQuY2hpbGRyZW4sIGN1cnJlbnROb2RlKSA8IDA7XHJcbiAgICAgICAgICAgIHBhcmVudCAmJiBwYXJlbnQuY2hpbGRyZW4gJiYgcGFyZW50LmNoaWxkcmVuLmZpbmRJbmRleCgoYykgPT4gYy5jb21wYXJlZFRvKGN1cnJlbnROb2RlKSA9PSAwKSA8IDA7XHJcbiAgICAgICAgICAgIHBhcmVudCA9IF8ubGFzdChhbmNlc3RvcnMpKSB7XHJcbiAgICAgICAgICAgIGFuY2VzdG9ycy5wb3AoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjdXJyZW50Tm9kZS5jaGlsZHJlbiA9ICh2aXNpdG9yICYmIHZpc2l0b3IoY3VycmVudE5vZGUsIGFuY2VzdG9ycykpIHx8IGN1cnJlbnROb2RlLmNoaWxkcmVuXHJcblxyXG4gICAgICAgIGlmICghXy5pc0VtcHR5KGN1cnJlbnROb2RlLmNoaWxkcmVuKSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBwYXJlbnQ6IElUTm9kZSA9IF8ubGFzdChhbmNlc3RvcnMpO1xyXG4gICAgICAgICAgICAgICAgLy8gcGFyZW50ICYmIF8uZmluZEluZGV4KHBhcmVudC5jaGlsZHJlbiwgY3VycmVudE5vZGUpIDwgMDtcclxuICAgICAgICAgICAgICAgIHBhcmVudCAmJiBwYXJlbnQuY2hpbGRyZW4gJiYgcGFyZW50LmNoaWxkcmVuLmZpbmRJbmRleCgoYykgPT4gYy5jb21wYXJlZFRvKGN1cnJlbnROb2RlKSA9PSAwKSA8IDA7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnQgPSBfLmxhc3QoYW5jZXN0b3JzKSkge1xyXG4gICAgICAgICAgICAgICAgYW5jZXN0b3JzLnBvcCgpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGFuY2VzdG9ycy5wdXNoKGN1cnJlbnROb2RlKVxyXG4gICAgICAgICAgICBub2RlU3RhY2sucHVzaCguLi5jdXJyZW50Tm9kZS5jaGlsZHJlbilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJvb3RzXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpKGZpbGVuYW1lOiBzdHJpbmcsIC4uLnJlc3Q6IGFueVtdKSB7XHJcbiAgICBjb25zdCBzdGFja1RyYWNlID0gKG5ldyBFcnJvcigpKS5zdGFja1xyXG4gICAgY29uc3QgZnJhbWVzID0gc3RhY2tUcmFjZS5tYXRjaCgvW15cXHJcXG5dKy9nKVxyXG4gICAgY29uc3QgaWR4ID0gZnJhbWVzLmZpbmRJbmRleChmcmFtZSA9PiBmcmFtZS5pbmNsdWRlcyhcImF0IGkgKFwiKSkgKyAxXHJcbiAgICBjb25zb2xlLmluZm8oXCJcXG5cIiwgZmlsZW5hbWUsIGZyYW1lc1tpZHhdLCBcIlxcblxcdFwiLCAuLi4ocmVzdCB8fCBbXSkubWFwKG9iaiA9PiBqc2Yob2JqKSksIFwiXFxuXCIpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBqc2YodjogYW55LCBpbmRlbnQ6IHN0cmluZyA9IFwiICBcIik6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdiBpbnN0YW5jZW9mIE9iamVjdCA/IEpTT04uc3RyaW5naWZ5KHYsIG51bGwsIGluZGVudCkgOiB2XHJcbn1cclxuXHJcbi8vb3JnLmFwYWNoZS5jb21tb25zLmlvLkZpbGVuYW1lVXRpbHMjZ2V0RXh0ZW5zaW9uXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXROYW1lQW5kRXh0KHBhdGhTdHI6IHN0cmluZyk6IFtzdHJpbmcsIHN0cmluZ10ge1xyXG4gICAgaWYgKF8uaXNFbXB0eShwYXRoU3RyKSkgcmV0dXJuIFtwYXRoU3RyLCBcIlwiXVxyXG4gICAgY29uc3QgZXh0UG9zOiBudW1iZXIgPSBfLmxhc3RJbmRleE9mKHBhdGhTdHIsIFwiLlwiKVxyXG4gICAgY29uc3QgbGFzdFNlcDogbnVtYmVyID0gTWF0aC5tYXgoXy5sYXN0SW5kZXhPZihwYXRoU3RyLCBXSU5ET1dTX1NFUEFSQVRPUiksIF8ubGFzdEluZGV4T2YocGF0aFN0ciwgVU5JWF9TRVBBUkFUT1IpKVxyXG4gICAgaWYgKGxhc3RTZXAgPiBleHRQb3MpIHJldHVybiBbcGF0aFN0ciwgXCJcIl1cclxuICAgIHJldHVybiBbcGF0aFN0ci5zdWJzdHJpbmcoMCwgZXh0UG9zKSwgcGF0aFN0ci5zdWJzdHJpbmcoZXh0UG9zICsgMSldXHJcbn1cclxuXHJcbmNvbnN0IFdJTkRPV1NfU0VQQVJBVE9SID0gXCJcXFxcXCJcclxuY29uc3QgVU5JWF9TRVBBUkFUT1IgPSBcIi9cIlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHByZXBlbmRJZk1pc3Npbmcoc3RyOiBzdHJpbmcsIHByZWZpeDogc3RyaW5nLCAuLi5wcmVmaXhlczogc3RyaW5nW10pOiBzdHJpbmcge1xyXG4gICAgaWYgKF8uaXNFbXB0eShzdHIpIHx8IF8uaXNFbXB0eShwcmVmaXgpIHx8IHN0ci5zdGFydHNXaXRoKHByZWZpeCkpIHJldHVybiBzdHJcclxuICAgIGlmICghXy5pc0VtcHR5KHByZWZpeGVzKSkge1xyXG4gICAgICAgIGZvciAobGV0IHAgb2YgcHJlZml4KSB7XHJcbiAgICAgICAgICAgIGlmIChzdHIuc3RhcnRzV2l0aChwKSkgcmV0dXJuIHN0clxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBwcmVmaXggKyBzdHJcclxufSJdLCJzb3VyY2VSb290IjoiIn0=