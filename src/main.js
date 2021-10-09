const createBtn = require('./scripts/containers/createButton');
const handleClick = require('./scripts/containers/handleClick');
const {listenToInputFocus, focusedInput} = require('./scripts/components/listenToInputFocus');
const onKeyPress = require('./scripts/containers/onKeyPress');
const removeNotDigitValue =  require('./scripts/components/removeNotDigitValue');

const inputs = document.querySelectorAll("input");

const numberRegex = new RegExp('[0-9]');

removeNotDigitValue(inputs, numberRegex);

document.addEventListener('keyup', (event) => onKeyPress(inputs, event, numberRegex, focusedInput()));
// ()=>handleClick(inputs)
debugger;
document.getElementById("clear").addEventListener('click', (event) => handleClick(event.target,inputs, focusedInput()));

createBtn(inputs);
listenToInputFocus(inputs);
inputs[0].focus();
