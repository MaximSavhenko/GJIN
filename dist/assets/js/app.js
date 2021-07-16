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

/***/ "./src/assets/js/animation.js":
/*!************************************!*\
  !*** ./src/assets/js/animation.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(function () {\n  function animation() {\n    let card = $(\".filter__card-item\"),\n      feedback = $(\".filter__card-feedback\"),\n      innerCard = $(\".filter__card-item-inner\"),\n      btnCloseItem = $(\".filter__info-close-btn\");\n\n    card.each(function (i) {\n      $(this).on(\"click\", function () {\n        console.log('click function animation() ITEM');\n        \n        card.removeClass(\"active\");\n        feedback.hide();\n        card.find(\".filter__card-item-inner\").show();\n\n        if (!$(this).is(\".active\")) {\n          $(this).addClass(\"active\");\n          $(this).children(\".filter__card-item-inner\").hide();\n          $(this).children(\".filter__card-feedback\").show();\n\n          return;\n        }\n      });\n    });\n\n    btnCloseItem.each(function () {\n      $(this).on(\"click\", function (event) {\n        console.log('click function animation() BTN');\n        $(this).parents(\".filter__card-item\").removeClass(\"active\");\n        $(this).parents(\".filter__card-feedback\").hide();\n        $(this)\n          .parents(\".filter__card-item\")\n          .find(\".filter__card-item-inner\")\n          .show();\n        event.stopPropagation();\n      });\n    });\n  }\n\n  animation();\n});\n\n\n//# sourceURL=webpack:///./src/assets/js/animation.js?");

/***/ }),

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// js for burger\nfunction burger() {\n  header = document.querySelectorAll(\".header__wrap\");\n\n  header.forEach((header) => {\n    let btnMenu = header.querySelector(\".header__btn-menu\"),\n      burger = document.querySelector(\".burger\"),\n      navbar = header.querySelector(\".navbar-mobile\");\n\n    btnMenu.onclick = function () {\n      document.body.classList.toggle(\"overflow\");\n      burger.classList.toggle(\"activeBurger\");\n    };\n  });\n}\n\nburger();\n\n// js for preloader\n\nfunction onload() {\n  let prealoader = document.querySelector(\".preloader\");\n  if (prealoader) {\n    document.body.onload = function () {\n      setTimeout(function () {\n        if (!prealoader.classList.contains(\"loaded_hiding\")) {\n          prealoader.classList.add(\"loaded_hiding\");\n        }\n      }, 5000);\n    };\n  }\n}\n\nonload();\n\n// function scrollUp() {\n//   function scrollTo(element) {\n//     window.scroll({\n//       left: 0,\n//       top: element.offsetTop,\n//       behavior: \"smooth\",\n//     });\n//   }\n\n//   var button = document.querySelector(\".footer__scrollUp\");\n//   var header = document.querySelector(\"#up\");\n\n//   button.addEventListener(\"click\", () => {\n//     scrollTo(header);\n//   });\n// }\n\n// scrollUp();\n\nfunction filterFeedback() {\n  let block = document.querySelectorAll(\".parsedHTML\");\n  block.forEach((block) => {\n    let feedback = block.querySelector(\".filter__card-feedback\");\n    item = block.querySelectorAll(\".parsedHTML > .filter__card-item\");\n    closeBtn = block.querySelector(\".filter__info-close-btn\");\n\n\n    item.forEach((items) => {\n      items.onclick = function (e) {\n        feedback.classList.toggle(\"active\");\n      };\n    });\n\n    closeBtn.onclick = function (e) {\n      feedback.classList.remove(\"active\");\n    };\n  });\n}\n\nfilterFeedback();\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/jQuery.js":
/*!*********************************!*\
  !*** ./src/assets/js/jQuery.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(function () {\n  $(function () {\n    jcf.replaceAll();\n  });\n\n  jcf.setOptions(\"Select\", {\n    maxVisibleItems: 5,\n    useCustomScroll: true,\n    wrapNative: false,\n    wrapNativeOnMobile: false,\n    fakeDropInBody: false,\n  });\n\n  // var typed = new Typed(\"#typed-entry\", {\n  //   strings: [\"Because EVERY\", \"BUSINESS\", \"<p>NEEDS SOMETHING</p>\"],\n  //   typeSpeed: 20,\n  //   backSpeed: 20,\n  //   startDelay: 200,\n  //   backDelay: 1200,\n  // });\n\n\n  function masonry() {\n    var masonryItems = $(\".filter__card-item\"),\n        feedback = $(\".filter__card-feedback\"),\n        width = 380;\n\n    feedback.hide();\n    \n    \n    masonryItems.each(function (i) {\n      $(this).attr(\"data-card\", i++);\n    });\n\n    let masonryLauout = $(\".filter__card\").masonry({\n      itemSelector: \".filter__card-item\",\n      columnWidth: width,\n      gutter: 22,\n      fitWidth: true\n    });\n  \n    // nodes in row, can be changed on resize action if needed\n    // return 1 for disabling change node position\n    function getNodesInRow(){\n\n\n      if ($(window).width() <= 1106) {\n        console.log('767');\n        return 1\n      } \n\n      if ($(window).width() <= 1436) {\n        console.log('1436');\n        return 3\n      } \n\n      if($(window).width() <= 1766){\n        return 4\n      } else {\n        return 4\n      }\n      \n    }\n\n    function insertNode(elem) {\n      const nodesInRow = getNodesInRow();\n      const currentIndex = parseInt(elem.attr(\"data-card\"));// index clicked card\n      const activeNode = $(`[data-active='true']`);\n      \n      if(activeNode.length){\n        resetPositionsByIndex(activeNode)\n      }\n      // if first in row, don't change element position\n      if(!Number.isInteger(currentIndex / nodesInRow) ){\n        const removedNode = $(elem).detach()\n        const newBeforeIndex = Math.floor(currentIndex/nodesInRow) * nodesInRow;\n        const newPreviewsElem = $(`[data-card='${newBeforeIndex}']`);\n        removedNode.attr('data-active', 'true');\n        removedNode.insertBefore(newPreviewsElem);\n      }\n    }\n\n    function resetPositionsByIndex(node){\n      const nodesInRow = getNodesInRow();\n      const currentIndex = parseInt(node.attr(\"data-card\"));\n\n      // if first in row, don't change element position\n      if(!Number.isInteger(currentIndex / nodesInRow) ) {\n        node.removeAttr(\"data-active\");\n        const removedNode = $(node).detach()\n        const newPreviewsElem = $(`[data-card='${currentIndex - 1}']`)\n        removedNode.insertAfter(newPreviewsElem);\n      }\n\n    }\n\n    masonryItems.each(function () {\n      let fruitCount = $(this).attr(\"data-card\");\n      // $(this)\n      //   .find(\".filter__card-item-inner\")\n      //   .append(\"<p> \" + fruitCount + \"</p>\");\n      $(this).on(\"click\", function () {\n        console.log('click function masonry() ITM');\n        insertNode($(this))\n        masonryLauout.masonry(\"reloadItems\");\n        masonryLauout.masonry(masonryItems);\n      });\n\n    });\n\n    // reorganization of elements when clicking on BTN close\n\n    $(\".filter__info-close-btn\").each(function () {\n      $(this).on(\"click\", function () {\n        console.log('click function masonry() BTN CLOSE');\n        resetPositionsByIndex($(this).closest('.filter__card-item'));\n        masonryLauout.masonry(\"reloadItems\");\n        masonryLauout.masonry(masonryItems);\n      });\n    });\n    }\n\n  masonry();\n\n  function dropdownHeader() {\n    let dropBtn = $('.header__checkin'),\n        list = $('.dropdown ul');\n        container = $('.dropdown')\n\n        dropBtn.on('click' , function (e) {\n            e.preventDefault();\n            \n            if (!container.is('.active')) {\n                container.addClass('active');\n                list.slideDown(400);\n                console.log('open');\n                \n            } else {\n              list.slideUp(400);\n              setTimeout(() => { \n                container.removeClass('active');\n              }, 400); \n              console.log('close');\n              \n            }\n\n        })\n\n        $(document).on(\"click\", function (e) {\n          \n          if (\n            !dropBtn.is(e.target) &&\n            dropBtn.has(e.target).length === 0 &&\n            !list.is(e.target) &&\n            list.has(e.target).length === 0\n            ) {\n              list.slideUp(400); \n              setTimeout(() => { \n                container.removeClass('active');\n              }, 400);              \n            }\n          });\n  }\n\n  dropdownHeader();\n\n  function muteSocialLink() {\n      let link = $('.footer__social a');\n\n      link.on('click' , function (event) {\n        event.preventDefault();\n      })\n  }\n\n  muteSocialLink();\n});\n\n\n//# sourceURL=webpack:///./src/assets/js/jQuery.js?");

/***/ }),

/***/ 0:
/*!*******************************************************************************************!*\
  !*** multi ./src/assets/js/animation.js ./src/assets/js/app.js ./src/assets/js/jQuery.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /home/max/Рабочий стол/WORK/GJIN/src/assets/js/animation.js */\"./src/assets/js/animation.js\");\n__webpack_require__(/*! /home/max/Рабочий стол/WORK/GJIN/src/assets/js/app.js */\"./src/assets/js/app.js\");\nmodule.exports = __webpack_require__(/*! /home/max/Рабочий стол/WORK/GJIN/src/assets/js/jQuery.js */\"./src/assets/js/jQuery.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/animation.js_./src/assets/js/app.js_./src/assets/js/jQuery.js?");

/***/ })

/******/ });