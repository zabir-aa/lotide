// FUNCTION IMPLEMENTATION

const map = function(array,callback) {
  const mapped = [];
  for (let item of array) {
    mapped.push(callback(item));
  }
  return mapped;
};

// EXPORT
module.exports = map;