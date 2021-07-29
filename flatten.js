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


const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`❌❌❌ Assertion failed: ${array1} !== ${array2}`);
  }
};

const flatten = function(array) {
  let output = [];
  for (let item in array) {
    if (Array.isArray(array[item])) {
      for (let subitem in array[item]) {
        output.push(array[item][subitem]);
      }
    } else {
      output.push(array[item]);
    }
  }
  array = output;
  return output;
};

// TEST CASE
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);