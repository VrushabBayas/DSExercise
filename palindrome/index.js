// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//   let resultObj = {};
//   for (let index = 0; index < str.length; index++) {
//     const element = str[index];
//     if (resultObj[element]) {
//       delete resultObj[element];
//     } else {
//       resultObj[element] = element;
//     }
//   }
//   let result = Object.keys(resultObj);
//   if (result.length === 0 || result.length === 1) return true;
//   return false;
// }

function palindrome(str) {
  let tempStr = str.split("").reverse().join("");
  return str === tempStr;
}
// let res1 = palindrome("abba"); // === true;
// console.log("res1: ", res1);
// let res2 = palindrome("abcdefg"); //=== false;
// console.log("res2: ", res2);
module.exports = palindrome;
