// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let indexOfMin = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexOfMin]) {
        indexOfMin = j;
      }
    }
    if (indexOfMin !== i) {
      let lesser = array[indexOfMin];
      array[indexOfMin] = array[i];
      array[i] = lesser;
    }
  }
}

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  const center = Math.floor(array.length / 2);
  let left = array.slice(0, center);
  let right = array.slice(center);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const resultArray = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      resultArray.push(left.shift());
    } else {
      resultArray.push(right.shift());
    }
  }
  return [...resultArray, ...left, ...right];
}

let result = mergeSort([20, 3, 10, 9]); //[-30,3,4,8,9,10,20]
console.log("result: ", result);

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
