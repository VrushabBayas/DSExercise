// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  let a = 0;
  b = 1;
  let nextTerm = 0;
  let fibArray = [];
  for (let index = 0; index < n; index++) {
    fibArray.push(a);
    nextTerm = a + b;
    a = b;
    b = nextTerm;
  }
  return fibArray;
}
const fibSeries = fib(5);
console.log("fibSeries: ", fibSeries);
module.exports = fib;
