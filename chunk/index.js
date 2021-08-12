// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// stright forward logic
// function chunk(array, size) {
//   const resultArray = [];
//   let tempArray = [];
//   if (array.length == 0) {
//     return "empty array not allowed!";
//   }
//   if (!size) {
//     return array;
//   }
//   for (let index = 0; index < array.length; index++) {
//     if (tempArray.length === size) {
//       resultArray.push(tempArray);
//       tempArray = [];
//       index--;
//     } else {
//       tempArray.push(array[index]);
//     }
//   }
//   resultArray.push(tempArray);
//   return resultArray;
// }
// let result = chunk([1, 2, 3, 4], 2); //--> [[ 1, 2], [3, 4]]
// console.log("result: ", result);

// function chunk(array, size) {
//   const chunked = [];

//   if (array.length == 0) {
//     return "empty array not allowed!";
//   }
//   if (!size) {
//     return array;
//   }
//   for (const item of array) {
//     // take the last element from main array whcih is chunked here
//     let last = chunked[chunked.length - 1];
//     //check if last element is not present then push first entry in chunked array which
//     //will be array which will have size less that 2
//     if (!last || last.length === size) {
//       //for the first time last will be undefiend so we are creating last array
//       //on the fly
//       chunked.push([item]);
//     } else {
//       last.push(item);
//     }
//   }
//   return chunked;
// }

function chunk(array, size) {
  let index = 0;
  const chunked = [];
  while (index < array.length) {
    chunked.push(array.splice(index, size));
  }
  return chunked;
}
chunk([1, 2, 3, 4], 2); //--> [[ 1, 2], [3, 4]]
//  chunk([1, 2, 3, 4, 5], 2)// --> [[ 1, 2], [3, 4], [5]]
//  chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)// --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
//  chunk([1, 2, 3, 4, 5], 4)// --> [[ 1, 2, 3, 4], [5]]
//  chunk([1, 2, 3, 4, 5], 10)// --> [[ 1, 2, 3, 4, 5]]
// console.log("result: ", result);

module.exports = chunk;
