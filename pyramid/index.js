// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  for (let i = 1; i <= n; i++) {
    for (let i = 0; i < i; i++) {
      console.log("&nbsp;");
    }
    for (let j = 1; j <= n; j++) {
      console.log("#");
    }
    console.log("\n");
  }
}
pyramid(3);
module.exports = pyramid;
