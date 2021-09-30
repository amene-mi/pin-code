let focusedInput;

const onInputFocus = (event) => {
    focusedInput = event.target;
    console.log("focus " + focusedInput);
}

function listenToInputFocus(inputs) {
    inputs.forEach((input) => {
        input.addEventListener('focus', onInputFocus);
    });
}

module.exports = {listenToInputFocus, focusedInput};
