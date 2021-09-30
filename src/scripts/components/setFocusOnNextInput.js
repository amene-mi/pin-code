function setFocusOnNextInput(inputs, currentInput) {
    let currentInputIndex;
    const currentInputRegEx = new RegExp(currentInput.id);

    inputs.forEach((input, index) => {
        if (currentInputRegEx.test(input.id)) {
            currentInputIndex = index;
        }
    });

    if ((currentInputIndex + 1) === inputs.length) return;

    inputs[currentInputIndex + 1].focus();
}

module.exports = setFocusOnNextInput;