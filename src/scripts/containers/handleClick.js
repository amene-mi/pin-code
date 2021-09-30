const setInputValue = require('./setInputValue');
const setFocusOnPreviousInput = require('../components/setFocusOnPreviousInput');

function handleClick(btn, inputs, focusedInput) {
    if (btn.id === 'clear') {
        setFocusOnPreviousInput(inputs, focusedInput);
        return;
    }
    setInputValue(inputs, btn.innerText, focusedInput);
}

module.exports = handleClick;