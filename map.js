const map = function(array,callback) {
  const mapped = [];
  for (let item of array) {
    mapped.push(callback(item));
  }
  return mapped;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);

//Test
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


console.log(assertArraysEqual(map(["ground", "control", "to", "major", "tom"], words => words[0]),["g","c","t","m","t"]));