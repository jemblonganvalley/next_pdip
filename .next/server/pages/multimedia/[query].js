module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/multimedia/[query].jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/wait/Wait.jsx":
/*!**********************************!*\
  !*** ./components/wait/Wait.jsx ***!
  \**********************************/
/*! exports provided: Wait, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Wait\", function() { return Wait; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/fadliselaz/next/next_pdip/components/wait/Wait.jsx\";\n\nconst Wait = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    style: {\n      width: \"100vw\",\n      height: \"100vh\",\n      display: \"flex\",\n      justifyContent: \"center\",\n      alignItems: \"center\",\n      top: '0',\n      left: '0'\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"spinner-border text-danger\",\n      role: \"status\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"sr-only\",\n        children: \"Loading...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, undefined);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Wait);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3dhaXQvV2FpdC5qc3g/NTY0NCJdLCJuYW1lcyI6WyJXYWl0Iiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwidG9wIiwibGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUVPLE1BQU1BLElBQUksR0FBRyxNQUFNO0FBQ3hCLHNCQUNFO0FBQ0UsU0FBSyxFQUFFO0FBQ0xDLFdBQUssRUFBRSxPQURGO0FBRUxDLFlBQU0sRUFBRSxPQUZIO0FBR0xDLGFBQU8sRUFBRSxNQUhKO0FBSUxDLG9CQUFjLEVBQUUsUUFKWDtBQUtMQyxnQkFBVSxFQUFFLFFBTFA7QUFNTEMsU0FBRyxFQUFHLEdBTkQ7QUFPTEMsVUFBSSxFQUFHO0FBUEYsS0FEVDtBQUFBLDJCQVdFO0FBQUssZUFBUyxFQUFDLDRCQUFmO0FBQTRDLFVBQUksRUFBQyxRQUFqRDtBQUFBLDZCQUNFO0FBQU0saUJBQVMsRUFBQyxTQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFpQkQsQ0FsQk07QUFvQlFQLG1FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy93YWl0L1dhaXQuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgV2FpdCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICB3aWR0aDogXCIxMDB2d1wiLFxuICAgICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICB0b3AgOiAnMCcsXG4gICAgICAgIGxlZnQgOiAnMCcsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Bpbm5lci1ib3JkZXIgdGV4dC1kYW5nZXJcIiByb2xlPVwic3RhdHVzXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Mb2FkaW5nLi4uPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXYWl0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/wait/Wait.jsx\n");

/***/ }),

/***/ "./pages/multimedia/[query].jsx":
/*!**************************************!*\
  !*** ./pages/multimedia/[query].jsx ***!
  \**************************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideProps\", function() { return getServerSideProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_wait_Wait__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/wait/Wait */ \"./components/wait/Wait.jsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/fadliselaz/next/next_pdip/pages/multimedia/[query].jsx\";\n\n\n\n\nconst MultimediaPage = ({\n  data,\n  data2,\n  videoPath\n}) => {\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    // window.location.href = \"https://pdiperjuangan.id/multimedia\";\n    console.log(data2);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/pdip.jpg\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"shortcut icon\",\n        href: \"/pdip.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: data2[1].value.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:url\",\n        content: `https://pdiperjuangan.id/multimedia`\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:title\",\n        content: data2[1].value.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:description\",\n        content: data2[1].value.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:image\",\n        itemProp: \"image\",\n        content: `https://i.ytimg.com/vi/${videoPath}/hqdefault.jpg`\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:image:secure_url\",\n        content: `https://i.ytimg.com/vi/${videoPath}/hqdefault.jpg`\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:image:width\",\n        content: \"300\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:image:height\",\n        content: \"300\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:image:alt\",\n        content: data2[1].value.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:type\",\n        content: \"website\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        content: \"og:image:type\",\n        property: \"image/*\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:locale\",\n        content: \"id_ID\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_wait_Wait__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MultimediaPage);\nasync function getServerSideProps(context) {\n  const resToken = await fetch(\"https://data.pdiperjuangan.id/api/auth/app\", {\n    method: \"POST\",\n    headers: {\n      \"Content-Type\": \"application/json\"\n    },\n    body: JSON.stringify({\n      app_id: \"1555309664580\",\n      api_secret: \"4d672ce3-e422-4d8a-86ff-fabb1808a689\"\n    })\n  });\n  const token = await resToken.json();\n  const res = await fetch(`https://data.pdiperjuangan.id/api/web/config/multimedia`, {\n    method: \"post\",\n    mode: \"cors\",\n    headers: {\n      \"Content-Type\": \"application/json\",\n      Authorization: `Bearer ${token.token}`\n    }\n  });\n  const data = await res.json();\n  const res2 = await fetch(`https://data.pdiperjuangan.id/api/web/pages/multimedia`, {\n    method: \"post\",\n    mode: \"cors\",\n    headers: {\n      \"Content-Type\": \"application/json\",\n      Authorization: `Bearer ${token.token}`\n    }\n  });\n  const data2 = await res2.json();\n  return {\n    props: {\n      data: data.query.set,\n      data2: data2.query,\n      videoPath: context.params.query\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9tdWx0aW1lZGlhLy5qc3g/ZGZmYiJdLCJuYW1lcyI6WyJNdWx0aW1lZGlhUGFnZSIsImRhdGEiLCJkYXRhMiIsInZpZGVvUGF0aCIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJ2YWx1ZSIsImRlc2NyaXB0aW9uIiwidGl0bGUiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicmVzVG9rZW4iLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImFwcF9pZCIsImFwaV9zZWNyZXQiLCJ0b2tlbiIsImpzb24iLCJyZXMiLCJtb2RlIiwiQXV0aG9yaXphdGlvbiIsInJlczIiLCJwcm9wcyIsInF1ZXJ5Iiwic2V0IiwicGFyYW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsY0FBYyxHQUFHLENBQUM7QUFBRUMsTUFBRjtBQUFRQyxPQUFSO0FBQWVDO0FBQWYsQ0FBRCxLQUFnQztBQUNyREMseURBQVMsQ0FBQyxNQUFNO0FBQ2Q7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlKLEtBQVo7QUFDRCxHQUhRLEVBR04sRUFITSxDQUFUO0FBSUEsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFNLFdBQUcsRUFBQyxlQUFWO0FBQTBCLFlBQUksRUFBQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBR0U7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUF5QixlQUFPLEVBQUVBLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU0ssS0FBVCxDQUFlQztBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGLGVBSUU7QUFDRSxnQkFBUSxFQUFDLFFBRFg7QUFF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LENBQXhCO0FBV0EsUUFBTW5CLEtBQUssR0FBRyxNQUFNd0IsSUFBSSxDQUFDSixJQUFMLEVBQXBCO0FBRUEsU0FBTztBQUNMSyxTQUFLLEVBQUU7QUFDTDFCLFVBQUksRUFBRUEsSUFBSSxDQUFDMkIsS0FBTCxDQUFXQyxHQURaO0FBRUwzQixXQUFLLEVBQUVBLEtBQUssQ0FBQzBCLEtBRlI7QUFHTHpCLGVBQVMsRUFBRVEsT0FBTyxDQUFDbUIsTUFBUixDQUFlRjtBQUhyQjtBQURGLEdBQVA7QUFPRCIsImZpbGUiOiIuL3BhZ2VzL211bHRpbWVkaWEvW3F1ZXJ5XS5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFdhaXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvd2FpdC9XYWl0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmNvbnN0IE11bHRpbWVkaWFQYWdlID0gKHsgZGF0YSwgZGF0YTIsIHZpZGVvUGF0aCB9KSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImh0dHBzOi8vcGRpcGVyanVhbmdhbi5pZC9tdWx0aW1lZGlhXCI7XG4gICAgY29uc29sZS5sb2coZGF0YTIpO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9wZGlwLmpwZ1wiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiL3BkaXAuaWNvXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGF0YTJbMV0udmFsdWUuZGVzY3JpcHRpb259IC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzp1cmxcIlxuICAgICAgICAgIGNvbnRlbnQ9e2BodHRwczovL3BkaXBlcmp1YW5nYW4uaWQvbXVsdGltZWRpYWB9XG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtkYXRhMlsxXS52YWx1ZS50aXRsZX0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2RhdGEyWzFdLnZhbHVlLmRlc2NyaXB0aW9ufSAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIHByb3BlcnR5PVwib2c6aW1hZ2VcIlxuICAgICAgICAgIGl0ZW1Qcm9wPVwiaW1hZ2VcIlxuICAgICAgICAgIGNvbnRlbnQ9e2BodHRwczovL2kueXRpbWcuY29tL3ZpLyR7dmlkZW9QYXRofS9ocWRlZmF1bHQuanBnYH1cbiAgICAgICAgLz5cblxuICAgICAgICA8bWV0YVxuICAgICAgICAgIHByb3BlcnR5PVwib2c6aW1hZ2U6c2VjdXJlX3VybFwiXG4gICAgICAgICAgY29udGVudD17YGh0dHBzOi8vaS55dGltZy5jb20vdmkvJHt2aWRlb1BhdGh9L2hxZGVmYXVsdC5qcGdgfVxuICAgICAgICAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlOndpZHRoXCIgY29udGVudD1cIjMwMFwiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6aGVpZ2h0XCIgY29udGVudD1cIjMwMFwiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6YWx0XCIgY29udGVudD17ZGF0YTJbMV0udmFsdWUudGl0bGV9IC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cbiAgICAgICAgPG1ldGEgY29udGVudD1cIm9nOmltYWdlOnR5cGVcIiBwcm9wZXJ0eT1cImltYWdlLypcIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmxvY2FsZVwiIGNvbnRlbnQ9XCJpZF9JRFwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8V2FpdCAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXVsdGltZWRpYVBhZ2U7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICBjb25zdCByZXNUb2tlbiA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9kYXRhLnBkaXBlcmp1YW5nYW4uaWQvYXBpL2F1dGgvYXBwXCIsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgYXBwX2lkOiBcIjE1NTUzMDk2NjQ1ODBcIixcbiAgICAgIGFwaV9zZWNyZXQ6IFwiNGQ2NzJjZTMtZTQyMi00ZDhhLTg2ZmYtZmFiYjE4MDhhNjg5XCIsXG4gICAgfSksXG4gIH0pO1xuICBjb25zdCB0b2tlbiA9IGF3YWl0IHJlc1Rva2VuLmpzb24oKTtcblxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9kYXRhLnBkaXBlcmp1YW5nYW4uaWQvYXBpL3dlYi9jb25maWcvbXVsdGltZWRpYWAsXG4gICAge1xuICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgIG1vZGU6IFwiY29yc1wiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VuLnRva2VufWAsXG4gICAgICB9LFxuICAgIH1cbiAgKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgY29uc3QgcmVzMiA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL2RhdGEucGRpcGVyanVhbmdhbi5pZC9hcGkvd2ViL3BhZ2VzL211bHRpbWVkaWFgLFxuICAgIHtcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICBtb2RlOiBcImNvcnNcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbi50b2tlbn1gLFxuICAgICAgfSxcbiAgICB9XG4gICk7XG4gIGNvbnN0IGRhdGEyID0gYXdhaXQgcmVzMi5qc29uKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZGF0YTogZGF0YS5xdWVyeS5zZXQsXG4gICAgICBkYXRhMjogZGF0YTIucXVlcnksXG4gICAgICB2aWRlb1BhdGg6IGNvbnRleHQucGFyYW1zLnF1ZXJ5LFxuICAgIH0sXG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/multimedia/[query].jsx\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

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