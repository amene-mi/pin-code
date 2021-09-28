const setFocusOnNextInput = require('./setFocusOnNextInput');

function setInputValue(inputs, value) {
    let inpuut = inputs;
    focusedInput.value = value;
    if (value === null) return;

    setFocusOnNextInput(inpuut, focusedInput);
}

module.exports = setInputValue;