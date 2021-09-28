const setInputValue = require('./setInputValue');
const setFocusOnPreviousInput = require('./setFocusOnPreviousInput');
const inputs = document.querySelectorAll("input");

function handleClick() {
    if (this.id === 'clear') {
        setFocusOnPreviousInput(inputs, focusedInput);
        return;
    }
    setInputValue(inputs, this.innerText);
}

module.exports = handleClick;