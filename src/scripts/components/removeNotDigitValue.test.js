/**
 * @jest-environment jsdom
 */
const removeNotDigitValue = require('./removeNotDigitValue');
const numberRegex = new RegExp('[0-9]');

describe('remove not digit value', () => {
    const inputs = [];
    beforeEach(() => {
        const input = document.createElement("input");
        document.body.append(input);
        inputs.push(input);
    });
    test('remove not digit value', () => {
        removeNotDigitValue(inputs, numberRegex);
        inputs[0].value ="t";
        var event = new Event('input', {
            bubbles: true,
            cancelable: true,
            target: inputs[0],
        });
        inputs[0].dispatchEvent(event);
        expect(inputs[0].value).toBe("");
    });

    test('is should not digit value', () => {
        removeNotDigitValue(inputs, numberRegex);
        inputs[0].value =7;
        var event = new Event('input', {
            bubbles: true,
            cancelable: true,
            target: inputs[0],
        });
        inputs[0].dispatchEvent(event);

        expect(inputs[0].value).toBe("7");
    });
});