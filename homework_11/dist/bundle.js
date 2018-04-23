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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["result"] = result;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__calculating_module__ = __webpack_require__(1);


function result(type, val1, val2) {
    let value = 0;
    switch (type) {
        case '+':
            value = Object(__WEBPACK_IMPORTED_MODULE_0__calculating_module__["addition"])(val1, val2);
            break;
        case '-':
            value = Object(__WEBPACK_IMPORTED_MODULE_0__calculating_module__["subtraction"])(val1, val2);
            break;
        case '*':
            value = Object(__WEBPACK_IMPORTED_MODULE_0__calculating_module__["multiplication"])(val1, val2);
            break;
        case '-':
            value = Object(__WEBPACK_IMPORTED_MODULE_0__calculating_module__["division"])(val1, val2);
            break;        
    }

    return value;
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["addition"] = addition;
/* harmony export (immutable) */ __webpack_exports__["subtraction"] = subtraction;
/* harmony export (immutable) */ __webpack_exports__["multiplication"] = multiplication;
/* harmony export (immutable) */ __webpack_exports__["division"] = division;
function addition(value1, value2) {
    return value1 + value2;
}

function subtraction(value1, value2) {
    return value1 - value2;
}

function multiplication(value1, value2) {
    return value1 * value2;
}

function division(value1, value2) {
    return value1 / value2;
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3);
__webpack_require__(1);
module.exports = __webpack_require__(0);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__output_module__ = __webpack_require__(0);


function render() {
    const $container = document.querySelector("#container");
    $container.innerHTML = `
        <div class="row">
            <input type="text" class="input1">
        </div>
        <div class="row">
            <input type="text" class="input2">
        </div>
        <div class="row buttons">
            <input type="button" value="+">
            <input type="button" value="-">
            <input type="button" value="*">
            <input type="button" value="/">
            <input type="button" value="=">
            <input type="button" value="c">
        </div>
        <div class="row">
            <input type="text" class="result" disabled>
        </div>
    `
}

render();

const $buttons = document.querySelector(".buttons");

$buttons.addEventListener("click", function(e) {
    let pressedButton = e.target;

    if (pressedButton.tagName == "DIV") {
        return;
    }
    
    if (pressedButton.value == "=") {
        const resultInput = document.querySelector(".result");
        const value1 = parseFloat(document.querySelector(".input1").value);
        const value2 = parseFloat(document.querySelector(".input2").value);
        const type = document.querySelector(".pressed").value;
    
        resultInput.value = Object(__WEBPACK_IMPORTED_MODULE_0__output_module__["result"])(type, value1, value2);

        removePressedClass()
    } else if (pressedButton.value == "c") {
        reset();
    } else {
        removePressedClass();
        pressedButton.classList.add("pressed");
    }
})


function removePressedClass() {
    let allButtons = document.querySelectorAll("input[type=button]");
    allButtons.forEach((el) => { el.classList.remove("pressed"); });
}

function reset() {
    removePressedClass();

    let $inputs = document.querySelectorAll("input[type=text]");
    $inputs.forEach((el) => { el.value = "" });
}

/***/ })
/******/ ]);