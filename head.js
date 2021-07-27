const head = function (array) {
  return array[0]
}





// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual(head(["Lighthouse"] , ["Labs"]) , "Lighthouse");
assertEqual(head([12],[33]),12);
assertEqual(head([21]), 21);
assertEqual(head([]), undefined);