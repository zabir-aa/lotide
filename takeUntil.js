// FUNCTION IMPLEMENTATION

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

// EXPORT
module.exports = takeUntil;
