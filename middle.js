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


const middle = function(array) {
  if (array.length < 3) {
    return [];
  } else if (array.length % 2 === 0) {
    return [array[(array.length / 2) - 1],array[(array.length / 2)]];
  } else {
    return [array[Math.floor(array.length / 2)]];
  }
};

// TEST CASES
// For arrays with one or two elements, there is no middle. Return an empty array.
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1, 2]),[]);
// For arrays with odd number of elements, an array containing a single middle element should be returned.
assertArraysEqual(middle([1, 2, 3]),[2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]);
// For arrays with an even number of elements, an array containing the two elements in the middle should be returned.
assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]);