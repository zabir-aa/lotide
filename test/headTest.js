const _ = require('../index');
const assert = require('chai').assert;

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.deepEqual(_.head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.deepEqual(_.head(['5']), '5'); 
  });
  it("returns 'Lighthouse' for ['Lighthouse', 'Labs']", () => {
    assert.deepEqual(_.head(['Lighthouse', 'Labs']), 'Lighthouse');
  });
  it("returns '12' for [12],[33]", () => {
    assert.deepEqual(_.head([12],[33]), 12); 
  });
  it("returns 'undefined' for []", () => {
    assert.deepEqual(_.head([]), undefined); 
  });
});