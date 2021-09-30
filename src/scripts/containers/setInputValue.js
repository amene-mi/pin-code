const setFocusOnNextInput = require('../components/setFocusOnNextInput');

function setInputValue(inputs, value, focusedInput) {
    let input = inputs;
    focusedInput.value = value;
    if (value === null) return;

    setFocusOnNextInput(input, focusedInput);
}

module.exports = setInputValue;