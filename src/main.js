const createBtn = require('./scripts/input/createButton');
const handleClick = require('./scripts/events/handleClick');
const {listenToInputFocus, focusedInput} = require('./scripts/events/listenToInputFocus');
const onKeyPress = require('./scripts/events/onKeyPress');
const removeNotDigitValue =  require('./scripts/events/removeNotDigitValue');

const inputs = document.querySelectorAll("input");

const numberRegex = new RegExp('[0-9]');

removeNotDigitValue(inputs, numberRegex);

document.addEventListener('keyup', (event) => onKeyPress(inputs, event, numberRegex, focusedInput));
// ()=>handleClick(inputs)
document.getElementById("clear").addEventListener('click', () => handleClick(inputs, focusedInput));

createBtn(inputs);
listenToInputFocus(inputs);
inputs[0].focus();
