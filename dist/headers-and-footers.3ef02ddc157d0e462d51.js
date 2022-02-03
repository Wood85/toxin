/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/headers-and-footers.scss":
/*!*********************************************!*\
  !*** ./src/styles/headers-and-footers.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://project-meta-lamp/./src/styles/headers-and-footers.scss?");

/***/ }),

/***/ "./src/components/headers-and-footers/header/header.js":
/*!*************************************************************!*\
  !*** ./src/components/headers-and-footers/header/header.js ***!
  \*************************************************************/
/***/ (() => {

eval("const navSlide = () => {\r\n  const burger = document.querySelector('.header__menu-burger'),\r\n    nav = document.querySelector('.header__menu'),\r\n    menuItem = document.querySelectorAll('.header__menu-item, .header__button-login, .header__button-register');\r\n  burger.addEventListener('click', ()=> {\r\n    //Переключение навигации\r\n    nav.classList.toggle('header__menu-active');\r\n    document.body.classList.toggle('lock');\r\n    //Анимация навигации\r\n    menuItem.forEach((item,index) => {\r\n      if(item.style.animation) {\r\n        item.style.animation = '';\r\n      } else {\r\n        item.style.animation = `menuItemFade .5s ease forwards ${index/7 + 0.3}s`;\r\n      }\r\n    });\r\n    //Анимация бургера\r\n    burger.classList.toggle('toggle')\r\n  });\r\n};\r\n\r\nnavSlide();\r\n\r\n\n\n//# sourceURL=webpack://project-meta-lamp/./src/components/headers-and-footers/header/header.js?");

/***/ }),

/***/ "./src/scripts/headers-and-footers.js":
/*!********************************************!*\
  !*** ./src/scripts/headers-and-footers.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_headers_and_footers_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/headers-and-footers.scss */ \"./src/styles/headers-and-footers.scss\");\n/* harmony import */ var _components_headers_and_footers_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/headers-and-footers/header/header */ \"./src/components/headers-and-footers/header/header.js\");\n/* harmony import */ var _components_headers_and_footers_header_header__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_headers_and_footers_header_header__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\n\n//# sourceURL=webpack://project-meta-lamp/./src/scripts/headers-and-footers.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/headers-and-footers.js");
/******/ 	
/******/ })()
;