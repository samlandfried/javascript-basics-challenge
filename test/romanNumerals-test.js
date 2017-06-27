const assert = require('chai').assert;
const convertToNewRoman = require('../romanNumerals').convertToNewRoman;
const convertToOldRoman = require('../romanNumerals').convertToOldRoman;

it('Can convert nums to old roman numerals', () => {
  assert.equal(convertToOldRoman(14), 'XIIII')
});

it('Can convert nums to new roman numerals', () => {
  assert.equal(convertToNewRoman(4), 'IV')
  assert.equal(convertToNewRoman(9), 'IX')
  assert.equal(convertToNewRoman(40), 'XL')
  assert.equal(convertToNewRoman(1949), 'MCMXLIX')
});