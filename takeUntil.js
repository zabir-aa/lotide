const takeUntil = function(array, callback) {
  const result = [];
  for (let item of array) {
    if (!callback(item)) {
      result.push(item);
    } else {
      break;
    }
  }
  return result;
};

// TEST

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


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ]);