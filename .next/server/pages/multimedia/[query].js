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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideProps\", function() { return getServerSideProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_wait_Wait__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/wait/Wait */ \"./components/wait/Wait.jsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/fadliselaz/next/next_pdip/pages/multimedia/[query].jsx\";\n\n\n\n\nconst MultimediaPage = ({\n  data,\n  data2,\n  videoPath\n}) => {\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    // window.location.href = \"https://pdiperjuangan.id/multimedia\";\n    console.log(data2);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/pdip.jpg\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"shortcut icon\",\n        href: \"/pdip.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: data2[1].value[0].description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:url\",\n        content: `https://pdiperjuangan.id/multimedia`\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:title\",\n        content: data2[1].value[0].title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:description\",\n        content: data2[1].value[0].description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:image\",\n        itemProp: \"image\",\n        content: `https://i.ytimg.com/vi/${videoPath}/hqdefault.jpg`\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:image:secure_url\",\n        content: `https://i.ytimg.com/vi/${videoPath}/hqdefault.jpg`\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:image:width\",\n        content: \"300\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:image:height\",\n        content: \"300\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:image:alt\",\n        content: data2[1].value[0].title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:type\",\n        content: \"website\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        content: \"og:image:type\",\n        property: \"image/*\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:locale\",\n        content: \"id_ID\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_wait_Wait__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MultimediaPage);\nasync function getServerSideProps(context) {\n  const resToken = await fetch(\"https://data.pdiperjuangan.id/api/auth/app\", {\n    method: \"POST\",\n    headers: {\n      \"Content-Type\": \"application/json\"\n    },\n    body: JSON.stringify({\n      app_id: \"1555309664580\",\n      api_secret: \"4d672ce3-e422-4d8a-86ff-fabb1808a689\"\n    })\n  });\n  const token = await resToken.json();\n  const res = await fetch(`https://data.pdiperjuangan.id/api/web/config/multimedia`, {\n    method: \"post\",\n    mode: \"cors\",\n    headers: {\n      \"Content-Type\": \"application/json\",\n      Authorization: `Bearer ${token.token}`\n    }\n  });\n  const data = await res.json();\n  const res2 = await fetch(`https://data.pdiperjuangan.id/api/web/pages/multimedia`, {\n    method: \"post\",\n    mode: \"cors\",\n    headers: {\n      \"Content-Type\": \"application/json\",\n      Authorization: `Bearer ${token.token}`\n    }\n  });\n  const data2 = await res2.json();\n  return {\n    props: {\n      data: data.query.set,\n      data2: data2.query,\n      videoPath: context.params.query\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9tdWx0aW1lZGlhLy5qc3g/ZGZmYiJdLCJuYW1lcyI6WyJNdWx0aW1lZGlhUGFnZSIsImRhdGEiLCJkYXRhMiIsInZpZGVvUGF0aCIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJ2YWx1ZSIsImRlc2NyaXB0aW9uIiwidGl0bGUiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicmVzVG9rZW4iLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImFwcF9pZCIsImFwaV9zZWNyZXQiLCJ0b2tlbiIsImpzb24iLCJyZXMiLCJtb2RlIiwiQXV0aG9yaXphdGlvbiIsInJlczIiLCJwcm9wcyIsInF1ZXJ5Iiwic2V0IiwicGFyYW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsY0FBYyxHQUFHLENBQUM7QUFBRUMsTUFBRjtBQUFRQyxPQUFSO0FBQWVDO0FBQWYsQ0FBRCxLQUFnQztBQUNyREMseURBQVMsQ0FBQyxNQUFNO0FBQ2Q7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlKLEtBQVo7QUFDRCxHQUhRLEVBR04sRUFITSxDQUFUO0FBSUEsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFNLFdBQUcsRUFBQyxlQUFWO0FBQTBCLFlBQUksRUFBQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBR0U7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUF5QixlQUFPLEVBQUVBLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU0ssS0FBVCxDQUFlLENBQWYsRUFBa0JDO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEYsZUFJRTtBQUNFLGdCQUFRLEVB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RUFBRyxVQUFTSixLQUFLLENBQUNBLEtBQU07QUFGOUI7QUFIWCxHQUZzQixDQUF4QjtBQVdBLFFBQU1uQixLQUFLLEdBQUcsTUFBTXdCLElBQUksQ0FBQ0osSUFBTCxFQUFwQjtBQUVBLFNBQU87QUFDTEssU0FBSyxFQUFFO0FBQ0wxQixVQUFJLEVBQUVBLElBQUksQ0FBQzJCLEtBQUwsQ0FBV0MsR0FEWjtBQUVMM0IsV0FBSyxFQUFFQSxLQUFLLENBQUMwQixLQUZSO0FBR0x6QixlQUFTLEVBQUVRLE9BQU8sQ0FBQ21CLE1BQVIsQ0FBZUY7QUFIckI7QUFERixHQUFQO0FBT0QiLCJmaWxlIjoiLi9wYWdlcy9tdWx0aW1lZGlhL1txdWVyeV0uanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBXYWl0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3dhaXQvV2FpdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5jb25zdCBNdWx0aW1lZGlhUGFnZSA9ICh7IGRhdGEsIGRhdGEyLCB2aWRlb1BhdGggfSkgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJodHRwczovL3BkaXBlcmp1YW5nYW4uaWQvbXVsdGltZWRpYVwiO1xuICAgIGNvbnNvbGUubG9nKGRhdGEyKTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvcGRpcC5qcGdcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cIi9wZGlwLmljb1wiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2RhdGEyWzFdLnZhbHVlWzBdLmRlc2NyaXB0aW9ufSAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIHByb3BlcnR5PVwib2c6dXJsXCJcbiAgICAgICAgICBjb250ZW50PXtgaHR0cHM6Ly9wZGlwZXJqdWFuZ2FuLmlkL211bHRpbWVkaWFgfVxuICAgICAgICAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17ZGF0YTJbMV0udmFsdWVbMF0udGl0bGV9IC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiXG4gICAgICAgICAgY29udGVudD17ZGF0YTJbMV0udmFsdWVbMF0uZGVzY3JpcHRpb259XG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzppbWFnZVwiXG4gICAgICAgICAgaXRlbVByb3A9XCJpbWFnZVwiXG4gICAgICAgICAgY29udGVudD17YGh0dHBzOi8vaS55dGltZy5jb20vdmkvJHt2aWRlb1BhdGh9L2hxZGVmYXVsdC5qcGdgfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzppbWFnZTpzZWN1cmVfdXJsXCJcbiAgICAgICAgICBjb250ZW50PXtgaHR0cHM6Ly9pLnl0aW1nLmNvbS92aS8ke3ZpZGVvUGF0aH0vaHFkZWZhdWx0LmpwZ2B9XG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6d2lkdGhcIiBjb250ZW50PVwiMzAwXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTpoZWlnaHRcIiBjb250ZW50PVwiMzAwXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTphbHRcIiBjb250ZW50PXtkYXRhMlsxXS52YWx1ZVswXS50aXRsZX0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxuICAgICAgICA8bWV0YSBjb250ZW50PVwib2c6aW1hZ2U6dHlwZVwiIHByb3BlcnR5PVwiaW1hZ2UvKlwiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6bG9jYWxlXCIgY29udGVudD1cImlkX0lEXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxXYWl0IC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNdWx0aW1lZGlhUGFnZTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IHJlc1Rva2VuID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2RhdGEucGRpcGVyanVhbmdhbi5pZC9hcGkvYXV0aC9hcHBcIiwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBhcHBfaWQ6IFwiMTU1NTMwOTY2NDU4MFwiLFxuICAgICAgYXBpX3NlY3JldDogXCI0ZDY3MmNlMy1lNDIyLTRkOGEtODZmZi1mYWJiMTgwOGE2ODlcIixcbiAgICB9KSxcbiAgfSk7XG4gIGNvbnN0IHRva2VuID0gYXdhaXQgcmVzVG9rZW4uanNvbigpO1xuXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL2RhdGEucGRpcGVyanVhbmdhbi5pZC9hcGkvd2ViL2NvbmZpZy9tdWx0aW1lZGlhYCxcbiAgICB7XG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgbW9kZTogXCJjb3JzXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW4udG9rZW59YCxcbiAgICAgIH0sXG4gICAgfVxuICApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICBjb25zdCByZXMyID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vZGF0YS5wZGlwZXJqdWFuZ2FuLmlkL2FwaS93ZWIvcGFnZXMvbXVsdGltZWRpYWAsXG4gICAge1xuICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgIG1vZGU6IFwiY29yc1wiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VuLnRva2VufWAsXG4gICAgICB9LFxuICAgIH1cbiAgKTtcbiAgY29uc3QgZGF0YTIgPSBhd2FpdCByZXMyLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBkYXRhOiBkYXRhLnF1ZXJ5LnNldCxcbiAgICAgIGRhdGEyOiBkYXRhMi5xdWVyeSxcbiAgICAgIHZpZGVvUGF0aDogY29udGV4dC5wYXJhbXMucXVlcnksXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/multimedia/[query].jsx\n");

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