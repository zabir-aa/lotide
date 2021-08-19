const tail = require('../tail')
const assertArraysEqual = require('../assertArraysEqual')

// TEST CODE
assertArraysEqual(tail(["Lighthouse", "Labs" , "Web"]) , ["Labs" , "Web"]);
assertArraysEqual(tail([12,33]),[33,11]);
assertArraysEqual(tail([21]), []);
assertArraysEqual(tail([]), []);