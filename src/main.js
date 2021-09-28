const createBtn= require('./scripts/input/createButton');
const handleClick = require('./scripts/events/handleClick');
const listenToInputFocus = require('./scripts/events/listenToInputFocus');
const onkeyPress = require('./scripts/events/onkeyPress');
const removeNotDigitValue =  require('./scripts/events/removeNotDigitValue');
const inputs = document.querySelectorAll("input");
var numberRegex = new RegExp('[0-9]');
let focusedInput;

removeNotDigitValue(inputs,numberRegex);

document.addEventListener('keyup', (event)=>onkeyPress(inputs,event,numberRegex));
// ()=>handleClick(inputs)
document.getElementById("clear").addEventListener('click', handleClick);

createBtn(inputs);
listenToInputFocus(inputs);
inputs[0].focus();
