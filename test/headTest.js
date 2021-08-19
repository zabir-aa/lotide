const head = require ('../head');
const assertEqual = require('../assertEqual');
// TEST CODE
assertEqual(head(["Lighthouse"] , ["Labs"]) , "Lighthouse");
assertEqual(head([12],[33]),12);
assertEqual(head([21]), 21);
assertEqual(head([]), undefined);