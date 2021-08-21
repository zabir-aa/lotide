// FUNCTION IMPLEMENTATION
const countOnly = function(allItems, itemsToCount) {
  var output = {};
  for (var item of allItems) {
    if (itemsToCount[item]) {
      if (output[item]){
        output[item] += 1;
      } else{
        output[item] = 1;
      }
    }
  }
  return output;
}

// EXPORT
module.exports = countOnly;