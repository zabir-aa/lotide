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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {
  let match = false;
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const item in object1) {
      match = false;
      if (typeof(object1[item]) === "object" && (object1[item].length === object2[item].length)) {
        match = eqArrays(object1[item], object2[item]);
      } else if (object1[item] === object2[item]) {
        match = true;
      }
    }
  }
  return match;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)}`);
  } else {
    console.log(`❌❌❌ Assertion failed: ${inspect(actual)}`);
  }
};

//TEST CODE
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false