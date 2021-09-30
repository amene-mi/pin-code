/**
 * @jest-environment jsdom
 */
const removeNotDigitValue = require('./removeNotDigitValue');
const numberRegex = new RegExp('[0-9]');
beforeEach(() => {
    inputs = document.querySelectorAll("input");
});


describe('remove not digit value', () => {
    test('parameter is valid', () => {
        expect(inputs).toBeTruthy();
    });


});