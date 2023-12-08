/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let newStr = str.split(/[^a-zA-Z]/g).join('');
  let firstIndex = 0;
  let lastIndex = newStr.length - 1;
  let result = true;
  for (let i = 0; i < newStr.length / 2; i++) {
    if (newStr[firstIndex].toLowerCase() === newStr[lastIndex].toLowerCase()) {
      firstIndex++;
      lastIndex--;
    } else {
      return false;
    }
  }
  return result;
}

let str = 'Able, was I ere I saw Elba!';
let newStr = str.split(/[^a-zA-Z]/g).join('');

console.log(newStr);

module.exports = isPalindrome;
