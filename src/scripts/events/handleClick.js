const setInputValue = require('./setInputValue');
const setFocusOnPreviousInput = require('./setFocusOnPreviousInput');

function handleClick(inputs, focusedInput) {
    if (this.id === 'clear') {
        setFocusOnPreviousInput(inputs, focusedInput);
        return;
    }
    setInputValue(inputs, this.innerText, focusedInput);
}

module.exports = handleClick;