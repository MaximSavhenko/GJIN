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

eval("$(function () {\r\n\r\n  function animation() {\r\n        let card = $('.filter__card-item'),\r\n            feedback = $('.filter__card-feedback'),\r\n            innerCard = $('.filter__card-item-inner'),\r\n            btnCloseItem = $('.filter__info-close-btn');\r\n\r\n            card.each( function (i) {\r\n              $(this).attr('id', i);\r\n              $(this).css('order', i);\r\n              feedback.hide();\r\n\r\n                $(this).on('click' , function () {\r\n                    card.each( function (i) {\r\n                        $(this).css('order', i);\r\n                    })\r\n\r\n                    if ($(window).width() >= 768) {\r\n                        if($(this).attr('id') == card.length-1) {\r\n                            let orderThis = $(this).css('order');\r\n                            if ( $(window).width() < 1200) {\r\n                                $(this).css('order', orderThis - 2);\r\n                            }\r\n                            if ( $(window).width() >= 1200) {\r\n                                $(this).css('order', orderThis - 5);\r\n                            }\r\n                        }\r\n                        if ( $(window).width() < 1200) {\r\n                            switch ($(this).attr('id') % 2) {\r\n                                case 1: {\r\n                                    let orderNext = $(this).next().css('order')\r\n                                    $(this).next().css('order', orderNext - 2);\r\n                                    break;\r\n                                }\r\n                                case 0: {\r\n                                    let orderPrev = $(this).prev().css('order')\r\n                                    if (orderPrev !== undefined) {\r\n                                        $(this).prev().css('order', orderPrev - 2);\r\n                                    } else {\r\n                                        if ($(this).attr('id') === 0) {\r\n                                            let orderThis = $(this).css('order');\r\n                                            $(this).css('order', orderThis - 2);\r\n                                        } else {\r\n                                            let orderNext = $('#0').css('order');\r\n                                            $('#0').css('order', orderNext - 1);\r\n                                        }\r\n                                    }\r\n                                    break;\r\n                                }\r\n                            }\r\n                        }\r\n                        if ( $(window).width() >= 1200) {\r\n                            if ($(this).attr('id') <= 4 ) {\r\n                                $(this).css('order', 6);\r\n                            }\r\n                            if ($(this).attr('id') > 5 && $(this).attr('id') <= 9 ) {\r\n                                $(this).css('order', 11);\r\n                            }\r\n                            if ($(this).attr('id') > 10 && $(this).attr('id') <= 14 ) {\r\n                                $(this).css('order', 16);\r\n                            }\r\n                            if ($(this).attr('id') >= 15 && $(this).attr('id') < 20 ) {\r\n                                $(this).css('order', 14);\r\n                            }\r\n                        }\r\n                    }\r\n                    card.removeClass('active');\r\n                    feedback.hide();\r\n                    card.find('.filter__card-item-inner').show();\r\n\r\n                    if (!$(this).is('.active')) {\r\n                      $(this).addClass('active');\r\n                      $(this).children('.filter__card-item-inner').hide();\r\n                      $(this).children('.filter__card-feedback').show();\r\n                    \r\n                      return;\r\n                    }                     \r\n                    \r\n                })\r\n            })\r\n\r\n\r\n            btnCloseItem.each( function () {\r\n              $(this).on('click' , function (event) {                \r\n                $(this).parents('.filter__card-item').removeClass('active');\r\n                $(this).parents('.filter__card-feedback').hide();\r\n                $(this).parents('.filter__card-item').find('.filter__card-item-inner').show();\r\n                event.stopPropagation();\r\n              })\r\n            })\r\n  }\r\n\r\n  animation();\r\n  \r\n})\n\n//# sourceURL=webpack:///./src/assets/js/animation.js?");

/***/ }),

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// js for burger\r\nfunction burger() {\r\n  header = document.querySelectorAll(\".header__wrap\");\r\n\r\n  header.forEach((header) => {\r\n    let btnMenu = header.querySelector(\".header__btn-menu\"),\r\n      burger = document.querySelector(\".burger\"),\r\n      navbar = header.querySelector(\".navbar-mobile\");\r\n\r\n    btnMenu.onclick = function () {\r\n      document.body.classList.toggle(\"overflow\");\r\n      burger.classList.toggle(\"activeBurger\");\r\n    };\r\n  });\r\n}\r\n\r\nburger();\r\n\r\n// js for preloader\r\n\r\nfunction onload() {\r\n  let prealoader = document.querySelector(\".preloader\");\r\n  if (prealoader) {\r\n    document.body.onload = function () {\r\n      setTimeout(function () {\r\n        if (!prealoader.classList.contains(\"loaded_hiding\")) {\r\n          prealoader.classList.add(\"loaded_hiding\");\r\n        }\r\n      }, 5000);\r\n    };\r\n  }\r\n}\r\n\r\nonload();\r\n\r\n// function scrollUp() {\r\n//   function scrollTo(element) {\r\n//     window.scroll({\r\n//       left: 0,\r\n//       top: element.offsetTop,\r\n//       behavior: \"smooth\",\r\n//     });\r\n//   }\r\n\r\n//   var button = document.querySelector(\".footer__scrollUp\");\r\n//   var header = document.querySelector(\"#up\");\r\n\r\n//   button.addEventListener(\"click\", () => {\r\n//     scrollTo(header);\r\n//   });\r\n// }\r\n\r\n// scrollUp();\r\n\r\nfunction filterFeedback() {\r\n  let block = document.querySelectorAll(\".parsedHTML\");\r\n  block.forEach((block) => {\r\n    let feedback = block.querySelector(\".filter__card-feedback\");\r\n    item = block.querySelectorAll(\".parsedHTML > .filter__card-item\");\r\n    closeBtn = block.querySelector(\".filter__info-close-btn\");\r\n\r\n\r\n    item.forEach((items) => {\r\n      items.onclick = function (e) {\r\n        feedback.classList.toggle(\"active\");\r\n      };\r\n    });\r\n\r\n    closeBtn.onclick = function (e) {\r\n      feedback.classList.remove(\"active\");\r\n    };\r\n  });\r\n}\r\n\r\n// filterFeedback();\r\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/jQuery.js":
/*!*********************************!*\
  !*** ./src/assets/js/jQuery.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(function() {\r\n  $(function() {\r\n    jcf.replaceAll();\r\n  });\r\n\r\n  jcf.setOptions(\"Select\", {\r\n    maxVisibleItems: 5,\r\n    useCustomScroll: true,\r\n    wrapNative: false,\r\n    wrapNativeOnMobile: false,\r\n    fakeDropInBody: false,\r\n  });\r\n\r\n  // var typed = new Typed(\"#typed-entry\", {\r\n  //   strings: [\"Because EVERY\", \"BUSINESS\", \"<p>NEEDS SOMETHING</p>\"],\r\n  //   typeSpeed: 20,\r\n  //   backSpeed: 20,\r\n  //   startDelay: 200,\r\n  //   backDelay: 1200,\r\n  // });\r\n\r\n  function filterFeedback() {\r\n      \r\n    $('.filter__card-item').each( function (i) {\r\n        $(this).attr('id', 'filter' + '_' + (++i));\r\n    });\r\n\r\n    $('.filter__card-feedback').each( function (i) {\r\n        $(this).attr('data-filter', 'filter' + '_' + (++i));\r\n    });\r\n\r\n    let cardId = $(\"div[id^='filter']\");\r\n    \r\n    $('.filter__card-feedback').hide();\r\n\r\n    $(cardId).each(function () {\r\n        $(this).on('click' , function () {\r\n          if (!$(this).is('.active')) {\r\n            $(cardId).removeClass('active');\r\n            $(\".filter__card-feedback\").slideUp(1);\r\n            let thisId = this.id;\r\n            $(\".filter__card-feedback[data-filter='\"+thisId+\"']\").slideToggle(100);\r\n            $(this).addClass('active')\r\n            return;\r\n          }\r\n          $(cardId).removeClass('active');\r\n          let thisId = this.id;\r\n          $(\".filter__card-feedback[data-filter='\"+thisId+\"']\").slideToggle(100);\r\n        })\r\n    });\r\n\r\n    $('.filter__info-close-btn').each(function () {\r\n      $(this).on('click', function () {\r\n        $(this).parents(\".filter__card-feedback\").slideUp(100);\r\n      })\r\n    }) \r\n    \r\n}\r\n\r\n// filterFeedback();\r\n\r\nfunction masonry() {\r\n\r\n let masonryItems = $('.filter__card-item');\r\n\r\n\r\n let masonryLauout =  $('.filter__card').masonry({\r\n    itemSelector: '.filter__card-item',\r\n    columnWidth:300,\r\n    gutter:30,\r\n    horizontalOrder: true,\r\n    stamp: '.active'\r\n  });\r\n\r\n  masonryLauout.on( 'click', '.filter__card-item', function() {\r\n    masonryLauout.masonry('layout');\r\n  });\r\n\r\n  $('.filter__info-close-btn').each( function () {\r\n    $(this).on('click' ,  function () {\r\n      masonryLauout.masonry( masonryItems);\r\n    }) \r\n  })\r\n\r\n\r\n}\r\n\r\nmasonry();\r\n\r\n\r\n});\r\n\n\n//# sourceURL=webpack:///./src/assets/js/jQuery.js?");

/***/ }),

/***/ 0:
/*!*******************************************************************************************!*\
  !*** multi ./src/assets/js/animation.js ./src/assets/js/app.js ./src/assets/js/jQuery.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\Users\\usp_m\\Desktop\\GJIN\\src\\assets\\js\\animation.js */\"./src/assets/js/animation.js\");\n__webpack_require__(/*! C:\\Users\\usp_m\\Desktop\\GJIN\\src\\assets\\js\\app.js */\"./src/assets/js/app.js\");\nmodule.exports = __webpack_require__(/*! C:\\Users\\usp_m\\Desktop\\GJIN\\src\\assets\\js\\jQuery.js */\"./src/assets/js/jQuery.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/animation.js_./src/assets/js/app.js_./src/assets/js/jQuery.js?");

/***/ })

/******/ });