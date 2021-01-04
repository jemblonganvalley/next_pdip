module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/test/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/test/index.jsx":
/*!******************************!*\
  !*** ./pages/test/index.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Users/fadliselaz/next/next_pdip/pages/test/index.jsx\";\n\nconst Test = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"iframe\", {\n    src: \"https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fnext-pdip.vercel.app%2Fberita%2F150&layout=button&size=small&appId=799588884220574&width=67&height=20\",\n    width: 67,\n    height: 20,\n    style: {\n      border: \"none\",\n      overflow: \"hidden\"\n    },\n    scrolling: \"no\",\n    frameBorder: 0,\n    allowFullScreen: \"true\",\n    allow: \"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 3,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Test);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90ZXN0L2luZGV4LmpzeD85YTI5Il0sIm5hbWVzIjpbIlRlc3QiLCJib3JkZXIiLCJvdmVyZmxvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsTUFBTUEsSUFBSSxHQUFHLE1BQU07QUFDakIsc0JBQ0U7QUFDRSxPQUFHLEVBQUMsNEtBRE47QUFFRSxTQUFLLEVBQUUsRUFGVDtBQUdFLFVBQU0sRUFBRSxFQUhWO0FBSUUsU0FBSyxFQUFFO0FBQUVDLFlBQU0sRUFBRSxNQUFWO0FBQWtCQyxjQUFRLEVBQUU7QUFBNUIsS0FKVDtBQUtFLGFBQVMsRUFBQyxJQUxaO0FBTUUsZUFBVyxFQUFFLENBTmY7QUFPRSxtQkFBZSxFQUFDLE1BUGxCO0FBUUUsU0FBSyxFQUFDO0FBUlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBWUQsQ0FiRDs7QUFlZUYsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy90ZXN0L2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRlc3QgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGlmcmFtZVxuICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3BsdWdpbnMvc2hhcmVfYnV0dG9uLnBocD9ocmVmPWh0dHBzJTNBJTJGJTJGbmV4dC1wZGlwLnZlcmNlbC5hcHAlMkZiZXJpdGElMkYxNTAmbGF5b3V0PWJ1dHRvbiZzaXplPXNtYWxsJmFwcElkPTc5OTU4ODg4NDIyMDU3NCZ3aWR0aD02NyZoZWlnaHQ9MjBcIlxuICAgICAgd2lkdGg9ezY3fVxuICAgICAgaGVpZ2h0PXsyMH1cbiAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCJub25lXCIsIG92ZXJmbG93OiBcImhpZGRlblwiIH19XG4gICAgICBzY3JvbGxpbmc9XCJub1wiXG4gICAgICBmcmFtZUJvcmRlcj17MH1cbiAgICAgIGFsbG93RnVsbFNjcmVlbj1cInRydWVcIlxuICAgICAgYWxsb3c9XCJhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IHBpY3R1cmUtaW4tcGljdHVyZTsgd2ViLXNoYXJlXCJcbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/test/index.jsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });