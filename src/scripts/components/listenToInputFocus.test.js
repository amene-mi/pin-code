/**
 * @jest-environment jsdom
 */
const { listenToInputFocus, focusedInput } = require('./listenToInputFocus');

describe('listen to input focus', () => {
    const inputs = [];
    beforeEach(() => {
        inputs.push(document.createElement("input"));
    });
    beforeEach(() => {
        listenToInputFocus(inputs);
        inputs[0].focus();
    });
    test('focused Input', () => {
        expect(focusedInput()).toBe(inputs[0]);
    });
});
