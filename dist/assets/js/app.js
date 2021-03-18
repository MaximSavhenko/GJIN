/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function burger() {\r\n  header = document.querySelectorAll('.header__wrap');\r\n  \r\n\r\n  header.forEach(header => {\r\n    let btnMenu = header.querySelector(\".header__btn-menu\"),\r\n        burger = document.querySelector('.burger'),\r\n        navbar = header.querySelector(\".navbar-mobile\")\r\n\r\n    btnMenu.onclick = function () {\r\n      document.body.classList.toggle(\"overflow\");\r\n      burger.classList.toggle('activeBurger');\r\n      // navbar.classList.toggle(\"animationClose\");\r\n    };\r\n  });\r\n\r\n  \r\n}\r\n\r\nburger();\r\n\r\n\r\n\r\nfunction onload() {\r\n\r\n  document.body.onload = function () {\r\n\r\n    setTimeout(function () {\r\n      let prealoader = document.querySelector('.preloader');\r\n      if (!prealoader.classList.contains('loaded_hiding') ) \r\n      {\r\n        prealoader.classList.add('loaded_hiding')\r\n      }\r\n    }, 5000);\r\n    \r\n  }\r\n\r\n\r\n    \r\n  \r\n  \r\n}\r\n\r\nonload ();\r\n\r\n\r\n// function scrollUp() {\r\n//   function scrollTo(element) {\r\n//     window.scroll({\r\n//       left: 0,\r\n//       top: element.offsetTop,\r\n//       behavior: \"smooth\",\r\n//     });\r\n//   }\r\n\r\n//   var button = document.querySelector(\".footer__scrollUp\");\r\n//   var header = document.querySelector(\"#up\");\r\n\r\n//   button.addEventListener(\"click\", () => {\r\n//     scrollTo(header);\r\n//   });\r\n// }\r\n\r\n// scrollUp();\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/jQuery.js":
/*!*********************************!*\
  !*** ./src/assets/js/jQuery.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n  $(document).ready(function () {\r\n    $(function() {\r\n        jcf.replaceAll();\r\n    });\r\n    \r\n      jcf.setOptions('Select', {\r\n        maxVisibleItems: 5,\r\n        useCustomScroll: true,\r\n        wrapNative: false, \r\n        wrapNativeOnMobile: false, \r\n        fakeDropInBody: false, \r\n      });\r\n  })\n\n//# sourceURL=webpack:///./src/assets/js/jQuery.js?");

/***/ }),

/***/ 0:
/*!**************************************************************!*\
  !*** multi ./src/assets/js/app.js ./src/assets/js/jQuery.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\Users\\usp_m\\Desktop\\GJIN\\src\\assets\\js\\app.js */\"./src/assets/js/app.js\");\nmodule.exports = __webpack_require__(/*! C:\\Users\\usp_m\\Desktop\\GJIN\\src\\assets\\js\\jQuery.js */\"./src/assets/js/jQuery.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/app.js_./src/assets/js/jQuery.js?");

/***/ })

/******/ });