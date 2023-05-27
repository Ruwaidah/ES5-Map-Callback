const array = [1, 2, 3, 4, 5, 6];

function double(arr) {
  return arr.map(function (val) {
    return val * 2;
  });
}

console.log(double(array));
/* Write an ES2015 Version */
const double1 = (arr) => arr.map((val) => val * 2);
console.log(double1(array));

// Refactor the following function to use arrow functions:
function squareAndFindEvens(numbers) {
  var squares = numbers.map(function (num) {
    return num ** 2;
  });
  var evens = squares.filter(function (square) {
    return square % 2 === 0;
  });
  return evens;
}

console.log(squareAndFindEvens(array));

const squareAndFindEvens1 = (numbers) =>
  numbers.map((num) => num ** 2).filter((square) => square % 2 === 0);

console.log(squareAndFindEvens1(array));
