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

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fresume&absolutePagePath=D%3A%5Cworkspace%5Ccfcodefans.github.io%5Csrc%5Cpages%5Cresume.mdx!./":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fresume&absolutePagePath=D%3A%5Cworkspace%5Ccfcodefans.github.io%5Csrc%5Cpages%5Cresume.mdx ***!
  \*************************************************************************************************************************************************************************************/
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


var _jsxFileName = "D:\\workspace\\cfcodefans.github.io\\src\\pages\\resume.mdx";

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

},[["./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fresume&absolutePagePath=D%3A%5Cworkspace%5Ccfcodefans.github.io%5Csrc%5Cpages%5Cresume.mdx!./","webpack"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9kaXN0L2VzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1jbGllbnQtcGFnZXMtbG9hZGVyLmpzIiwid2VicGFjazovL19OX0UvKHdlYnBhY2spL2J1aWxkaW4vaGFybW9ueS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9yZXN1bWUubWR4Iiwid2VicGFjazovL19OX0UvZXh0ZXJuYWwgXCJSZWFjdFwiIl0sIm5hbWVzIjpbImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiTURYQ29udGVudCIsImNvbXBvbmVudHMiLCJwcm9wcyIsImlzTURYQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2JBO0FBQUE7QUFBQTtBQUFtRztBQUNwRjtBQUNmO0FBQ0EsZUFBZSx1R0FBNEI7QUFDM0M7O0FBRUE7QUFDQTs7QUFFQSxlQUFlLDZCQUE2QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7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QTtBQUFBO0FBQUE7QUFBQSxNQUNMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESyxFQUVMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGNBQVUsRUFBQyxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBb0I7QUFBRyxjQUFVLEVBQUM7QUFBZCxLQUF1QjtBQUN2QyxZQUFRO0FBRCtCLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQXBCLENBREYsRUFJRTtBQUFJLGNBQVUsRUFBQyxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBb0I7QUFBRyxjQUFVLEVBQUM7QUFBZCxLQUF1QjtBQUN2QyxZQUFRO0FBRCtCLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQXBCLENBSkYsRUFPRTtBQUFJLGNBQVUsRUFBQyxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBb0I7QUFBRyxjQUFVLEVBQUM7QUFBZCxLQUF1QjtBQUN2QyxZQUFRO0FBRCtCLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQXBCLENBUEYsRUFVRTtBQUFJLGNBQVUsRUFBQyxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBb0I7QUFBRyxjQUFVLEVBQUM7QUFBZCxLQUF1QjtBQUN2QyxZQUFRO0FBRCtCLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQXBCLENBVkYsRUFhRTtBQUFJLGNBQVUsRUFBQyxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBb0I7QUFBRyxjQUFVLEVBQUM7QUFBZCxLQUF1QjtBQUN2QyxZQUFRO0FBRCtCLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEs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QTtBQUFBO0FBQUEsMEZBQUwsQ0E3WkssRUErWkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrTkEvWkssRUFrYUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtRUFDTTtBQUFHLGNBQVUsRUFBQztBQUFkLEtBQXNCO0FBQ3hCLFlBQVEsd0VBRGdCO0FBRXhCLGNBQVU7QUFGYyxHQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUROLFNBS0Y7QUFBRyxjQUFVLEVBQUM7QUFBZCxLQUFzQjtBQUNoQixZQUFRLDJGQURRO0FBRWhCLGNBQVU7QUFGTSxHQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxFLENBbGFLLENBQVA7QUE0YUQ7S0FoYnVCRCxVO0FBa2J4QjtBQUNBQSxVQUFVLENBQUNHLGNBQVgsR0FBNEIsSUFBNUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hjQSx1QiIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3BhZ2VzL3Jlc3VtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsImltcG9ydCBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG4gIHZhciBrZXksIGk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcbiAgICBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgICB9KTtcbiAgICBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7XG4gIH1cblxuICByZXR1cm4ga2V5cztcbn1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZDIodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG5cbiAgICBpZiAoaSAlIDIpIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcblxuICB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG5cbiAgdmFyIGtleSwgaTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxudmFyIGlzRnVuY3Rpb24gPSBmdW5jdGlvbiBpc0Z1bmN0aW9uKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cbnZhciBNRFhDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQoe30pO1xudmFyIHdpdGhNRFhDb21wb25lbnRzID0gZnVuY3Rpb24gd2l0aE1EWENvbXBvbmVudHMoQ29tcG9uZW50KSB7XG4gIHJldHVybiBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcHMuY29tcG9uZW50cyk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICBjb21wb25lbnRzOiBhbGxDb21wb25lbnRzXG4gICAgfSkpO1xuICB9O1xufTtcbnZhciB1c2VNRFhDb21wb25lbnRzID0gZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIHZhciBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dCk7XG4gIHZhciBhbGxDb21wb25lbnRzID0gY29udGV4dENvbXBvbmVudHM7XG5cbiAgaWYgKGNvbXBvbmVudHMpIHtcbiAgICBhbGxDb21wb25lbnRzID0gaXNGdW5jdGlvbihjb21wb25lbnRzKSA/IGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpIDogX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIGNvbnRleHRDb21wb25lbnRzKSwgY29tcG9uZW50cyk7XG4gIH1cblxuICByZXR1cm4gYWxsQ29tcG9uZW50cztcbn07XG52YXIgTURYUHJvdmlkZXIgPSBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wcykge1xuICB2YXIgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcHMuY29tcG9uZW50cyk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChNRFhDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IGFsbENvbXBvbmVudHNcbiAgfSwgcHJvcHMuY2hpbGRyZW4pO1xufTtcblxudmFyIFRZUEVfUFJPUF9OQU1FID0gJ21keFR5cGUnO1xudmFyIERFRkFVTFRTID0ge1xuICBpbmxpbmVDb2RlOiAnY29kZScsXG4gIHdyYXBwZXI6IGZ1bmN0aW9uIHdyYXBwZXIoX3JlZikge1xuICAgIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW47XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCB7fSwgY2hpbGRyZW4pO1xuICB9XG59O1xudmFyIE1EWENyZWF0ZUVsZW1lbnQgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICB2YXIgcHJvcENvbXBvbmVudHMgPSBwcm9wcy5jb21wb25lbnRzLFxuICAgICAgbWR4VHlwZSA9IHByb3BzLm1keFR5cGUsXG4gICAgICBvcmlnaW5hbFR5cGUgPSBwcm9wcy5vcmlnaW5hbFR5cGUsXG4gICAgICBwYXJlbnROYW1lID0gcHJvcHMucGFyZW50TmFtZSxcbiAgICAgIGV0YyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY29tcG9uZW50c1wiLCBcIm1keFR5cGVcIiwgXCJvcmlnaW5hbFR5cGVcIiwgXCJwYXJlbnROYW1lXCJdKTtcblxuICB2YXIgY29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcENvbXBvbmVudHMpO1xuICB2YXIgdHlwZSA9IG1keFR5cGU7XG4gIHZhciBDb21wb25lbnQgPSBjb21wb25lbnRzW1wiXCIuY29uY2F0KHBhcmVudE5hbWUsIFwiLlwiKS5jb25jYXQodHlwZSldIHx8IGNvbXBvbmVudHNbdHlwZV0gfHwgREVGQVVMVFNbdHlwZV0gfHwgb3JpZ2luYWxUeXBlO1xuXG4gIGlmIChwcm9wQ29tcG9uZW50cykge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHtcbiAgICAgIHJlZjogcmVmXG4gICAgfSwgZXRjKSwge30sIHtcbiAgICAgIGNvbXBvbmVudHM6IHByb3BDb21wb25lbnRzXG4gICAgfSkpO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX29iamVjdFNwcmVhZDIoe1xuICAgIHJlZjogcmVmXG4gIH0sIGV0YykpO1xufSk7XG5NRFhDcmVhdGVFbGVtZW50LmRpc3BsYXlOYW1lID0gJ01EWENyZWF0ZUVsZW1lbnQnO1xuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCAodHlwZSwgcHJvcHMpIHtcbiAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gIHZhciBtZHhUeXBlID0gcHJvcHMgJiYgcHJvcHMubWR4VHlwZTtcblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IG1keFR5cGUpIHtcbiAgICB2YXIgYXJnc0xlbmd0aCA9IGFyZ3MubGVuZ3RoO1xuICAgIHZhciBjcmVhdGVFbGVtZW50QXJnQXJyYXkgPSBuZXcgQXJyYXkoYXJnc0xlbmd0aCk7XG4gICAgY3JlYXRlRWxlbWVudEFyZ0FycmF5WzBdID0gTURYQ3JlYXRlRWxlbWVudDtcbiAgICB2YXIgbmV3UHJvcHMgPSB7fTtcblxuICAgIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwocHJvcHMsIGtleSkpIHtcbiAgICAgICAgbmV3UHJvcHNba2V5XSA9IHByb3BzW2tleV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgbmV3UHJvcHMub3JpZ2luYWxUeXBlID0gdHlwZTtcbiAgICBuZXdQcm9wc1tUWVBFX1BST1BfTkFNRV0gPSB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgPyB0eXBlIDogbWR4VHlwZTtcbiAgICBjcmVhdGVFbGVtZW50QXJnQXJyYXlbMV0gPSBuZXdQcm9wcztcblxuICAgIGZvciAodmFyIGkgPSAyOyBpIDwgYXJnc0xlbmd0aDsgaSsrKSB7XG4gICAgICBjcmVhdGVFbGVtZW50QXJnQXJyYXlbaV0gPSBhcmdzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50LmFwcGx5KG51bGwsIGNyZWF0ZUVsZW1lbnRBcmdBcnJheSk7XG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseShudWxsLCBhcmdzKTtcbn1cblxuZXhwb3J0IHsgTURYQ29udGV4dCwgTURYUHJvdmlkZXIsIGNyZWF0ZUVsZW1lbnQgYXMgbWR4LCB1c2VNRFhDb21wb25lbnRzLCB3aXRoTURYQ29tcG9uZW50cyB9O1xuIiwiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9yZXN1bWVcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCJEOlxcXFx3b3Jrc3BhY2VcXFxcY2Zjb2RlZmFucy5naXRodWIuaW9cXFxcc3JjXFxcXHBhZ2VzXFxcXHJlc3VtZS5tZHhcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWxNb2R1bGUpIHtcblx0aWYgKCFvcmlnaW5hbE1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHR2YXIgbW9kdWxlID0gT2JqZWN0LmNyZWF0ZShvcmlnaW5hbE1vZHVsZSk7XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiZXhwb3J0c1wiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1keCB9IGZyb20gJ0BtZHgtanMvcmVhY3QnXG5cbi8qIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cbi8qIEBqc3ggbWR4ICovXG5cblxuXG5jb25zdCBsYXlvdXRQcm9wcyA9IHtcbiAgXG59O1xuY29uc3QgTURYTGF5b3V0ID0gXCJ3cmFwcGVyXCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1EWENvbnRlbnQoe1xuICBjb21wb25lbnRzLFxuICAuLi5wcm9wc1xufSkge1xuICByZXR1cm4gPE1EWExheW91dCB7Li4ubGF5b3V0UHJvcHN9IHsuLi5wcm9wc30gY29tcG9uZW50cz17Y29tcG9uZW50c30gbWR4VHlwZT1cIk1EWExheW91dFwiPlxuICAgIDxocj48L2hyPlxuICAgIDx1bD5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj48YSBwYXJlbnROYW1lPVwibGlcIiB7Li4ue1xuICAgICAgICAgIFwiaHJlZlwiOiBcIiNvYmplY3RpdmVzXCJcbiAgICAgICAgfX0+e2AxLiBPYmplY3RpdmVzYH08L2E+PC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj48YSBwYXJlbnROYW1lPVwibGlcIiB7Li4ue1xuICAgICAgICAgIFwiaHJlZlwiOiBcIiNjb250YWN0XCJcbiAgICAgICAgfX0+e2AyLiBDb250YWN0YH08L2E+PC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj48YSBwYXJlbnROYW1lPVwibGlcIiB7Li4ue1xuICAgICAgICAgIFwiaHJlZlwiOiBcIiNlZHVjYXRpb25cIlxuICAgICAgICB9fT57YDMuIEVkdWNhdGlvbmB9PC9hPjwvbGk+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+PGEgcGFyZW50TmFtZT1cImxpXCIgey4uLntcbiAgICAgICAgICBcImhyZWZcIjogXCIjY2VydGlmaWNhdGVcIlxuICAgICAgICB9fT57YDQuIENlcnRpZmljYXRlYH08L2E+PC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj48YSBwYXJlbnROYW1lPVwibGlcIiB7Li4ue1xuICAgICAgICAgIFwiaHJlZlwiOiBcIiNleHBlcmllbmNlXCJcbiAgICAgICAgfX0+e2A1LiBFeHBlcmllbmNlYH08L2E+PC9saT5cbiAgICA8L3VsPlxuICAgIDxwPiZuYnNwOzwvcD5cbiAgICA8aDIgaWQ9XCJvYmplY3RpdmVzXCI+MS4gT2JqZWN0aXZlczwvaDI+XG4gICAgXG5IaSwgSSBhbSBDaGVuIEZhbi4gXG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLnt9fT57YEkgaGF2ZSBiZWVuIHdvcmtpbmcgYXMgYSBqYXZhIGNvZGVyIGFuZCBlbnRodXNpYXN0aWMgYWJvdXQgY29kaW5nIChzbyBtdWNoIHRvIGxlYXJuKS4gIFxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2BJIGFzcGlyZSB0byBmdXJ0aGVyIG15IHByb2dyYW1taW5nIGtub3dsZWRnZSwgc2tpbGxzIGFuZCB2aXNpb24gb2YgdGhlIGV2b2x2aW5nIGludGVybmV0LiBgfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue319PntgSSBmaXJtbHkgYmVsaWV2ZSB0aGF0IGludGVybmV0IGRyaXZlbiBzZXJ2aWNlcyB3aWxsIGZsb3VyaXNoIHRocm91Z2ggaW5ub3ZhdGlvbnMgYW5kIFxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2Bjb25uZWN0aW9uIHRvIG90aGVyIGluZHVzdHJpZXMgdGh1cyBJIHdpc2ggdG8gcGFydGljaXBhdGUgdGhpcyBleHBsb3JhdG9yeSBwcm9jZXNzLiBJXG5iZWxpZXZlXG5JIGNvdWxkIGNvbnRyaWJ1dGUgdG8gYnVzaW5lc3Mgc3VjY2VzcyB3aXRoIGNvbWJpbmF0aW9uIG9mIG15IGV4cGVyaWVuY2UsIGNyZWF0aXZpdHksXG50ZWFtIHNwaXJpdCwgbW9zdCBpbXBvcnRhbnRseSBsZWFybmluZyBhYmlsaXR5LmB9PC9wPlxuICAgIDxwPntgVGhhbmtzIGFuZCBiZXN0IHJlZ2FyZHMuIGB9PC9wPlxuICAgIHtcbiAgICAgIC8qbW9yZSovXG4gICAgfVxuICAgIDxwPiZuYnNwOzwvcD5cbiAgICA8aDIgaWQ9XCJjb250YWN0XCI+Mi4gQ29udGFjdDwvaDI+XG4gICAgPHVsPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPntgbWFpbDogYH08YSBwYXJlbnROYW1lPVwibGlcIiB7Li4ue1xuICAgICAgICAgIFwiaHJlZlwiOiBcIm1haWx0bzpjaGVuZmFuc3Bvc3RAaG90bWFpbC5jb21cIlxuICAgICAgICB9fT57YGNoZW5mYW5zcG9zdEBob3RtYWlsLmNvbWB9PC9hPjwvbGk+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+e2BsaW5rZWRpbjogYH08YSBwYXJlbnROYW1lPVwibGlcIiB7Li4ue1xuICAgICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9jZmNvZGVmYW5zL1wiXG4gICAgICAgIH19PntgaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2NmY29kZWZhbnMvYH08L2E+PC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj57YGdpdGh1YjogYH08YSBwYXJlbnROYW1lPVwibGlcIiB7Li4ue1xuICAgICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9jZmNvZGVmYW5zXCJcbiAgICAgICAgfX0+e2BodHRwczovL2dpdGh1Yi5jb20vY2Zjb2RlZmFuc2B9PC9hPjwvbGk+XG4gICAgPC91bD5cbiAgICA8cD4mbmJzcDs8L3A+XG4gICAgPGgyIGlkPVwiZWR1Y2F0aW9uXCI+My4gRWR1Y2F0aW9uPC9oMj5cbiAgICA8cD57YENvbXB1dGVyIFNjaWVuY2UgQXQgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vZW4ubnVpc3QuZWR1LmNuXCIsXG4gICAgICAgIFwidGFyZ2V0XCI6IFwiX2JsYW5rXCJcbiAgICAgIH19PntgTmFuamluZyBVbml2ZXJzaXR5IG9mIEluZm9ybWF0aW9uIHNjaWVuY2UgYW5kIFRlY2hub2xvZ3lgfTwvYT48L3A+XG4gICAgPHA+Jm5ic3A7PC9wPlxuICAgIDxoMiBpZD1cImNlcnRpZmljYXRlXCI+NC4gQ2VydGlmaWNhdGU8L2gyPlxuICAgIDx1bD5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj57YE9DQkNEIGB9PGEgcGFyZW50TmFtZT1cImxpXCIgey4uLntcbiAgICAgICAgICBcImhyZWZcIjogXCJodHRwczovL2VkdWNhdGlvbi5vcmFjbGUuY29tL2J1c2luZXNzLWNvbXBvbmVudC1kZXZlbG9wbWVudC13aXRoLWVqYi10ZWNobm9sb2d5LWphdmEtZWUtNi9jb3VyUF80MThcIixcbiAgICAgICAgICBcInRhcmdldFwiOiBcIl9ibGFua1wiXG4gICAgICAgIH19PntgT3JhY2xlIENlcnRpZmllZCBCdXNpbmVzcyBDb21wb25lbnQgRGV2ZWxvcGVyYH08L2E+PC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj57YE9DSlAgYH08YSBwYXJlbnROYW1lPVwibGlcIiB7Li4ue1xuICAgICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vZWR1Y2F0aW9uLm9yYWNsZS5jb20vamF2YS9qYXZhLXNlL3Byb2R1Y3RfMjY3XCIsXG4gICAgICAgICAgXCJ0YXJnZXRcIjogXCJfYmxhbmtcIlxuICAgICAgICB9fT57YE9yYWNsZSBDZXJ0aWZpZWQgSmF2YSBQcm9ncmFtbWVyYH08L2E+PC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj57YFRPRUlDIDk1NSBgfTwvbGk+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+e2BJRUxUUyA2LjVgfTwvbGk+XG4gICAgPC91bD5cbiAgICA8cD4mbmJzcDs8L3A+XG4gICAgPGgyIGlkPVwiZXhwZXJpZW5jZVwiPjUuIEV4cGVyaWVuY2U8L2gyPlxuICAgIDxwPiZuYnNwOzwvcD5cbiAgICA8aDQ+e2A1LjEuIEphdmEgQ29kZXJgfTwvaDQ+XG4gICAgPHA+e2BBdCBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly90aGVuZXRjaXJjbGUuY29tXCIsXG4gICAgICAgIFwidGFyZ2V0XCI6IFwiX2JsYW5rXCJcbiAgICAgIH19PntgVGhlIE5ldENpcmNsZWB9PC9hPntgXG5KdW4gMjAxMiDigJMgUHJlc2VudCAuIDYgeXJzIDExIG1vcyBhdCBTaGFuZ2hhaSBDaGluYWB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57fX0+e2BBcyBKYXZhIGNvZGVyLCBJIHN0YXJ0ZWQgd2l0aCBkZXZlbG9wbWVudCBvZiBzZXJ2aWNlcyBidWlsdCB3aXRoIGphdmFcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntgLCBzdXBwb3J0aW5nIG91ciB3ZWJzaXRlcy4gSW1hZ2UvVmlkZW8gcHJvY2VzcywgTWVzc2FnZSBxdWV1aW5nLCBQYXltZW50LFxuU2luZ2xlIFNpZ24gT24sIEJsb2NrY2hhaW4oTkVNKS4uLi5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue319PntgR3JhZHVhbGx5LCBJIGhhdmUgc3R1ZGllZCBhbmQgc2hpZnRlZCB0byBkYXRhIGFyZWEgYXMgb3VyIHRlYW0gYWltcyB0byBcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntgYmVjb21lIGRhdGEgZHJpdmVuLiBJIGZhbWlsaWFyaXplIHRvb2xzL2ZyYW1ld29yayBmb3IgZGF0YSBtaW5pbmcsIHdoaWNoIGJyb3VnaHRcbm1lIHRvIG5ldyBob3Jpem9uLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57fX0+e2BBcyB0ZWNobm9sb2d5ICYgdG9vbHMgYWx3YXlzIGV2b2x2ZSBhbmQgaW1wcm92ZSB0byBiZSBtb3JlIHVzZXItZnJpZW5kbHksIFxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2BJIHN0aWxsIGZlZWwgcXVpdGUgZGlzdGFudCB0byB0aGUgbWF0aC9zdGF0aXN0aWMgcHJpbmNpcGxlcyBiZWhpbmQgZGF0YSBzY2llbmNlLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57fX0+e2BBcyB3ZSBnZW5lcmF0ZSBtb3JlIGFuZCBtb3JlIGRhdGEgaW4gb3VyIGxpdmVzLCBkYXRhIGFsc28gc2hhcGVzIG91ciBtaW5kcy5cbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntgSSB3aXNoIHRvIGV4cGxvcmUgbW9yZSBpbiB0aGlzIGNvbXBsZXhpdHkuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLnt9fT57YEluIHByYWN0aWNlLCBhcGFydCBmcm9tIGRldmVsb3BtZW50IGZvciBqYXZhIHN5c3RlbXMsIEkgaGF2ZSBhbHNvIGJlZW4gd29ya2luZyBcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntgYXMgZGF0YSBlbmdpbmVlciwgc2V0dGluZyB1cCBpbmZyYXN0cnVjdHVyZXMgbGlrZSBIYWRvb3AgY2x1c3RlciwgSGl2ZSwgS2Fma2EuXG5Qcm9jZXNzIGNsZWFuIGRhdGEgZm9yIGRhdGEgc2NpZW50aXN0cy5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue319PntgT3ZlcmFsbCwgSSBncm93IHdpdGggc2hhcmluZyBrbm93bGVhZ2VzIGJldHdlZW4gYW1hemluZyBjb2xsZWFndWVzLlxuYH08L2NvZGU+PC9wcmU+XG4gICAgPGg1PntgUHJvamVjdHNgfTwvaDU+XG4gICAgPGg2PntgNS4xLjEgQ29tbXVuaXR5LVRva2VuIChGZWIgMjAxOCAtIFByZXNlbnQpIGB9PGEgcGFyZW50TmFtZT1cImg2XCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9uZW0uaW8vXCIsXG4gICAgICAgIFwidGFyZ2V0XCI6IFwiX2JsYW5rXCJcbiAgICAgIH19PntgTkVNYH08L2E+e2AgLyBLb3RsaW4gLyBTcHJpbmctQm9vdCAvIE1vbmdvZGJgfTwvaDY+XG4gICAgPHA+e2BUaGUgaWRlYSBpcyB0byBpbXBsZW1lbnQgc29tZSByZXdhcmQgbWVjaGFuaXNtIHRvIHJld2FyZCBhY3RpdmUgdXNlcnMgd2hvIGNyZWF0ZSBncmVhdFxuY29udGVudCwgY29udHJpYnV0ZSBpbiBvdXIgb25saW5lIGNvbW11bml0eS4gVGhlIHRyaWNrIGlzIHBvc3NpYmxlIG1vbmV0YXJ5IGluY2VudGl2ZVxuYXNzb2NpYXRlZCB3aXRoIGNyeXB0byBjdXJyZW5jeSBmb3IgdXNlcnMsIGFzIHdlbGwgYXMgb3RoZXIgYmVuZWZpdCBvZiBibG9jayBjaGFpbiB0ZWNoLFxuc3VjaCBhcyB0cmFuc3BhcmVuY3ksIGltbXV0YWJpbGl0eSwgY29udmVuaWVudCBhcyB3ZWxsLmB9PC9wPlxuICAgIDxwPntgSW4gZGV0YWlsLCBORU0gZmVhdHVyZXM6YH08L3A+XG4gICAgPG9sPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJvbFwiPntgcHJvb2Ygb2YgaW1wb3J0YW5jZSxgfTwvbGk+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cIm9sXCI+e2BtdWx0aS1zaWduIHRyYW5zYWN0aW9uYH08L2xpPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJvbFwiPntgZXNjcm93YH08L2xpPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJvbFwiPntgYXRvbWljIHN3YXAoZXhjaGFuZ2UpIGB9PC9saT5cbiAgICA8L29sPlxuICAgIDxwPntgSG93ZXZlciB0aGUgdHJhbnNhY3Rpb24gc3BlZWQgaXMgYWx3YXlzIGNyaXRpY2FsIGltcGVkaW1lbnQgdG8gYmxvY2sgY2hhaW4gYXBwbGljYXRpb24sXG5jYXVzZWQgYnkgbmF0dXJlIG9mIGJsb2NrIGNoYWluIHRlY2guIFRvIGFkZHJlc3MsIHdlIGFkb3B0IHByaXZhdGUgY2hhaW4sIHNpbWlsYXIgdG9cbkJpdGNvaW4ncyBsaWdodG5pbmcgbmV0d29yay5gfTwvcD5cbiAgICA8cD4mbmJzcDs8L3A+XG4gICAgPGg2PntgNS4xLjIgRGF0YS1TZXJ2aWNlLUVUTCAoTWF5IDIwMTkg4oCTIFByZXNlbnQpIGB9PGEgcGFyZW50TmFtZT1cImg2XCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2FsaWJhYmEvY2FuYWxcIixcbiAgICAgICAgXCJ0YXJnZXRcIjogXCJfYmxhbmtcIlxuICAgICAgfX0+e2BDYW5hbGB9PC9hPntgIC8gSGl2ZSAvIGB9PGEgcGFyZW50TmFtZT1cImg2XCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9ncGRiLmRvY3MucGl2b3RhbC5pby82LTAvbWFpbi9pbmRleC5odG1sXCJcbiAgICAgIH19PntgR3JlZW4gUGx1bWB9PC9hPntgIC8gYH08YSBwYXJlbnROYW1lPVwiaDZcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL3N1cGVyc2V0LmluY3ViYXRvci5hcGFjaGUub3JnL1wiXG4gICAgICB9fT57YFN1cGVyc2V0YH08L2E+PC9oNj5cbiAgICA8cD57YEZvciBkYXRhIGNvbGxlY3RlZCBmcm9tIEthZmthLCBJIGRldmVsb3BlZCBVREYgaW4gSGl2ZSB3aGljaCBjb3VsZCBwdWxsIGRhdGEgZnJvbSBrYWZrYVxud2l0aCBpbiBjZXJ0YWluIHRpbWUgd2luZG93IGRlZmluZWQgYXMgcGFyYW1ldGVycy4gVGhpcyBwcmltYXJpbHkgY29sbGVjdHMgZGF0YSBnZW5lcmF0ZWRcbmJ5IHVzZXJzJyBhY3Rpb25zLCBhcyBmYWN0IHRhYmxlLmB9PC9wPlxuICAgIDxwPntgQmVzaWRlcyB0aGlzLCBDYW5hbCBjYW4gaW1wZXJzb25hdGUgYSBteXNxbCBzbGF2ZSB0byBjb2xsZWN0IGRhdGEgY2hhbmdlcyBvbiBhIG15c3FsIGluc3RhbmNlLlxuRGltZW5zb24gdGFibGVzIGNoYW5nZXMgYXJlIGNvbGxlY3RlZCBhbmQgc3RvcmVkIGJ5IGRhdGUuYH08L3A+XG4gICAgPHA+e2BSYXcgZGF0YSAob2RzKSBjb2xsZWN0ZWQgYW5kIGxvYWQgaW50byBIaXZlIHRhYmxlcyB3aGVyZSBFVEwgcHJvY2Vzc2VzIGFyZSBpbXBsZW1lbnRlZCBieVxuSGl2ZSBTUUwsIHdoaWNoIGNvdWxkIHV0aWxpemUgc29tZSBVREYgZnVuY3Rpb25zIEkgZGV2ZWxvcGVkLCB0byBvcGVyYXRlIGRhdGEgdmlhIGh0dHBcbnNlcnZpY2VzLCBSZWRpcywgWm9va2VlcGVyLiBIaXZlIFN0b3JhZ2UgSGFuZGxlciBpcyBhbHNvIHZlcnkgdXNlZnVsIGZvciBIaXZlIHRvIGFjY2Vzc1xuZGF0YSBpbiB2YXJpb3VzIEpEQkMtY29tcGF0aWJsZSBkYXRhIHNvdXJjZS5gfTwvcD5cbiAgICA8cD57YERhdGEgaW4gSGl2ZSBpcyBsb2FkZWQgaW50byBHcmVlblBsdW0sIHdoaWNoIGlzIG11bHRpcGxlIFBvc3RncmVzcWwgaW5zdGFuY2VzIG9yZ2FuaXplZFxuaW4gY2x1c3RlciwgYWJsZSB0byBzdXBwb3J0IGFkaG9jIHF1ZXJpZXMuIGB9PC9wPlxuICAgIDxwPntgTGFzdCBwaWVjZSBpcyBTdXBlcnNldCwgYSBCSSB0b29sIHdoaWNoIHJlbmRlcnMgZGF0YSB3aXRoIGRvemVucyBvZiBkaWZmZXJlbnQgY2hhcnRzLmB9PC9wPlxuICAgIDxwPiZuYnNwOzwvcD5cbiAgICA8aDY+e2A1LjEuMyBEYXRhLVNlcnZpY2Utc2V0dXAgKEp1bCAyMDE4IOKAkyBQcmVzZW50KSBIYWRvb3AgLyBab29rZWVwZXIgLyBLYWZrYSAvIEhpdmUgLyBHcmVlbiBQbHVtYH08L2g2PlxuICAgIDxwPntgSW5zdGFsbCwgZGVwbG95IGFuZCBjb25maWd1cmUgSGFkb29wIGNsdXN0ZXIsIHdpdGggSGlnaCBBdmFpbGFiaWxpdHkgZmVhdHVyZSwgb3B0aW1pemVkXG5zZXR0aW5ncy5gfTwvcD5cbiAgICA8cD57YEluc3RhbGwgYW5kIGludGVncmF0ZSBjb21wb25lbnRzIGZvciBvdXIgZGF0YSBzZXJ2aWNlcywgaW5jbHVkaW5nOiBLYWZrYSBmb3IgZXZlbnQgYnVzO1xuSGl2ZSBmb3IgRVRMIGVuZ2luZWVyOyBHcmVlbiBQbHVtIGZvciBzdG9yYWdlIGZvciBhZGhvYyBxdWVyaWVzL2NoYXJ0czsgWm9va2VlcGVyIHRvXG5zdXBwb3J0IG90aGVycy5gfTwvcD5cbiAgICA8cD4mbmJzcDs8L3A+XG4gICAgPGg2PntgNS4xLjQgU2luZ2xlLVNpZ24tT24gKEZlYiAyMDE4IOKAkyBKdWwgMjAxOCkgYH08YSBwYXJlbnROYW1lPVwiaDZcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL29sdHUuYXBhY2hlLm9yZy9cIixcbiAgICAgICAgXCJ0YXJnZXRcIjogXCJfYmxhbmtcIlxuICAgICAgfX0+e2BBcGFjaGUgT2x0dWB9PC9hPntgIC8gTW9uZ29kYiAvIFNjYWxhIC8gTERBUGB9PC9oNj5cbiAgICA8cD57YEEgc2luZ2xlIHNpZ24gb24gZmVhdHVyZSBidWlsdCB3aXRoIEFwYWNoZSBPbHR1IExpYnJhcnkgYW5kIExEQVAgdXNpbmcgc2NhbGEvamVyc2V5L3dlYnNlcnZpY2UsXG5pdCBndWFyZHMgb3VyIGludGVybmFsIHNlcnZpY2VzIGZvciB1c2VycyBmcm9tIGRpZmZlcmVudCBkZXBhcnRtZW50cy5gfTwvcD5cbiAgICA8cD4mbmJzcDs8L3A+XG4gICAgPGg2PntgNS4xLjUgRGF0YS1taXNjLXRvb2xzIChKdWwgMjAxNyDigJMgRmViIDIwMTgpIEhpdmUgLyBLYWZrYSAvIFJlZGlzIC8gTXlzcWxgfTwvaDY+XG4gICAgPHA+e2BUaGlzIHByb2plY3QgaG9zdHMgc2V2ZXJhbCB0b29scyB0byBoZWxwIHdpdGggZGV2ZWxvcG1lbnQgdXNpbmcgSGl2ZSwgU3BhcmsuIFBsZWFzZSBjaGVjayBpdFxub3V0IG9uIGdpdGh1YmB9PC9wPlxuICAgIDxwPntgVG8gc3R1ZHkgYW5kIGFwcGx5IGhvdyB0byBsZXZlcmFnZSBuZXcgZmVhdHVyZXMgb2YgSGl2ZSwgU3BhcmssIEhhZG9vcCBmb3IgZGF0YSBwcm9jZXNzLCBJXG5jcmVhdGVkIGFuZCBhbSBkZXZlbG9waW5nIHNvbWUgZnVuY3Rpb25zIGZvciBIaXZlIGFuZCBzcGFyay4gSXQgc291bmRzIGxpa2UgcmVpbnZlbnRpbmcgd2hlZWwsXG5idXQgSSBiZWxpZXZlIGl0IGhhcyBjZXJ0YWluIHZhbHVlIGFzOmB9PC9wPlxuICAgIDxvbD5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwib2xcIj57YGl0IHV0aWxpemVzIHRoZSBkeW5hbWljIGNoYXJhY3RlcmlzdGljIG9mIHNjYWxhIGxhbmd1YWdlLCBzbyB0aGF0IGl0IHJlY29nbml6ZXMgdGhlXG5tb2RpZmljYXRpb24gb2Ygc2NhbGEgc2NyaXB0IGZpbGVzIG9uIEhERlMsIHRha2VzIGVmZmVjdCBpbW1lZGlhdGVseSwgc2F2aW5nIHRoZSBjdW1iZXJzb21lXG5zdGVwcyBvZiBjb21waWxlLCBwYWNrYWdlLCBkZXBsb3ltZW50LCByZXN0YXJ0IHNwYXJrIHByb2Nlc3MuIFRoZW9yZXRpY2FsbHkgdGhpcyBjYW4gYXBwbHlcbm90aGVyIEpTUjIzMyBjb21wYXRpYmxlIGxhbmd1YWdlcy5gfTwvbGk+XG4gICAgPC9vbD5cbiAgICA8cD57YDEuMSBJIGhhdmUgZmluaXNoZWQgdGhlIGZlYXR1cmUgdG8gc3VwcG9ydCBweXRob24gYXMgd2VsbCwgcHl0aG9uIGNvZGUgY2FuIGJlIHNhdmVkIGFuZCBlZGl0ZWRcbndpdGggSFVFLCB0aGVuIGl0IHdpbGwgdGFrZSBlZmZlY3QgaW1tZWRpYXRlbHkgdG9vYH08L3A+XG4gICAgPG9sIHsuLi57XG4gICAgICBcInN0YXJ0XCI6IDJcbiAgICB9fT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwib2xcIj5cbiAgICAgICAgPHAgcGFyZW50TmFtZT1cImxpXCI+e2BJdCBjYW4gdXNlIGp1c3QgSElWRSBzcWwgdG8gbG9hZC9zZW5kIGRhdGEgdmlhIEhUVFAsIGthZmthLCBSZWRpcyB3aXRoIGV4dGVuZGVkIEhJVkVcbmZ1bmN0aW9uLiBNb3N0IG9mIGEgRVRMIHByb2Nlc3MgY2FuIGJlIGltcGxlbWVudGVkIGJ5IG9ubHkgSElWRSBzcWwuYH08L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJvbFwiPlxuICAgICAgICA8cCBwYXJlbnROYW1lPVwibGlcIj57YFNvbWUgc3VwcG9ydGl2ZSBmZWF0dXJlcyBhcmUgYWxzbyBwcm92aWRlZCwgc3VjaCBzaW1wbGUgdGFzayBzY2hlZHVsZXIsIHRhc2sgZXhlY3V0aW9uXG50cmFja2luZy5gfTwvcD5cbiAgICAgIDwvbGk+XG4gICAgPC9vbD5cbiAgICA8cD57YEZlZWRiYWNrIG9yIGNvbnRyaWJ1dGlvbiBpcyBoaWdobHkgYXBwcmVjaWF0ZWQuXG5gfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3RoZW5ldGNpcmNsZS9kYXRhLW1pc2MtdG9vbHNcIixcbiAgICAgICAgXCJ0YXJnZXRcIjogXCJfYmxhbmtcIlxuICAgICAgfX0+e2BTb3VyY2Ugb24gZ2l0aHViYH08L2E+PC9wPlxuICAgIDxwPiZuYnNwOzwvcD5cbiAgICA8aDY+e2A1LjEuNSBWaWRlbyBDb252ZXJzaW9uIFNlcnZpY2UgKEphbiAyMDE2IC0gUHJlc2VudCkgYH08YSBwYXJlbnROYW1lPVwiaDZcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL2ZmbXBlZy5vcmcvXCIsXG4gICAgICAgIFwidGFyZ2V0XCI6IFwiX2JsYW5rXCJcbiAgICAgIH19PntgRkZtcGVnYH08L2E+e2AgLyBLb3RsaW4gLyBgfTxhIHBhcmVudE5hbWU9XCJoNlwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHA6Ly9yZWQ1Lm9yZy9cIlxuICAgICAgfX0+e2BSZWQ1YH08L2E+PC9oNj5cbiAgICA8cD57YEEgc2VydmljZSBjYW4gY29udmVydCB2aWRlb3MgdXBsb2FkZWQgYnkgdXNlcnMgdG8gZGlmZmVyZW50IGZvcm1hdHMsIGFsc28gYWRkIHdhdGVybWFya3NcbmFuZCBleHRyYWN0IHRodW1ibmFpbHMuIEkgZGV2ZWxvcGVkIHRoaXMgYmFzZWQgb24gUmVkNSBTZXJ2ZXIgd2l0aCBTcHJpbmcsIFNwcmluZy1NVkMgYW5kXG5rb3RsaW4uYH08L3A+XG4gICAgPHA+e2BCZXNpZGVzIHRoZXNlLCB3ZSBhcmUgZGV2ZWxvcGluZyB2aWRlbyBsaXZlLXN0cmVhbWluZyBmZWF0dXJlIHRvIG1lZXQgdGhlIG5lZWRzIG9mXG53YXRjaGluZyB2aWRlbyBzdHJlYW0gb24gYnJvd3NlciBvZiBtb2JpbGUgYXMgd2UgbGVhcm4gdGhhdCBtYWpvcml0eSBvZiBhY2Nlc3Nlc1xuYXJlIGZyb20gbW9iaWxlIHBob25lcy5gfTwvcD5cbiAgICA8cD4mbmJzcDs8L3A+XG4gICAgPGg2PntgNS4xLjYgSVBTIChJbWFnZSBQcm9jZXNzIFNlcnZpY2UpIChKYW4gMjAxMyAtIEp1bCAyMDE4KSBgfTxhIHBhcmVudE5hbWU9XCJoNlwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vb3BlbmN2Lm9yZy9cIixcbiAgICAgICAgXCJ0YXJnZXRcIjogXCJfYmxhbmtcIlxuICAgICAgfX0+e2BPcGVuQ1ZgfTwvYT57YCAvIEtvdGxpbiAvIFNwcmluZy1ib290YH08L2g2PlxuICAgIDxwPntgVGhlIHNlcnZpY2UgcHJvY2Vzc2VzIGltYWdlcyB1cGxvYWRlZCBieSB1c2Vycywgd2l0aCBmZWF0dXJlcyBvZiBjcm9wLCBzY2FsZSwgb3ZlcmxheVxudGV4dCBhbmQgb3RoZXIgaW1hZ2VzLCByb3RhdGUuIGB9PC9wPlxuICAgIDxwPntgVGhlIGRlc2lnbiBib3Jyb3dlZCB0aGUgaWRlYSBvZiBDU1MsIHdlIGRlZmluZSBzb21lIHNjaGVtYXMgaW4ganNvbiBsaWtlIGNzcyB0byBkZXNjcmliZVxuaG93IHRoZSBpbWFnZXMgc2hvdWxkIGJlIGNyb3AsIHNjYWxlLCAuLi5ldGMuIExpa2UgQ1NTLCB3ZSBhbHNvIGhhZCB2YXJpYWJsZXMgaW4gdGhlXG5zY2hlbWFzIHNvIGltYWdlIHByb2Nlc3NpbmcgY291bGQgYmUgZHluYW1pYyBhY2NvcmRpbmcgdG8gcmVxdWVzdHMuYH08L3A+XG4gICAgPHA+e2BUaGUgZGV2ZWxvcG1lbnQgZm9yIHRoaXMgaXMgb25nb2luZyBmb3IgeWVhcnMsIGFzIHdlIGFsd2F5cyBmb3VuZCBzb21lIG5ldyBjaGFsbGVuZ2VzLlxuRmlyc3RseSwgd2l0aCB1cGdyYWRlIG9mIG1vYmlsZSBwaG9uZXMgb2YgdXNlcnMgbGVkIHRvIGltYWdlcyBzaWduaWZpY2FudGx5IGluY3JlYXNpbmcgaW5cbmJvdGggbnVtYmVyIGFuZCBzaXplICgzMDAweDIwMDAtaXNoKSBvdmVyIGp1c3QgY291cGxlIG9mIHllYXJzLiBUaGUgZWFybHkgdmVyc2lvbiBvZiBJUFNcbmZhaWxlZCB0byBwcm9jZXNzIGltYWdlcyBmYXN0LiBgfTwvcD5cbiAgICA8cD57YEFmdGVyIHN0dWR5aW5nIGxvZ3MgYW5kIHRlc3RzLCBJIGZpcnN0bHkgbWFkZSBwcm9jZXNzaW5nIGV4ZWN1dGVkIGluIHBhcmFsbGVsIHRocmVhZHMgdG9cbm1heGltaXplIHVzZSBvZiBtdWx0aS1jb3JlczsgY2hlY2tlZCB0aGUgbWVtb3J5IGZvb3RwcmludCB0byByZWR1Y2UgdW5uZWNlc3NhcnkgY29weVxuKGltYWdlIGRhdGEgaXMgbWFzc2l2ZSBhZnRlciB1bmNvbXByZXNzaW5nKTsgcmVwbGFjZWQgUHJvY2Vzc2luZyBMaWJyYXJ5IChiYXNlZCBvbiBKYXZhKVxud2l0aCBPcGVuQ1YgKGJhc2VkIG9uIEMrKyk7YH08L3A+XG4gICAgPHA+e2BJIGFsc28gdHJpZWQgdG8gZXh0ZW5kIGl0IHRvIHN1cHBvcnQgR0lGLCBmYWNlIHJlY29nbml0aW9uLCBzaW1pbGFyIGltYWdlIHNlYXJjaCwgZXRjLmB9PC9wPlxuICAgIDxwPiZuYnNwOzwvcD5cbiAgICA8aDY+e2A1LjEuNyBKb2ludCAoSnVsIDIwMTQg4oCTIEp1bCAyMDE1KSBgfTxhIHBhcmVudE5hbWU9XCJoNlwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vd3d3Lm9yYWNsZS5jb20vamF2YS90ZWNobm9sb2dpZXMvamF2YS1lZS1nbGFuY2UuaHRtbFwiLFxuICAgICAgICBcInRhcmdldFwiOiBcIl9ibGFua1wiXG4gICAgICB9fT57YEphdmFFRWB9PC9hPntgIC8gYH08YSBwYXJlbnROYW1lPVwiaDZcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL3N3YWdnZXIuaW8vXCJcbiAgICAgIH19PntgU3dhZ2dlcmB9PC9hPjwvaDY+XG4gICAgPHA+e2BUaGlzIGlzIGFjdHVhbGx5IGEgb3Blbi1zb3VyY2UgYW5kIHN0dWR5IHByb2plY3QuIEkgbm90aWNlZCB0aGUgZ3JlYXQgZGV2ZWxvcG1lbnQgb2ZcbmZyb250ZW5kIHRlY2hub2xvZ3kgYW5kIGdhcCBiZXR3ZWVuIGl0IHdpdGggYmFja2VuZCB0ZWNobm9sb2d5LmB9PC9wPlxuICAgIDxwPntgQmVmb3JlLCBCYWNrZW5kIHRlY2ggc3RhY2sgKEpTRiwgUEhQLi4uKSBjb3ZlcnMgdGhlIHJlbmRlcmluZyBvZiBIVE1MIHdpdGggdGVtcGxhdGVcbnRlY2hub2xvZ3kuIFRoZXNlIGJlY2FtZSBxdWlja2x5IG91dG1vZGVkIGFzIHdlYnBhZ2UgZGV2ZWxvcG1lbnQgd2VyZSB0YWtlbiBvdmVyIGJ5XG5KYXZhc2NyaXB0IGxpYnJhcmllcy5gfTwvcD5cbiAgICA8cD57YEhvd2V2ZXIsIGJhY2tlbmQgdHVybnMgdG8gc2VydmljZSBvcmllbnRlZC4gUmVzdGZ1bCBzZXJ2aWNlcyB3ZXJlIGRlc2NyaWJlZCBieSBXU0RMLFxud2hpY2ggd2FzIG5vdCByZWNvZ25pemVkIGJ5IGphdmFzY3JpcHQoc2luY2UganMgaXMgZHluYW1pYywgd2Vhay10eXBlZCBsYW5ndWFnZSkuYH08L3A+XG4gICAgPHA+e2BGaW5hbGx5LCBUeXBlc2NyaXB0IGFsbGVpdmF0ZWQgdGhlIHByb2JsZW0gYnV0IG5vdCB1bHRpbWF0ZSBzb2x1dGlvbi4gSSB0cmllZCB0byBidWlsZFxuc29tZSBsaWJyYXJ5IHRvIHJlYWQsIHBhcnNlIHRoZSBhbm5vdGF0aW9ucyBvbiBSZXN0ZnVsIHNlcnZpY2UgQVBJLCBhbmQgYXV0b21hdGljYWxseVxuZ2VuZXJhdGUgd2hvbGUgYnVuY2ggb2YgdHlwZXNjcmlwdCBkZWZpbml0aW9ucyBmb3Igc2VydmljZSBpbnZvY2F0aW9uLmB9PC9wPlxuICAgIDxwPntgTm93IHdlIGtub3cgdGhhdCBTd2FnZ2VyIGRvZXMgdGhpcyB3YXkgYmV0dGVyLiBJIHN0aWxsIGxlYXJuZWQgYSBsb3QgZnJvbSB0aGlzIHVzZWxlc3NcbnByb2plY3QuYH08L3A+XG4gICAgPHA+Jm5ic3A7PC9wPlxuICAgIDxoNj57YDUuMS43IE1RdWV1ZSBEaXNwYXRjaGVyIChNYXIgMjAxNCDigJMgMjAxNikgYH08YSBwYXJlbnROYW1lPVwiaDZcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL3d3dy5yYWJiaXRtcS5jb21cIixcbiAgICAgICAgXCJ0YXJnZXRcIjogXCJfYmxhbmtcIlxuICAgICAgfX0+e2BSYWJiaXQgTVF1ZXVlYH08L2E+e2AgLyBKYXZhIDggLyBSZWFjdGB9PC9oNj5cbiAgICA8cD57YFRoZSBzeXN0ZW0gY29uc3RhbnRseSBjb25zdW1lcyBtZXNzYWdlcyBmcm9tIFJhYmJpdCBNUXVldWUgYWNjb3JkaW5nIHRvIHByZWRlZmluZWQgcnVsZXMsXG5yZWxheXMgbWVzc2FnZXMgb3ZlciBodHRwIHByb3RvY29sIHRvIGNvcnJlc3BvbmRpbmcgUEhQIG1vZHVsZXMuIEl0IGFsc28gaW1wbGVtZW50cyByZXRyeVxubWVjaGFuaXNtIGFuZCBmYWlsZWQgbWVzc2FnZXMgc3RvcmFnZSBmb3IgbWFpbnRlbmFuY2UuYH08L3A+XG4gICAgPHA+e2BUaGUgZGVzaWduIGlzIGEgc2VyaWVzIG9mIHByb2R1Y2VyLWNvbnN1bWVyIHBhdHRlcm5zIGNvbWJpbmVkIHdpdGggc3RhdGUgdHJhbnNpdCwgd2l0aFxuZWFjaCBzdGVwIHBlcmZvcm1zIGRpZmZlcmVudCB0YXNrczogYH08L3A+XG4gICAgPG9sPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJvbFwiPntgcHVsbCBmcm9tIHF1ZXVlOyBgfTwvbGk+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cIm9sXCI+e2Bwb3N0IHRvIGh0dHAgc2VydmljZTtgfTwvbGk+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cIm9sXCI+e2BjaGVjayByZXN1bHQgdG8gZGVjaWRlIHdoZXRoZXIgdG86XG4zLjEgcmVwbHkgcXVldWUgd2l0aCBhY2s7XG4zLjIgc3RvcmUgZmFpbGVkIG1lc3NhZ2UsIG1hcmsgdGhlIHJldHJ5IGNvdW50O2B9PC9saT5cbiAgICA8L29sPlxuICAgIDxwPntgVGhlIGNoYWxsZW5nZSBpcyBidWlsZGluZyBhIGZhc3QgYXNzZW1ibHkgbGluZSB3aXRoIGFzeW5jIHF1ZXVlcywgYW5kIHR3ZWFrIHBlcmZvcm1hbmNlXG5vZiBIVFRQIGxpYnJhcnkuIGB9PC9wPlxuICAgIDxwPiZuYnNwOzwvcD5cbiAgICA8aDU+e2A1LjEuOCBTZWFyY2ggU2VydmljZSAoT2N0IDIwMTkgLSBwcmVzZW50KWB9PC9oNT5cbiAgICA8cD57YFNvbHIgYmFzZWQgZnVsbCB0ZXh0IHNlYXJjaCBzZXJ2aWNlLCBkZXNpZ25lZCBhbmQgZGV2ZWxvcGVkIHRvIHN1cHBvcnQgd2Vic2l0ZXMsXG5FbmQgdXNlcnMgc2VhcmNoIHByb2ZpbGVzLCBsb2NhdGlvbnMsIGZlZWRzIHZpYSBzZWFyY2ggc2VydmljZSxcbm9uIHRoZSBvdGhlciBoYW5kbGUsIERhdGEgc2VydmljZSBjb2xsZWN0cyB1c2Vycycgc2VhcmNoIGtleXdvcmQgYW5kIGZvbGxvd2luZyBicm93c2VcbmFjdGlvbnMsIHRvIGZlZWQgcmVsYXRlZCBkYXRhIGFuYWx5c2lzLmB9PC9wPlxuICAgIDxwPiZuYnNwOzwvcD5cbiAgICA8cD4mbmJzcDs8L3A+XG4gICAgPGg0PntgNS4yIFNlbmlvciBKYXZhIEVuZ2luZWVyYH08L2g0PlxuICAgIDxwPntgQXQgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vd3d3LmRic2NoZW5rZXIuY29tL2dsb2JhbFwiLFxuICAgICAgICBcInRhcmdldFwiOiBcIl9ibGFua1wiXG4gICAgICB9fT57YERCIFNjaGVua2VyIFNTQ2B9PC9hPntgXG5BdWcgMjAxMCDigJMgSnVsIDIwMTIgLiAyIHlycyBhdCBOYW5qaW5nLCBKaWFuZ3N1LCBDaGluYWB9PC9wPlxuICAgIDxwPntgU29mdHdhcmUgRW52aXJvbm1lbnQ6XG5XZWJzcGhlcmUsIFNlYW0sIEpTRiwgT3JhY2xlLCBFSkIsIEpQQSwgTERBUFxuRGV2ZWxvcG1lbnQgVG9vbHM6XG5FY2xpcHNlICsgSkJvc3NUb29sc2B9PC9wPlxuICAgIDxwPntgUHJvamVjdCBEZXNjcmlwdGlvbjpgfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue319PntgVGhlIFNNUE5HIHN5c3RlbSBpcyBsZXZlcmFnZWQgYnkgbWFueSBkaWZmZXJlbnQgYXNwZWN0cyBvZiBKRUUgdGVjaG5vbG9naWVzLCBcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntgd2hvbGUgSkVFIHN0YWNrIGlzIGFwcGxpZWQgaW4gdGhlIHN5c3RlbSwgdG8gcHJlc2VudCB1c2VycyBhIG1vZGVybml6ZWQgYW5kIGNsZWFuXG5hcHBsaWNhdGlvbi4gSW4gb3JkZXIgdG8gZ2F0aGVyIGFuZCBkaXNwYXRjaCBsb2dpc3RpYyB0cmFuc2FjdGlvbiBpbmZvcm1hdGlvbiBmcm9tXG5tYW55IGJyYW5jaGVzIG92ZXIgdGhlIHdvcmxkLCB0aGUgU01QTkcgc3lzdGVtIGlzIGFsc28gYmFja2VkIGJ5IG1hbnkgb3RoZXIgbWVzc2FnZVxuc291cmNlcy4gYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLnt9fT57YEkgaGFkIGJlZW4gd29ya2luZyBvbiB0aGlzIHByb2plY3QgaW4gR2VybWFueSB3aXRoIEdlcm1hbiBjb2xsZWFndWVzIGZvciBzaXggd2Vla3MuXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YEZyb20gY2xpZW50cywgbmV3IGZlYXR1cmVzIHdlcmUgZGVzaWduZWQgZm9yIGhhbmRsaW5nIGJvb2tpbmcgYW5kIHRyYWNraW5nIG9wZXJhdGlvbnMuXG5JdCBvdWdodCB0byByZXBsYWNlIHRoZSBsZWdhY3kgU01QTkcgc3lzdGVtIGFuZCBwcmVzZW50IGJ1c2luZXNzIGxvZ2ljIGluIG1vcmUgbW9kZXJuXG5hbmQgdXNlci1mcmllbmRseSBzdHlsZS5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue319PntgQXMgYSBtZW1iZXIgb2YgdGhlIGdyb3VwLCBJIGhhZCBtYW5hZ2VkIHRvIGNvbW11bmljYXRlIGFuZCBjb2xsYWJvcmF0ZSB3aXRoXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YGNvbGxlYWd1ZXMgZnJvbSBkaWZmZXJlbnQgY291bnRyaWVzIGFuZCB3aXRoIGRpZmZlcmVudCBiYWNrZ3JvdW5kcy4gRnJvbSBteSBleHBlcmllbmNlLFxuSSBsZWFybmVkIHRoYXQgc29tZSB0aGluZ3MgYXJlIGJleW9uZCBsYW5ndWFnZSBiYXJyaWVyLCBtYWlubHkgY2F1c2VkIGJ5IGRpZmZlcmVudFxubWluZHNldCBhbmQgY3VsdHVyZSBvciByb2xlcywgd2hpbGUgc29tZSBjb21tdW5pY2F0aW9uIHNraWxscyB3b3VsZCBiZSB2ZXJ5IGVmZmVjdGl2ZVxuc29sdXRpb24gdG8gYnJlYWsgZG93biBtaXN1bmRlcnN0YW5kaW5nIGFuZCBkZWxpdmVyIGlkZWFzLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57fX0+e2BUaGlzIGpvYiB0YXVnaHQgbWUgbXVjaCBhYm91dCB0aG9zZSBhZHZhbmNlZCB0b29scyB1c2VkIGluIGVudGVycHJpc2UgZGV2ZWxvcG1lbnQuIFxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2Bzb25hciBmb3IgY29kZSBjaGVja2luZywgSmVua2lucyBmb3IgY29udGludW91cyBpbnRlZ3JhdGlvbiwgRmlzaGV5ZXMgZm9yIHJlZmFjb3RvcnksXG5hbGwgdGhvc2UgYXJlIHZlcnkgdXNlZnVsIHRvb2xzIGZvciBiaWcgc2NhbGUgc29mdHdhcmUgZGV2ZWxvcG1lbnQuYH08L3A+XG4gICAgPHA+e2BSZXNwb25zaWJpbGl0aWVzOlxuTW9kdWxlIERlc2lnbiwgUHJvZ3JhbW1pbmcgYW5kIHVuaXQgdGVzdGluZywgY29sbGFib3JhdGlvbiBiZXR3ZWVuIEdlcm1hbiBjdXN0b21lcnNcbmFuZCBvdGhlciBkZXZlbG9wZXJzLmB9PC9wPlxuICAgIDxwPiZuYnNwOzwvcD5cbiAgICA8aDU+e2BQcm9qZWN0c2B9PC9oNT5cbiAgICA8aDY+e2A1LjIuMSBlLXNjaGVua2VyIChKdWwgMjAxMCDigJMgSnVuIDIwMTEpIEphdmFFRSAvIGB9PGEgcGFyZW50TmFtZT1cImg2XCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly93d3cub3JhY2xlLmNvbS90ZWNobmV0d29yay9qYXZhL2phdmFlZS9qYXZhc2VydmVyZmFjZXMtMTM5ODY5Lmh0bWxcIixcbiAgICAgICAgXCJ0YXJnZXRcIjogXCJfYmxhbmtcIlxuICAgICAgfX0+e2BKU0ZgfTwvYT57YCAvIGB9PGEgcGFyZW50TmFtZT1cImg2XCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiaHR0cDovL3NlYW1mcmFtZXdvcmsub3JnXCIsXG4gICAgICAgIFwidGFyZ2V0XCI6IFwiX2JsYW5rXCJcbiAgICAgIH19PntgU2VhbWB9PC9hPjwvaDY+XG4gICAgPHA+e2BUaGlzIHByb2plY3QgaXMgdXNlZCBmb3IgREIgU2NoZW5rZXIgY29ycG9yYXRpb27igJhzIGxvZ2lzdGljcyBtYW5hZ2VtZW50LiBJbmNsdWRlIGN1c3RvbWVyXG5pbmZvcm1hdGlvbiBtYWludGVuYW5jZSwgYm9va2luZyBtYW5hZ2VtZW50LCBsb2dpc3RpY3MgYnJhbmNoIG9mZmljZSBtYWludGVuYW5jZSwgY2FyZ29cbnRyYWNraW5nIGFuZCB0cmFjaW5nIHByb2Nlc3MuIEl0IGNvdmVycyB0aHJlZSB0eXBlcyBvZiB0cmFuc3BvcnQgbW9kZSBpbiBsb2dpc3RpY3MgYXJlYSwgdGhleVxuYXJlIEFJUiwgT0NFQU4gYW5kIExBTkQgcmVzcGVjdGl2ZWx5LiBCb3RoIGN1c3RvbWVyIGFuZCBidXNpbmVzcyBjbGVyayBhcm91bmQgdGhlIHdvcmxkIHNob3VsZFxudXNlIHRoaXMgc3lzdGVtIHRvIGRlYWwgd2l0aCBsb2dpc3RpY3MuYH08L3A+XG4gICAgPHA+e2BUaGUgc3lzdGVtIGlzIGVtcG93ZXJlZCBieSBKRUUgdGVjaCBzdGFjayBhbmQgU2VhbSBGcmFtZXdvcmsuIFRoZSBhcHBsaWNhdGlvbiBvZiBKRUUgdGVjaCBpc1xubW9kdWxhciBhbmQgbXVsdGktbGF5ZXJlZCBhbmQgZGV2ZWxvcGVycyBhcmUgcmVsaWV2ZWQgZnJvbSBtdWNoIHdvcmsgdG8gZGVhbCB3aXRoIGRhdGFiYXNlIG9yXG53ZWIgc2VydmVyLiBUaGUgbmV3IEpFRSA2IHNwZWMgcHJvdmlkZXMgRUpCMy4xLCBDREkoQ29udGV4dCBEZXBlbmRlbmN5IEluamVjdGlvbiksIFJFU1RmdWwgQVBJLFxuSlNGIGV0Yywgd2hpY2ggYXJlIHZlcnkgSmF2YS1Qcm9ncmFtbWVyLWZyaWVuZGx5LmB9PC9wPlxuICAgIDxwPiZuYnNwOzwvcD5cbiAgICA8aDQ+e2A1LjMgU2VuaW9yIEphdmEgRW5naW5lZXJgfTwvaDQ+XG4gICAgPHA+e2BBdCBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly93d3cuenRlLmNvbS5jbi9nbG9iYWwvXCIsXG4gICAgICAgIFwidGFyZ2V0XCI6IFwiX2JsYW5rXCJcbiAgICAgIH19PntgWlRFIENvcG9yYXRpb25gfTwvYT57YFxuQXByIDIwMDgg4oCTIEF1ZyAyMDEwIC4gMiB5cnMgNSBtb3MgYXQgTmFuamluZywgSmlhbmdzdSwgQ2hpbmFgfTwvcD5cbiAgICA8cD57YFByb2plY3QgRGVzY3JpcHRpb246YH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLnt9fT57YEl0IGlzIG9mdGVuIHJlZmVycmVkIGFzIE5NUywgYW5kIGluY2x1ZGVzIHZhcmlvdXMgZnVuY3Rpb24gbW9kdWxlcyBmb3IgZGlmZmVyZW50XG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YG5ldHdvcmsgbWFuYWdlbWVudHMsIHN1Y2ggYXMgVmxhbiwgVnBuLCBTd2l0Y2hlciwgUm91dGVyLiBiZWNhdXNlIHRhcmdldFxuT3BlcmF0aW9uIFN5c3RlbXMgYXJlIGJvdGggb2Ygd2luZG93cyBhbmQgU29sYXJpc2UgKGxvdHMgb2YgTk1TIHJ1biBvbiBTVU4gc2VydmVyKVxuLCBzbyBKYXZhIGFuZCBTd2luZyBVSSBjb3VsZCBiZSB0aGUgYmVzdCBvcHRpb24uYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLnt9fT57YEpFRSB0ZWNobmlxdWVzLCBzdWNoIGFzIEVKQiwgSk1TLCBhcmUgdmVyeSBoZWxwZnVsIGZvciBidWlsZGluZyBoaWdobHkgZmxleGlibGUgXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YFN5c3RlbS4gU05NUCBhbmQgQ0xJIGFyZSB0d28gbWFpbmx5IG1lYXN1cmVzIHVzZWQgaW4gZGV2aWNlIG9wZXJhdGlvbnMuXG5UaGlzIHByb2R1Y3QgaGFzIGJlZW4gZGV2ZWxvcGVkIGZvciBjb3VwbGUgeWVhcnNuZXRudW1lbiBOZXR3b3JrIE1hbmFnZW1lbnQsIGFuZCBpdCBpc1xuZ2V0dGluZyBtb3JlIGNhcGFibGUgb2YgIG1hbmFnZW1lbnQgb2YgYmlnIHNjYWxlIG5ldHdvcmsuIG91ciB0YXJnZXQgaXMgdG8gbWFrZSBpdCBtb3JlXG5lZmZlY3RpdmUgYW5kIHJvYnVzdC5gfTwvcD5cbiAgICA8cD57YFJlc3BvbnNpYmlsaXRpZXM6XG5JIGFtIHdvcmtpbmcgaW4gc3VwcG9ydCBncm91cCB0aGF0IGRldmVsb3BlcnMgdXRpbGl0aWVzIG1vZHVsZXMgcmVsaWV2aW5nIG90aGVyXG53b3JrbWF0ZXMgb2YgdHJpZmxlcyBzdWNoIGFzIERCIG9wZXJhdGlvbnMsIFVJIHBhdHRlcm4uIHdlIGZvdW5kIHRoYXQgbW9zdCBvZlxuYnVzaW5lc3MgbW9kdWxlcyBtaWdodCBpbmNsdWRlIHNhbWUgZnVuY3Rpb25zLCBhbmQgd2UgYWJzdHJhY3QgdGhvc2UsIGFuZCBwbGFuIHRvXG5idWlsZCBzdXBwb3J0IGJhc2UgbW9kdWxlLCB0aGlzIHdhcyBteSBjaGFsbGVuZ2luZyBqb2IuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLnt9fT57YExlc3NvbiBJIGxlYXJuZWQsIFRvIGRldmVsb3AgYmFzZSBjb21wb25lbnRzIHVzZWQgdG8gc3VwcG9ydCBtYW55IG90aGVyIFxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2Bjb25jcmV0ZSBtb2R1bGVzLCBpdCBpcyBpbXBvcnRhbnQgbm90IHRvIGFidXNlIGRlc2lnbiBwYXR0ZXJucyBhbmQgY29tcGxpY2F0ZSB0aGVcbmludGVyZmFjZS4gb3RoZXJ3aXNlLCBjb2xsZWFndWVzIHdvdWxkIGhhdGUgeW91ciBvdmVyLWVuZ2luZWVyaW5nIGNvZGUuIE1vcmUgb3ZlcixcbmludGVyZmFjZXMgc2hvdWxkIGJlIG1hZGUgZmxleGlibGUgZW5vdWdoIHdpdGggT09QIHByaW5jaXBsZXMgc28gdGhhdCBjb21wb25lbnRzXG5jYW4gYmUgcmV1c2VkIGluIHZhcmlvdXMgY2FzZXMgYXQgbWluaW11bSBjb3N0LCBvdGhlcndpc2UgeW91ciBtYW5hZ2VyIHdvdWxkIGhhdGVcbnlvdXIgY29kZS5gfTwvcD5cbiAgICA8aDU+e2BQcm9qZWN0c2B9PC9oNT5cbiAgICA8aDY+e2A1LjMuMSBuZXRudW1lbiBOZXR3b3JrIE1hbmFnZW1lbnQgKE1heSAyMDA4IOKAkyBBdWcgMjAxMClgfTwvaDY+XG4gICAgPHA+e2BUaGlzIHBsYXRmb3JtIGlzIGRldmVsb3BlZCBieSBaVEUgZGF0YSBuZXR3b3JrIGRlcGFydG1lbnQuIEl0IGNvbnNpc3RzIG9mIGNvbXBvbmVudHNcbm9mIG5ldHdvcmsgaW50ZXJmYWNlLCBTTk1QLCB0ZWxuZXQsIFBlcnNpc3RlbmNlIGxheWVyLCBVc2VyIEludGVyZmFjZXMgYXNzZW1ibGVkIGluXG5hIG1vZHVsYXIgbWFubmVyLiBgfTwvcD5cbiAgICA8cD57YEZyb20gdGVjaG5pY2FsIHBvaW50IG9mIHZpZXcsIGl0IGlzIGVtcG93ZXJlZCBieSBjb21iaW5hdGlvbiBvZiBKRUUgYW5kIFN3aW5nXG50ZWNoIHN0YWNrIHNvIGl0IGlzIHBvcnRhYmxlIGFuZCBjb21wYXRpYmxlIHRvIGRpZmZlcmVudCBkYXRhYmFzZXMgYW5kIG90aGVyXG5zeXN0ZW1zIGJ1aWx0IG9uIEphdmEuYH08L3A+XG4gICAgPHA+e2BGcm9tIGFyY2hpdGVjdHVyZSBwb2ludCBvZiB2aWV3LCBJdCBpcyBkZXNpZ25lZCB0byBiZSBtb2R1bGFyIGFuZCBleHRlbnNpYmxlLlxuQ29tcG9uZW50cyBmb3IgZGlmZmVyZW50IGJ1c2luZXNzIGxvZ2ljcyBhcmUgZGV2ZWxvcGVkIGVhc2lseSBiYXNlZCBvbiBwbGF0Zm9ybVxuaW5mcmFzdHJ1Y3R1cmUgbW9kdWxlcywgdGhleSBpbnRlcmFjdCB2aWEgaW50ZXJmYWNlcyBhbmQgSk1TIG1lc3NhZ2UuYH08L3A+XG4gICAgPHA+e2BBcyB0byBteSB3b3JrIGluIHRoaXMgcHJvamVjdCwgSSB3YXMgdGFza2VkIHRvIGRldmVsb3AgdXRpbGl0aWVzIGFuZCBVSSBmcmFtZXdvcmtcbnRvIHN1cHBvcnQgb3RoZXIgY29sbGVhZ3VlcycgZGV2ZWxvcG1lbnQuIEkgYXBwbGllZCBkZXNpZ24gcGF0dGVybnMgaW5zaWRlIHRoZVxubW9kdWxlIGZvciBmbGV4aWJpbGl0eSBhbmQgbW9kdWxhcml0eSBhbmQgZXhwb3NlZCBpbnRlcmZhY2VzIGZvciBzaW1wbGljaXR5LiBVc2Vyc1xuc2ltcGx5IHVzZSB0aGVtIG9yIGluaGVyaXQgdGhlbS4gYH08L3A+XG4gICAgPHA+Jm5ic3A7PC9wPlxuICAgIDxoND57YDUuNCBTZW5pb3IgSmF2YSBFbmdpbmVlcmB9PC9oND5cbiAgICA8cD57YEF0IGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJodHRwOi8vd3d3LmxpYW5jaHVhbmcuY29tL1wiLFxuICAgICAgICBcInRhcmdldFwiOiBcIl9ibGFua1wiXG4gICAgICB9fT57YEFzaWFJbmZvIExpbmthZ2VgfTwvYT57YFxuRmViIDIwMDYg4oCTIEFwciAyMDA4IC4gMiB5cnMgMyBtb3MgYXQgTmFuamluZywgSmlhbmdzdSwgQ2hpbmFgfTwvcD5cbiAgICA8cD57YFByb2R1Y3QgRGV2ZWxvcG1lbnRcbkkgd29ya2VkIGluIExpYW5DaHVhbmcgVGVjaG5vbG9neSB0aGF0IGhhcyBiZWVuIHRha2VuIGJ5IEFzaWFJbmZvIGFmdGVyIG15XG5yZXNpZ25hdGlvbi4gRHVyaW5nIHRoYXQgcGVyaW9kLCBJIHRvb2sgcGFydCBpbiBkZXZlbG9wbWVudCBvZiBTQVMgc3lzdGVtLiBUaGlzXG53ZWItYmFzZWQgc3lzdGVtIHdhcyBkZXNpZ25lZCB0byBjb2xsZWN0IGFuZCBhbmFseXplIGJ1c2luZXNzIG9wZXJhdGlvbiBkYXRhIGluXG5iaWcgc2NhbGUgZW50ZXJwcmlzZSBieSBpbnRlcmNlcHRpbmcgdGhlIG5ldHdvcmsgdHJhZmZpYyBpbiBpbnRyYW5ldCB3aXRob3V0IGFueVxuaW50cnVzaW9uIG9uIGV4aXN0ZW50IHN5c3RlbXMuIEZ1cnRoZXIgbW9yZSwgU3lzdGVtIGFkbWlucyBhcmUgYWxzbyBhYmxlIHRvIGRlZmluZVxuYnVzaW5lc3MgcnVsZXMgdG8gbW9uaXRvciBvcGVyYXRpb25zIG9uIGNyaXRpY2FsIHJlc291cmNlcywgc3VjaCBhcyBkYXRhYmFzZSBhbmRcbmhvc3RzLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57fX0+e2BBcyBkZXNpZ25lciBvZiB0aGUgYmFjayBlbmQgc2VydmVyIG1vZHVsZSBvZiB0aGUgcHJvZHVjdCwgSSBzdHVkaWVkIHNvbWUgXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YHBhdHRlcm5zIG9mIHRocmVhZCB1c2UgYW5kIGphdmEgb3B0aW1pemF0aW9uIHNraWxscy4gV2l0aCBhcHBsaWNhdGlvbiBvZiB0aG9zZVxuaW4gd29yaywgdGhlIHByb2R1Y3Qgc2VydmVyIGFwcGxpY2F0aW9uIGlzIGFibGUgdG8gaGFuZGxlIGdyZWF0IGhlYXZ5IHdvcmtsb2FkXG53aXRoIGNvbW1lcmNpYWwgaGFyZHdhcmUuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLnt9fT57YFdlIGFsc28gdXNlZCBzb21lIGxvbmctcHVsbGluZyB0ZWNobm9sb2d5IHRvIGltcHJvdmUgdXNlcnMgaW50ZXJmYWNlIHNvIGl0IFxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2B3b3VsZCBhbGxvdyBzeXN0ZW0gYWRtaW5zIHRvIG1vbml0b3Igb3BlcmF0aW9ucyBvbiBzZXJ2ZXJzIGltbWVkaWF0ZWx5IGxpa2UgcmVhbC10aW1lLmB9PC9wPlxuICAgIDxwPiZuYnNwOzwvcD5cbiAgICA8aDY+e2A1LjQuMSBTZWN1cmVyIFNlY3VyaXR5IEF1ZGl0IFN5c3RlbSAoTWFyIDIwMDYg4oCTIEFwciAyMDA4KWB9PC9oNj5cbiAgICA8cD57YFRoaXMgd2ViLWJhc2VkIHN5c3RlbSB3YXMgZGVzaWduZWQgdG8gY29sbGVjdCBhbmQgYW5hbHlzZSBidXNpbmVzcyBvcGVyYXRpb24gZGF0YVxuaW4gYmlnIHNjYWxlIGVudGVycHJpc2UgYnkgaW50ZXJjZXB0aW5nIHRoZSBuZXR3b3JrIHRyYWZmaWMgaW4gaW50cmFuZXQgd2l0aG91dFxuYW55IGludHJ1c2lvbiBvbiBleGlzdGVudCBzeXN0ZW1zLiBGdXJ0aGVyIG1vcmUsIFN5c3RlbSBhZG1pbnMgYXJlIGFsc28gYWJsZSB0b1xuZGVmaW5lIGJ1c2luZXNzIHJ1bGVzIHRvIG1vbml0b3Igb3BlcmF0aW9ucyBvbiBjcml0aWNhbCByZXNvdXJjZXMsIHN1Y2ggYXNcbmRhdGFiYXNlIGFuZCBob3N0cy5gfTwvcD5cbiAgICA8cD57YFRoZSBncmVhdGVzdCBjaGFsbGVuZ2UgaXMgcGVyZm9ybWFuY2UuIFRoZXJlZm9yZSB0aGUgYXJjaGl0ZWN0dXJlIG9mIHRoaXMgc3lzdGVtXG5jb25zaXN0cyBvZjpgfTwvcD5cbiAgICA8cD57YE5ldHdvcmsgaW50ZXJjZXB0b3JzIGlzIGltcGxlbWVudGVkIGFzIGtlcm5lbCBtb2R1bGUgZGVwbG95ZWQgaW4gbGludXgga2VybmVsLlxuSXQgY2FuIHJhcGlkbHkgZmlsdGVyIG91dCBncmVhdCBhbW91bnQgb2YgbmV0d29yayB0cmFmZmljIGJhc2VkIG9uIHJ1bGVzIGNvbmZpZ3VyZWRcbm9uIGJhY2stZW5kIHNlcnZlci4gVGhlIGFtb3VudCBvZiBuZXR3b3JrIGRhdGEgaXMgc2lnbmlmaWNhbnRseSByZWR1Y2VkIGFzIGRlbGl2ZXJlZFxudG8gdXNlciBsYXllciBpbiBpbnRlcmNlcHRvciBob3N0LmB9PC9wPlxuICAgIDxwPntgVGhlIGJhY2stZW5kIHNlcnZlciByZWNlaXZlcyBkYXRhIGZyb20gc2V2ZXJhbCBpbnRlcmNlcHRvcnMgYW5kIHByb2Nlc3NlZCBmb3JcbmZ1cnRoZXIgYW5hbHlzaXMgYW5kIHByZXNlbnRhdGlvbi4gVGhyZWFkcyBiYWNrZWQgYnkgYnVmZmVycyBwcm9jZXNzIGRhdGEgc3RlcCBieVxuc3RlcCBsaWtlIHBpcGVsaW5lLiBEaWZmZXJlbnQgcHJvY2VkdXJlcyBhcmUgZXhlY3V0ZWQgYnkgZGlmZmVyZW50IHRocmVhZHMgZm9yXG5iZXR0ZXIgcGVyZm9ybWFuY2UgYW5kIG1vZHVsYXJpdHkuYH08L3A+XG4gICAgPHA+e2BPbiBkYXRhYmFzZSBsZXZlbCwgc29tZSBvcHRpbWl6YXRpb24gbGlrZSBwcm9wZXIgaW5kZXhpbmcgYW5kIHBhcnRpdGlvbiBhcmUgYXBwbGllZC5gfTwvcD5cbiAgICA8cD4mbmJzcDs8L3A+XG4gICAgPGgzPntgQmV0d2VlbiBKb2JzYH08L2gzPlxuICAgIDxwPntgTWF5IDIwMDUg4oCTIEZlYiAyMDA2IC4gOCBtb3MgYXQgTmFuamluZywgSmlhbmdzdSwgQ2hpbmFgfTwvcD5cbiAgICA8cD57YEkgd2FzIHN0dWR5aW5nIGFuZCBwcmVwYXJpbmcgZm9yIGhpZ2hlciBkZWdyZWUuYH08L3A+XG4gICAgPHA+Jm5ic3A7PC9wPlxuICAgIDxoND57YDUuNSBKYXZhIENvZGVyYH08L2g0PlxuICAgIDxwPntgQXQgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHA6Ly93d3cuc29mdHdpc2UuY29tLmNuXCIsXG4gICAgICAgIFwidGFyZ2V0XCI6IFwiX2JsYW5rXCJcbiAgICAgIH19PntgU29mdHdpc2VgfTwvYT48YnIgcGFyZW50TmFtZT1cInBcIj48L2JyPntgXG5gfXtgQXVnIDIwMDMg4oCTIEFwciAyMDA1IC4gOCBtb3MgYXQgTmFuamluZywgSmlhbmdzdSwgQ2hpbmFgfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue319PntgRmlyc3Qgam9iIGFzIHByb2dyYW1tZXIsIEkgd29ya2VkIGluIHByb2plY3RzIHNvdXJjZWQgZnJvbSBKYXBhbiBiaWcgY29tcGFuaWVzLlxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2BKdXN0IGxpa2UgQ2hpbmVzZSBzb2Z0d2FyZSBpbmR1c3RyeSBzdGFydGVkIHdpdGggb3V0c291cmNpbmcgcHJvamVjdHMgYW5kIGdyb3cgd2l0aFxuSmFwYW5lc2UgbWFuYWdlbWVudC4gSSB3ZW50IHRocm91Z2ggY2xhc3NpYyB3YXRlci1mYWxsIHNvZnR3YXJlIGRldmVsb3BtZW50IGN5Y2xlXG5hbmQgYnVpbHQgdXAgbXkgYmFzaWMgSmF2YSBza2lsbC4gYH08L3A+XG4gICAgPHA+e2BJIGFsc28gZ290IHRvIGxlYXJuIHNvbWUgYWR2YW5jZSB0ZWNoIChieSB0aGVuKSxcbnN1Y2ggYXMgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vaGVscHguYWRvYmUuY29tL2NvbGRmdXNpb24vY2ZtbC1yZWZlcmVuY2UvY29sZGZ1c2lvbi10YWdzLmh0bWxcIixcbiAgICAgICAgXCJ0YXJnZXRcIjogXCJfYmxhbmtcIlxuICAgICAgfX0+e2BhZG9iZSBjb2xkZnVzaW9uYH08L2E+e2AsXG5gfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly93d3cuc29mdHdhcmVhZy5jb20vY29ycG9yYXRlL3Byb2R1Y3RzL3dlYm1ldGhvZHNfaW50ZWdyYXRpb24vYWRhcHRlci9kZWZhdWx0Lmh0bWxcIixcbiAgICAgICAgXCJ0YXJnZXRcIjogXCJfYmxhbmtcIlxuICAgICAgfX0+e2B3ZWJtZXRob2RgfTwvYT48L3A+XG4gICAgPC9NRFhMYXlvdXQ+O1xufVxuXG47XG5NRFhDb250ZW50LmlzTURYQ29tcG9uZW50ID0gdHJ1ZTsiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0OyJdLCJzb3VyY2VSb290IjoiIn0=