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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/berita/[query].jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/berita/[query].jsx":
/*!**********************************!*\
  !*** ./pages/berita/[query].jsx ***!
  \**********************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideProps\", function() { return getServerSideProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html-react-parser */ \"html-react-parser\");\n/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/fadliselaz/next/next_pdip/pages/berita/[query].jsx\";\n\n\nfunction Index({\n  data,\n  name\n}) {\n  const desc = html_react_parser__WEBPACK_IMPORTED_MODULE_2___default()(data.description);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: data && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n          name: \"description\",\n          content: data.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n          property: \"og:url\",\n          content: `https://data.pdiperjuangan.id`\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n          property: \"og:title\",\n          content: data.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n          property: \"og:description\",\n          content: data.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n          property: \"og:image\",\n          content: `https://data.pdiperjuangan.id/public${data.path}`\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n          property: \"og:image:width\",\n          content: `900px`\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n          property: \"og:type\",\n          content: \"website\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n          content: \"og:image:type\",\n          property: \"image/*\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"wrapperBeritaPage1\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"linkedBeritaPage1\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"containerPage1Article\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"col1-container-1-beritaPage1\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"section1-col1-beritaPage1\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n                className: \"txt-title\",\n                children: data.title\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 44,\n                columnNumber: 19\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 43,\n              columnNumber: 17\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"section2-col1-beritaPage1\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"row2-beritaPage1\",\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"small\", {\n                  className: \"date\",\n                  children: [data.author, \" | \", data.created_at.split(\" \")[0]]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 49,\n                  columnNumber: 21\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: \"garis-panjang-tipis\",\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                    className: \"garis-merah-tebal\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 53,\n                    columnNumber: 23\n                  }, this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 52,\n                  columnNumber: 21\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 48,\n                columnNumber: 19\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 47,\n              columnNumber: 17\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 15\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"col2-container-1-beritaPage1\",\n            children: [data.path.includes(\"uploads\") ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              className: \"img-beritaPage1\",\n              src: `https://data.pdiperjuangan.id/public/${data.path}`,\n              alt: `${data.path}`,\n              style: {\n                // height: \"40vh\",\n                objectFit: \"cover\"\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 19\n            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"iframe\", {\n              className: \"col-12\",\n              height: \"500px\",\n              src: `https://www.youtube.com/embed/${data.path}`,\n              frameBorder: 0,\n              allow: \"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\",\n              allowFullScreen: true\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 73,\n              columnNumber: 19\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"section3-beritaPage1\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                className: \"txt-desk-section3-beritaPage1\",\n                children: desc\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 84,\n                columnNumber: 19\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 83,\n              columnNumber: 17\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"section5-beritaPage1\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"garis-panjang\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 88,\n                columnNumber: 19\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"box-medsos-beritaPage1\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 90,\n                columnNumber: 19\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 87,\n              columnNumber: 17\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"section6-beritaPage1\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 98,\n              columnNumber: 17\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true)\n  }, void 0, false);\n}\nasync function getServerSideProps(context) {\n  const resToken = await fetch(\"https://data.pdiperjuangan.id/api/auth/app\", {\n    method: \"POST\",\n    headers: {\n      \"Content-Type\": \"application/json\"\n    },\n    body: JSON.stringify({\n      app_id: \"1555309664580\",\n      api_secret: \"4d672ce3-e422-4d8a-86ff-fabb1808a689\"\n    })\n  });\n  const token = await resToken.json(); // console.log(context.params.query);\n  // const token =\n  //   \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9kYXRhLnBkaXBlcmp1YW5nYW4uaWRcL2FwaVwvYXV0aFwvYXBwIiwiaWF0IjoxNjA5MDYyNzI1LCJleHAiOjE2MDkxNDkxMjUsIm5iZiI6MTYwOTA2MjcyNSwianRpIjoiSzg2aUR4WERrQ2ZuOTF1cCIsInN1YiI6MTQsInBydiI6IjhmZjYzMGEwMGNhNGEzZWFmNmYyNTRmNWFiZTVhYjFiZWVkMjcyNDkifQ.9u8Leq5GboMw8j3VDMT6oUvrqa0maF8Hnmhh14Ssz48\";\n\n  const res = await fetch(`https://data.pdiperjuangan.id/api/blog/find/?id=${context.params.query}`, {\n    method: \"post\",\n    mode: \"cors\",\n    headers: {\n      \"Content-Type\": \"application/json\",\n      Authorization: `Bearer ${token.token}`\n    }\n  });\n  const data = await res.json();\n  return {\n    props: {\n      data: data.query\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9iZXJpdGEvLmpzeD9jZTllIl0sIm5hbWVzIjpbIkluZGV4IiwiZGF0YSIsIm5hbWUiLCJkZXNjIiwicGFyc2UiLCJkZXNjcmlwdGlvbiIsInRpdGxlIiwicGF0aCIsImF1dGhvciIsImNyZWF0ZWRfYXQiLCJzcGxpdCIsImluY2x1ZGVzIiwib2JqZWN0Rml0IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInJlc1Rva2VuIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhcHBfaWQiLCJhcGlfc2VjcmV0IiwidG9rZW4iLCJqc29uIiwicmVzIiwicGFyYW1zIiwicXVlcnkiLCJtb2RlIiwiQXV0aG9yaXphdGlvbiIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsS0FBVCxDQUFlO0FBQUVDLE1BQUY7QUFBUUM7QUFBUixDQUFmLEVBQStCO0FBQzVDLFFBQU1DLElBQUksR0FBR0Msd0RBQUssQ0FBQ0gsSUFBSSxDQUFDSSxXQUFOLENBQWxCO0FBQ0Esc0JBQ0U7QUFBQSxjQUNHSixJQUFJLGlCQUNIO0FBQUEsOEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSxnQ0FDRTtBQUFNLGNBQUksRUFBQyxhQUFYO0FBQXlCLGlCQUFPLEVBQUVBLElBQUksQ0FBQ0s7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQU0sa0JBQVEsRUFBQyxRQUFmO0FBQXdCLGlCQUFPLEVBQUc7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQUdFO0FBQU0sa0JBQVEsRUFBQyxVQUFmO0FBQTBCLGlCQUFPLEVBQUVMLElBQUksQ0FBQ0s7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRixlQUlFO0FBQU0sa0JBQVEsRUFBQyxnQkFBZjtBQUFnQyxpQkFBTyxFQUFFTCxJQUFJLENBQUNLO0FBQTlDO0FBQUE7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YmVyaXRhL1txdWVyeV0uanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHBhcnNlIGZyb20gXCJodG1sLXJlYWN0LXBhcnNlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCh7IGRhdGEsIG5hbWUgfSkge1xuICBjb25zdCBkZXNjID0gcGFyc2UoZGF0YS5kZXNjcmlwdGlvbik7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtkYXRhICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2RhdGEudGl0bGV9IC8+XG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9e2BodHRwczovL2RhdGEucGRpcGVyanVhbmdhbi5pZGB9IC8+XG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17ZGF0YS50aXRsZX0gLz5cbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtkYXRhLnRpdGxlfSAvPlxuICAgICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgICAgcHJvcGVydHk9XCJvZzppbWFnZVwiXG4gICAgICAgICAgICAgIGNvbnRlbnQ9e2BodHRwczovL2RhdGEucGRpcGVyanVhbmdhbi5pZC9wdWJsaWMke2RhdGEucGF0aH1gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6d2lkdGhcIiBjb250ZW50PXtgOTAwcHhgfSAvPlxuXG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+XG4gICAgICAgICAgICA8bWV0YSBjb250ZW50PVwib2c6aW1hZ2U6dHlwZVwiIHByb3BlcnR5PVwiaW1hZ2UvKlwiIC8+XG4gICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlckJlcml0YVBhZ2UxXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmtlZEJlcml0YVBhZ2UxXCI+XG4gICAgICAgICAgICAgIHsvKiA8QnJlYWRDcnVtYnNcbiAgICAgICAgICAgIGxpbmsxPVwiSG9tZVwiXG4gICAgICAgICAgICB0bzE9XCIvXCJcbiAgICAgICAgICAgIGxpbmsyPXtkYXRhLmNhdGVnb3J5X25hbWV9XG4gICAgICAgICAgICB0bzI9e2AvJHtkYXRhLmNhdGVnb3J5X25hbWVcbiAgICAgICAgICAgICAgLnJlcGxhY2UoL1xccy9nLCBcIi1cIilcbiAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCl9YH1cbiAgICAgICAgICAgIHBhZ2UzPXtkYXRhLmNhdGVnb3J5X25hbWV9XG4gICAgICAgICAgICBsaW5rMz17ZGF0YS5jYXRlZ29yeV9jaGlsZF9uYW1lfVxuICAgICAgICAgICAgdG8zPXtgL2FydGljbGUvJHtcbiAgICAgICAgICAgICAgZGF0YS5pZF9jYXRlZ29yeV9jaGlsZFxuICAgICAgICAgICAgfS8ke2RhdGEuY2F0ZWdvcnlfbmFtZS5yZXBsYWNlKC9cXHMvZywgXCItXCIpLnRvTG93ZXJDYXNlKCl9YH1cbiAgICAgICAgICAvPiAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclBhZ2UxQXJ0aWNsZVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbDEtY29udGFpbmVyLTEtYmVyaXRhUGFnZTFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24xLWNvbDEtYmVyaXRhUGFnZTFcIj5cbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0eHQtdGl0bGVcIj57ZGF0YS50aXRsZX08L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uMi1jb2wxLWJlcml0YVBhZ2UxXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdzItYmVyaXRhUGFnZTFcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cImRhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5hdXRob3J9IHwge2RhdGEuY3JlYXRlZF9hdC5zcGxpdChcIiBcIilbMF19XG4gICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FyaXMtcGFuamFuZy10aXBpc1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FyaXMtbWVyYWgtdGViYWxcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgey8qIENvbHVtbjIgKi99XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sMi1jb250YWluZXItMS1iZXJpdGFQYWdlMVwiPlxuICAgICAgICAgICAgICAgIHsvKiBTZWN0aW9uMiAqL31cbiAgICAgICAgICAgICAgICB7ZGF0YS5wYXRoLmluY2x1ZGVzKFwidXBsb2Fkc1wiKSA/IChcbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWJlcml0YVBhZ2UxXCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9kYXRhLnBkaXBlcmp1YW5nYW4uaWQvcHVibGljLyR7ZGF0YS5wYXRofWB9XG4gICAgICAgICAgICAgICAgICAgIGFsdD17YCR7ZGF0YS5wYXRofWB9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gaGVpZ2h0OiBcIjQwdmhcIixcbiAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxpZnJhbWVcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLTEyXCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNTAwcHhcIlxuICAgICAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke2RhdGEucGF0aH1gfVxuICAgICAgICAgICAgICAgICAgICBmcmFtZUJvcmRlcj17MH1cbiAgICAgICAgICAgICAgICAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCJcbiAgICAgICAgICAgICAgICAgICAgYWxsb3dGdWxsU2NyZWVuXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24zLWJlcml0YVBhZ2UxXCI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0eHQtZGVzay1zZWN0aW9uMy1iZXJpdGFQYWdlMVwiPntkZXNjfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbjUtYmVyaXRhUGFnZTFcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FyaXMtcGFuamFuZ1wiPjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC1tZWRzb3MtYmVyaXRhUGFnZTFcIj5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxDYXJkU29jaWFsTWVkaWFcbiAgICAgICAgICAgICAgICAgIGltYWdlVXJsPXtkYXRhLnBhdGh9XG4gICAgICAgICAgICAgICAgICB0aXRsZT17ZGF0YS50aXRsZX1cbiAgICAgICAgICAgICAgICAvPiAqL31cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uNi1iZXJpdGFQYWdlMVwiPjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICBjb25zdCByZXNUb2tlbiA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9kYXRhLnBkaXBlcmp1YW5nYW4uaWQvYXBpL2F1dGgvYXBwXCIsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgYXBwX2lkOiBcIjE1NTUzMDk2NjQ1ODBcIixcbiAgICAgIGFwaV9zZWNyZXQ6IFwiNGQ2NzJjZTMtZTQyMi00ZDhhLTg2ZmYtZmFiYjE4MDhhNjg5XCIsXG4gICAgfSksXG4gIH0pO1xuICBjb25zdCB0b2tlbiA9IGF3YWl0IHJlc1Rva2VuLmpzb24oKTtcbiAgLy8gY29uc29sZS5sb2coY29udGV4dC5wYXJhbXMucXVlcnkpO1xuXG4gIC8vIGNvbnN0IHRva2VuID1cbiAgLy8gICBcImV5SjBlWEFpT2lKS1YxUWlMQ0poYkdjaU9pSklVekkxTmlKOS5leUpwYzNNaU9pSm9kSFJ3T2x3dlhDOWtZWFJoTG5Ca2FYQmxjbXAxWVc1bllXNHVhV1JjTDJGd2FWd3ZZWFYwYUZ3dllYQndJaXdpYVdGMElqb3hOakE1TURZeU56STFMQ0psZUhBaU9qRTJNRGt4TkRreE1qVXNJbTVpWmlJNk1UWXdPVEEyTWpjeU5Td2lhblJwSWpvaVN6ZzJhVVI0V0VSclEyWnVPVEYxY0NJc0luTjFZaUk2TVRRc0luQnlkaUk2SWpobVpqWXpNR0V3TUdOaE5HRXpaV0ZtTm1ZeU5UUm1OV0ZpWlRWaFlqRmlaV1ZrTWpjeU5Ea2lmUS45dThMZXE1R2JvTXc4ajNWRE1UNm9VdnJxYTBtYUY4SG5taGgxNFNzejQ4XCI7XG5cbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vZGF0YS5wZGlwZXJqdWFuZ2FuLmlkL2FwaS9ibG9nL2ZpbmQvP2lkPSR7Y29udGV4dC5wYXJhbXMucXVlcnl9YCxcbiAgICB7XG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgbW9kZTogXCJjb3JzXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW4udG9rZW59YCxcbiAgICAgIH0sXG4gICAgfVxuICApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZGF0YTogZGF0YS5xdWVyeSxcbiAgICB9LFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/berita/[query].jsx\n");

/***/ }),

/***/ "html-react-parser":
/*!************************************!*\
  !*** external "html-react-parser" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"html-react-parser\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodG1sLXJlYWN0LXBhcnNlclwiP2M0YjkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiaHRtbC1yZWFjdC1wYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodG1sLXJlYWN0LXBhcnNlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///html-react-parser\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

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