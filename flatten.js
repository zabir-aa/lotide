// FUNCTION IMPLEMENTATION

const flatten = function(array) {
  let output = [];
  for (let item in array) {
    if (Array.isArray(array[item])) {
      for (let subitem in array[item]) {
        output.push(array[item][subitem]);
      }
    } else {
      output.push(array[item]);
    }
  }
  array = output;
  return output;
};

// EXPORT
module.exports = flatten;