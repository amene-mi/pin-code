const getRandomNumber =  require('./getRandomNumber');
const numberRegex = new RegExp('[0-9]');

describe('get random number', () => {
    test('length is 10', () => {
      expect(getRandomNumber().length).toBe(10);
    });

    test('include 0-9', () => {
        expect(numberRegex.test(getRandomNumber())).toBeTruthy();
      });
  });