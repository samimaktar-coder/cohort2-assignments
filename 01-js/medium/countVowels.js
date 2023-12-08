/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  let vowelCount = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < str.length; i++) {
    let letter = str[i].toLowerCase();
    if (vowels.includes(letter)) {
      vowelCount++;
    }
  }
  return vowelCount;
}

let ans = countVowels('OpenAI');
console.log(ans);

module.exports = countVowels;