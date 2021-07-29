// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion failed: ${actual} !== ${expected}`);
  }
};

/* TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 3);
*/

// FUNCTION IMPLEMENTATION
const eqArrays = function(array1, array2) {
  let match = true;
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        match = false;
      }
    }

  } else {
    match = false;
  }
  return match;
};

// TEST CODE
console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays([1, 2, 5], [1, 2, 3]));

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);