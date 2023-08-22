function reverseString(str) {
    let reversedString = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversedString += str[i];
    }
    return reversedString;
  }
  
  const input = 'َAli';
  const reversedOutput = reverseString(input);
///////////////////////////////////////////////
function toFarsi(string) {
  const farsiDigits = '۰۱۲۳۴۵۶۷۸۹';
  let number = '';

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (char >= '0' && char <= '9') {
      const digitIndex = char.charCodeAt(0) - '0'.charCodeAt(0);
      number += farsiDigits[digitIndex];
    } else {
      number += char;
    }
  }

  return number;
}

const inputString = '';
const farsiConverted = toFarsi(inputString);
/////////////////////////////////////////////
function character(inputString) {
  const charMap = new Map();

  for (const char of inputString) {
      const lowerChar = char.toLowerCase();
      if (charMap.has(lowerChar)) {
          charMap.set(lowerChar, charMap.get(lowerChar) + 1);
      } else {
          charMap.set(lowerChar, 1);
      }
  }

  let mostFrequentChar = '';
  let maxCount = 0;

  charMap.forEach((count, char) => {
      if (count > maxCount || (count === maxCount && inputString.indexOf(char) < inputString.indexOf(mostFrequentChar))) {
          mostFrequentChar = char;
          maxCount = count;
      }
  });

  return {
      character: mostFrequentChar,
      count: maxCount
  };
}

const input = "";
const result = character(input);
//////////////////////////////////////////////////
function customValidation(input) {
  const stack = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] === '(') {
      stack.push('(');
    } else if (input[i] === ')') {
      if (stack.length === 0) {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  return stack.length === 0;
}
//////////////////////////////////////////////////
function removeDuplicate(input) {
  let result = '';
  const characters = new Set();

  for (const char of input) {
      if (!characters.has(char)) {
          characters.add(char);
          result += char;
      }
  }

  return result;
}

const input = "";
const processedOutput = removeDuplicate(input);
