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

eval("function toggleMobileMenu() {\r\n  var btnMenu = document.querySelector(\".header__btn-menu\");\r\n\r\n  btnMenu.onclick = function () {\r\n    document.body.classList.toggle(\"overflow\");\r\n    btnMenu.classList.toggle(\"animationClose\");\r\n  };\r\n}\r\n\r\ntoggleMobileMenu();\r\n\r\nfunction openSubLang() {\r\n  var spanBtn = document.getElementById(\"openSettingLang\");\r\n\r\n  spanBtn.onclick = function () {\r\n    spanBtn.classList.toggle(\"transformArrow\");\r\n  };\r\n}\r\n\r\nopenSubLang();\r\n\r\nfunction openArrow() {\r\n  let arrow = document.querySelectorAll(\".topMenu__hiddenMenu-item\");\r\n  arrowSub = document.querySelectorAll(\".topMenu__hiddenMenu-sub-item\");\r\n\r\n  for (let elem of arrow) {\r\n    elem.onclick = function () {\r\n      elem.classList.toggle(\"activeArrow\");\r\n    };\r\n  }\r\n  for (let elem of arrowSub) {\r\n    elem.onclick = function () {\r\n      elem.classList.toggle(\"activeArrowSub\");\r\n    };\r\n  }\r\n}\r\n\r\nopenArrow();\r\n\r\nfunction scrollUp() {\r\n  function scrollTo(element) {\r\n    window.scroll({\r\n      left: 0,\r\n      top: element.offsetTop,\r\n      behavior: \"smooth\",\r\n    });\r\n  }\r\n\r\n  var button = document.querySelector(\".footer__scrollUp\");\r\n  var header = document.querySelector(\"#up\");\r\n\r\n  button.addEventListener(\"click\", () => {\r\n    scrollTo(header);\r\n  });\r\n}\r\n\r\nscrollUp();\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/select.js":
/*!*********************************!*\
  !*** ./src/assets/js/select.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function customSelect() {\r\n  let btnSelect = document.querySelectorAll(\".select__btn\"),\r\n    listSelect = document.querySelectorAll(\".select__list\"),\r\n    itemsSelect = document.querySelectorAll(\".select__item\"),\r\n    inputSelect = document.querySelectorAll(\".select__input\");\r\n\r\n    console.log(\"Привет\")\r\n\r\n  for (let i = 0; i < btnSelect.length; i++) {\r\n    btnSelect[i].onclick = function () {\r\n      listSelect[i].classList.toggle(\"active\");\r\n    };\r\n  }\r\n\r\n  for (let i = 0; i < listSelect.length; i++) {\r\n    listSelect[i].addEventListener(\r\n      \"click\",\r\n      (function (i) {\r\n        return function (event) {\r\n          btnSelect[i].innerText = event.target.innerText;\r\n          inputSelect[i].value = event.target.dataset.value;\r\n        };\r\n      })(i)\r\n    );\r\n  }\r\n\r\n  for (let j = 0; j < listSelect.length; j++) {\r\n    window.addEventListener(\r\n      \"click\",\r\n      (function (j) {\r\n        return function (event) {\r\n          if (!event.target.matches(\".select__btn\")) {\r\n            listSelect[j].classList.remove(\"active\");\r\n          }\r\n        };\r\n      })(j)\r\n    );\r\n  }\r\n}\r\n\r\ncustomSelect();\r\n\n\n//# sourceURL=webpack:///./src/assets/js/select.js?");

/***/ }),

/***/ 0:
/*!**************************************************************!*\
  !*** multi ./src/assets/js/app.js ./src/assets/js/select.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\Users\\usp_m\\Desktop\\GJIN\\src\\assets\\js\\app.js */\"./src/assets/js/app.js\");\nmodule.exports = __webpack_require__(/*! C:\\Users\\usp_m\\Desktop\\GJIN\\src\\assets\\js\\select.js */\"./src/assets/js/select.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/app.js_./src/assets/js/select.js?");

/***/ })

/******/ });