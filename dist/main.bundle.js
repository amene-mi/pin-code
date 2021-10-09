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

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const createBtn = __webpack_require__(/*! ./scripts/containers/createButton */ \"./src/scripts/containers/createButton.js\");\r\nconst handleClick = __webpack_require__(/*! ./scripts/containers/handleClick */ \"./src/scripts/containers/handleClick.js\");\r\nconst {listenToInputFocus, focusedInput} = __webpack_require__(/*! ./scripts/components/listenToInputFocus */ \"./src/scripts/components/listenToInputFocus.js\");\r\nconst onKeyPress = __webpack_require__(/*! ./scripts/containers/onKeyPress */ \"./src/scripts/containers/onKeyPress.js\");\r\nconst removeNotDigitValue =  __webpack_require__(/*! ./scripts/components/removeNotDigitValue */ \"./src/scripts/components/removeNotDigitValue.js\");\r\n\r\nconst inputs = document.querySelectorAll(\"input\");\r\n\r\nconst numberRegex = new RegExp('[0-9]');\r\n\r\nremoveNotDigitValue(inputs, numberRegex);\r\n\r\ndocument.addEventListener('keyup', (event) => onKeyPress(inputs, event, numberRegex, focusedInput()));\r\n// ()=>handleClick(inputs)\r\ndebugger;\r\ndocument.getElementById(\"clear\").addEventListener('click', (event) => handleClick(event.target,inputs, focusedInput()));\r\n\r\ncreateBtn(inputs);\r\nlistenToInputFocus(inputs);\r\ninputs[0].focus();\r\n\n\n//# sourceURL=webpack://pin-code/./src/main.js?");

/***/ }),

/***/ "./src/scripts/components/getRandomNumber.js":
/*!***************************************************!*\
  !*** ./src/scripts/components/getRandomNumber.js ***!
  \***************************************************/
/***/ ((module) => {

eval("function getValueNumber() {\r\n  const arr = [];\r\n  do {\r\n    const randomNumber = Math.floor(Math.random() * 10);\r\n    if (!arr.includes(randomNumber)) {\r\n      arr.push(randomNumber);\r\n    }\r\n  } while (arr.length < 10);\r\n  return arr;\r\n}\r\n\r\nmodule.exports = getValueNumber;\n\n//# sourceURL=webpack://pin-code/./src/scripts/components/getRandomNumber.js?");

/***/ }),

/***/ "./src/scripts/components/listenToInputFocus.js":
/*!******************************************************!*\
  !*** ./src/scripts/components/listenToInputFocus.js ***!
  \******************************************************/
/***/ ((module) => {

eval("let _focusedInput;\r\n\r\nfunction focusedInput() {\r\n    return _focusedInput;\r\n}\r\n\r\nconst onInputFocus = (event) => {\r\n    _focusedInput = event.target;\r\n    console.log(\"focus \" + focusedInput);\r\n}\r\n\r\nfunction listenToInputFocus(inputs) {\r\n    inputs.forEach((input) => {\r\n        input.addEventListener('focus', onInputFocus);\r\n    });\r\n}\r\n\r\nmodule.exports = {listenToInputFocus, focusedInput};\r\n\n\n//# sourceURL=webpack://pin-code/./src/scripts/components/listenToInputFocus.js?");

/***/ }),

/***/ "./src/scripts/components/removeNotDigitValue.js":
/*!*******************************************************!*\
  !*** ./src/scripts/components/removeNotDigitValue.js ***!
  \*******************************************************/
/***/ ((module) => {

eval("function removeNotDigitValue(inputs, numberRegex) {\r\n  inputs.forEach((input) => {\r\n    input.addEventListener('input', function (event) {\r\n      console.log(\"input \" + event.target.value);\r\n      if (!numberRegex.test(parseInt(event.target.value))) {\r\n        event.target.value = \"\";\r\n      }\r\n    });\r\n  });\r\n}\r\n\r\nmodule.exports = removeNotDigitValue;\n\n//# sourceURL=webpack://pin-code/./src/scripts/components/removeNotDigitValue.js?");

/***/ }),

/***/ "./src/scripts/components/setFocusOnNextInput.js":
/*!*******************************************************!*\
  !*** ./src/scripts/components/setFocusOnNextInput.js ***!
  \*******************************************************/
/***/ ((module) => {

eval("function setFocusOnNextInput(inputs, currentInput) {\r\n    let currentInputIndex;\r\n    const currentInputRegEx = new RegExp(currentInput.id);\r\n\r\n    inputs.forEach((input, index) => {\r\n        if (currentInputRegEx.test(input.id)) {\r\n            currentInputIndex = index;\r\n        }\r\n    });\r\n\r\n    if ((currentInputIndex + 1) === inputs.length) return;\r\n\r\n    inputs[currentInputIndex + 1].focus();\r\n}\r\n\r\nmodule.exports = setFocusOnNextInput;\n\n//# sourceURL=webpack://pin-code/./src/scripts/components/setFocusOnNextInput.js?");

/***/ }),

/***/ "./src/scripts/components/setFocusOnPreviousInput.js":
/*!***********************************************************!*\
  !*** ./src/scripts/components/setFocusOnPreviousInput.js ***!
  \***********************************************************/
/***/ ((module) => {

eval("function setFocusOnPreviousInput(inputs, currentInput) {\r\n    let currentInputIndex;\r\n\r\n    const currentInputRegEx = new RegExp(currentInput.id);\r\n\r\n    inputs.forEach((input, index) => {\r\n        if (currentInputRegEx.test(input.id)) {\r\n            if (input.value.trim() !== \"\") {\r\n                currentInputIndex = index;\r\n            }\r\n            else {\r\n                currentInputIndex = index - 1;\r\n            }\r\n        }\r\n    });\r\n\r\n    if ((currentInputIndex) < 0) return;\r\n    inputs[currentInputIndex].value = null;\r\n    inputs[currentInputIndex].focus();\r\n}\r\n\r\nmodule.exports = setFocusOnPreviousInput;\n\n//# sourceURL=webpack://pin-code/./src/scripts/components/setFocusOnPreviousInput.js?");

/***/ }),

/***/ "./src/scripts/containers/createButton.js":
/*!************************************************!*\
  !*** ./src/scripts/containers/createButton.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const container = document.getElementById(\"button-container\");\r\nconst getValueNumber = __webpack_require__(/*! ../components/getRandomNumber */ \"./src/scripts/components/getRandomNumber.js\");\r\nconst handleClick = __webpack_require__(/*! ./handleClick */ \"./src/scripts/containers/handleClick.js\");\r\nconst {focusedInput} = __webpack_require__(/*! ../components/listenToInputFocus */ \"./src/scripts/components/listenToInputFocus.js\");\r\n\r\nfunction createBtn(inputs) {\r\n  const numbers = getValueNumber();\r\n  for (let i = 0; i < numbers.length; i++) {\r\n    const btn = document.createElement('button');\r\n    btn.classList.add('btn');\r\n    btn.innerText = numbers[i];\r\n    btn.id = \"num#\" + numbers[i];\r\n    btn.onclick = () => handleClick(btn, inputs, focusedInput());\r\n    container.appendChild(btn);\r\n  }\r\n}\r\n\r\nmodule.exports = createBtn;\n\n//# sourceURL=webpack://pin-code/./src/scripts/containers/createButton.js?");

/***/ }),

/***/ "./src/scripts/containers/handleClick.js":
/*!***********************************************!*\
  !*** ./src/scripts/containers/handleClick.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const setInputValue = __webpack_require__(/*! ./setInputValue */ \"./src/scripts/containers/setInputValue.js\");\r\nconst setFocusOnPreviousInput = __webpack_require__(/*! ../components/setFocusOnPreviousInput */ \"./src/scripts/components/setFocusOnPreviousInput.js\");\r\n\r\nfunction handleClick(btn, inputs, focusedInput) {\r\n    if (btn.id === 'clear') {\r\n        setFocusOnPreviousInput(inputs, focusedInput);\r\n        return;\r\n    }\r\n    setInputValue(inputs, btn.innerText, focusedInput);\r\n}\r\n\r\nmodule.exports = handleClick;\n\n//# sourceURL=webpack://pin-code/./src/scripts/containers/handleClick.js?");

/***/ }),

/***/ "./src/scripts/containers/onKeyPress.js":
/*!**********************************************!*\
  !*** ./src/scripts/containers/onKeyPress.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const setFocusOnPreviousInput = __webpack_require__(/*! ../components/setFocusOnPreviousInput */ \"./src/scripts/components/setFocusOnPreviousInput.js\");\r\nconst setInputValue = __webpack_require__(/*! ./setInputValue */ \"./src/scripts/containers/setInputValue.js\");\r\n\r\nfunction onKeyPress(inputs, event, numberRegex, focusedInput) {\r\n    console.log(\"down \" + event.key);\r\n    if (event.key === \"Backspace\") {\r\n        setFocusOnPreviousInput(inputs, focusedInput);\r\n    } else if (numberRegex.test(parseInt(event.key))) {\r\n        setInputValue(inputs, event.key, focusedInput);\r\n    }\r\n}\r\n\r\nmodule.exports = onKeyPress;\r\n\n\n//# sourceURL=webpack://pin-code/./src/scripts/containers/onKeyPress.js?");

/***/ }),

/***/ "./src/scripts/containers/setInputValue.js":
/*!*************************************************!*\
  !*** ./src/scripts/containers/setInputValue.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const setFocusOnNextInput = __webpack_require__(/*! ../components/setFocusOnNextInput */ \"./src/scripts/components/setFocusOnNextInput.js\");\r\n\r\nfunction setInputValue(inputs, value, focusedInput) {\r\n    focusedInput.value = value;\r\n    if (value === null) return;\r\n\r\n    setFocusOnNextInput(inputs, focusedInput);\r\n}\r\n\r\nmodule.exports = setInputValue;\n\n//# sourceURL=webpack://pin-code/./src/scripts/containers/setInputValue.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;