/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_HW_01_05_script_01_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/HW_01_05/script_01.js */ \"./src/modules/HW_01_05/script_01.js\");\n/* harmony import */ var _modules_HW_01_05_script_03_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/HW_01_05/script_03.js */ \"./src/modules/HW_01_05/script_03.js\");\n\n\n\n //import \"./style.css\";\n\nconst maxPrice = Math.max(_modules_HW_01_05_script_01_js__WEBPACK_IMPORTED_MODULE_0__.pricePen, _modules_HW_01_05_script_01_js__WEBPACK_IMPORTED_MODULE_0__.priceBook, _modules_HW_01_05_script_01_js__WEBPACK_IMPORTED_MODULE_0__.priceToy);\nconsole.log(maxPrice);\nconst name = 'sAnta';\nconsole.log((0,_modules_HW_01_05_script_03_js__WEBPACK_IMPORTED_MODULE_1__.formateName)(name));\n\n//# sourceURL=webpack://hw_14/./src/index.js?");

/***/ }),

/***/ "./src/modules/HW_01_05/script_01.js":
/*!*******************************************!*\
  !*** ./src/modules/HW_01_05/script_01.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pricePen\": () => /* binding */ pricePen,\n/* harmony export */   \"priceBook\": () => /* binding */ priceBook,\n/* harmony export */   \"priceToy\": () => /* binding */ priceToy\n/* harmony export */ });\n//Base\nconst pricePen = 15.678;\nconst priceBook = 123.965;\nconst priceToy = 90.2345;\n\n//# sourceURL=webpack://hw_14/./src/modules/HW_01_05/script_01.js?");

/***/ }),

/***/ "./src/modules/HW_01_05/script_03.js":
/*!*******************************************!*\
  !*** ./src/modules/HW_01_05/script_03.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formateName\": () => /* binding */ formateName\n/* harmony export */ });\nconst formateName = name => name.charAt(0).toUpperCase() + name.toLowerCase().slice(1);\n;\n\n//# sourceURL=webpack://hw_14/./src/modules/HW_01_05/script_03.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;