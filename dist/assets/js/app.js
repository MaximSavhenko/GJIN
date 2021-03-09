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

eval("function burger() {\n  var btnMenu = document.querySelector(\".header__btn-menu\"),\n      burger = document.querySelector('.burger')\n\n      console.log(burger);\n      \n\n  btnMenu.onclick = function () {\n    document.body.classList.toggle(\"overflow\");\n    btnMenu.classList.toggle(\"animationClose\");\n    burger.classList.toggle('activeBurger');\n  };\n}\n\nburger();\n\n\n// function scrollUp() {\n//   function scrollTo(element) {\n//     window.scroll({\n//       left: 0,\n//       top: element.offsetTop,\n//       behavior: \"smooth\",\n//     });\n//   }\n\n//   var button = document.querySelector(\".footer__scrollUp\");\n//   var header = document.querySelector(\"#up\");\n\n//   button.addEventListener(\"click\", () => {\n//     scrollTo(header);\n//   });\n// }\n\n// scrollUp();\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/jQuery.js":
/*!*********************************!*\
  !*** ./src/assets/js/jQuery.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n  $(document).ready(function () {\n    $(function() {\n        jcf.replaceAll();\n    });\n    \n      jcf.setOptions('Select', {\n        maxVisibleItems: 5,\n        useCustomScroll: true,\n        wrapNative: false, \n        wrapNativeOnMobile: false, \n        fakeDropInBody: false, \n      });\n  })\n\n//# sourceURL=webpack:///./src/assets/js/jQuery.js?");

/***/ }),

/***/ "./src/assets/js/select.js":
/*!*********************************!*\
  !*** ./src/assets/js/select.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function customSelect() {\n  let btnSelect = document.querySelectorAll(\".select__btn\"),\n    listSelect = document.querySelectorAll(\".select__list\"),\n    itemsSelect = document.querySelectorAll(\".select__item\"),\n    inputSelect = document.querySelectorAll(\".select__input\");\n\n    console.log(\"Привет\")\n\n  for (let i = 0; i < btnSelect.length; i++) {\n    btnSelect[i].onclick = function () {\n      listSelect[i].classList.toggle(\"active\");\n    };\n  }\n\n  for (let i = 0; i < listSelect.length; i++) {\n    listSelect[i].addEventListener(\n      \"click\",\n      (function (i) {\n        return function (event) {\n          btnSelect[i].innerText = event.target.innerText;\n          inputSelect[i].value = event.target.dataset.value;\n        };\n      })(i)\n    );\n  }\n\n  for (let j = 0; j < listSelect.length; j++) {\n    window.addEventListener(\n      \"click\",\n      (function (j) {\n        return function (event) {\n          if (!event.target.matches(\".select__btn\")) {\n            listSelect[j].classList.remove(\"active\");\n          }\n        };\n      })(j)\n    );\n  }\n}\n\ncustomSelect();\n\n\n//# sourceURL=webpack:///./src/assets/js/select.js?");

/***/ }),

/***/ 0:
/*!****************************************************************************************!*\
  !*** multi ./src/assets/js/app.js ./src/assets/js/jQuery.js ./src/assets/js/select.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /home/max/Рабочий стол/GJIN/src/assets/js/app.js */\"./src/assets/js/app.js\");\n__webpack_require__(/*! /home/max/Рабочий стол/GJIN/src/assets/js/jQuery.js */\"./src/assets/js/jQuery.js\");\nmodule.exports = __webpack_require__(/*! /home/max/Рабочий стол/GJIN/src/assets/js/select.js */\"./src/assets/js/select.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/app.js_./src/assets/js/jQuery.js_./src/assets/js/select.js?");

/***/ })

/******/ });