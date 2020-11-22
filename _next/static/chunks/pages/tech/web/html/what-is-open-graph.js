_N_E =
(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["pages/tech/web/html/what-is-open-graph"],{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@mdx-js/react/dist/esm.js":
/*!************************************************!*\
  !*** ./node_modules/@mdx-js/react/dist/esm.js ***!
  \************************************************/
/*! exports provided: MDXContext, MDXProvider, mdx, useMDXComponents, withMDXComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDXContext", function() { return MDXContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDXProvider", function() { return MDXProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mdx", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMDXComponents", function() { return useMDXComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withMDXComponents", function() { return withMDXComponents; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};

var MDXContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});
var withMDXComponents = function withMDXComponents(Component) {
  return function (props) {
    var allComponents = useMDXComponents(props.components);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, props, {
      components: allComponents
    }));
  };
};
var useMDXComponents = function useMDXComponents(components) {
  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);
  }

  return allComponents;
};
var MDXProvider = function MDXProvider(props) {
  var allComponents = useMDXComponents(props.components);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MDXContext.Provider, {
    value: allComponents
  }, props.children);
};

var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {}, children);
  }
};
var MDXCreateElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (props, ref) {
  var propComponents = props.components,
      mdxType = props.mdxType,
      originalType = props.originalType,
      parentName = props.parentName,
      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _objectSpread2(_objectSpread2({
      ref: ref
    }, etc), {}, {
      components: propComponents
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _objectSpread2({
    ref: ref
  }, etc));
});
MDXCreateElement.displayName = 'MDXCreateElement';
function createElement (type, props) {
  var args = arguments;
  var mdxType = props && props.mdxType;

  if (typeof type === 'string' || mdxType) {
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = MDXCreateElement;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }

    newProps.originalType = type;
    newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;
    createElementArgArray[1] = newProps;

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement.apply(null, createElementArgArray);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement.apply(null, args);
}




/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Ftech%2Fweb%2Fhtml%2Fwhat-is-open-graph&absolutePagePath=D%3A%5Cgit%5Copensource%5Ccfcodefans.github.io%5Csrc%5Cpages%5Ctech%5Cweb%5Chtml%5Cwhat-is-open-graph.mdx!./":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Ftech%2Fweb%2Fhtml%2Fwhat-is-open-graph&absolutePagePath=D%3A%5Cgit%5Copensource%5Ccfcodefans.github.io%5Csrc%5Cpages%5Ctech%5Cweb%5Chtml%5Cwhat-is-open-graph.mdx ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/tech/web/html/what-is-open-graph",
      function () {
        return __webpack_require__(/*! ./src/pages/tech/web/html/what-is-open-graph.mdx */ "./src/pages/tech/web/html/what-is-open-graph.mdx");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/pages/tech/web/html/what-is-open-graph.mdx":
/*!********************************************************!*\
  !*** ./src/pages/tech/web/html/what-is-open-graph.mdx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");


var _jsxFileName = "D:\\git\\opensource\\cfcodefans.github.io\\src\\pages\\tech\\web\\html\\what-is-open-graph.mdx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



/* @jsxRuntime classic */

/* @jsx mdx */

var layoutProps = {};
var MDXLayout = "wrapper";
function MDXContent(_ref) {
  var components = _ref.components,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(MDXLayout, _objectSpread(_objectSpread(_objectSpread({}, layoutProps), props), {}, {
    components: components,
    mdxType: "MDXLayout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 10
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", _objectSpread(_objectSpread({
    parentName: "p"
  }, {
    "src": "https://ogp.me/logo.png",
    "alt": "OGP",
    "height": "100"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 10
    },
    __self: this
  })))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    },
    __self: this
  }, "As I studied so far, ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "p"
  }, {
    "href": "https://ogp.me/",
    "target": "_blank"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 33
    },
    __self: this
  }), "Open-Graph-Protocol"), " is the protocol recognized by social network. In detail,\nyou could add certain set of meta tags into your web pages, then when the web pages are shared by links in soical networks, such as\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "p"
  }, {
    "href": "https://linkedin.com/"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 3
    },
    __self: this
  }), "linkedin"), ", the social network could extract the info from the meta tags according to Open Graph Protocol\nand display these info to make the shared links more informative."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    },
    __self: this
  }, "such as this code snippet to be placed between head tag of a html page"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", _objectSpread(_objectSpread({
    parentName: "pre"
  }, {
    "className": "hljs language-html"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 10
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", _objectSpread(_objectSpread({
    parentName: "code"
  }, {
    "className": "hljs-tag"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 10
    },
    __self: this
  }), "<", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", _objectSpread(_objectSpread({
    parentName: "span"
  }, {
    "className": "hljs-name"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    },
    __self: this
  }), "html"), ">"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", _objectSpread(_objectSpread({
    parentName: "code"
  }, {
    "className": "hljs-tag"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 3
    },
    __self: this
  }), "<", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", _objectSpread(_objectSpread({
    parentName: "span"
  }, {
    "className": "hljs-name"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    },
    __self: this
  }), "head"), ">"), "\n...\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", _objectSpread(_objectSpread({
    parentName: "code"
  }, {
    "className": "hljs-tag"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 3
    },
    __self: this
  }), "<", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", _objectSpread(_objectSpread({
    parentName: "span"
  }, {
    "className": "hljs-name"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    },
    __self: this
  }), "meta"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", _objectSpread(_objectSpread({
    parentName: "span"
  }, {
    "className": "hljs-attr"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 34
    },
    __self: this
  }), "property"), "=", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", _objectSpread(_objectSpread({
    parentName: "span"
  }, {
    "className": "hljs-string"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 38
    },
    __self: this
  }), "\"og:title\""), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", _objectSpread(_objectSpread({
    parentName: "span"
  }, {
    "className": "hljs-attr"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 40
    },
    __self: this
  }), "content"), "=", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", _objectSpread(_objectSpread({
    parentName: "span"
  }, {
    "className": "hljs-string"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 37
    },
    __self: this
  }), "\"What is Open Graph?\""), ">"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", _objectSpread(_objectSpread({
    parentName: "code"
  }, {
    "className": "hljs-tag"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 3
    },
    __self: this
  }), "<", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", _objectSpread(_objectSpread({
    parentName: "span"
  }, {
    "className": "hljs-name"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    },
    __self: this
  }), "meta"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", _objectSpread(_objectSpread({
    parentName: "span"
  }, {
    "className": "hljs-attr"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 34
    },
    __self: this
  }), "property"), "=", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", _objectSpread(_objectSpread({
    parentName: "span"
  }, {
    "className": "hljs-string"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 38
    },
    __self: this
  }), "\"og:image\""), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", _objectSpread(_objectSpread({
    parentName: "span"
  }, {
    "className": "hljs-attr"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 40
    },
    __self: this
  }), "content"), "=", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", _objectSpread(_objectSpread({
    parentName: "span"
  }, {
    "className": "hljs-string"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 37
    },
    __self: this
  }), "\"https://ogp.me/logo.png\""), ">"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", _objectSpread(_objectSpread({
    parentName: "code"
  }, {
    "className": "hljs-tag"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 3
    },
    __self: this
  }), "<", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", _objectSpread(_objectSpread({
    parentName: "span"
  }, {
    "className": "hljs-name"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    },
    __self: this
  }), "meta"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", _objectSpread(_objectSpread({
    parentName: "span"
  }, {
    "className": "hljs-attr"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 34
    },
    __self: this
  }), "property"), "=", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", _objectSpread(_objectSpread({
    parentName: "span"
  }, {
    "className": "hljs-string"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 38
    },
    __self: this
  }), "\"og:url\""), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", _objectSpread(_objectSpread({
    parentName: "span"
  }, {
    "className": "hljs-attr"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 38
    },
    __self: this
  }), "content"), "=", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", _objectSpread(_objectSpread({
    parentName: "span"
  }, {
    "className": "hljs-string"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 37
    },
    __self: this
  }), "\"https://cfcodefans.github.io/tech/web/html/what-is-open-graph\""), ">"), "\n...\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", _objectSpread(_objectSpread({
    parentName: "code"
  }, {
    "className": "hljs-tag"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 3
    },
    __self: this
  }), "</", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", _objectSpread(_objectSpread({
    parentName: "span"
  }, {
    "className": "hljs-name"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 18
    },
    __self: this
  }), "head"), ">"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ol", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 5
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    },
    __self: this
  }, "og:title - The title of your object as it should appear within the graph, e.g"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    },
    __self: this
  }, "og:image - An image URL which should represent your object within the graph."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    },
    __self: this
  }, "og:url - The canonical URL of your object that will be used as its permanent ID in the graph")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 5
    },
    __self: this
  }, "with above metadata, when the page is shared in linkedin, linkedin would fetch the metadata from\nthe link, and display the image in metadata, title as well. By these info, the post appears more\ninformative."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 5
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", _objectSpread(_objectSpread({
    parentName: "p"
  }, {
    "src": "/res/html/ogp-sharing-linkedin.png",
    "alt": "OGP",
    "height": "500"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 10
    },
    __self: this
  })))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 5
    },
    __self: this
  }, "It is implemented differently to achieve same effect while sharing urls on twitter.\nTwitter has it own prefix \"twitter:\" instead of \"og\", please refer to ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "p"
  }, {
    "href": "https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started",
    "target": "_blank"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 73
    },
    __self: this
  }), "doc of twitter")));
}
_c = MDXContent;
;
MDXContent.isMDXComponent = true;

var _c;

$RefreshReg$(_c, "MDXContent");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ })

},[["./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Ftech%2Fweb%2Fhtml%2Fwhat-is-open-graph&absolutePagePath=D%3A%5Cgit%5Copensource%5Ccfcodefans.github.io%5Csrc%5Cpages%5Ctech%5Cweb%5Chtml%5Cwhat-is-open-graph.mdx!./","webpack"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9kaXN0L2VzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1jbGllbnQtcGFnZXMtbG9hZGVyLmpzIiwid2VicGFjazovL19OX0UvKHdlYnBhY2spL2J1aWxkaW4vaGFybW9ueS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy90ZWNoL3dlYi9odG1sL3doYXQtaXMtb3Blbi1ncmFwaC5tZHgiLCJ3ZWJwYWNrOi8vX05fRS9leHRlcm5hbCBcIlJlYWN0XCIiXSwibmFtZXMiOlsibGF5b3V0UHJvcHMiLCJNRFhMYXlvdXQiLCJNRFhDb250ZW50IiwiY29tcG9uZW50cyIsInByb3BzIiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDYkE7QUFBQTtBQUFBO0FBQW1HO0FBQ3BGO0FBQ2Y7QUFDQSxlQUFlLHVHQUE0QjtBQUMzQzs7QUFFQTtBQUNBOztBQUVBLGVBQWUsNkJBQTZCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FB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RkssRUE4Rkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3S0FDb0U7QUFBRyxjQUFVLEVBQUM7QUFBZCxLQUFzQjtBQUN0RixZQUFRLHlGQUQ4RTtBQUV0RixjQUFVO0FBRjRFLEdBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRHBFLENBOUZLLENBQVA7QUFvR0Q7S0F4R3VCRCxVO0FBMEd4QjtBQUNBQSxVQUFVLENBQUNHLGNBQVgsR0FBNEIsSUFBNUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hIQSx1QiIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3BhZ2VzL3RlY2gvd2ViL2h0bWwvd2hhdC1pcy1vcGVuLWdyYXBoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiaW1wb3J0IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgdmFyIGtleSwgaTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpO1xuICAgIGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlO1xuICAgIH0pO1xuICAgIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTtcbiAgfVxuXG4gIHJldHVybiBrZXlzO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkMih0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcblxuICAgIGlmIChpICUgMikge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuXG4gIHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcblxuICB2YXIga2V5LCBpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG52YXIgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIGlzRnVuY3Rpb24ob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nO1xufTtcblxudmFyIE1EWENvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dCh7fSk7XG52YXIgd2l0aE1EWENvbXBvbmVudHMgPSBmdW5jdGlvbiB3aXRoTURYQ29tcG9uZW50cyhDb21wb25lbnQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wcy5jb21wb25lbnRzKTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgIGNvbXBvbmVudHM6IGFsbENvbXBvbmVudHNcbiAgICB9KSk7XG4gIH07XG59O1xudmFyIHVzZU1EWENvbXBvbmVudHMgPSBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgdmFyIGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KTtcbiAgdmFyIGFsbENvbXBvbmVudHMgPSBjb250ZXh0Q29tcG9uZW50cztcblxuICBpZiAoY29tcG9uZW50cykge1xuICAgIGFsbENvbXBvbmVudHMgPSBpc0Z1bmN0aW9uKGNvbXBvbmVudHMpID8gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cykgOiBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgY29udGV4dENvbXBvbmVudHMpLCBjb21wb25lbnRzKTtcbiAgfVxuXG4gIHJldHVybiBhbGxDb21wb25lbnRzO1xufTtcbnZhciBNRFhQcm92aWRlciA9IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BzKSB7XG4gIHZhciBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wcy5jb21wb25lbnRzKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE1EWENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogYWxsQ29tcG9uZW50c1xuICB9LCBwcm9wcy5jaGlsZHJlbik7XG59O1xuXG52YXIgVFlQRV9QUk9QX05BTUUgPSAnbWR4VHlwZSc7XG52YXIgREVGQVVMVFMgPSB7XG4gIGlubGluZUNvZGU6ICdjb2RlJyxcbiAgd3JhcHBlcjogZnVuY3Rpb24gd3JhcHBlcihfcmVmKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbjtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIHt9LCBjaGlsZHJlbik7XG4gIH1cbn07XG52YXIgTURYQ3JlYXRlRWxlbWVudCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gIHZhciBwcm9wQ29tcG9uZW50cyA9IHByb3BzLmNvbXBvbmVudHMsXG4gICAgICBtZHhUeXBlID0gcHJvcHMubWR4VHlwZSxcbiAgICAgIG9yaWdpbmFsVHlwZSA9IHByb3BzLm9yaWdpbmFsVHlwZSxcbiAgICAgIHBhcmVudE5hbWUgPSBwcm9wcy5wYXJlbnROYW1lLFxuICAgICAgZXRjID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjb21wb25lbnRzXCIsIFwibWR4VHlwZVwiLCBcIm9yaWdpbmFsVHlwZVwiLCBcInBhcmVudE5hbWVcIl0pO1xuXG4gIHZhciBjb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wQ29tcG9uZW50cyk7XG4gIHZhciB0eXBlID0gbWR4VHlwZTtcbiAgdmFyIENvbXBvbmVudCA9IGNvbXBvbmVudHNbXCJcIi5jb25jYXQocGFyZW50TmFtZSwgXCIuXCIpLmNvbmNhdCh0eXBlKV0gfHwgY29tcG9uZW50c1t0eXBlXSB8fCBERUZBVUxUU1t0eXBlXSB8fCBvcmlnaW5hbFR5cGU7XG5cbiAgaWYgKHByb3BDb21wb25lbnRzKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe1xuICAgICAgcmVmOiByZWZcbiAgICB9LCBldGMpLCB7fSwge1xuICAgICAgY29tcG9uZW50czogcHJvcENvbXBvbmVudHNcbiAgICB9KSk7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfb2JqZWN0U3ByZWFkMih7XG4gICAgcmVmOiByZWZcbiAgfSwgZXRjKSk7XG59KTtcbk1EWENyZWF0ZUVsZW1lbnQuZGlzcGxheU5hbWUgPSAnTURYQ3JlYXRlRWxlbWVudCc7XG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50ICh0eXBlLCBwcm9wcykge1xuICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgdmFyIG1keFR5cGUgPSBwcm9wcyAmJiBwcm9wcy5tZHhUeXBlO1xuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgbWR4VHlwZSkge1xuICAgIHZhciBhcmdzTGVuZ3RoID0gYXJncy5sZW5ndGg7XG4gICAgdmFyIGNyZWF0ZUVsZW1lbnRBcmdBcnJheSA9IG5ldyBBcnJheShhcmdzTGVuZ3RoKTtcbiAgICBjcmVhdGVFbGVtZW50QXJnQXJyYXlbMF0gPSBNRFhDcmVhdGVFbGVtZW50O1xuICAgIHZhciBuZXdQcm9wcyA9IHt9O1xuXG4gICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChwcm9wcywga2V5KSkge1xuICAgICAgICBuZXdQcm9wc1trZXldID0gcHJvcHNba2V5XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBuZXdQcm9wcy5vcmlnaW5hbFR5cGUgPSB0eXBlO1xuICAgIG5ld1Byb3BzW1RZUEVfUFJPUF9OQU1FXSA9IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyA/IHR5cGUgOiBtZHhUeXBlO1xuICAgIGNyZWF0ZUVsZW1lbnRBcmdBcnJheVsxXSA9IG5ld1Byb3BzO1xuXG4gICAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmdzTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNyZWF0ZUVsZW1lbnRBcmdBcnJheVtpXSA9IGFyZ3NbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkobnVsbCwgY3JlYXRlRWxlbWVudEFyZ0FycmF5KTtcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50LmFwcGx5KG51bGwsIGFyZ3MpO1xufVxuXG5leHBvcnQgeyBNRFhDb250ZXh0LCBNRFhQcm92aWRlciwgY3JlYXRlRWxlbWVudCBhcyBtZHgsIHVzZU1EWENvbXBvbmVudHMsIHdpdGhNRFhDb21wb25lbnRzIH07XG4iLCJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL3RlY2gvd2ViL2h0bWwvd2hhdC1pcy1vcGVuLWdyYXBoXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiRDpcXFxcZ2l0XFxcXG9wZW5zb3VyY2VcXFxcY2Zjb2RlZmFucy5naXRodWIuaW9cXFxcc3JjXFxcXHBhZ2VzXFxcXHRlY2hcXFxcd2ViXFxcXGh0bWxcXFxcd2hhdC1pcy1vcGVuLWdyYXBoLm1keFwiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbE1vZHVsZSkge1xuXHRpZiAoIW9yaWdpbmFsTW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdHZhciBtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG9yaWdpbmFsTW9kdWxlKTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJleHBvcnRzXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWVcblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbWR4IH0gZnJvbSAnQG1keC1qcy9yZWFjdCdcblxuLyogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuLyogQGpzeCBtZHggKi9cblxuXG5cbmNvbnN0IGxheW91dFByb3BzID0ge1xuICBcbn07XG5jb25zdCBNRFhMYXlvdXQgPSBcIndyYXBwZXJcIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTURYQ29udGVudCh7XG4gIGNvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiA8TURYTGF5b3V0IHsuLi5sYXlvdXRQcm9wc30gey4uLnByb3BzfSBjb21wb25lbnRzPXtjb21wb25lbnRzfSBtZHhUeXBlPVwiTURYTGF5b3V0XCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgPHA+PGltZyBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgICAgXCJzcmNcIjogXCJodHRwczovL29ncC5tZS9sb2dvLnBuZ1wiLFxuICAgICAgICAgIFwiYWx0XCI6IFwiT0dQXCIsXG4gICAgICAgICAgXCJoZWlnaHRcIjogXCIxMDBcIlxuICAgICAgICB9fT48L2ltZz48L3A+XG4gICAgPC9kaXY+XG4gICAgPHA+e2BBcyBJIHN0dWRpZWQgc28gZmFyLCBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9vZ3AubWUvXCIsXG4gICAgICAgIFwidGFyZ2V0XCI6IFwiX2JsYW5rXCJcbiAgICAgIH19PntgT3Blbi1HcmFwaC1Qcm90b2NvbGB9PC9hPntgIGlzIHRoZSBwcm90b2NvbCByZWNvZ25pemVkIGJ5IHNvY2lhbCBuZXR3b3JrLiBJbiBkZXRhaWwsXG55b3UgY291bGQgYWRkIGNlcnRhaW4gc2V0IG9mIG1ldGEgdGFncyBpbnRvIHlvdXIgd2ViIHBhZ2VzLCB0aGVuIHdoZW4gdGhlIHdlYiBwYWdlcyBhcmUgc2hhcmVkIGJ5IGxpbmtzIGluIHNvaWNhbCBuZXR3b3Jrcywgc3VjaCBhc1xuYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vbGlua2VkaW4uY29tL1wiXG4gICAgICB9fT57YGxpbmtlZGluYH08L2E+e2AsIHRoZSBzb2NpYWwgbmV0d29yayBjb3VsZCBleHRyYWN0IHRoZSBpbmZvIGZyb20gdGhlIG1ldGEgdGFncyBhY2NvcmRpbmcgdG8gT3BlbiBHcmFwaCBQcm90b2NvbFxuYW5kIGRpc3BsYXkgdGhlc2UgaW5mbyB0byBtYWtlIHRoZSBzaGFyZWQgbGlua3MgbW9yZSBpbmZvcm1hdGl2ZS5gfTwvcD5cbiAgICB7XG4gICAgICAvKm1vcmUqL1xuICAgIH1cbiAgICA8cD57YHN1Y2ggYXMgdGhpcyBjb2RlIHNuaXBwZXQgdG8gYmUgcGxhY2VkIGJldHdlZW4gaGVhZCB0YWcgb2YgYSBodG1sIHBhZ2VgfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImhsanMgbGFuZ3VhZ2UtaHRtbFwiXG4gICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJobGpzLXRhZ1wiXG4gICAgICAgIH19PntgPGB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJobGpzLW5hbWVcIlxuICAgICAgICAgIH19PntgaHRtbGB9PC9zcGFuPntgPmB9PC9zcGFuPntgXG5gfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImhsanMtdGFnXCJcbiAgICAgICAgfX0+e2A8YH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImhsanMtbmFtZVwiXG4gICAgICAgICAgfX0+e2BoZWFkYH08L3NwYW4+e2A+YH08L3NwYW4+e2Bcbi4uLlxuYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJobGpzLXRhZ1wiXG4gICAgICAgIH19PntgPGB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJobGpzLW5hbWVcIlxuICAgICAgICAgIH19PntgbWV0YWB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJobGpzLWF0dHJcIlxuICAgICAgICAgIH19PntgcHJvcGVydHlgfTwvc3Bhbj57YD1gfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwiaGxqcy1zdHJpbmdcIlxuICAgICAgICAgIH19PntgXCJvZzp0aXRsZVwiYH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImhsanMtYXR0clwiXG4gICAgICAgICAgfX0+e2Bjb250ZW50YH08L3NwYW4+e2A9YH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImhsanMtc3RyaW5nXCJcbiAgICAgICAgICB9fT57YFwiV2hhdCBpcyBPcGVuIEdyYXBoP1wiYH08L3NwYW4+e2A+YH08L3NwYW4+e2BcbmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwiaGxqcy10YWdcIlxuICAgICAgICB9fT57YDxgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwiaGxqcy1uYW1lXCJcbiAgICAgICAgICB9fT57YG1ldGFgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwiaGxqcy1hdHRyXCJcbiAgICAgICAgICB9fT57YHByb3BlcnR5YH08L3NwYW4+e2A9YH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImhsanMtc3RyaW5nXCJcbiAgICAgICAgICB9fT57YFwib2c6aW1hZ2VcImB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJobGpzLWF0dHJcIlxuICAgICAgICAgIH19PntgY29udGVudGB9PC9zcGFuPntgPWB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJobGpzLXN0cmluZ1wiXG4gICAgICAgICAgfX0+e2BcImh0dHBzOi8vb2dwLm1lL2xvZ28ucG5nXCJgfTwvc3Bhbj57YD5gfTwvc3Bhbj57YFxuYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJobGpzLXRhZ1wiXG4gICAgICAgIH19PntgPGB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJobGpzLW5hbWVcIlxuICAgICAgICAgIH19PntgbWV0YWB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJobGpzLWF0dHJcIlxuICAgICAgICAgIH19PntgcHJvcGVydHlgfTwvc3Bhbj57YD1gfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwiaGxqcy1zdHJpbmdcIlxuICAgICAgICAgIH19PntgXCJvZzp1cmxcImB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJobGpzLWF0dHJcIlxuICAgICAgICAgIH19PntgY29udGVudGB9PC9zcGFuPntgPWB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJobGpzLXN0cmluZ1wiXG4gICAgICAgICAgfX0+e2BcImh0dHBzOi8vY2Zjb2RlZmFucy5naXRodWIuaW8vdGVjaC93ZWIvaHRtbC93aGF0LWlzLW9wZW4tZ3JhcGhcImB9PC9zcGFuPntgPmB9PC9zcGFuPntgXG4uLi5cbmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwiaGxqcy10YWdcIlxuICAgICAgICB9fT57YDwvYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImhsanMtbmFtZVwiXG4gICAgICAgICAgfX0+e2BoZWFkYH08L3NwYW4+e2A+YH08L3NwYW4+PC9jb2RlPjwvcHJlPlxuICAgIDxvbD5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwib2xcIj57YG9nOnRpdGxlIC0gVGhlIHRpdGxlIG9mIHlvdXIgb2JqZWN0IGFzIGl0IHNob3VsZCBhcHBlYXIgd2l0aGluIHRoZSBncmFwaCwgZS5nYH08L2xpPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJvbFwiPntgb2c6aW1hZ2UgLSBBbiBpbWFnZSBVUkwgd2hpY2ggc2hvdWxkIHJlcHJlc2VudCB5b3VyIG9iamVjdCB3aXRoaW4gdGhlIGdyYXBoLmB9PC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwib2xcIj57YG9nOnVybCAtIFRoZSBjYW5vbmljYWwgVVJMIG9mIHlvdXIgb2JqZWN0IHRoYXQgd2lsbCBiZSB1c2VkIGFzIGl0cyBwZXJtYW5lbnQgSUQgaW4gdGhlIGdyYXBoYH08L2xpPlxuICAgIDwvb2w+XG4gICAgPHA+e2B3aXRoIGFib3ZlIG1ldGFkYXRhLCB3aGVuIHRoZSBwYWdlIGlzIHNoYXJlZCBpbiBsaW5rZWRpbiwgbGlua2VkaW4gd291bGQgZmV0Y2ggdGhlIG1ldGFkYXRhIGZyb21cbnRoZSBsaW5rLCBhbmQgZGlzcGxheSB0aGUgaW1hZ2UgaW4gbWV0YWRhdGEsIHRpdGxlIGFzIHdlbGwuIEJ5IHRoZXNlIGluZm8sIHRoZSBwb3N0IGFwcGVhcnMgbW9yZVxuaW5mb3JtYXRpdmUuYH08L3A+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgPHA+PGltZyBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgICAgXCJzcmNcIjogXCIvcmVzL2h0bWwvb2dwLXNoYXJpbmctbGlua2VkaW4ucG5nXCIsXG4gICAgICAgICAgXCJhbHRcIjogXCJPR1BcIixcbiAgICAgICAgICBcImhlaWdodFwiOiBcIjUwMFwiXG4gICAgICAgIH19PjwvaW1nPjwvcD5cbiAgICA8L2Rpdj5cbiAgICA8cD57YEl0IGlzIGltcGxlbWVudGVkIGRpZmZlcmVudGx5IHRvIGFjaGlldmUgc2FtZSBlZmZlY3Qgd2hpbGUgc2hhcmluZyB1cmxzIG9uIHR3aXR0ZXIuXG5Ud2l0dGVyIGhhcyBpdCBvd24gcHJlZml4IFwidHdpdHRlcjpcIiBpbnN0ZWFkIG9mIFwib2dcIiwgcGxlYXNlIHJlZmVyIHRvIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL2RldmVsb3Blci50d2l0dGVyLmNvbS9lbi9kb2NzL3R3aXR0ZXItZm9yLXdlYnNpdGVzL2NhcmRzL2d1aWRlcy9nZXR0aW5nLXN0YXJ0ZWRcIixcbiAgICAgICAgXCJ0YXJnZXRcIjogXCJfYmxhbmtcIlxuICAgICAgfX0+e2Bkb2Mgb2YgdHdpdHRlcmB9PC9hPjwvcD5cbiAgICA8L01EWExheW91dD47XG59XG5cbjtcbk1EWENvbnRlbnQuaXNNRFhDb21wb25lbnQgPSB0cnVlOyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==