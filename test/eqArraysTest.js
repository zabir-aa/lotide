const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays')

// TEST CODE
console.log(`equating [1, 2, 5] and [1, 2, 3]: ${eqArrays([1, 2, 3], [1, 2, 3])}`);
console.log(`equating [1, 2, 5] and [1, 2, 3]: ${eqArrays([1, 2, 5], [1, 2, 3])}`);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);