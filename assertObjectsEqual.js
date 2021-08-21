const eqObjects = require('./eqObjects');

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)}`);
  } else {
    console.log(`❌❌❌ Assertion failed: ${inspect(actual)}`);
  }
};

// EXPORT
module.exports = assertObjectsEqual;