const setFocusOnNextInput = require('../components/setFocusOnNextInput');

function setInputValue(inputs, value, focusedInput) {
    focusedInput.value = value;
    if (value === null) return;

    setFocusOnNextInput(inputs, focusedInput);
}

module.exports = setInputValue;