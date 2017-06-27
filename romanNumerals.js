const numerals = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1
};

const convertToOldRoman = num => {
  let result = '';

  for (numeral in numerals) {
    let multiplier = Math.floor(num / numerals[numeral]);

    for (let i = 0; i < multiplier; i++) {
      result += numeral;
    }
    num = num % numerals[numeral];
  }

  return result;
};

const convertToNewRoman = num => {
  let result = '';
  let m, c, x, i;

  m = Math.floor(num / 1000);
  num -= m * 1000;
  c = Math.floor(num / 100);
  num -= c * 100;
  x = Math.floor(num / 10);
  num -= x * 10;
  i = Math.floor(num / 1);

  result += findThousands(m);
  result += findHundreds(c);
  result += findTens(x);
  result += findOnes(i);

  return result;
};

const findThousands = num => {
  let result = '';

  for(let i = 0; i < num / 1000; i ++) {
    result += 'M';
  }

  return result;
};

const findHundreds = num => {
  switch (num) {
    case 0:
      return '';
    case 1:
      return 'C';
    case 2:
      return 'CC';
    case 3:
      return 'CCC';
    case 4:
      return 'CD';
    case 5:
      return 'D';
    case 6:
      return 'DC';
    case 7:
      return 'DCC';
    case 8:
      return 'DCCC';
    case 9:
      return 'CM';
  }
};

const findTens = num => {
  switch (num) {
    case 0:
      return '';
    case 1:
      return 'X';
    case 2:
      return 'XX';
    case 3:
      return 'XXX';
    case 4:
      return 'XL';
    case 5:
      return 'L';
    case 6:
      return 'LX';
    case 7:
      return 'LXX';
    case 8:
      return 'LXXX';
    case 9:
      return 'XC';
  }
};

const findOnes = num => {
  switch (num) {
    case 0:
      return '';
    case 1:
      return 'I';
    case 2:
      return 'II';
    case 3:
      return 'III';
    case 4:
      return 'IV';
    case 5:
      return 'V';
    case 6:
      return 'VI';
    case 7:
      return 'VII';
    case 8:
      return 'VIII';
    case 9:
      return 'IX';
  }
};

convertToNewRoman(1949);

module.exports = {
  convertToOldRoman: convertToOldRoman,
  convertToNewRoman: convertToNewRoman
};
