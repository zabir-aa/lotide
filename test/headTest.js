/*
const head = require ('../head');
const assertEqual = require('../assertEqual');
// TEST CODE
assertEqual(head(["Lighthouse"] , ["Labs"]) , "Lighthouse");
assertEqual(head([12],[33]),12);
assertEqual(head([21]), 21);
assertEqual(head([]), undefined);
*/
const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
  it("returns 'Lighthouse' for ['Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(['Lighthouse', 'Labs']), 'Lighthouse');
  });
  it("returns '12' for [12],[33]", () => {
    assert.strictEqual(head([12],[33]), 12); 
  });
  it("returns 'undefined' for []", () => {
    assert.strictEqual(head([]), undefined); 
  });
});