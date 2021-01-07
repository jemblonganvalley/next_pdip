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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/about/[id].jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/about/[id].jsx":
/*!******************************!*\
  !*** ./pages/about/[id].jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return About; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/fadliselaz/next/next_pdip/pages/about/[id].jsx\";\n\n\nfunction About({\n  name,\n  data\n}) {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  const {\n    id\n  } = router.query;\n  const iid = id;\n  console.log(data);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: data.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:url\",\n        content: `https://data.pdiperjuangan.id`\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:title\",\n        content: data.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:description\",\n        content: data.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:image\",\n        content: `https://data.pdiperjuangan.id/public${data.path}`\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:image:width\",\n        content: `900px`\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:type\",\n        content: \"website\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        content: \"image/*\",\n        property: \"og:image:type\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: [\"Hello \", name]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: `https://data.pdiperjuangan.id/public/${data.path}`,\n      alt: data.title,\n      width: \"500px\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, this);\n}\n\nAbout.getInitialProps = async ctx => {\n  const resToken = await fetch(\"https://data.pdiperjuangan.id/api/auth/app\", {\n    method: \"POST\",\n    headers: {\n      \"Content-Type\": \"application/json\"\n    },\n    body: JSON.stringify({\n      app_id: \"1555309664580\",\n      api_secret: \"4d672ce3-e422-4d8a-86ff-fabb1808a689\"\n    })\n  });\n  const token = await resToken.json();\n  const res = await fetch(`https://data.pdiperjuangan.id/api/blog/find/?id=${ctx.id}`, {\n    method: \"post\",\n    mode: \"cors\",\n    headers: {\n      \"Content-Type\": \"application/json\",\n      Authorization: `Bearer ${token}`\n    }\n  });\n  const data = await res.json();\n  return {\n    name: \"fadliselaz\",\n    data: data.query\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hYm91dC8uanN4P2Q3YzciXSwibmFtZXMiOlsiQWJvdXQiLCJuYW1lIiwiZGF0YSIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJpaWQiLCJjb25zb2xlIiwibG9nIiwidGl0bGUiLCJwYXRoIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicmVzVG9rZW4iLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImFwcF9pZCIsImFwaV9zZWNyZXQiLCJ0b2tlbiIsImpzb24iLCJyZXMiLCJtb2RlIiwiQXV0aG9yaXphdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxLQUFULENBQWU7QUFBRUMsTUFBRjtBQUFRQztBQUFSLENBQWYsRUFBK0I7QUFDNUMsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLFFBQU07QUFBRUM7QUFBRixNQUFTRixNQUFNLENBQUNHLEtBQXRCO0FBQ0EsUUFBTUMsR0FBRyxHQUFHRixFQUFaO0FBQ0FHLFNBQU8sQ0FBQ0MsR0FBUixDQUFZUCxJQUFaO0FBQ0Esc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxFQUFFQSxJQUFJLENBQUNRO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sZ0JBQVEsRUFBQyxRQUFmO0FBQXdCLGVBQU8sRUFBRztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUFNLGdCQUFRLEVBQUMsVUFBZjtBQUEwQixlQUFPLEVBQUVSLElBQUksQ0FBQ1E7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLGVBSUU7QUFBTSxnQkFBUSxFQUFDLGdCQUFmO0FBQWdDLGVBQU8sRUFBRVIsSUFBSSxDQUFDUTtBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsZUFLRTtBQUNFLGdCQUFRLEVBQUMsVUFEWDtBQUVFLGVBQU8sRUFBRyx1Q0FBc0NSLElBQUksQ0FBQ1MsSUFBSztBQUY1RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsZUFTRTtBQUFNLGdCQUFRLEVBQUMsZ0JBQWY7QUFBZ0MsZUFBTyxFQUFHO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FURixlQVdFO0FBQU0sZ0JBQVEsRUFBQyxTQUFmO0FBQXlCLGVBQU8sRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEYsZUFZRTtBQUFNLGVBQU8sRUFBQyxTQUFkO0FBQXdCLGdCQUFRLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBZUU7QUFBQSwyQkFBV1YsSUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFmRixlQWdCRTtBQUNFLFNBQUcsRUFBRyx3Q0FBdUNDLElBQUksQ0FBQ1MsSUFBSyxFQUR6RDtBQUVFLFNBQUcsRUFBRVQsSUFBSSxDQUFDUSxLQUZaO0FBR0UsV0FBSyxFQUFDO0FBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXdCRDs7QUFFRFYsS0FBSyxDQUFDWSxlQUFOLEdBQXdCLE1BQU9DLEdBQVAsSUFBZTtBQUNyQyxRQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDLDRDQUFELEVBQStDO0FBQ3pFQyxVQUFNLEVBQUUsTUFEaUU7QUFFekVDLFdBQU8sRUFBRTtBQUNQLHNCQUFnQjtBQURULEtBRmdFO0FBS3pFQyxRQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ25CQyxZQUFNLEVBQUUsZUFEVztBQUVuQkMsZ0JBQVUsRUFBRTtBQUZPLEtBQWY7QUFMbUUsR0FBL0MsQ0FBNUI7QUFVQSxRQUFNQyxLQUFLLEdBQUcsTUFBTVQsUUFBUSxDQUFDVSxJQUFULEVBQXBCO0FBRUEsUUFBTUMsR0FBRyxHQUFHLE1BQU1WLEtBQUssQ0FDcEIsbURBQWtERixHQUFHLENBQUNSLEVBQUcsRUFEckMsRUFFckI7QUFDRVcsVUFBTSxFQUFFLE1BRFY7QUFFRVUsUUFBSSxFQUFFLE1BRlI7QUFHRVQsV0FBTyxFQUFFO0FBQ1Asc0JBQWdCLGtCQURUO0FBRVBVLG1CQUFhLEVBQUcsVUFBU0osS0FBTTtBQUZ4QjtBQUhYLEdBRnFCLENBQXZCO0FBV0EsUUFBTXJCLElBQUksR0FBRyxNQUFNdUIsR0FBRyxDQUFDRCxJQUFKLEVBQW5CO0FBQ0EsU0FBTztBQUNMdkIsUUFBSSxFQUFFLFlBREQ7QUFFTEMsUUFBSSxFQUFFQSxJQUFJLENBQUNJO0FBRk4sR0FBUDtBQUlELENBN0JEIiwiZmlsZSI6Ii4vcGFnZXMvYWJvdXQvW2lkXS5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXQoeyBuYW1lLCBkYXRhIH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcbiAgY29uc3QgaWlkID0gaWQ7XG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGF0YS50aXRsZX0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXtgaHR0cHM6Ly9kYXRhLnBkaXBlcmp1YW5nYW4uaWRgfSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17ZGF0YS50aXRsZX0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2RhdGEudGl0bGV9IC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzppbWFnZVwiXG4gICAgICAgICAgY29udGVudD17YGh0dHBzOi8vZGF0YS5wZGlwZXJqdWFuZ2FuLmlkL3B1YmxpYyR7ZGF0YS5wYXRofWB9XG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6d2lkdGhcIiBjb250ZW50PXtgOTAwcHhgfSAvPlxuXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cbiAgICAgICAgPG1ldGEgY29udGVudD1cImltYWdlLypcIiBwcm9wZXJ0eT1cIm9nOmltYWdlOnR5cGVcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGgxPkhlbGxvIHtuYW1lfTwvaDE+XG4gICAgICA8aW1nXG4gICAgICAgIHNyYz17YGh0dHBzOi8vZGF0YS5wZGlwZXJqdWFuZ2FuLmlkL3B1YmxpYy8ke2RhdGEucGF0aH1gfVxuICAgICAgICBhbHQ9e2RhdGEudGl0bGV9XG4gICAgICAgIHdpZHRoPVwiNTAwcHhcIlxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuQWJvdXQuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuICBjb25zdCByZXNUb2tlbiA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9kYXRhLnBkaXBlcmp1YW5nYW4uaWQvYXBpL2F1dGgvYXBwXCIsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgYXBwX2lkOiBcIjE1NTUzMDk2NjQ1ODBcIixcbiAgICAgIGFwaV9zZWNyZXQ6IFwiNGQ2NzJjZTMtZTQyMi00ZDhhLTg2ZmYtZmFiYjE4MDhhNjg5XCIsXG4gICAgfSksXG4gIH0pO1xuICBjb25zdCB0b2tlbiA9IGF3YWl0IHJlc1Rva2VuLmpzb24oKTtcblxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9kYXRhLnBkaXBlcmp1YW5nYW4uaWQvYXBpL2Jsb2cvZmluZC8/aWQ9JHtjdHguaWR9YCxcbiAgICB7XG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgbW9kZTogXCJjb3JzXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICAgIH0sXG4gICAgfVxuICApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBcImZhZGxpc2VsYXpcIixcbiAgICBkYXRhOiBkYXRhLnF1ZXJ5LFxuICB9O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/about/[id].jsx\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

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