function reverseString(str) {
    let reversedString = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversedString += str[i];
    }
    return reversedString;
  }
  
  const input = 'َAli';
  const reversedOutput = reverseString(input);