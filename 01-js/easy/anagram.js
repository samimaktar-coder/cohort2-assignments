/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let counter = {};

  for (let letter of str1.toLowerCase()) {
    counter[letter] = (counter[letter] || 0) + 1;
  }


  for (let letter of str2.toLowerCase()) {
    if (!counter[letter]) return false;
    counter[letter] -= 1;
  }

  console.log(counter);
  return true;
}

module.exports = isAnagram;
