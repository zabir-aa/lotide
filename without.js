// FUNCTION IMPLEMENTATION

const without = function(source, itemsToRemove) {
  let output = [];
  for (let i = 0; i < source.length; i++) {
    let match = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        match = true;
      }
    }
    if (match === false) {
      output.push(source[i]);
    }
  }
  return output;
};

// EXPORT
module.exports = without;