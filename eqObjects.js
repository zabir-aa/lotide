const eqArrays = require('./eqArrays');

// FUNCTION IMPLEMENTATION
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

// EXPORT
module.exports = eqObjects;