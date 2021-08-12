// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  if (str) {
    let tempStr = str.split(" ");
    let resultString = [];
    for (let index = 0; index < tempStr.length; index++) {
      const word = tempStr[index];
      let capitalizeWord =
        word[0].toUpperCase() + word.split("").splice(1).join("");
      console.log("capitalizeWord: ", capitalizeWord);
      resultString.push(capitalizeWord);
    }
    return resultString.join(" ");
  }
  return "Please pass the string to the function";
}
module.exports = capitalize;
