const tail = function(array) {
  return array.slice(1);
};




// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual.length === expected.length) {
    for (let i = 0; i < expected.length; i++) {
      if (actual[i] === expected[i]) {
        console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
      } else {
        console.log(`❌❌❌ Assertion failed: ${actual} !== ${expected}`);
      }
    }
  } else {
    console.log(`❌❌❌ Assertion failed: ${actual}'s length !== ${expected}'s length`);
  }
};

// TEST CODE
assertEqual(tail(["Lighthouse", "Labs" , "Web"]) , ["Labs" , "Web"]);
assertEqual(tail([12,33]),[33,11]);
assertEqual(tail([21]), []);
assertEqual(tail([]), []);