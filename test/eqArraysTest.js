const _ = require('../index');
const assert = require('chai').assert;

describe("#eqArrays:", () => {
  it("equating [1, 2, 5] and [1, 2, 3]: false'", () => {
    assert.strictEqual(_.eqArrays([1, 2, 3], [1, 2, 3]), false);
  });
  it("equating [1, 2, 3] and [1, 2, 3]: true", () => {
    assert.strictEqual(_.eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
});