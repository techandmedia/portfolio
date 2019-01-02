module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/select");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/form");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/date-picker");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/slider");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/switch");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input-number");

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_date_picker_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var antd_lib_date_picker_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_date_picker_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_slider_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15);
/* harmony import */ var antd_lib_slider_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_slider_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var antd_lib_slider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_slider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_switch_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16);
/* harmony import */ var antd_lib_switch_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_switch_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_switch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7);
/* harmony import */ var antd_lib_switch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_switch__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_input_number_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17);
/* harmony import */ var antd_lib_input_number_style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_number_style_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_input_number__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8);
/* harmony import */ var antd_lib_input_number__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(18);
/* harmony import */ var antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var antd_lib_form_style_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(19);
/* harmony import */ var antd_lib_form_style_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);















var FormItem = antd_lib_form__WEBPACK_IMPORTED_MODULE_13___default.a.Item;
var Option = antd_lib_select__WEBPACK_IMPORTED_MODULE_11___default.a.Option;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
    style: {
      marginTop: 100
    }
  }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_13___default.a, {
    layout: "horizontal"
  }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(FormItem, {
    label: "Input Number",
    labelCol: {
      span: 8
    },
    wrapperCol: {
      span: 8
    }
  }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_9___default.a, {
    size: "large",
    min: 1,
    max: 10,
    style: {
      width: 100
    },
    defaultValue: 3,
    name: "inputNumber"
  }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("a", {
    href: "#"
  }, "Link")), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(FormItem, {
    label: "Switch",
    labelCol: {
      span: 8
    },
    wrapperCol: {
      span: 8
    }
  }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_switch__WEBPACK_IMPORTED_MODULE_7___default.a, {
    defaultChecked: true,
    name: "switch"
  })), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(FormItem, {
    label: "Slider",
    labelCol: {
      span: 8
    },
    wrapperCol: {
      span: 8
    }
  }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_slider__WEBPACK_IMPORTED_MODULE_5___default.a, {
    defaultValue: 70
  })), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(FormItem, {
    label: "Select",
    labelCol: {
      span: 8
    },
    wrapperCol: {
      span: 8
    }
  }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_11___default.a, {
    size: "large",
    defaultValue: "lucy",
    style: {
      width: 192
    },
    name: "select"
  }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(Option, {
    value: "jack"
  }, "jack"), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(Option, {
    value: "lucy"
  }, "lucy"), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(Option, {
    value: "disabled",
    disabled: true
  }, "disabled"), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(Option, {
    value: "yiminghe"
  }, "yiminghe"))), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(FormItem, {
    label: "DatePicker",
    labelCol: {
      span: 8
    },
    wrapperCol: {
      span: 8
    }
  }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_3___default.a, {
    name: "startDate"
  })), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(FormItem, {
    style: {
      marginTop: 48
    },
    wrapperCol: {
      span: 8,
      offset: 8
    }
  }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    size: "large",
    type: "primary",
    htmlType: "submit"
  }, "OK"), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    size: "large",
    style: {
      marginLeft: 8
    }
  }, "Cancel"))));
});

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button/style/css");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/date-picker/style/css");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/slider/style/css");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/switch/style/css");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input-number/style/css");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/select/style/css");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/form/style/css");

/***/ })
/******/ ]);