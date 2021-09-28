const setFocusOnPreviousInput = require('./setFocusOnPreviousInput');
const setInputValue = require('./setInputValue');

function onkeyPress(inputs, event, numberRegex) {
    console.log("down " + event.key);
    if (event.key === "Backspace") {
        setFocusOnPreviousInput(inputs, focusedInput);
        return;
    }
    else if (numberRegex.test(parseInt(event.key))) {
        setInputValue(inputs, event.key);
    }
    else {
        return;
    }
};

module.exports = onkeyPress;
