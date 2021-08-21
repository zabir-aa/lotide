// FUNCTION IMPLEMENTATION

const findKeyByValue = function(object, value) {
  let result;
  for (let i = 0; i < Object.keys(object).length; i++) {
    if (Object.values(object)[i] === value) {
      result = Object.keys(object)[i];
    }
  }
  return result;
};

// EXPORT
module.exports = findKeyByValue;