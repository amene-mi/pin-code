const setFocusOnPreviousInput = require('./setFocusOnPreviousInput');
const setInputValue = require('./setInputValue');

function onKeyPress(inputs, event, numberRegex, focusedInput) {
    console.log("down " + event.key);
    if (event.key === "Backspace") {
        setFocusOnPreviousInput(inputs, focusedInput);
    } else if (numberRegex.test(parseInt(event.key))) {
        setInputValue(inputs, event.key, focusedInput);
    }
}

module.exports = onKeyPress;
