// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//solution one
// function anagrams(stringA, stringB) {
//   if (!stringA || !stringB) return false;
//   if (stringA.length !== stringB.length) return false;

//   return (
//     stringA.toLowerCase().split("").sort().join("") ===
//     stringB.toLowerCase().split("").sort().join("")
//   );
// }

function anagrams(stringA, stringB) {
  if (!stringA || !stringB) return false;
  if (stringA.length !== stringB.length) return false;
  const stringMapping = {};
  for (let index = 0; index < stringA.length; index++) {
    const char = stringA[index].toLowerCase();
    stringMapping[char] = stringMapping[char] ? stringMapping[char] + 1 : 1;
  }
  for (let index = 0; index < stringB.length; index++) {
    const char = stringB[index].toLowerCase();
    if (stringMapping[char]) {
      delete stringMapping[char];
    }
  }
  return Object.keys(stringMapping).length===0
  
}
let result = anagrams("rail safety", "fairy tales");
console.log("result: ", result);
module.exports = anagrams;
