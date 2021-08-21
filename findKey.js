// FUNCTION IMPLEMENTATION

const findKey = function(object, callback) {
  console.log(Object.keys(object));
  for (let key of Object.keys(object)) {
    if (callback(object[key]) === true) {
      return key;
    }
  }
};

// EXPORT
module.exports = findKey;