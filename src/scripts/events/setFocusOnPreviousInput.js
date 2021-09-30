const {listenToInputFocus} = require('./listenToInputFocus');

function setFocusOnPreviousInput(inputs, currentInput) {
    let currentInputIndex;

    const currentInputRegEx = new RegExp(currentInput.id);

    inputs.forEach((input, index) => {
        if (currentInputRegEx.test(input.id)) {
            listenToInputFocus(inputs);
            if (input.value.trim() !== "") {
                currentInputIndex = index;
            }
            else {
                currentInputIndex = index - 1;
            }
        }
    });

    if ((currentInputIndex) < 0) return;
    inputs[currentInputIndex].value = null;
    inputs[currentInputIndex].focus();
}

module.exports = setFocusOnPreviousInput;