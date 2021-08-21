// FUNCTION IMPLEMENTATION
const countLetters = function(text) {
  let count = {};
  for (let letter of text) {
    if (letter !== " ") {
      if (letter in count) {
        count[letter] += 1;
      } else {
        count[letter] = 1;
      }
    }
  }
  return count;
};

// EXPORT
module.exports = countLetters;