let _focusedInput;

function focusedInput() {
    return _focusedInput;
}

const onInputFocus = (event) => {
    _focusedInput = event.target;
    console.log("focus " + focusedInput);
}

function listenToInputFocus(inputs) {
    inputs.forEach((input) => {
        input.addEventListener('focus', onInputFocus);
    });
}

module.exports = {listenToInputFocus, focusedInput};
