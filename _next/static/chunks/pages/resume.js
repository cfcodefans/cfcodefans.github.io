_N_E =
(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["pages/resume"],{

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

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fresume&absolutePagePath=D%3A%5Cgit%5Copensource%5Ccfcodefans.github.io%5Csrc%5Cpages%5Cresume.mdx!./":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fresume&absolutePagePath=D%3A%5Cgit%5Copensource%5Ccfcodefans.github.io%5Csrc%5Cpages%5Cresume.mdx ***!
  \********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/resume",
      function () {
        return __webpack_require__(/*! ./src/pages/resume.mdx */ "./src/pages/resume.mdx");
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

/***/ "./src/pages/resume.mdx":
/*!******************************!*\
  !*** ./src/pages/resume.mdx ***!
  \******************************/
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


var _jsxFileName = "D:\\git\\opensource\\cfcodefans.github.io\\src\\pages\\resume.mdx";

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
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "li"
  }, {
    "href": "#objectives"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 27
    },
    __self: this
  }), "1. Objectives")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "li"
  }, {
    "href": "#contact"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 27
    },
    __self: this
  }), "2. Contact")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "li"
  }, {
    "href": "#education"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 27
    },
    __self: this
  }), "3. Education")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "li"
  }, {
    "href": "#certificate"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 27
    },
    __self: this
  }), "4. Certificate")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "li"
  }, {
    "href": "#experience"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 27
    },
    __self: this
  }), "5. Experience"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    },
    __self: this
  }, "\xA0"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    id: "objectives",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    },
    __self: this
  }, "1. Objectives"), "Hi, I am Chen Fan.", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", _objectSpread(_objectSpread({
    parentName: "pre"
  }, {}), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 10
    },
    __self: this
  }), "I have been working as a java coder and enthusiastic about coding (so much to learn).  \n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    },
    __self: this
  }, "I aspire to further my programming knowledge, skills and vision of the evolving internet. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", _objectSpread(_objectSpread({
    parentName: "pre"
  }, {}), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 10
    },
    __self: this
  }), "I firmly believe that internet driven services will flourish through innovations and \n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    },
    __self: this
  }, "connection to other industries thus I wish to participate this exploratory process. I\nbelieve\nI could contribute to business success with combination of my experience, creativity,\nteam spirit, most importantly learning ability."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    },
    __self: this
  }, "Thanks and best regards. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    },
    __self: this
  }, "\xA0"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    id: "contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    },
    __self: this
  }, "2. Contact"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    },
    __self: this
  }, "mail: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "li"
  }, {
    "href": "mailto:chenfanspost@hotmail.com"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 37
    },
    __self: this
  }), "chenfanspost@hotmail.com")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    },
    __self: this
  }, "linkedin: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "li"
  }, {
    "href": "https://www.linkedin.com/in/cfcodefans/"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 41
    },
    __self: this
  }), "https://www.linkedin.com/in/cfcodefans/")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    },
    __self: this
  }, "github: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "li"
  }, {
    "href": "https://github.com/cfcodefans"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 39
    },
    __self: this
  }), "https://github.com/cfcodefans"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    },
    __self: this
  }, "\xA0"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    id: "education",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    },
    __self: this
  }, "3. Education"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    },
    __self: this
  }, "Computer Science At ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "p"
  }, {
    "href": "https://en.nuist.edu.cn",
    "target": "_blank"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 32
    },
    __self: this
  }), "Nanjing University of Information science and Technology")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 5
    },
    __self: this
  }, "\xA0"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    id: "certificate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    },
    __self: this
  }, "4. Certificate"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 5
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    },
    __self: this
  }, "OCBCD ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "li"
  }, {
    "href": "https://education.oracle.com/business-component-development-with-ejb-technology-java-ee-6/courP_418",
    "target": "_blank"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 37
    },
    __self: this
  }), "Oracle Certified Business Component Developer")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    },
    __self: this
  }, "OCJP ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "li"
  }, {
    "href": "https://education.oracle.com/java/java-se/product_267",
    "target": "_blank"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 36
    },
    __self: this
  }), "Oracle Certified Java Programmer")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    },
    __self: this
  }, "TOEIC 955 "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    },
    __self: this
  }, "IELTS 6.5")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 5
    },
    __self: this
  }, "\xA0"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    id: "experience",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 5
    },
    __self: this
  }, "5. Experience"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 5
    },
    __self: this
  }, "\xA0"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 5
    },
    __self: this
  }, "5.1. Java Coder"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 5
    },
    __self: this
  }, "At ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "p"
  }, {
    "href": "https://thenetcircle.com",
    "target": "_blank"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 15
    },
    __self: this
  }), "The NetCircle"), "\nJun 2012 \u2013 Present . 6 yrs 11 mos at Shanghai China"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 5
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", _objectSpread(_objectSpread({
    parentName: "pre"
  }, {}), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 10
    },
    __self: this
  }), "As Java coder, I started with development of services built with java\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 5
    },
    __self: this
  }, ", supporting our websites. Image/Video process, Message queuing, Payment,\nSingle Sign On, Blockchain(NEM)...."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 5
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", _objectSpread(_objectSpread({
    parentName: "pre"
  }, {}), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 10
    },
    __self: this
  }), "Gradually, I have studied and shifted to data area as our team aims to \n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 5
    },
    __self: this
  }, "become data driven. I familiarize tools/framework for data mining, which brought\nme to new horizon."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 5
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", _objectSpread(_objectSpread({
    parentName: "pre"
  }, {}), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 10
    },
    __self: this
  }), "As technology & tools always evolve and improve to be more user-friendly, \n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 5
    },
    __self: this
  }, "I still feel quite distant to the math/statistic principles behind data science."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 5
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", _objectSpread(_objectSpread({
    parentName: "pre"
  }, {}), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 10
    },
    __self: this
  }), "As we generate more and more data in our lives, data also shapes our minds.\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 5
    },
    __self: this
  }, "I wish to explore more in this complexity."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 5
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", _objectSpread(_objectSpread({
    parentName: "pre"
  }, {}), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 10
    },
    __self: this
  }), "In practice, apart from development for java systems, I have also been working \n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 5
    },
    __self: this
  }, "as data engineer, setting up infrastructures like Hadoop cluster, Hive, Kafka.\nProcess clean data for data scientists."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 5
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", _objectSpread(_objectSpread({
    parentName: "pre"
  }, {}), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 10
    },
    __self: this
  }), "Overall, I grow with sharing knowleages between amazing colleagues.\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 5
    },
    __self: this
  }, "Projects"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 5
    },
    __self: this
  }, "5.1.1 Community-Token (Feb 2018 - Present) ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "h6"
  }, {
    "href": "https://nem.io/",
    "target": "_blank"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 56
    },
    __self: this
  }), "NEM"), " / Kotlin / Spring-Boot / Mongodb"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 5
    },
    __self: this
  }, "The idea is to implement some reward mechanism to reward active users who create great\ncontent, contribute in our online community. The trick is possible monetary incentive\nassociated with crypto currency for users, as well as other benefit of block chain tech,\nsuch as transparency, immutability, convenient as well."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 5
    },
    __self: this
  }, "In detail, NEM features:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ol", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 5
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    },
    __self: this
  }, "proof of importance,"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    },
    __self: this
  }, "multi-sign transaction"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    },
    __self: this
  }, "escrow"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    },
    __self: this
  }, "atomic swap(exchange) ")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 5
    },
    __self: this
  }, "However the transaction speed is always critical impediment to block chain application,\ncaused by nature of block chain tech. To address, we adopt private chain, similar to\nBitcoin's lightning network."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 5
    },
    __self: this
  }, "\xA0"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 5
    },
    __self: this
  }, "5.1.2 Data-Service-ETL (May 2019 \u2013 Present) ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "h6"
  }, {
    "href": "https://github.com/alibaba/canal",
    "target": "_blank"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 57
    },
    __self: this
  }), "Canal"), " / Hive / ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "h6"
  }, {
    "href": "https://gpdb.docs.pivotal.io/6-0/main/index.html"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 37
    },
    __self: this
  }), "Green Plum"), " / ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "h6"
  }, {
    "href": "https://superset.incubator.apache.org/"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 35
    },
    __self: this
  }), "Superset")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 5
    },
    __self: this
  }, "For data collected from Kafka, I developed UDF in Hive which could pull data from kafka\nwith in certain time window defined as parameters. This primarily collects data generated\nby users' actions, as fact table."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 5
    },
    __self: this
  }, "Besides this, Canal can impersonate a mysql slave to collect data changes on a mysql instance.\nDimenson tables changes are collected and stored by date."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 5
    },
    __self: this
  }, "Raw data (ods) collected and load into Hive tables where ETL processes are implemented by\nHive SQL, which could utilize some UDF functions I developed, to operate data via http\nservices, Redis, Zookeeper. Hive Storage Handler is also very useful for Hive to access\ndata in various JDBC-compatible data source."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 5
    },
    __self: this
  }, "Data in Hive is loaded into GreenPlum, which is multiple Postgresql instances organized\nin cluster, able to support adhoc queries. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 5
    },
    __self: this
  }, "Last piece is Superset, a BI tool which renders data with dozens of different charts."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 5
    },
    __self: this
  }, "\xA0"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 5
    },
    __self: this
  }, "5.1.3 Data-Service-setup (Jul 2018 \u2013 Present) Hadoop / Zookeeper / Kafka / Hive / Green Plum"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 5
    },
    __self: this
  }, "Install, deploy and configure Hadoop cluster, with High Availability feature, optimized\nsettings."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 5
    },
    __self: this
  }, "Install and integrate components for our data services, including: Kafka for event bus;\nHive for ETL engineer; Green Plum for storage for adhoc queries/charts; Zookeeper to\nsupport others."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 5
    },
    __self: this
  }, "\xA0"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 5
    },
    __self: this
  }, "5.1.4 Single-Sign-On (Feb 2018 \u2013 Jul 2018) ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "h6"
  }, {
    "href": "https://oltu.apache.org/",
    "target": "_blank"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 56
    },
    __self: this
  }), "Apache Oltu"), " / Mongodb / Scala / LDAP"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 5
    },
    __self: this
  }, "A single sign on feature built with Apache Oltu Library and LDAP using scala/jersey/webservice,\nit guards our internal services for users from different departments."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 5
    },
    __self: this
  }, "\xA0"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 5
    },
    __self: this
  }, "5.1.5 Data-misc-tools (Jul 2017 \u2013 Feb 2018) Hive / Kafka / Redis / Mysql"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 5
    },
    __self: this
  }, "This project hosts several tools to help with development using Hive, Spark. Please check it\nout on github"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 5
    },
    __self: this
  }, "To study and apply how to leverage new features of Hive, Spark, Hadoop for data process, I\ncreated and am developing some functions for Hive and spark. It sounds like reinventing wheel,\nbut I believe it has certain value as:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ol", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 5
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 7
    },
    __self: this
  }, "it utilizes the dynamic characteristic of scala language, so that it recognizes the\nmodification of scala script files on HDFS, takes effect immediately, saving the cumbersome\nsteps of compile, package, deployment, restart spark process. Theoretically this can apply\nother JSR233 compatible languages.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 5
    },
    __self: this
  }, "1.1 I have finished the feature to support python as well, python code can be saved and edited\nwith HUE, then it will take effect immediately too"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ol", _objectSpread(_objectSpread({}, {
    "start": 2
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 5
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 7
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 9
    },
    __self: this
  }, "It can use just HIVE sql to load/send data via HTTP, kafka, Redis with extended HIVE\nfunction. Most of a ETL process can be implemented by only HIVE sql.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 7
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 9
    },
    __self: this
  }, "Some supportive features are also provided, such simple task scheduler, task execution\ntracking."))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 5
    },
    __self: this
  }, "Feedback or contribution is highly appreciated.\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "p"
  }, {
    "href": "https://github.com/thenetcircle/data-misc-tools",
    "target": "_blank"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 3
    },
    __self: this
  }), "Source on github")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 5
    },
    __self: this
  }, "\xA0"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 5
    },
    __self: this
  }, "5.1.5 Video Conversion Service (Jan 2016 - Present) ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "h6"
  }, {
    "href": "https://ffmpeg.org/",
    "target": "_blank"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 65
    },
    __self: this
  }), "FFmpeg"), " / Kotlin / ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "h6"
  }, {
    "href": "http://red5.org/"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 40
    },
    __self: this
  }), "Red5")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 5
    },
    __self: this
  }, "A service can convert videos uploaded by users to different formats, also add watermarks\nand extract thumbnails. I developed this based on Red5 Server with Spring, Spring-MVC and\nkotlin."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 5
    },
    __self: this
  }, "Besides these, we are developing video live-streaming feature to meet the needs of\nwatching video stream on browser of mobile as we learn that majority of accesses\nare from mobile phones."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 5
    },
    __self: this
  }, "\xA0"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 5
    },
    __self: this
  }, "5.1.6 IPS (Image Process Service) (Jan 2013 - Jul 2018) ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "h6"
  }, {
    "href": "https://opencv.org/",
    "target": "_blank"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 69
    },
    __self: this
  }), "OpenCV"), " / Kotlin / Spring-boot"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 5
    },
    __self: this
  }, "The service processes images uploaded by users, with features of crop, scale, overlay\ntext and other images, rotate. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 5
    },
    __self: this
  }, "The design borrowed the idea of CSS, we define some schemas in json like css to describe\nhow the images should be crop, scale, ...etc. Like CSS, we also had variables in the\nschemas so image processing could be dynamic according to requests."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 5
    },
    __self: this
  }, "The development for this is ongoing for years, as we always found some new challenges.\nFirstly, with upgrade of mobile phones of users led to images significantly increasing in\nboth number and size (3000x2000-ish) over just couple of years. The early version of IPS\nfailed to process images fast. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 5
    },
    __self: this
  }, "After studying logs and tests, I firstly made processing executed in parallel threads to\nmaximize use of multi-cores; checked the memory footprint to reduce unnecessary copy\n(image data is massive after uncompressing); replaced Processing Library (based on Java)\nwith OpenCV (based on C++);"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 5
    },
    __self: this
  }, "I also tried to extend it to support GIF, face recognition, similar image search, etc."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 5
    },
    __self: this
  }, "\xA0"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 5
    },
    __self: this
  }, "5.1.7 Joint (Jul 2014 \u2013 Jul 2015) ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "h6"
  }, {
    "href": "https://www.oracle.com/java/technologies/java-ee-glance.html",
    "target": "_blank"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 47
    },
    __self: this
  }), "JavaEE"), " / ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "h6"
  }, {
    "href": "https://swagger.io/"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 31
    },
    __self: this
  }), "Swagger")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 5
    },
    __self: this
  }, "This is actually a open-source and study project. I noticed the great development of\nfrontend technology and gap between it with backend technology."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 5
    },
    __self: this
  }, "Before, Backend tech stack (JSF, PHP...) covers the rendering of HTML with template\ntechnology. These became quickly outmoded as webpage development were taken over by\nJavascript libraries."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 5
    },
    __self: this
  }, "However, backend turns to service oriented. Restful services were described by WSDL,\nwhich was not recognized by javascript(since js is dynamic, weak-typed language)."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 5
    },
    __self: this
  }, "Finally, Typescript alleivated the problem but not ultimate solution. I tried to build\nsome library to read, parse the annotations on Restful service API, and automatically\ngenerate whole bunch of typescript definitions for service invocation."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 5
    },
    __self: this
  }, "Now we know that Swagger does this way better. I still learned a lot from this useless\nproject."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 5
    },
    __self: this
  }, "\xA0"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 5
    },
    __self: this
  }, "5.1.7 MQueue Dispatcher (Mar 2014 \u2013 2016) ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "h6"
  }, {
    "href": "https://www.rabbitmq.com",
    "target": "_blank"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 55
    },
    __self: this
  }), "Rabbit MQueue"), " / Java 8 / React"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 5
    },
    __self: this
  }, "The system constantly consumes messages from Rabbit MQueue according to predefined rules,\nrelays messages over http protocol to corresponding PHP modules. It also implements retry\nmechanism and failed messages storage for maintenance."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 5
    },
    __self: this
  }, "The design is a series of producer-consumer patterns combined with state transit, with\neach step performs different tasks: "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ol", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 5
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 7
    },
    __self: this
  }, "pull from queue; "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 7
    },
    __self: this
  }, "post to http service;"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 7
    },
    __self: this
  }, "check result to decide whether to:\n3.1 reply queue with ack;\n3.2 store failed message, mark the retry count;")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 5
    },
    __self: this
  }, "The challenge is building a fast assembly line with async queues, and tweak performance\nof HTTP library. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 5
    },
    __self: this
  }, "\xA0"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 5
    },
    __self: this
  }, "5.1.8 Search Service (Oct 2019 - present)"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 5
    },
    __self: this
  }, "Solr based full text search service, designed and developed to support websites,\nEnd users search profiles, locations, feeds via search service,\non the other handle, Data service collects users' search keyword and following browse\nactions, to feed related data analysis."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 5
    },
    __self: this
  }, "\xA0"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 5
    },
    __self: this
  }, "\xA0"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 5
    },
    __self: this
  }, "5.2 Senior Java Engineer"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 5
    },
    __self: this
  }, "At ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "p"
  }, {
    "href": "https://www.dbschenker.com/global",
    "target": "_blank"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 15
    },
    __self: this
  }), "DB Schenker SSC"), "\nAug 2010 \u2013 Jul 2012 . 2 yrs at Nanjing, Jiangsu, China"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 5
    },
    __self: this
  }, "Software Environment:\nWebsphere, Seam, JSF, Oracle, EJB, JPA, LDAP\nDevelopment Tools:\nEclipse + JBossTools"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 5
    },
    __self: this
  }, "Project Description:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 5
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", _objectSpread(_objectSpread({
    parentName: "pre"
  }, {}), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 10
    },
    __self: this
  }), "The SMPNG system is leveraged by many different aspects of JEE technologies, \n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 5
    },
    __self: this
  }, "whole JEE stack is applied in the system, to present users a modernized and clean\napplication. In order to gather and dispatch logistic transaction information from\nmany branches over the world, the SMPNG system is also backed by many other message\nsources. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 5
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", _objectSpread(_objectSpread({
    parentName: "pre"
  }, {}), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 10
    },
    __self: this
  }), "I had been working on this project in Germany with German colleagues for six weeks.\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 5
    },
    __self: this
  }, "From clients, new features were designed for handling booking and tracking operations.\nIt ought to replace the legacy SMPNG system and present business logic in more modern\nand user-friendly style."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 5
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", _objectSpread(_objectSpread({
    parentName: "pre"
  }, {}), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 10
    },
    __self: this
  }), "As a member of the group, I had managed to communicate and collaborate with\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 5
    },
    __self: this
  }, "colleagues from different countries and with different backgrounds. From my experience,\nI learned that some things are beyond language barrier, mainly caused by different\nmindset and culture or roles, while some communication skills would be very effective\nsolution to break down misunderstanding and deliver ideas."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 5
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", _objectSpread(_objectSpread({
    parentName: "pre"
  }, {}), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 10
    },
    __self: this
  }), "This job taught me much about those advanced tools used in enterprise development. \n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 5
    },
    __self: this
  }, "sonar for code checking, Jenkins for continuous integration, Fisheyes for refacotory,\nall those are very useful tools for big scale software development."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 5
    },
    __self: this
  }, "Responsibilities:\nModule Design, Programming and unit testing, collaboration between German customers\nand other developers."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 5
    },
    __self: this
  }, "\xA0"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 5
    },
    __self: this
  }, "Projects"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 5
    },
    __self: this
  }, "5.2.1 e-schenker (Jul 2010 \u2013 Jun 2011) JavaEE / ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "h6"
  }, {
    "href": "https://www.oracle.com/technetwork/java/javaee/javaserverfaces-139869.html",
    "target": "_blank"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 61
    },
    __self: this
  }), "JSF"), " / ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "h6"
  }, {
    "href": "http://seamframework.org",
    "target": "_blank"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 28
    },
    __self: this
  }), "Seam")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 5
    },
    __self: this
  }, "This project is used for DB Schenker corporation\u2018s logistics management. Include customer\ninformation maintenance, booking management, logistics branch office maintenance, cargo\ntracking and tracing process. It covers three types of transport mode in logistics area, they\nare AIR, OCEAN and LAND respectively. Both customer and business clerk around the world should\nuse this system to deal with logistics."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 5
    },
    __self: this
  }, "The system is empowered by JEE tech stack and Seam Framework. The application of JEE tech is\nmodular and multi-layered and developers are relieved from much work to deal with database or\nweb server. The new JEE 6 spec provides EJB3.1, CDI(Context Dependency Injection), RESTful API,\nJSF etc, which are very Java-Programmer-friendly."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 5
    },
    __self: this
  }, "\xA0"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 5
    },
    __self: this
  }, "5.3 Senior Java Engineer"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 5
    },
    __self: this
  }, "At ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "p"
  }, {
    "href": "https://www.zte.com.cn/global/",
    "target": "_blank"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 15
    },
    __self: this
  }), "ZTE Coporation"), "\nApr 2008 \u2013 Aug 2010 . 2 yrs 5 mos at Nanjing, Jiangsu, China"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 5
    },
    __self: this
  }, "Project Description:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 5
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", _objectSpread(_objectSpread({
    parentName: "pre"
  }, {}), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 10
    },
    __self: this
  }), "It is often referred as NMS, and includes various function modules for different\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 5
    },
    __self: this
  }, "network managements, such as Vlan, Vpn, Switcher, Router. because target\nOperation Systems are both of windows and Solarise (lots of NMS run on SUN server)\n, so Java and Swing UI could be the best option."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 5
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", _objectSpread(_objectSpread({
    parentName: "pre"
  }, {}), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 10
    },
    __self: this
  }), "JEE techniques, such as EJB, JMS, are very helpful for building highly flexible \n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 5
    },
    __self: this
  }, "System. SNMP and CLI are two mainly measures used in device operations.\nThis product has been developed for couple yearsnetnumen Network Management, and it is\ngetting more capable of  management of big scale network. our target is to make it more\neffective and robust."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 5
    },
    __self: this
  }, "Responsibilities:\nI am working in support group that developers utilities modules relieving other\nworkmates of trifles such as DB operations, UI pattern. we found that most of\nbusiness modules might include same functions, and we abstract those, and plan to\nbuild support base module, this was my challenging job."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 5
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", _objectSpread(_objectSpread({
    parentName: "pre"
  }, {}), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 10
    },
    __self: this
  }), "Lesson I learned, To develop base components used to support many other \n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 5
    },
    __self: this
  }, "concrete modules, it is important not to abuse design patterns and complicate the\ninterface. otherwise, colleagues would hate your over-engineering code. More over,\ninterfaces should be made flexible enough with OOP principles so that components\ncan be reused in various cases at minimum cost, otherwise your manager would hate\nyour code."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 5
    },
    __self: this
  }, "Projects"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 5
    },
    __self: this
  }, "5.3.1 netnumen Network Management (May 2008 \u2013 Aug 2010)"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 5
    },
    __self: this
  }, "This platform is developed by ZTE data network department. It consists of components\nof network interface, SNMP, telnet, Persistence layer, User Interfaces assembled in\na modular manner. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 5
    },
    __self: this
  }, "From technical point of view, it is empowered by combination of JEE and Swing\ntech stack so it is portable and compatible to different databases and other\nsystems built on Java."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 5
    },
    __self: this
  }, "From architecture point of view, It is designed to be modular and extensible.\nComponents for different business logics are developed easily based on platform\ninfrastructure modules, they interact via interfaces and JMS message."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 5
    },
    __self: this
  }, "As to my work in this project, I was tasked to develop utilities and UI framework\nto support other colleagues' development. I applied design patterns inside the\nmodule for flexibility and modularity and exposed interfaces for simplicity. Users\nsimply use them or inherit them. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 5
    },
    __self: this
  }, "\xA0"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 5
    },
    __self: this
  }, "5.4 Senior Java Engineer"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 5
    },
    __self: this
  }, "At ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "p"
  }, {
    "href": "http://www.lianchuang.com/",
    "target": "_blank"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 15
    },
    __self: this
  }), "AsiaInfo Linkage"), "\nFeb 2006 \u2013 Apr 2008 . 2 yrs 3 mos at Nanjing, Jiangsu, China"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 5
    },
    __self: this
  }, "Product Development\nI worked in LianChuang Technology that has been taken by AsiaInfo after my\nresignation. During that period, I took part in development of SAS system. This\nweb-based system was designed to collect and analyze business operation data in\nbig scale enterprise by intercepting the network traffic in intranet without any\nintrusion on existent systems. Further more, System admins are also able to define\nbusiness rules to monitor operations on critical resources, such as database and\nhosts."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 5
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", _objectSpread(_objectSpread({
    parentName: "pre"
  }, {}), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 10
    },
    __self: this
  }), "As designer of the back end server module of the product, I studied some \n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 5
    },
    __self: this
  }, "patterns of thread use and java optimization skills. With application of those\nin work, the product server application is able to handle great heavy workload\nwith commercial hardware."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 5
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", _objectSpread(_objectSpread({
    parentName: "pre"
  }, {}), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 10
    },
    __self: this
  }), "We also used some long-pulling technology to improve users interface so it \n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 5
    },
    __self: this
  }, "would allow system admins to monitor operations on servers immediately like real-time."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 5
    },
    __self: this
  }, "\xA0"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
      columnNumber: 5
    },
    __self: this
  }, "5.4.1 Securer Security Audit System (Mar 2006 \u2013 Apr 2008)"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 5
    },
    __self: this
  }, "This web-based system was designed to collect and analyse business operation data\nin big scale enterprise by intercepting the network traffic in intranet without\nany intrusion on existent systems. Further more, System admins are also able to\ndefine business rules to monitor operations on critical resources, such as\ndatabase and hosts."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409,
      columnNumber: 5
    },
    __self: this
  }, "The greatest challenge is performance. Therefore the architecture of this system\nconsists of:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411,
      columnNumber: 5
    },
    __self: this
  }, "Network interceptors is implemented as kernel module deployed in linux kernel.\nIt can rapidly filter out great amount of network traffic based on rules configured\non back-end server. The amount of network data is significantly reduced as delivered\nto user layer in interceptor host."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 5
    },
    __self: this
  }, "The back-end server receives data from several interceptors and processed for\nfurther analysis and presentation. Threads backed by buffers process data step by\nstep like pipeline. Different procedures are executed by different threads for\nbetter performance and modularity."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 5
    },
    __self: this
  }, "On database level, some optimization like proper indexing and partition are applied."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 5
    },
    __self: this
  }, "\xA0"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421,
      columnNumber: 5
    },
    __self: this
  }, "Between Jobs"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 5
    },
    __self: this
  }, "May 2005 \u2013 Feb 2006 . 8 mos at Nanjing, Jiangsu, China"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
      columnNumber: 5
    },
    __self: this
  }, "I was studying and preparing for higher degree."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
      columnNumber: 5
    },
    __self: this
  }, "\xA0"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 5
    },
    __self: this
  }, "5.5 Java Coder"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426,
      columnNumber: 5
    },
    __self: this
  }, "At ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "p"
  }, {
    "href": "http://www.softwise.com.cn",
    "target": "_blank"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426,
      columnNumber: 15
    },
    __self: this
  }), "Softwise"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("br", {
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429,
      columnNumber: 26
    },
    __self: this
  }), "\n", "Aug 2003 \u2013 Apr 2005 . 8 mos at Nanjing, Jiangsu, China"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 5
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", _objectSpread(_objectSpread({
    parentName: "pre"
  }, {}), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 10
    },
    __self: this
  }), "First job as programmer, I worked in projects sourced from Japan big companies.\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
      columnNumber: 5
    },
    __self: this
  }, "Just like Chinese software industry started with outsourcing projects and grow with\nJapanese management. I went through classic water-fall software development cycle\nand built up my basic Java skill. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 5
    },
    __self: this
  }, "I also got to learn some advance tech (by then),\nsuch as ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "p"
  }, {
    "href": "https://helpx.adobe.com/coldfusion/cfml-reference/coldfusion-tags.html",
    "target": "_blank"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437,
      columnNumber: 11
    },
    __self: this
  }), "adobe coldfusion"), ",\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "p"
  }, {
    "href": "https://www.softwareag.com/corporate/products/webmethods_integration/adapter/default.html",
    "target": "_blank"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441,
      columnNumber: 3
    },
    __self: this
  }), "webmethod")));
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ })

},[["./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fresume&absolutePagePath=D%3A%5Cgit%5Copensource%5Ccfcodefans.github.io%5Csrc%5Cpages%5Cresume.mdx!./","webpack"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9kaXN0L2VzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1jbGllbnQtcGFnZXMtbG9hZGVyLmpzIiwid2VicGFjazovL19OX0UvKHdlYnBhY2spL2J1aWxkaW4vaGFybW9ueS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9yZXN1bWUubWR4Iiwid2VicGFjazovL19OX0UvZXh0ZXJuYWwgXCJSZWFjdFwiIl0sIm5hbWVzIjpbImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiTURYQ29udGVudCIsImNvbXBvbmVudHMiLCJwcm9wcyIsImlzTURYQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2JBO0FBQUE7QUFBQTtBQUFtRztBQUNwRjtBQUNmO0FBQ0EsZUFBZSx1R0FBNEI7QUFDM0M7O0FBRUE7QUFDQTs7QUFFQSxlQUFlLDZCQUE2QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7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QTtBQUFBO0FBQUE7QUFBQSxNQUNMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESyxFQUVMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGNBQVUsRUFBQyxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBb0I7QUFBRyxjQUFVLEVBQUM7QUFBZCxLQUF1QjtBQUN2QyxZQUFRO0FBRCtCLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQXBCLENBREYsRUFJRTtBQUFJLGNBQVUsRUFBQyxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBb0I7QUFBRyxjQUFVLEVBQUM7QUFBZCxLQUF1QjtBQUN2QyxZQUFRO0FBRCtCLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQXBCLENBSkYsRUFPRTtBQUFJLGNBQVUsRUFBQyxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBb0I7QUFBRyxjQUFVLEVBQUM7QUFBZCxLQUF1QjtBQUN2QyxZQUFRO0FBRCtCLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQXBCLENBUEYsRUFVRTtBQUFJLGNBQVUsRUFBQyxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBb0I7QUFBRyxjQUFVLEVBQUM7QUFBZCxLQUF1QjtBQUN2QyxZQUFRO0FBRCtCLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQXBCLENBVkYsRUFhRTtBQUFJLGNBQVUsRUFBQyxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBb0I7QUFBRyxjQUFVLEVBQUM7QUFBZCxLQUF1QjtBQUN2QyxZQUFRO0FBRCtCLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEs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QTtBQUFBO0FBQUEsMEZBQUwsQ0E3WkssRUErWkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrTkEvWkssRUFrYUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtRUFDTTtBQUFHLGNBQVUsRUFBQztBQUFkLEtBQXNCO0FBQ3hCLFlBQVEsd0VBRGdCO0FBRXhCLGNBQVU7QUFGYyxHQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUROLFNBS0Y7QUFBRyxjQUFVLEVBQUM7QUFBZCxLQUFzQjtBQUNoQixZQUFRLDJGQURRO0FBRWhCLGNBQVU7QUFGTSxHQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxFLENBbGFLLENBQVA7QUE0YUQ7S0FoYnVCRCxVO0FBa2J4QjtBQUNBQSxVQUFVLENBQUNHLGNBQVgsR0FBNEIsSUFBNUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hjQSx1QiIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3BhZ2VzL3Jlc3VtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsImltcG9ydCBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG4gIHZhciBrZXksIGk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcbiAgICBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgICB9KTtcbiAgICBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7XG4gIH1cblxuICByZXR1cm4ga2V5cztcbn1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZDIodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG5cbiAgICBpZiAoaSAlIDIpIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcblxuICB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG5cbiAgdmFyIGtleSwgaTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxudmFyIGlzRnVuY3Rpb24gPSBmdW5jdGlvbiBpc0Z1bmN0aW9uKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cbnZhciBNRFhDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQoe30pO1xudmFyIHdpdGhNRFhDb21wb25lbnRzID0gZnVuY3Rpb24gd2l0aE1EWENvbXBvbmVudHMoQ29tcG9uZW50KSB7XG4gIHJldHVybiBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcHMuY29tcG9uZW50cyk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICBjb21wb25lbnRzOiBhbGxDb21wb25lbnRzXG4gICAgfSkpO1xuICB9O1xufTtcbnZhciB1c2VNRFhDb21wb25lbnRzID0gZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIHZhciBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dCk7XG4gIHZhciBhbGxDb21wb25lbnRzID0gY29udGV4dENvbXBvbmVudHM7XG5cbiAgaWYgKGNvbXBvbmVudHMpIHtcbiAgICBhbGxDb21wb25lbnRzID0gaXNGdW5jdGlvbihjb21wb25lbnRzKSA/IGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpIDogX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIGNvbnRleHRDb21wb25lbnRzKSwgY29tcG9uZW50cyk7XG4gIH1cblxuICByZXR1cm4gYWxsQ29tcG9uZW50cztcbn07XG52YXIgTURYUHJvdmlkZXIgPSBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wcykge1xuICB2YXIgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcHMuY29tcG9uZW50cyk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChNRFhDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IGFsbENvbXBvbmVudHNcbiAgfSwgcHJvcHMuY2hpbGRyZW4pO1xufTtcblxudmFyIFRZUEVfUFJPUF9OQU1FID0gJ21keFR5cGUnO1xudmFyIERFRkFVTFRTID0ge1xuICBpbmxpbmVDb2RlOiAnY29kZScsXG4gIHdyYXBwZXI6IGZ1bmN0aW9uIHdyYXBwZXIoX3JlZikge1xuICAgIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW47XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCB7fSwgY2hpbGRyZW4pO1xuICB9XG59O1xudmFyIE1EWENyZWF0ZUVsZW1lbnQgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICB2YXIgcHJvcENvbXBvbmVudHMgPSBwcm9wcy5jb21wb25lbnRzLFxuICAgICAgbWR4VHlwZSA9IHByb3BzLm1keFR5cGUsXG4gICAgICBvcmlnaW5hbFR5cGUgPSBwcm9wcy5vcmlnaW5hbFR5cGUsXG4gICAgICBwYXJlbnROYW1lID0gcHJvcHMucGFyZW50TmFtZSxcbiAgICAgIGV0YyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY29tcG9uZW50c1wiLCBcIm1keFR5cGVcIiwgXCJvcmlnaW5hbFR5cGVcIiwgXCJwYXJlbnROYW1lXCJdKTtcblxuICB2YXIgY29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcENvbXBvbmVudHMpO1xuICB2YXIgdHlwZSA9IG1keFR5cGU7XG4gIHZhciBDb21wb25lbnQgPSBjb21wb25lbnRzW1wiXCIuY29uY2F0KHBhcmVudE5hbWUsIFwiLlwiKS5jb25jYXQodHlwZSldIHx8IGNvbXBvbmVudHNbdHlwZV0gfHwgREVGQVVMVFNbdHlwZV0gfHwgb3JpZ2luYWxUeXBlO1xuXG4gIGlmIChwcm9wQ29tcG9uZW50cykge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHtcbiAgICAgIHJlZjogcmVmXG4gICAgfSwgZXRjKSwge30sIHtcbiAgICAgIGNvbXBvbmVudHM6IHByb3BDb21wb25lbnRzXG4gICAgfSkpO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX29iamVjdFNwcmVhZDIoe1xuICAgIHJlZjogcmVmXG4gIH0sIGV0YykpO1xufSk7XG5NRFhDcmVhdGVFbGVtZW50LmRpc3BsYXlOYW1lID0gJ01EWENyZWF0ZUVsZW1lbnQnO1xuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCAodHlwZSwgcHJvcHMpIHtcbiAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gIHZhciBtZHhUeXBlID0gcHJvcHMgJiYgcHJvcHMubWR4VHlwZTtcblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IG1keFR5cGUpIHtcbiAgICB2YXIgYXJnc0xlbmd0aCA9IGFyZ3MubGVuZ3RoO1xuICAgIHZhciBjcmVhdGVFbGVtZW50QXJnQXJyYXkgPSBuZXcgQXJyYXkoYXJnc0xlbmd0aCk7XG4gICAgY3JlYXRlRWxlbWVudEFyZ0FycmF5WzBdID0gTURYQ3JlYXRlRWxlbWVudDtcbiAgICB2YXIgbmV3UHJvcHMgPSB7fTtcblxuICAgIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwocHJvcHMsIGtleSkpIHtcbiAgICAgICAgbmV3UHJvcHNba2V5XSA9IHByb3BzW2tleV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgbmV3UHJvcHMub3JpZ2luYWxUeXBlID0gdHlwZTtcbiAgICBuZXdQcm9wc1tUWVBFX1BST1BfTkFNRV0gPSB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgPyB0eXBlIDogbWR4VHlwZTtcbiAgICBjcmVhdGVFbGVtZW50QXJnQXJyYXlbMV0gPSBuZXdQcm9wcztcblxuICAgIGZvciAodmFyIGkgPSAyOyBpIDwgYXJnc0xlbmd0aDsgaSsrKSB7XG4gICAgICBjcmVhdGVFbGVtZW50QXJnQXJyYXlbaV0gPSBhcmdzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50LmFwcGx5KG51bGwsIGNyZWF0ZUVsZW1lbnRBcmdBcnJheSk7XG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseShudWxsLCBhcmdzKTtcbn1cblxuZXhwb3J0IHsgTURYQ29udGV4dCwgTURYUHJvdmlkZXIsIGNyZWF0ZUVsZW1lbnQgYXMgbWR4LCB1c2VNRFhDb21wb25lbnRzLCB3aXRoTURYQ29tcG9uZW50cyB9O1xuIiwiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9yZXN1bWVcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCJEOlxcXFxnaXRcXFxcb3BlbnNvdXJjZVxcXFxjZmNvZGVmYW5zLmdpdGh1Yi5pb1xcXFxzcmNcXFxccGFnZXNcXFxccmVzdW1lLm1keFwiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbE1vZHVsZSkge1xuXHRpZiAoIW9yaWdpbmFsTW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdHZhciBtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG9yaWdpbmFsTW9kdWxlKTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJleHBvcnRzXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWVcblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbWR4IH0gZnJvbSAnQG1keC1qcy9yZWFjdCdcblxuLyogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuLyogQGpzeCBtZHggKi9cblxuXG5cbmNvbnN0IGxheW91dFByb3BzID0ge1xuICBcbn07XG5jb25zdCBNRFhMYXlvdXQgPSBcIndyYXBwZXJcIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTURYQ29udGVudCh7XG4gIGNvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiA8TURYTGF5b3V0IHsuLi5sYXlvdXRQcm9wc30gey4uLnByb3BzfSBjb21wb25lbnRzPXtjb21wb25lbnRzfSBtZHhUeXBlPVwiTURYTGF5b3V0XCI+XG4gICAgPGhyPjwvaHI+XG4gICAgPHVsPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPjxhIHBhcmVudE5hbWU9XCJsaVwiIHsuLi57XG4gICAgICAgICAgXCJocmVmXCI6IFwiI29iamVjdGl2ZXNcIlxuICAgICAgICB9fT57YDEuIE9iamVjdGl2ZXNgfTwvYT48L2xpPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPjxhIHBhcmVudE5hbWU9XCJsaVwiIHsuLi57XG4gICAgICAgICAgXCJocmVmXCI6IFwiI2NvbnRhY3RcIlxuICAgICAgICB9fT57YDIuIENvbnRhY3RgfTwvYT48L2xpPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPjxhIHBhcmVudE5hbWU9XCJsaVwiIHsuLi57XG4gICAgICAgICAgXCJocmVmXCI6IFwiI2VkdWNhdGlvblwiXG4gICAgICAgIH19PntgMy4gRWR1Y2F0aW9uYH08L2E+PC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj48YSBwYXJlbnROYW1lPVwibGlcIiB7Li4ue1xuICAgICAgICAgIFwiaHJlZlwiOiBcIiNjZXJ0aWZpY2F0ZVwiXG4gICAgICAgIH19PntgNC4gQ2VydGlmaWNhdGVgfTwvYT48L2xpPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPjxhIHBhcmVudE5hbWU9XCJsaVwiIHsuLi57XG4gICAgICAgICAgXCJocmVmXCI6IFwiI2V4cGVyaWVuY2VcIlxuICAgICAgICB9fT57YDUuIEV4cGVyaWVuY2VgfTwvYT48L2xpPlxuICAgIDwvdWw+XG4gICAgPHA+Jm5ic3A7PC9wPlxuICAgIDxoMiBpZD1cIm9iamVjdGl2ZXNcIj4xLiBPYmplY3RpdmVzPC9oMj5cbiAgICBcbkhpLCBJIGFtIENoZW4gRmFuLiBcbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue319PntgSSBoYXZlIGJlZW4gd29ya2luZyBhcyBhIGphdmEgY29kZXIgYW5kIGVudGh1c2lhc3RpYyBhYm91dCBjb2RpbmcgKHNvIG11Y2ggdG8gbGVhcm4pLiAgXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YEkgYXNwaXJlIHRvIGZ1cnRoZXIgbXkgcHJvZ3JhbW1pbmcga25vd2xlZGdlLCBza2lsbHMgYW5kIHZpc2lvbiBvZiB0aGUgZXZvbHZpbmcgaW50ZXJuZXQuIGB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57fX0+e2BJIGZpcm1seSBiZWxpZXZlIHRoYXQgaW50ZXJuZXQgZHJpdmVuIHNlcnZpY2VzIHdpbGwgZmxvdXJpc2ggdGhyb3VnaCBpbm5vdmF0aW9ucyBhbmQgXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YGNvbm5lY3Rpb24gdG8gb3RoZXIgaW5kdXN0cmllcyB0aHVzIEkgd2lzaCB0byBwYXJ0aWNpcGF0ZSB0aGlzIGV4cGxvcmF0b3J5IHByb2Nlc3MuIElcbmJlbGlldmVcbkkgY291bGQgY29udHJpYnV0ZSB0byBidXNpbmVzcyBzdWNjZXNzIHdpdGggY29tYmluYXRpb24gb2YgbXkgZXhwZXJpZW5jZSwgY3JlYXRpdml0eSxcbnRlYW0gc3Bpcml0LCBtb3N0IGltcG9ydGFudGx5IGxlYXJuaW5nIGFiaWxpdHkuYH08L3A+XG4gICAgPHA+e2BUaGFua3MgYW5kIGJlc3QgcmVnYXJkcy4gYH08L3A+XG4gICAge1xuICAgICAgLyptb3JlKi9cbiAgICB9XG4gICAgPHA+Jm5ic3A7PC9wPlxuICAgIDxoMiBpZD1cImNvbnRhY3RcIj4yLiBDb250YWN0PC9oMj5cbiAgICA8dWw+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+e2BtYWlsOiBgfTxhIHBhcmVudE5hbWU9XCJsaVwiIHsuLi57XG4gICAgICAgICAgXCJocmVmXCI6IFwibWFpbHRvOmNoZW5mYW5zcG9zdEBob3RtYWlsLmNvbVwiXG4gICAgICAgIH19PntgY2hlbmZhbnNwb3N0QGhvdG1haWwuY29tYH08L2E+PC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj57YGxpbmtlZGluOiBgfTxhIHBhcmVudE5hbWU9XCJsaVwiIHsuLi57XG4gICAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2NmY29kZWZhbnMvXCJcbiAgICAgICAgfX0+e2BodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vY2Zjb2RlZmFucy9gfTwvYT48L2xpPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPntgZ2l0aHViOiBgfTxhIHBhcmVudE5hbWU9XCJsaVwiIHsuLi57XG4gICAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2NmY29kZWZhbnNcIlxuICAgICAgICB9fT57YGh0dHBzOi8vZ2l0aHViLmNvbS9jZmNvZGVmYW5zYH08L2E+PC9saT5cbiAgICA8L3VsPlxuICAgIDxwPiZuYnNwOzwvcD5cbiAgICA8aDIgaWQ9XCJlZHVjYXRpb25cIj4zLiBFZHVjYXRpb248L2gyPlxuICAgIDxwPntgQ29tcHV0ZXIgU2NpZW5jZSBBdCBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9lbi5udWlzdC5lZHUuY25cIixcbiAgICAgICAgXCJ0YXJnZXRcIjogXCJfYmxhbmtcIlxuICAgICAgfX0+e2BOYW5qaW5nIFVuaXZlcnNpdHkgb2YgSW5mb3JtYXRpb24gc2NpZW5jZSBhbmQgVGVjaG5vbG9neWB9PC9hPjwvcD5cbiAgICA8cD4mbmJzcDs8L3A+XG4gICAgPGgyIGlkPVwiY2VydGlmaWNhdGVcIj40LiBDZXJ0aWZpY2F0ZTwvaDI+XG4gICAgPHVsPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPntgT0NCQ0QgYH08YSBwYXJlbnROYW1lPVwibGlcIiB7Li4ue1xuICAgICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vZWR1Y2F0aW9uLm9yYWNsZS5jb20vYnVzaW5lc3MtY29tcG9uZW50LWRldmVsb3BtZW50LXdpdGgtZWpiLXRlY2hub2xvZ3ktamF2YS1lZS02L2NvdXJQXzQxOFwiLFxuICAgICAgICAgIFwidGFyZ2V0XCI6IFwiX2JsYW5rXCJcbiAgICAgICAgfX0+e2BPcmFjbGUgQ2VydGlmaWVkIEJ1c2luZXNzIENvbXBvbmVudCBEZXZlbG9wZXJgfTwvYT48L2xpPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPntgT0NKUCBgfTxhIHBhcmVudE5hbWU9XCJsaVwiIHsuLi57XG4gICAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9lZHVjYXRpb24ub3JhY2xlLmNvbS9qYXZhL2phdmEtc2UvcHJvZHVjdF8yNjdcIixcbiAgICAgICAgICBcInRhcmdldFwiOiBcIl9ibGFua1wiXG4gICAgICAgIH19PntgT3JhY2xlIENlcnRpZmllZCBKYXZhIFByb2dyYW1tZXJgfTwvYT48L2xpPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPntgVE9FSUMgOTU1IGB9PC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj57YElFTFRTIDYuNWB9PC9saT5cbiAgICA8L3VsPlxuICAgIDxwPiZuYnNwOzwvcD5cbiAgICA8aDIgaWQ9XCJleHBlcmllbmNlXCI+NS4gRXhwZXJpZW5jZTwvaDI+XG4gICAgPHA+Jm5ic3A7PC9wPlxuICAgIDxoND57YDUuMS4gSmF2YSBDb2RlcmB9PC9oND5cbiAgICA8cD57YEF0IGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL3RoZW5ldGNpcmNsZS5jb21cIixcbiAgICAgICAgXCJ0YXJnZXRcIjogXCJfYmxhbmtcIlxuICAgICAgfX0+e2BUaGUgTmV0Q2lyY2xlYH08L2E+e2Bcbkp1biAyMDEyIOKAkyBQcmVzZW50IC4gNiB5cnMgMTEgbW9zIGF0IFNoYW5naGFpIENoaW5hYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLnt9fT57YEFzIEphdmEgY29kZXIsIEkgc3RhcnRlZCB3aXRoIGRldmVsb3BtZW50IG9mIHNlcnZpY2VzIGJ1aWx0IHdpdGggamF2YVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2AsIHN1cHBvcnRpbmcgb3VyIHdlYnNpdGVzLiBJbWFnZS9WaWRlbyBwcm9jZXNzLCBNZXNzYWdlIHF1ZXVpbmcsIFBheW1lbnQsXG5TaW5nbGUgU2lnbiBPbiwgQmxvY2tjaGFpbihORU0pLi4uLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57fX0+e2BHcmFkdWFsbHksIEkgaGF2ZSBzdHVkaWVkIGFuZCBzaGlmdGVkIHRvIGRhdGEgYXJlYSBhcyBvdXIgdGVhbSBhaW1zIHRvIFxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2BiZWNvbWUgZGF0YSBkcml2ZW4uIEkgZmFtaWxpYXJpemUgdG9vbHMvZnJhbWV3b3JrIGZvciBkYXRhIG1pbmluZywgd2hpY2ggYnJvdWdodFxubWUgdG8gbmV3IGhvcml6b24uYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLnt9fT57YEFzIHRlY2hub2xvZ3kgJiB0b29scyBhbHdheXMgZXZvbHZlIGFuZCBpbXByb3ZlIHRvIGJlIG1vcmUgdXNlci1mcmllbmRseSwgXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YEkgc3RpbGwgZmVlbCBxdWl0ZSBkaXN0YW50IHRvIHRoZSBtYXRoL3N0YXRpc3RpYyBwcmluY2lwbGVzIGJlaGluZCBkYXRhIHNjaWVuY2UuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLnt9fT57YEFzIHdlIGdlbmVyYXRlIG1vcmUgYW5kIG1vcmUgZGF0YSBpbiBvdXIgbGl2ZXMsIGRhdGEgYWxzbyBzaGFwZXMgb3VyIG1pbmRzLlxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2BJIHdpc2ggdG8gZXhwbG9yZSBtb3JlIGluIHRoaXMgY29tcGxleGl0eS5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue319PntgSW4gcHJhY3RpY2UsIGFwYXJ0IGZyb20gZGV2ZWxvcG1lbnQgZm9yIGphdmEgc3lzdGVtcywgSSBoYXZlIGFsc28gYmVlbiB3b3JraW5nIFxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2BhcyBkYXRhIGVuZ2luZWVyLCBzZXR0aW5nIHVwIGluZnJhc3RydWN0dXJlcyBsaWtlIEhhZG9vcCBjbHVzdGVyLCBIaXZlLCBLYWZrYS5cblByb2Nlc3MgY2xlYW4gZGF0YSBmb3IgZGF0YSBzY2llbnRpc3RzLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57fX0+e2BPdmVyYWxsLCBJIGdyb3cgd2l0aCBzaGFyaW5nIGtub3dsZWFnZXMgYmV0d2VlbiBhbWF6aW5nIGNvbGxlYWd1ZXMuXG5gfTwvY29kZT48L3ByZT5cbiAgICA8aDU+e2BQcm9qZWN0c2B9PC9oNT5cbiAgICA8aDY+e2A1LjEuMSBDb21tdW5pdHktVG9rZW4gKEZlYiAyMDE4IC0gUHJlc2VudCkgYH08YSBwYXJlbnROYW1lPVwiaDZcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL25lbS5pby9cIixcbiAgICAgICAgXCJ0YXJnZXRcIjogXCJfYmxhbmtcIlxuICAgICAgfX0+e2BORU1gfTwvYT57YCAvIEtvdGxpbiAvIFNwcmluZy1Cb290IC8gTW9uZ29kYmB9PC9oNj5cbiAgICA8cD57YFRoZSBpZGVhIGlzIHRvIGltcGxlbWVudCBzb21lIHJld2FyZCBtZWNoYW5pc20gdG8gcmV3YXJkIGFjdGl2ZSB1c2VycyB3aG8gY3JlYXRlIGdyZWF0XG5jb250ZW50LCBjb250cmlidXRlIGluIG91ciBvbmxpbmUgY29tbXVuaXR5LiBUaGUgdHJpY2sgaXMgcG9zc2libGUgbW9uZXRhcnkgaW5jZW50aXZlXG5hc3NvY2lhdGVkIHdpdGggY3J5cHRvIGN1cnJlbmN5IGZvciB1c2VycywgYXMgd2VsbCBhcyBvdGhlciBiZW5lZml0IG9mIGJsb2NrIGNoYWluIHRlY2gsXG5zdWNoIGFzIHRyYW5zcGFyZW5jeSwgaW1tdXRhYmlsaXR5LCBjb252ZW5pZW50IGFzIHdlbGwuYH08L3A+XG4gICAgPHA+e2BJbiBkZXRhaWwsIE5FTSBmZWF0dXJlczpgfTwvcD5cbiAgICA8b2w+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cIm9sXCI+e2Bwcm9vZiBvZiBpbXBvcnRhbmNlLGB9PC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwib2xcIj57YG11bHRpLXNpZ24gdHJhbnNhY3Rpb25gfTwvbGk+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cIm9sXCI+e2Blc2Nyb3dgfTwvbGk+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cIm9sXCI+e2BhdG9taWMgc3dhcChleGNoYW5nZSkgYH08L2xpPlxuICAgIDwvb2w+XG4gICAgPHA+e2BIb3dldmVyIHRoZSB0cmFuc2FjdGlvbiBzcGVlZCBpcyBhbHdheXMgY3JpdGljYWwgaW1wZWRpbWVudCB0byBibG9jayBjaGFpbiBhcHBsaWNhdGlvbixcbmNhdXNlZCBieSBuYXR1cmUgb2YgYmxvY2sgY2hhaW4gdGVjaC4gVG8gYWRkcmVzcywgd2UgYWRvcHQgcHJpdmF0ZSBjaGFpbiwgc2ltaWxhciB0b1xuQml0Y29pbidzIGxpZ2h0bmluZyBuZXR3b3JrLmB9PC9wPlxuICAgIDxwPiZuYnNwOzwvcD5cbiAgICA8aDY+e2A1LjEuMiBEYXRhLVNlcnZpY2UtRVRMIChNYXkgMjAxOSDigJMgUHJlc2VudCkgYH08YSBwYXJlbnROYW1lPVwiaDZcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL2dpdGh1Yi5jb20vYWxpYmFiYS9jYW5hbFwiLFxuICAgICAgICBcInRhcmdldFwiOiBcIl9ibGFua1wiXG4gICAgICB9fT57YENhbmFsYH08L2E+e2AgLyBIaXZlIC8gYH08YSBwYXJlbnROYW1lPVwiaDZcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL2dwZGIuZG9jcy5waXZvdGFsLmlvLzYtMC9tYWluL2luZGV4Lmh0bWxcIlxuICAgICAgfX0+e2BHcmVlbiBQbHVtYH08L2E+e2AgLyBgfTxhIHBhcmVudE5hbWU9XCJoNlwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vc3VwZXJzZXQuaW5jdWJhdG9yLmFwYWNoZS5vcmcvXCJcbiAgICAgIH19PntgU3VwZXJzZXRgfTwvYT48L2g2PlxuICAgIDxwPntgRm9yIGRhdGEgY29sbGVjdGVkIGZyb20gS2Fma2EsIEkgZGV2ZWxvcGVkIFVERiBpbiBIaXZlIHdoaWNoIGNvdWxkIHB1bGwgZGF0YSBmcm9tIGthZmthXG53aXRoIGluIGNlcnRhaW4gdGltZSB3aW5kb3cgZGVmaW5lZCBhcyBwYXJhbWV0ZXJzLiBUaGlzIHByaW1hcmlseSBjb2xsZWN0cyBkYXRhIGdlbmVyYXRlZFxuYnkgdXNlcnMnIGFjdGlvbnMsIGFzIGZhY3QgdGFibGUuYH08L3A+XG4gICAgPHA+e2BCZXNpZGVzIHRoaXMsIENhbmFsIGNhbiBpbXBlcnNvbmF0ZSBhIG15c3FsIHNsYXZlIHRvIGNvbGxlY3QgZGF0YSBjaGFuZ2VzIG9uIGEgbXlzcWwgaW5zdGFuY2UuXG5EaW1lbnNvbiB0YWJsZXMgY2hhbmdlcyBhcmUgY29sbGVjdGVkIGFuZCBzdG9yZWQgYnkgZGF0ZS5gfTwvcD5cbiAgICA8cD57YFJhdyBkYXRhIChvZHMpIGNvbGxlY3RlZCBhbmQgbG9hZCBpbnRvIEhpdmUgdGFibGVzIHdoZXJlIEVUTCBwcm9jZXNzZXMgYXJlIGltcGxlbWVudGVkIGJ5XG5IaXZlIFNRTCwgd2hpY2ggY291bGQgdXRpbGl6ZSBzb21lIFVERiBmdW5jdGlvbnMgSSBkZXZlbG9wZWQsIHRvIG9wZXJhdGUgZGF0YSB2aWEgaHR0cFxuc2VydmljZXMsIFJlZGlzLCBab29rZWVwZXIuIEhpdmUgU3RvcmFnZSBIYW5kbGVyIGlzIGFsc28gdmVyeSB1c2VmdWwgZm9yIEhpdmUgdG8gYWNjZXNzXG5kYXRhIGluIHZhcmlvdXMgSkRCQy1jb21wYXRpYmxlIGRhdGEgc291cmNlLmB9PC9wPlxuICAgIDxwPntgRGF0YSBpbiBIaXZlIGlzIGxvYWRlZCBpbnRvIEdyZWVuUGx1bSwgd2hpY2ggaXMgbXVsdGlwbGUgUG9zdGdyZXNxbCBpbnN0YW5jZXMgb3JnYW5pemVkXG5pbiBjbHVzdGVyLCBhYmxlIHRvIHN1cHBvcnQgYWRob2MgcXVlcmllcy4gYH08L3A+XG4gICAgPHA+e2BMYXN0IHBpZWNlIGlzIFN1cGVyc2V0LCBhIEJJIHRvb2wgd2hpY2ggcmVuZGVycyBkYXRhIHdpdGggZG96ZW5zIG9mIGRpZmZlcmVudCBjaGFydHMuYH08L3A+XG4gICAgPHA+Jm5ic3A7PC9wPlxuICAgIDxoNj57YDUuMS4zIERhdGEtU2VydmljZS1zZXR1cCAoSnVsIDIwMTgg4oCTIFByZXNlbnQpIEhhZG9vcCAvIFpvb2tlZXBlciAvIEthZmthIC8gSGl2ZSAvIEdyZWVuIFBsdW1gfTwvaDY+XG4gICAgPHA+e2BJbnN0YWxsLCBkZXBsb3kgYW5kIGNvbmZpZ3VyZSBIYWRvb3AgY2x1c3Rlciwgd2l0aCBIaWdoIEF2YWlsYWJpbGl0eSBmZWF0dXJlLCBvcHRpbWl6ZWRcbnNldHRpbmdzLmB9PC9wPlxuICAgIDxwPntgSW5zdGFsbCBhbmQgaW50ZWdyYXRlIGNvbXBvbmVudHMgZm9yIG91ciBkYXRhIHNlcnZpY2VzLCBpbmNsdWRpbmc6IEthZmthIGZvciBldmVudCBidXM7XG5IaXZlIGZvciBFVEwgZW5naW5lZXI7IEdyZWVuIFBsdW0gZm9yIHN0b3JhZ2UgZm9yIGFkaG9jIHF1ZXJpZXMvY2hhcnRzOyBab29rZWVwZXIgdG9cbnN1cHBvcnQgb3RoZXJzLmB9PC9wPlxuICAgIDxwPiZuYnNwOzwvcD5cbiAgICA8aDY+e2A1LjEuNCBTaW5nbGUtU2lnbi1PbiAoRmViIDIwMTgg4oCTIEp1bCAyMDE4KSBgfTxhIHBhcmVudE5hbWU9XCJoNlwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vb2x0dS5hcGFjaGUub3JnL1wiLFxuICAgICAgICBcInRhcmdldFwiOiBcIl9ibGFua1wiXG4gICAgICB9fT57YEFwYWNoZSBPbHR1YH08L2E+e2AgLyBNb25nb2RiIC8gU2NhbGEgLyBMREFQYH08L2g2PlxuICAgIDxwPntgQSBzaW5nbGUgc2lnbiBvbiBmZWF0dXJlIGJ1aWx0IHdpdGggQXBhY2hlIE9sdHUgTGlicmFyeSBhbmQgTERBUCB1c2luZyBzY2FsYS9qZXJzZXkvd2Vic2VydmljZSxcbml0IGd1YXJkcyBvdXIgaW50ZXJuYWwgc2VydmljZXMgZm9yIHVzZXJzIGZyb20gZGlmZmVyZW50IGRlcGFydG1lbnRzLmB9PC9wPlxuICAgIDxwPiZuYnNwOzwvcD5cbiAgICA8aDY+e2A1LjEuNSBEYXRhLW1pc2MtdG9vbHMgKEp1bCAyMDE3IOKAkyBGZWIgMjAxOCkgSGl2ZSAvIEthZmthIC8gUmVkaXMgLyBNeXNxbGB9PC9oNj5cbiAgICA8cD57YFRoaXMgcHJvamVjdCBob3N0cyBzZXZlcmFsIHRvb2xzIHRvIGhlbHAgd2l0aCBkZXZlbG9wbWVudCB1c2luZyBIaXZlLCBTcGFyay4gUGxlYXNlIGNoZWNrIGl0XG5vdXQgb24gZ2l0aHViYH08L3A+XG4gICAgPHA+e2BUbyBzdHVkeSBhbmQgYXBwbHkgaG93IHRvIGxldmVyYWdlIG5ldyBmZWF0dXJlcyBvZiBIaXZlLCBTcGFyaywgSGFkb29wIGZvciBkYXRhIHByb2Nlc3MsIElcbmNyZWF0ZWQgYW5kIGFtIGRldmVsb3Bpbmcgc29tZSBmdW5jdGlvbnMgZm9yIEhpdmUgYW5kIHNwYXJrLiBJdCBzb3VuZHMgbGlrZSByZWludmVudGluZyB3aGVlbCxcbmJ1dCBJIGJlbGlldmUgaXQgaGFzIGNlcnRhaW4gdmFsdWUgYXM6YH08L3A+XG4gICAgPG9sPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJvbFwiPntgaXQgdXRpbGl6ZXMgdGhlIGR5bmFtaWMgY2hhcmFjdGVyaXN0aWMgb2Ygc2NhbGEgbGFuZ3VhZ2UsIHNvIHRoYXQgaXQgcmVjb2duaXplcyB0aGVcbm1vZGlmaWNhdGlvbiBvZiBzY2FsYSBzY3JpcHQgZmlsZXMgb24gSERGUywgdGFrZXMgZWZmZWN0IGltbWVkaWF0ZWx5LCBzYXZpbmcgdGhlIGN1bWJlcnNvbWVcbnN0ZXBzIG9mIGNvbXBpbGUsIHBhY2thZ2UsIGRlcGxveW1lbnQsIHJlc3RhcnQgc3BhcmsgcHJvY2Vzcy4gVGhlb3JldGljYWxseSB0aGlzIGNhbiBhcHBseVxub3RoZXIgSlNSMjMzIGNvbXBhdGlibGUgbGFuZ3VhZ2VzLmB9PC9saT5cbiAgICA8L29sPlxuICAgIDxwPntgMS4xIEkgaGF2ZSBmaW5pc2hlZCB0aGUgZmVhdHVyZSB0byBzdXBwb3J0IHB5dGhvbiBhcyB3ZWxsLCBweXRob24gY29kZSBjYW4gYmUgc2F2ZWQgYW5kIGVkaXRlZFxud2l0aCBIVUUsIHRoZW4gaXQgd2lsbCB0YWtlIGVmZmVjdCBpbW1lZGlhdGVseSB0b29gfTwvcD5cbiAgICA8b2wgey4uLntcbiAgICAgIFwic3RhcnRcIjogMlxuICAgIH19PlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJvbFwiPlxuICAgICAgICA8cCBwYXJlbnROYW1lPVwibGlcIj57YEl0IGNhbiB1c2UganVzdCBISVZFIHNxbCB0byBsb2FkL3NlbmQgZGF0YSB2aWEgSFRUUCwga2Fma2EsIFJlZGlzIHdpdGggZXh0ZW5kZWQgSElWRVxuZnVuY3Rpb24uIE1vc3Qgb2YgYSBFVEwgcHJvY2VzcyBjYW4gYmUgaW1wbGVtZW50ZWQgYnkgb25seSBISVZFIHNxbC5gfTwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cIm9sXCI+XG4gICAgICAgIDxwIHBhcmVudE5hbWU9XCJsaVwiPntgU29tZSBzdXBwb3J0aXZlIGZlYXR1cmVzIGFyZSBhbHNvIHByb3ZpZGVkLCBzdWNoIHNpbXBsZSB0YXNrIHNjaGVkdWxlciwgdGFzayBleGVjdXRpb25cbnRyYWNraW5nLmB9PC9wPlxuICAgICAgPC9saT5cbiAgICA8L29sPlxuICAgIDxwPntgRmVlZGJhY2sgb3IgY29udHJpYnV0aW9uIGlzIGhpZ2hseSBhcHByZWNpYXRlZC5cbmB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdGhlbmV0Y2lyY2xlL2RhdGEtbWlzYy10b29sc1wiLFxuICAgICAgICBcInRhcmdldFwiOiBcIl9ibGFua1wiXG4gICAgICB9fT57YFNvdXJjZSBvbiBnaXRodWJgfTwvYT48L3A+XG4gICAgPHA+Jm5ic3A7PC9wPlxuICAgIDxoNj57YDUuMS41IFZpZGVvIENvbnZlcnNpb24gU2VydmljZSAoSmFuIDIwMTYgLSBQcmVzZW50KSBgfTxhIHBhcmVudE5hbWU9XCJoNlwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vZmZtcGVnLm9yZy9cIixcbiAgICAgICAgXCJ0YXJnZXRcIjogXCJfYmxhbmtcIlxuICAgICAgfX0+e2BGRm1wZWdgfTwvYT57YCAvIEtvdGxpbiAvIGB9PGEgcGFyZW50TmFtZT1cImg2XCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiaHR0cDovL3JlZDUub3JnL1wiXG4gICAgICB9fT57YFJlZDVgfTwvYT48L2g2PlxuICAgIDxwPntgQSBzZXJ2aWNlIGNhbiBjb252ZXJ0IHZpZGVvcyB1cGxvYWRlZCBieSB1c2VycyB0byBkaWZmZXJlbnQgZm9ybWF0cywgYWxzbyBhZGQgd2F0ZXJtYXJrc1xuYW5kIGV4dHJhY3QgdGh1bWJuYWlscy4gSSBkZXZlbG9wZWQgdGhpcyBiYXNlZCBvbiBSZWQ1IFNlcnZlciB3aXRoIFNwcmluZywgU3ByaW5nLU1WQyBhbmRcbmtvdGxpbi5gfTwvcD5cbiAgICA8cD57YEJlc2lkZXMgdGhlc2UsIHdlIGFyZSBkZXZlbG9waW5nIHZpZGVvIGxpdmUtc3RyZWFtaW5nIGZlYXR1cmUgdG8gbWVldCB0aGUgbmVlZHMgb2ZcbndhdGNoaW5nIHZpZGVvIHN0cmVhbSBvbiBicm93c2VyIG9mIG1vYmlsZSBhcyB3ZSBsZWFybiB0aGF0IG1ham9yaXR5IG9mIGFjY2Vzc2VzXG5hcmUgZnJvbSBtb2JpbGUgcGhvbmVzLmB9PC9wPlxuICAgIDxwPiZuYnNwOzwvcD5cbiAgICA8aDY+e2A1LjEuNiBJUFMgKEltYWdlIFByb2Nlc3MgU2VydmljZSkgKEphbiAyMDEzIC0gSnVsIDIwMTgpIGB9PGEgcGFyZW50TmFtZT1cImg2XCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9vcGVuY3Yub3JnL1wiLFxuICAgICAgICBcInRhcmdldFwiOiBcIl9ibGFua1wiXG4gICAgICB9fT57YE9wZW5DVmB9PC9hPntgIC8gS290bGluIC8gU3ByaW5nLWJvb3RgfTwvaDY+XG4gICAgPHA+e2BUaGUgc2VydmljZSBwcm9jZXNzZXMgaW1hZ2VzIHVwbG9hZGVkIGJ5IHVzZXJzLCB3aXRoIGZlYXR1cmVzIG9mIGNyb3AsIHNjYWxlLCBvdmVybGF5XG50ZXh0IGFuZCBvdGhlciBpbWFnZXMsIHJvdGF0ZS4gYH08L3A+XG4gICAgPHA+e2BUaGUgZGVzaWduIGJvcnJvd2VkIHRoZSBpZGVhIG9mIENTUywgd2UgZGVmaW5lIHNvbWUgc2NoZW1hcyBpbiBqc29uIGxpa2UgY3NzIHRvIGRlc2NyaWJlXG5ob3cgdGhlIGltYWdlcyBzaG91bGQgYmUgY3JvcCwgc2NhbGUsIC4uLmV0Yy4gTGlrZSBDU1MsIHdlIGFsc28gaGFkIHZhcmlhYmxlcyBpbiB0aGVcbnNjaGVtYXMgc28gaW1hZ2UgcHJvY2Vzc2luZyBjb3VsZCBiZSBkeW5hbWljIGFjY29yZGluZyB0byByZXF1ZXN0cy5gfTwvcD5cbiAgICA8cD57YFRoZSBkZXZlbG9wbWVudCBmb3IgdGhpcyBpcyBvbmdvaW5nIGZvciB5ZWFycywgYXMgd2UgYWx3YXlzIGZvdW5kIHNvbWUgbmV3IGNoYWxsZW5nZXMuXG5GaXJzdGx5LCB3aXRoIHVwZ3JhZGUgb2YgbW9iaWxlIHBob25lcyBvZiB1c2VycyBsZWQgdG8gaW1hZ2VzIHNpZ25pZmljYW50bHkgaW5jcmVhc2luZyBpblxuYm90aCBudW1iZXIgYW5kIHNpemUgKDMwMDB4MjAwMC1pc2gpIG92ZXIganVzdCBjb3VwbGUgb2YgeWVhcnMuIFRoZSBlYXJseSB2ZXJzaW9uIG9mIElQU1xuZmFpbGVkIHRvIHByb2Nlc3MgaW1hZ2VzIGZhc3QuIGB9PC9wPlxuICAgIDxwPntgQWZ0ZXIgc3R1ZHlpbmcgbG9ncyBhbmQgdGVzdHMsIEkgZmlyc3RseSBtYWRlIHByb2Nlc3NpbmcgZXhlY3V0ZWQgaW4gcGFyYWxsZWwgdGhyZWFkcyB0b1xubWF4aW1pemUgdXNlIG9mIG11bHRpLWNvcmVzOyBjaGVja2VkIHRoZSBtZW1vcnkgZm9vdHByaW50IHRvIHJlZHVjZSB1bm5lY2Vzc2FyeSBjb3B5XG4oaW1hZ2UgZGF0YSBpcyBtYXNzaXZlIGFmdGVyIHVuY29tcHJlc3NpbmcpOyByZXBsYWNlZCBQcm9jZXNzaW5nIExpYnJhcnkgKGJhc2VkIG9uIEphdmEpXG53aXRoIE9wZW5DViAoYmFzZWQgb24gQysrKTtgfTwvcD5cbiAgICA8cD57YEkgYWxzbyB0cmllZCB0byBleHRlbmQgaXQgdG8gc3VwcG9ydCBHSUYsIGZhY2UgcmVjb2duaXRpb24sIHNpbWlsYXIgaW1hZ2Ugc2VhcmNoLCBldGMuYH08L3A+XG4gICAgPHA+Jm5ic3A7PC9wPlxuICAgIDxoNj57YDUuMS43IEpvaW50IChKdWwgMjAxNCDigJMgSnVsIDIwMTUpIGB9PGEgcGFyZW50TmFtZT1cImg2XCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly93d3cub3JhY2xlLmNvbS9qYXZhL3RlY2hub2xvZ2llcy9qYXZhLWVlLWdsYW5jZS5odG1sXCIsXG4gICAgICAgIFwidGFyZ2V0XCI6IFwiX2JsYW5rXCJcbiAgICAgIH19PntgSmF2YUVFYH08L2E+e2AgLyBgfTxhIHBhcmVudE5hbWU9XCJoNlwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vc3dhZ2dlci5pby9cIlxuICAgICAgfX0+e2BTd2FnZ2VyYH08L2E+PC9oNj5cbiAgICA8cD57YFRoaXMgaXMgYWN0dWFsbHkgYSBvcGVuLXNvdXJjZSBhbmQgc3R1ZHkgcHJvamVjdC4gSSBub3RpY2VkIHRoZSBncmVhdCBkZXZlbG9wbWVudCBvZlxuZnJvbnRlbmQgdGVjaG5vbG9neSBhbmQgZ2FwIGJldHdlZW4gaXQgd2l0aCBiYWNrZW5kIHRlY2hub2xvZ3kuYH08L3A+XG4gICAgPHA+e2BCZWZvcmUsIEJhY2tlbmQgdGVjaCBzdGFjayAoSlNGLCBQSFAuLi4pIGNvdmVycyB0aGUgcmVuZGVyaW5nIG9mIEhUTUwgd2l0aCB0ZW1wbGF0ZVxudGVjaG5vbG9neS4gVGhlc2UgYmVjYW1lIHF1aWNrbHkgb3V0bW9kZWQgYXMgd2VicGFnZSBkZXZlbG9wbWVudCB3ZXJlIHRha2VuIG92ZXIgYnlcbkphdmFzY3JpcHQgbGlicmFyaWVzLmB9PC9wPlxuICAgIDxwPntgSG93ZXZlciwgYmFja2VuZCB0dXJucyB0byBzZXJ2aWNlIG9yaWVudGVkLiBSZXN0ZnVsIHNlcnZpY2VzIHdlcmUgZGVzY3JpYmVkIGJ5IFdTREwsXG53aGljaCB3YXMgbm90IHJlY29nbml6ZWQgYnkgamF2YXNjcmlwdChzaW5jZSBqcyBpcyBkeW5hbWljLCB3ZWFrLXR5cGVkIGxhbmd1YWdlKS5gfTwvcD5cbiAgICA8cD57YEZpbmFsbHksIFR5cGVzY3JpcHQgYWxsZWl2YXRlZCB0aGUgcHJvYmxlbSBidXQgbm90IHVsdGltYXRlIHNvbHV0aW9uLiBJIHRyaWVkIHRvIGJ1aWxkXG5zb21lIGxpYnJhcnkgdG8gcmVhZCwgcGFyc2UgdGhlIGFubm90YXRpb25zIG9uIFJlc3RmdWwgc2VydmljZSBBUEksIGFuZCBhdXRvbWF0aWNhbGx5XG5nZW5lcmF0ZSB3aG9sZSBidW5jaCBvZiB0eXBlc2NyaXB0IGRlZmluaXRpb25zIGZvciBzZXJ2aWNlIGludm9jYXRpb24uYH08L3A+XG4gICAgPHA+e2BOb3cgd2Uga25vdyB0aGF0IFN3YWdnZXIgZG9lcyB0aGlzIHdheSBiZXR0ZXIuIEkgc3RpbGwgbGVhcm5lZCBhIGxvdCBmcm9tIHRoaXMgdXNlbGVzc1xucHJvamVjdC5gfTwvcD5cbiAgICA8cD4mbmJzcDs8L3A+XG4gICAgPGg2PntgNS4xLjcgTVF1ZXVlIERpc3BhdGNoZXIgKE1hciAyMDE0IOKAkyAyMDE2KSBgfTxhIHBhcmVudE5hbWU9XCJoNlwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vd3d3LnJhYmJpdG1xLmNvbVwiLFxuICAgICAgICBcInRhcmdldFwiOiBcIl9ibGFua1wiXG4gICAgICB9fT57YFJhYmJpdCBNUXVldWVgfTwvYT57YCAvIEphdmEgOCAvIFJlYWN0YH08L2g2PlxuICAgIDxwPntgVGhlIHN5c3RlbSBjb25zdGFudGx5IGNvbnN1bWVzIG1lc3NhZ2VzIGZyb20gUmFiYml0IE1RdWV1ZSBhY2NvcmRpbmcgdG8gcHJlZGVmaW5lZCBydWxlcyxcbnJlbGF5cyBtZXNzYWdlcyBvdmVyIGh0dHAgcHJvdG9jb2wgdG8gY29ycmVzcG9uZGluZyBQSFAgbW9kdWxlcy4gSXQgYWxzbyBpbXBsZW1lbnRzIHJldHJ5XG5tZWNoYW5pc20gYW5kIGZhaWxlZCBtZXNzYWdlcyBzdG9yYWdlIGZvciBtYWludGVuYW5jZS5gfTwvcD5cbiAgICA8cD57YFRoZSBkZXNpZ24gaXMgYSBzZXJpZXMgb2YgcHJvZHVjZXItY29uc3VtZXIgcGF0dGVybnMgY29tYmluZWQgd2l0aCBzdGF0ZSB0cmFuc2l0LCB3aXRoXG5lYWNoIHN0ZXAgcGVyZm9ybXMgZGlmZmVyZW50IHRhc2tzOiBgfTwvcD5cbiAgICA8b2w+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cIm9sXCI+e2BwdWxsIGZyb20gcXVldWU7IGB9PC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwib2xcIj57YHBvc3QgdG8gaHR0cCBzZXJ2aWNlO2B9PC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwib2xcIj57YGNoZWNrIHJlc3VsdCB0byBkZWNpZGUgd2hldGhlciB0bzpcbjMuMSByZXBseSBxdWV1ZSB3aXRoIGFjaztcbjMuMiBzdG9yZSBmYWlsZWQgbWVzc2FnZSwgbWFyayB0aGUgcmV0cnkgY291bnQ7YH08L2xpPlxuICAgIDwvb2w+XG4gICAgPHA+e2BUaGUgY2hhbGxlbmdlIGlzIGJ1aWxkaW5nIGEgZmFzdCBhc3NlbWJseSBsaW5lIHdpdGggYXN5bmMgcXVldWVzLCBhbmQgdHdlYWsgcGVyZm9ybWFuY2Vcbm9mIEhUVFAgbGlicmFyeS4gYH08L3A+XG4gICAgPHA+Jm5ic3A7PC9wPlxuICAgIDxoNT57YDUuMS44IFNlYXJjaCBTZXJ2aWNlIChPY3QgMjAxOSAtIHByZXNlbnQpYH08L2g1PlxuICAgIDxwPntgU29sciBiYXNlZCBmdWxsIHRleHQgc2VhcmNoIHNlcnZpY2UsIGRlc2lnbmVkIGFuZCBkZXZlbG9wZWQgdG8gc3VwcG9ydCB3ZWJzaXRlcyxcbkVuZCB1c2VycyBzZWFyY2ggcHJvZmlsZXMsIGxvY2F0aW9ucywgZmVlZHMgdmlhIHNlYXJjaCBzZXJ2aWNlLFxub24gdGhlIG90aGVyIGhhbmRsZSwgRGF0YSBzZXJ2aWNlIGNvbGxlY3RzIHVzZXJzJyBzZWFyY2gga2V5d29yZCBhbmQgZm9sbG93aW5nIGJyb3dzZVxuYWN0aW9ucywgdG8gZmVlZCByZWxhdGVkIGRhdGEgYW5hbHlzaXMuYH08L3A+XG4gICAgPHA+Jm5ic3A7PC9wPlxuICAgIDxwPiZuYnNwOzwvcD5cbiAgICA8aDQ+e2A1LjIgU2VuaW9yIEphdmEgRW5naW5lZXJgfTwvaDQ+XG4gICAgPHA+e2BBdCBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly93d3cuZGJzY2hlbmtlci5jb20vZ2xvYmFsXCIsXG4gICAgICAgIFwidGFyZ2V0XCI6IFwiX2JsYW5rXCJcbiAgICAgIH19PntgREIgU2NoZW5rZXIgU1NDYH08L2E+e2BcbkF1ZyAyMDEwIOKAkyBKdWwgMjAxMiAuIDIgeXJzIGF0IE5hbmppbmcsIEppYW5nc3UsIENoaW5hYH08L3A+XG4gICAgPHA+e2BTb2Z0d2FyZSBFbnZpcm9ubWVudDpcbldlYnNwaGVyZSwgU2VhbSwgSlNGLCBPcmFjbGUsIEVKQiwgSlBBLCBMREFQXG5EZXZlbG9wbWVudCBUb29sczpcbkVjbGlwc2UgKyBKQm9zc1Rvb2xzYH08L3A+XG4gICAgPHA+e2BQcm9qZWN0IERlc2NyaXB0aW9uOmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57fX0+e2BUaGUgU01QTkcgc3lzdGVtIGlzIGxldmVyYWdlZCBieSBtYW55IGRpZmZlcmVudCBhc3BlY3RzIG9mIEpFRSB0ZWNobm9sb2dpZXMsIFxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2B3aG9sZSBKRUUgc3RhY2sgaXMgYXBwbGllZCBpbiB0aGUgc3lzdGVtLCB0byBwcmVzZW50IHVzZXJzIGEgbW9kZXJuaXplZCBhbmQgY2xlYW5cbmFwcGxpY2F0aW9uLiBJbiBvcmRlciB0byBnYXRoZXIgYW5kIGRpc3BhdGNoIGxvZ2lzdGljIHRyYW5zYWN0aW9uIGluZm9ybWF0aW9uIGZyb21cbm1hbnkgYnJhbmNoZXMgb3ZlciB0aGUgd29ybGQsIHRoZSBTTVBORyBzeXN0ZW0gaXMgYWxzbyBiYWNrZWQgYnkgbWFueSBvdGhlciBtZXNzYWdlXG5zb3VyY2VzLiBgfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue319PntgSSBoYWQgYmVlbiB3b3JraW5nIG9uIHRoaXMgcHJvamVjdCBpbiBHZXJtYW55IHdpdGggR2VybWFuIGNvbGxlYWd1ZXMgZm9yIHNpeCB3ZWVrcy5cbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntgRnJvbSBjbGllbnRzLCBuZXcgZmVhdHVyZXMgd2VyZSBkZXNpZ25lZCBmb3IgaGFuZGxpbmcgYm9va2luZyBhbmQgdHJhY2tpbmcgb3BlcmF0aW9ucy5cbkl0IG91Z2h0IHRvIHJlcGxhY2UgdGhlIGxlZ2FjeSBTTVBORyBzeXN0ZW0gYW5kIHByZXNlbnQgYnVzaW5lc3MgbG9naWMgaW4gbW9yZSBtb2Rlcm5cbmFuZCB1c2VyLWZyaWVuZGx5IHN0eWxlLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57fX0+e2BBcyBhIG1lbWJlciBvZiB0aGUgZ3JvdXAsIEkgaGFkIG1hbmFnZWQgdG8gY29tbXVuaWNhdGUgYW5kIGNvbGxhYm9yYXRlIHdpdGhcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntgY29sbGVhZ3VlcyBmcm9tIGRpZmZlcmVudCBjb3VudHJpZXMgYW5kIHdpdGggZGlmZmVyZW50IGJhY2tncm91bmRzLiBGcm9tIG15IGV4cGVyaWVuY2UsXG5JIGxlYXJuZWQgdGhhdCBzb21lIHRoaW5ncyBhcmUgYmV5b25kIGxhbmd1YWdlIGJhcnJpZXIsIG1haW5seSBjYXVzZWQgYnkgZGlmZmVyZW50XG5taW5kc2V0IGFuZCBjdWx0dXJlIG9yIHJvbGVzLCB3aGlsZSBzb21lIGNvbW11bmljYXRpb24gc2tpbGxzIHdvdWxkIGJlIHZlcnkgZWZmZWN0aXZlXG5zb2x1dGlvbiB0byBicmVhayBkb3duIG1pc3VuZGVyc3RhbmRpbmcgYW5kIGRlbGl2ZXIgaWRlYXMuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLnt9fT57YFRoaXMgam9iIHRhdWdodCBtZSBtdWNoIGFib3V0IHRob3NlIGFkdmFuY2VkIHRvb2xzIHVzZWQgaW4gZW50ZXJwcmlzZSBkZXZlbG9wbWVudC4gXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YHNvbmFyIGZvciBjb2RlIGNoZWNraW5nLCBKZW5raW5zIGZvciBjb250aW51b3VzIGludGVncmF0aW9uLCBGaXNoZXllcyBmb3IgcmVmYWNvdG9yeSxcbmFsbCB0aG9zZSBhcmUgdmVyeSB1c2VmdWwgdG9vbHMgZm9yIGJpZyBzY2FsZSBzb2Z0d2FyZSBkZXZlbG9wbWVudC5gfTwvcD5cbiAgICA8cD57YFJlc3BvbnNpYmlsaXRpZXM6XG5Nb2R1bGUgRGVzaWduLCBQcm9ncmFtbWluZyBhbmQgdW5pdCB0ZXN0aW5nLCBjb2xsYWJvcmF0aW9uIGJldHdlZW4gR2VybWFuIGN1c3RvbWVyc1xuYW5kIG90aGVyIGRldmVsb3BlcnMuYH08L3A+XG4gICAgPHA+Jm5ic3A7PC9wPlxuICAgIDxoNT57YFByb2plY3RzYH08L2g1PlxuICAgIDxoNj57YDUuMi4xIGUtc2NoZW5rZXIgKEp1bCAyMDEwIOKAkyBKdW4gMjAxMSkgSmF2YUVFIC8gYH08YSBwYXJlbnROYW1lPVwiaDZcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL3d3dy5vcmFjbGUuY29tL3RlY2huZXR3b3JrL2phdmEvamF2YWVlL2phdmFzZXJ2ZXJmYWNlcy0xMzk4NjkuaHRtbFwiLFxuICAgICAgICBcInRhcmdldFwiOiBcIl9ibGFua1wiXG4gICAgICB9fT57YEpTRmB9PC9hPntgIC8gYH08YSBwYXJlbnROYW1lPVwiaDZcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJodHRwOi8vc2VhbWZyYW1ld29yay5vcmdcIixcbiAgICAgICAgXCJ0YXJnZXRcIjogXCJfYmxhbmtcIlxuICAgICAgfX0+e2BTZWFtYH08L2E+PC9oNj5cbiAgICA8cD57YFRoaXMgcHJvamVjdCBpcyB1c2VkIGZvciBEQiBTY2hlbmtlciBjb3Jwb3JhdGlvbuKAmHMgbG9naXN0aWNzIG1hbmFnZW1lbnQuIEluY2x1ZGUgY3VzdG9tZXJcbmluZm9ybWF0aW9uIG1haW50ZW5hbmNlLCBib29raW5nIG1hbmFnZW1lbnQsIGxvZ2lzdGljcyBicmFuY2ggb2ZmaWNlIG1haW50ZW5hbmNlLCBjYXJnb1xudHJhY2tpbmcgYW5kIHRyYWNpbmcgcHJvY2Vzcy4gSXQgY292ZXJzIHRocmVlIHR5cGVzIG9mIHRyYW5zcG9ydCBtb2RlIGluIGxvZ2lzdGljcyBhcmVhLCB0aGV5XG5hcmUgQUlSLCBPQ0VBTiBhbmQgTEFORCByZXNwZWN0aXZlbHkuIEJvdGggY3VzdG9tZXIgYW5kIGJ1c2luZXNzIGNsZXJrIGFyb3VuZCB0aGUgd29ybGQgc2hvdWxkXG51c2UgdGhpcyBzeXN0ZW0gdG8gZGVhbCB3aXRoIGxvZ2lzdGljcy5gfTwvcD5cbiAgICA8cD57YFRoZSBzeXN0ZW0gaXMgZW1wb3dlcmVkIGJ5IEpFRSB0ZWNoIHN0YWNrIGFuZCBTZWFtIEZyYW1ld29yay4gVGhlIGFwcGxpY2F0aW9uIG9mIEpFRSB0ZWNoIGlzXG5tb2R1bGFyIGFuZCBtdWx0aS1sYXllcmVkIGFuZCBkZXZlbG9wZXJzIGFyZSByZWxpZXZlZCBmcm9tIG11Y2ggd29yayB0byBkZWFsIHdpdGggZGF0YWJhc2Ugb3JcbndlYiBzZXJ2ZXIuIFRoZSBuZXcgSkVFIDYgc3BlYyBwcm92aWRlcyBFSkIzLjEsIENESShDb250ZXh0IERlcGVuZGVuY3kgSW5qZWN0aW9uKSwgUkVTVGZ1bCBBUEksXG5KU0YgZXRjLCB3aGljaCBhcmUgdmVyeSBKYXZhLVByb2dyYW1tZXItZnJpZW5kbHkuYH08L3A+XG4gICAgPHA+Jm5ic3A7PC9wPlxuICAgIDxoND57YDUuMyBTZW5pb3IgSmF2YSBFbmdpbmVlcmB9PC9oND5cbiAgICA8cD57YEF0IGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL3d3dy56dGUuY29tLmNuL2dsb2JhbC9cIixcbiAgICAgICAgXCJ0YXJnZXRcIjogXCJfYmxhbmtcIlxuICAgICAgfX0+e2BaVEUgQ29wb3JhdGlvbmB9PC9hPntgXG5BcHIgMjAwOCDigJMgQXVnIDIwMTAgLiAyIHlycyA1IG1vcyBhdCBOYW5qaW5nLCBKaWFuZ3N1LCBDaGluYWB9PC9wPlxuICAgIDxwPntgUHJvamVjdCBEZXNjcmlwdGlvbjpgfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue319PntgSXQgaXMgb2Z0ZW4gcmVmZXJyZWQgYXMgTk1TLCBhbmQgaW5jbHVkZXMgdmFyaW91cyBmdW5jdGlvbiBtb2R1bGVzIGZvciBkaWZmZXJlbnRcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntgbmV0d29yayBtYW5hZ2VtZW50cywgc3VjaCBhcyBWbGFuLCBWcG4sIFN3aXRjaGVyLCBSb3V0ZXIuIGJlY2F1c2UgdGFyZ2V0XG5PcGVyYXRpb24gU3lzdGVtcyBhcmUgYm90aCBvZiB3aW5kb3dzIGFuZCBTb2xhcmlzZSAobG90cyBvZiBOTVMgcnVuIG9uIFNVTiBzZXJ2ZXIpXG4sIHNvIEphdmEgYW5kIFN3aW5nIFVJIGNvdWxkIGJlIHRoZSBiZXN0IG9wdGlvbi5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue319PntgSkVFIHRlY2huaXF1ZXMsIHN1Y2ggYXMgRUpCLCBKTVMsIGFyZSB2ZXJ5IGhlbHBmdWwgZm9yIGJ1aWxkaW5nIGhpZ2hseSBmbGV4aWJsZSBcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntgU3lzdGVtLiBTTk1QIGFuZCBDTEkgYXJlIHR3byBtYWlubHkgbWVhc3VyZXMgdXNlZCBpbiBkZXZpY2Ugb3BlcmF0aW9ucy5cblRoaXMgcHJvZHVjdCBoYXMgYmVlbiBkZXZlbG9wZWQgZm9yIGNvdXBsZSB5ZWFyc25ldG51bWVuIE5ldHdvcmsgTWFuYWdlbWVudCwgYW5kIGl0IGlzXG5nZXR0aW5nIG1vcmUgY2FwYWJsZSBvZiAgbWFuYWdlbWVudCBvZiBiaWcgc2NhbGUgbmV0d29yay4gb3VyIHRhcmdldCBpcyB0byBtYWtlIGl0IG1vcmVcbmVmZmVjdGl2ZSBhbmQgcm9idXN0LmB9PC9wPlxuICAgIDxwPntgUmVzcG9uc2liaWxpdGllczpcbkkgYW0gd29ya2luZyBpbiBzdXBwb3J0IGdyb3VwIHRoYXQgZGV2ZWxvcGVycyB1dGlsaXRpZXMgbW9kdWxlcyByZWxpZXZpbmcgb3RoZXJcbndvcmttYXRlcyBvZiB0cmlmbGVzIHN1Y2ggYXMgREIgb3BlcmF0aW9ucywgVUkgcGF0dGVybi4gd2UgZm91bmQgdGhhdCBtb3N0IG9mXG5idXNpbmVzcyBtb2R1bGVzIG1pZ2h0IGluY2x1ZGUgc2FtZSBmdW5jdGlvbnMsIGFuZCB3ZSBhYnN0cmFjdCB0aG9zZSwgYW5kIHBsYW4gdG9cbmJ1aWxkIHN1cHBvcnQgYmFzZSBtb2R1bGUsIHRoaXMgd2FzIG15IGNoYWxsZW5naW5nIGpvYi5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue319PntgTGVzc29uIEkgbGVhcm5lZCwgVG8gZGV2ZWxvcCBiYXNlIGNvbXBvbmVudHMgdXNlZCB0byBzdXBwb3J0IG1hbnkgb3RoZXIgXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YGNvbmNyZXRlIG1vZHVsZXMsIGl0IGlzIGltcG9ydGFudCBub3QgdG8gYWJ1c2UgZGVzaWduIHBhdHRlcm5zIGFuZCBjb21wbGljYXRlIHRoZVxuaW50ZXJmYWNlLiBvdGhlcndpc2UsIGNvbGxlYWd1ZXMgd291bGQgaGF0ZSB5b3VyIG92ZXItZW5naW5lZXJpbmcgY29kZS4gTW9yZSBvdmVyLFxuaW50ZXJmYWNlcyBzaG91bGQgYmUgbWFkZSBmbGV4aWJsZSBlbm91Z2ggd2l0aCBPT1AgcHJpbmNpcGxlcyBzbyB0aGF0IGNvbXBvbmVudHNcbmNhbiBiZSByZXVzZWQgaW4gdmFyaW91cyBjYXNlcyBhdCBtaW5pbXVtIGNvc3QsIG90aGVyd2lzZSB5b3VyIG1hbmFnZXIgd291bGQgaGF0ZVxueW91ciBjb2RlLmB9PC9wPlxuICAgIDxoNT57YFByb2plY3RzYH08L2g1PlxuICAgIDxoNj57YDUuMy4xIG5ldG51bWVuIE5ldHdvcmsgTWFuYWdlbWVudCAoTWF5IDIwMDgg4oCTIEF1ZyAyMDEwKWB9PC9oNj5cbiAgICA8cD57YFRoaXMgcGxhdGZvcm0gaXMgZGV2ZWxvcGVkIGJ5IFpURSBkYXRhIG5ldHdvcmsgZGVwYXJ0bWVudC4gSXQgY29uc2lzdHMgb2YgY29tcG9uZW50c1xub2YgbmV0d29yayBpbnRlcmZhY2UsIFNOTVAsIHRlbG5ldCwgUGVyc2lzdGVuY2UgbGF5ZXIsIFVzZXIgSW50ZXJmYWNlcyBhc3NlbWJsZWQgaW5cbmEgbW9kdWxhciBtYW5uZXIuIGB9PC9wPlxuICAgIDxwPntgRnJvbSB0ZWNobmljYWwgcG9pbnQgb2YgdmlldywgaXQgaXMgZW1wb3dlcmVkIGJ5IGNvbWJpbmF0aW9uIG9mIEpFRSBhbmQgU3dpbmdcbnRlY2ggc3RhY2sgc28gaXQgaXMgcG9ydGFibGUgYW5kIGNvbXBhdGlibGUgdG8gZGlmZmVyZW50IGRhdGFiYXNlcyBhbmQgb3RoZXJcbnN5c3RlbXMgYnVpbHQgb24gSmF2YS5gfTwvcD5cbiAgICA8cD57YEZyb20gYXJjaGl0ZWN0dXJlIHBvaW50IG9mIHZpZXcsIEl0IGlzIGRlc2lnbmVkIHRvIGJlIG1vZHVsYXIgYW5kIGV4dGVuc2libGUuXG5Db21wb25lbnRzIGZvciBkaWZmZXJlbnQgYnVzaW5lc3MgbG9naWNzIGFyZSBkZXZlbG9wZWQgZWFzaWx5IGJhc2VkIG9uIHBsYXRmb3JtXG5pbmZyYXN0cnVjdHVyZSBtb2R1bGVzLCB0aGV5IGludGVyYWN0IHZpYSBpbnRlcmZhY2VzIGFuZCBKTVMgbWVzc2FnZS5gfTwvcD5cbiAgICA8cD57YEFzIHRvIG15IHdvcmsgaW4gdGhpcyBwcm9qZWN0LCBJIHdhcyB0YXNrZWQgdG8gZGV2ZWxvcCB1dGlsaXRpZXMgYW5kIFVJIGZyYW1ld29ya1xudG8gc3VwcG9ydCBvdGhlciBjb2xsZWFndWVzJyBkZXZlbG9wbWVudC4gSSBhcHBsaWVkIGRlc2lnbiBwYXR0ZXJucyBpbnNpZGUgdGhlXG5tb2R1bGUgZm9yIGZsZXhpYmlsaXR5IGFuZCBtb2R1bGFyaXR5IGFuZCBleHBvc2VkIGludGVyZmFjZXMgZm9yIHNpbXBsaWNpdHkuIFVzZXJzXG5zaW1wbHkgdXNlIHRoZW0gb3IgaW5oZXJpdCB0aGVtLiBgfTwvcD5cbiAgICA8cD4mbmJzcDs8L3A+XG4gICAgPGg0PntgNS40IFNlbmlvciBKYXZhIEVuZ2luZWVyYH08L2g0PlxuICAgIDxwPntgQXQgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHA6Ly93d3cubGlhbmNodWFuZy5jb20vXCIsXG4gICAgICAgIFwidGFyZ2V0XCI6IFwiX2JsYW5rXCJcbiAgICAgIH19PntgQXNpYUluZm8gTGlua2FnZWB9PC9hPntgXG5GZWIgMjAwNiDigJMgQXByIDIwMDggLiAyIHlycyAzIG1vcyBhdCBOYW5qaW5nLCBKaWFuZ3N1LCBDaGluYWB9PC9wPlxuICAgIDxwPntgUHJvZHVjdCBEZXZlbG9wbWVudFxuSSB3b3JrZWQgaW4gTGlhbkNodWFuZyBUZWNobm9sb2d5IHRoYXQgaGFzIGJlZW4gdGFrZW4gYnkgQXNpYUluZm8gYWZ0ZXIgbXlcbnJlc2lnbmF0aW9uLiBEdXJpbmcgdGhhdCBwZXJpb2QsIEkgdG9vayBwYXJ0IGluIGRldmVsb3BtZW50IG9mIFNBUyBzeXN0ZW0uIFRoaXNcbndlYi1iYXNlZCBzeXN0ZW0gd2FzIGRlc2lnbmVkIHRvIGNvbGxlY3QgYW5kIGFuYWx5emUgYnVzaW5lc3Mgb3BlcmF0aW9uIGRhdGEgaW5cbmJpZyBzY2FsZSBlbnRlcnByaXNlIGJ5IGludGVyY2VwdGluZyB0aGUgbmV0d29yayB0cmFmZmljIGluIGludHJhbmV0IHdpdGhvdXQgYW55XG5pbnRydXNpb24gb24gZXhpc3RlbnQgc3lzdGVtcy4gRnVydGhlciBtb3JlLCBTeXN0ZW0gYWRtaW5zIGFyZSBhbHNvIGFibGUgdG8gZGVmaW5lXG5idXNpbmVzcyBydWxlcyB0byBtb25pdG9yIG9wZXJhdGlvbnMgb24gY3JpdGljYWwgcmVzb3VyY2VzLCBzdWNoIGFzIGRhdGFiYXNlIGFuZFxuaG9zdHMuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLnt9fT57YEFzIGRlc2lnbmVyIG9mIHRoZSBiYWNrIGVuZCBzZXJ2ZXIgbW9kdWxlIG9mIHRoZSBwcm9kdWN0LCBJIHN0dWRpZWQgc29tZSBcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntgcGF0dGVybnMgb2YgdGhyZWFkIHVzZSBhbmQgamF2YSBvcHRpbWl6YXRpb24gc2tpbGxzLiBXaXRoIGFwcGxpY2F0aW9uIG9mIHRob3NlXG5pbiB3b3JrLCB0aGUgcHJvZHVjdCBzZXJ2ZXIgYXBwbGljYXRpb24gaXMgYWJsZSB0byBoYW5kbGUgZ3JlYXQgaGVhdnkgd29ya2xvYWRcbndpdGggY29tbWVyY2lhbCBoYXJkd2FyZS5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue319PntgV2UgYWxzbyB1c2VkIHNvbWUgbG9uZy1wdWxsaW5nIHRlY2hub2xvZ3kgdG8gaW1wcm92ZSB1c2VycyBpbnRlcmZhY2Ugc28gaXQgXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YHdvdWxkIGFsbG93IHN5c3RlbSBhZG1pbnMgdG8gbW9uaXRvciBvcGVyYXRpb25zIG9uIHNlcnZlcnMgaW1tZWRpYXRlbHkgbGlrZSByZWFsLXRpbWUuYH08L3A+XG4gICAgPHA+Jm5ic3A7PC9wPlxuICAgIDxoNj57YDUuNC4xIFNlY3VyZXIgU2VjdXJpdHkgQXVkaXQgU3lzdGVtIChNYXIgMjAwNiDigJMgQXByIDIwMDgpYH08L2g2PlxuICAgIDxwPntgVGhpcyB3ZWItYmFzZWQgc3lzdGVtIHdhcyBkZXNpZ25lZCB0byBjb2xsZWN0IGFuZCBhbmFseXNlIGJ1c2luZXNzIG9wZXJhdGlvbiBkYXRhXG5pbiBiaWcgc2NhbGUgZW50ZXJwcmlzZSBieSBpbnRlcmNlcHRpbmcgdGhlIG5ldHdvcmsgdHJhZmZpYyBpbiBpbnRyYW5ldCB3aXRob3V0XG5hbnkgaW50cnVzaW9uIG9uIGV4aXN0ZW50IHN5c3RlbXMuIEZ1cnRoZXIgbW9yZSwgU3lzdGVtIGFkbWlucyBhcmUgYWxzbyBhYmxlIHRvXG5kZWZpbmUgYnVzaW5lc3MgcnVsZXMgdG8gbW9uaXRvciBvcGVyYXRpb25zIG9uIGNyaXRpY2FsIHJlc291cmNlcywgc3VjaCBhc1xuZGF0YWJhc2UgYW5kIGhvc3RzLmB9PC9wPlxuICAgIDxwPntgVGhlIGdyZWF0ZXN0IGNoYWxsZW5nZSBpcyBwZXJmb3JtYW5jZS4gVGhlcmVmb3JlIHRoZSBhcmNoaXRlY3R1cmUgb2YgdGhpcyBzeXN0ZW1cbmNvbnNpc3RzIG9mOmB9PC9wPlxuICAgIDxwPntgTmV0d29yayBpbnRlcmNlcHRvcnMgaXMgaW1wbGVtZW50ZWQgYXMga2VybmVsIG1vZHVsZSBkZXBsb3llZCBpbiBsaW51eCBrZXJuZWwuXG5JdCBjYW4gcmFwaWRseSBmaWx0ZXIgb3V0IGdyZWF0IGFtb3VudCBvZiBuZXR3b3JrIHRyYWZmaWMgYmFzZWQgb24gcnVsZXMgY29uZmlndXJlZFxub24gYmFjay1lbmQgc2VydmVyLiBUaGUgYW1vdW50IG9mIG5ldHdvcmsgZGF0YSBpcyBzaWduaWZpY2FudGx5IHJlZHVjZWQgYXMgZGVsaXZlcmVkXG50byB1c2VyIGxheWVyIGluIGludGVyY2VwdG9yIGhvc3QuYH08L3A+XG4gICAgPHA+e2BUaGUgYmFjay1lbmQgc2VydmVyIHJlY2VpdmVzIGRhdGEgZnJvbSBzZXZlcmFsIGludGVyY2VwdG9ycyBhbmQgcHJvY2Vzc2VkIGZvclxuZnVydGhlciBhbmFseXNpcyBhbmQgcHJlc2VudGF0aW9uLiBUaHJlYWRzIGJhY2tlZCBieSBidWZmZXJzIHByb2Nlc3MgZGF0YSBzdGVwIGJ5XG5zdGVwIGxpa2UgcGlwZWxpbmUuIERpZmZlcmVudCBwcm9jZWR1cmVzIGFyZSBleGVjdXRlZCBieSBkaWZmZXJlbnQgdGhyZWFkcyBmb3JcbmJldHRlciBwZXJmb3JtYW5jZSBhbmQgbW9kdWxhcml0eS5gfTwvcD5cbiAgICA8cD57YE9uIGRhdGFiYXNlIGxldmVsLCBzb21lIG9wdGltaXphdGlvbiBsaWtlIHByb3BlciBpbmRleGluZyBhbmQgcGFydGl0aW9uIGFyZSBhcHBsaWVkLmB9PC9wPlxuICAgIDxwPiZuYnNwOzwvcD5cbiAgICA8aDM+e2BCZXR3ZWVuIEpvYnNgfTwvaDM+XG4gICAgPHA+e2BNYXkgMjAwNSDigJMgRmViIDIwMDYgLiA4IG1vcyBhdCBOYW5qaW5nLCBKaWFuZ3N1LCBDaGluYWB9PC9wPlxuICAgIDxwPntgSSB3YXMgc3R1ZHlpbmcgYW5kIHByZXBhcmluZyBmb3IgaGlnaGVyIGRlZ3JlZS5gfTwvcD5cbiAgICA8cD4mbmJzcDs8L3A+XG4gICAgPGg0PntgNS41IEphdmEgQ29kZXJgfTwvaDQ+XG4gICAgPHA+e2BBdCBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiaHR0cDovL3d3dy5zb2Z0d2lzZS5jb20uY25cIixcbiAgICAgICAgXCJ0YXJnZXRcIjogXCJfYmxhbmtcIlxuICAgICAgfX0+e2BTb2Z0d2lzZWB9PC9hPjxiciBwYXJlbnROYW1lPVwicFwiPjwvYnI+e2BcbmB9e2BBdWcgMjAwMyDigJMgQXByIDIwMDUgLiA4IG1vcyBhdCBOYW5qaW5nLCBKaWFuZ3N1LCBDaGluYWB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57fX0+e2BGaXJzdCBqb2IgYXMgcHJvZ3JhbW1lciwgSSB3b3JrZWQgaW4gcHJvamVjdHMgc291cmNlZCBmcm9tIEphcGFuIGJpZyBjb21wYW5pZXMuXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YEp1c3QgbGlrZSBDaGluZXNlIHNvZnR3YXJlIGluZHVzdHJ5IHN0YXJ0ZWQgd2l0aCBvdXRzb3VyY2luZyBwcm9qZWN0cyBhbmQgZ3JvdyB3aXRoXG5KYXBhbmVzZSBtYW5hZ2VtZW50LiBJIHdlbnQgdGhyb3VnaCBjbGFzc2ljIHdhdGVyLWZhbGwgc29mdHdhcmUgZGV2ZWxvcG1lbnQgY3ljbGVcbmFuZCBidWlsdCB1cCBteSBiYXNpYyBKYXZhIHNraWxsLiBgfTwvcD5cbiAgICA8cD57YEkgYWxzbyBnb3QgdG8gbGVhcm4gc29tZSBhZHZhbmNlIHRlY2ggKGJ5IHRoZW4pLFxuc3VjaCBhcyBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9oZWxweC5hZG9iZS5jb20vY29sZGZ1c2lvbi9jZm1sLXJlZmVyZW5jZS9jb2xkZnVzaW9uLXRhZ3MuaHRtbFwiLFxuICAgICAgICBcInRhcmdldFwiOiBcIl9ibGFua1wiXG4gICAgICB9fT57YGFkb2JlIGNvbGRmdXNpb25gfTwvYT57YCxcbmB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL3d3dy5zb2Z0d2FyZWFnLmNvbS9jb3Jwb3JhdGUvcHJvZHVjdHMvd2VibWV0aG9kc19pbnRlZ3JhdGlvbi9hZGFwdGVyL2RlZmF1bHQuaHRtbFwiLFxuICAgICAgICBcInRhcmdldFwiOiBcIl9ibGFua1wiXG4gICAgICB9fT57YHdlYm1ldGhvZGB9PC9hPjwvcD5cbiAgICA8L01EWExheW91dD47XG59XG5cbjtcbk1EWENvbnRlbnQuaXNNRFhDb21wb25lbnQgPSB0cnVlOyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==