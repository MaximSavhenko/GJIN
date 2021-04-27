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

eval("// js for burger\nfunction burger() {\n  header = document.querySelectorAll(\".header__wrap\");\n\n  header.forEach((header) => {\n    let btnMenu = header.querySelector(\".header__btn-menu\"),\n      burger = document.querySelector(\".burger\"),\n      navbar = header.querySelector(\".navbar-mobile\");\n\n    btnMenu.onclick = function () {\n      document.body.classList.toggle(\"overflow\");\n      burger.classList.toggle(\"activeBurger\");\n    };\n  });\n}\n\nburger();\n\n// js for preloader\n\nfunction onload() {\n  let prealoader = document.querySelector(\".preloader\");\n  if (prealoader) {\n    document.body.onload = function () {\n      setTimeout(function () {\n        if (!prealoader.classList.contains(\"loaded_hiding\")) {\n          prealoader.classList.add(\"loaded_hiding\");\n        }\n      }, 5000);\n    };\n  }\n}\n\nonload();\n\n// function scrollUp() {\n//   function scrollTo(element) {\n//     window.scroll({\n//       left: 0,\n//       top: element.offsetTop,\n//       behavior: \"smooth\",\n//     });\n//   }\n\n//   var button = document.querySelector(\".footer__scrollUp\");\n//   var header = document.querySelector(\"#up\");\n\n//   button.addEventListener(\"click\", () => {\n//     scrollTo(header);\n//   });\n// }\n\n// scrollUp();\n\nfunction filterFeedback() {\n  let block = document.querySelectorAll(\".parsedHTML\");\n  block.forEach((block) => {\n    let feedback = block.querySelector(\".filter__card-feedback\");\n    item = block.querySelectorAll(\".parsedHTML > .filter__card-item\");\n    closeBtn = block.querySelector(\".filter__info-close-btn\");\n\n    console.log(feedback);\n\n    item.forEach((items) => {\n      items.onclick = function (e) {\n        feedback.classList.toggle(\"active\");\n      };\n    });\n\n    closeBtn.onclick = function (e) {\n      feedback.classList.remove(\"active\");\n    };\n  });\n}\n\nfilterFeedback();\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/jQuery.js":
/*!*********************************!*\
  !*** ./src/assets/js/jQuery.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("jQuery(document).ready(function ($) {\n  jcf.replaceAll();\n\n  jcf.setOptions(\"Select\", {\n    maxVisibleItems: 5,\n    useCustomScroll: true,\n    wrapNative: false,\n    wrapNativeOnMobile: false,\n    fakeDropInBody: false,\n  });\n\n  var oTyped = new Typed(\"#typed-entry\", {\n    strings: [\"Because EVERY\", \"BUSINESS\", \"<p>NEEDS SOMETHING</p>\"],\n    typeSpeed: 20,\n    backSpeed: 20,\n    startDelay: 200,\n    backDelay: 1200,\n  });\n});\n\n\n//# sourceURL=webpack:///./src/assets/js/jQuery.js?");

/***/ }),

/***/ 0:
/*!**************************************************************!*\
  !*** multi ./src/assets/js/app.js ./src/assets/js/jQuery.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /home/max/Рабочий стол/WORK/GJIN/src/assets/js/app.js */\"./src/assets/js/app.js\");\nmodule.exports = __webpack_require__(/*! /home/max/Рабочий стол/WORK/GJIN/src/assets/js/jQuery.js */\"./src/assets/js/jQuery.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/app.js_./src/assets/js/jQuery.js?");

/***/ })

/******/ });