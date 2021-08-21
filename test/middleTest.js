const _ = require('../index');
const assert = require('chai').assert;


// TEST CASES
describe("#middle", () => {
  // For arrays with one or two elements, there is no _.middle. Return an empty array.
  it("returns [] for [1]", () => {
    assert.deepEqual(_.middle([1]), []);
  });
  it("returns [] for [1, 2]", () => {
    assert.deepEqual(_.middle([1, 2]),[]);
  });
  // For arrays with odd number of elements, an array containing a single _.middle element should be returned.
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(_.middle([1, 2, 3]),[2]);
  });
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(_.middle([1, 2, 3, 4, 5]),[3]);
  });
  // For arrays with an even number of elements, an array containing the two elements in the _.middle should be returned.
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(_.middle([1, 2, 3, 4]),[2, 3]);
  });
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(_.middle([1, 2, 3, 4, 5, 6]),[3, 4]);
  });
});
