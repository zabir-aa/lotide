// Takes input of an object and a callback function;
// finds the first occurence of a property value from the object
// which returns true if passed through the given callback function,
// and returns its key.

// FUNCTION IMPLEMENTATION
const findKey = function(object, callback) {
  for (let key of Object.keys(object)) {
    if (callback(object[key]) === true) {
      return key;
    }
  }
};

// EXPORT
module.exports = findKey;