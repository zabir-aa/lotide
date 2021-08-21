const _ = require('../index');
const assert = require('chai').assert;

//Test Cases

const words = ["hello", "world", "lighthouse"];

describe("#without:", () => {
  it('returns [1, 2] from without([1, 2, 3, 4, 5], [3, 4, 5])', () => {
    assert.deepEqual(_.without([1, 2, 3, 4, 5], [3, 4, 5]), [1, 2]);
  });
  it('returns ["hello", "world"] from without(["hello", "world", "lighthouse"], ["lighthouse"])', () => {
    assert.deepEqual(_.without(words, ["lighthouse"]) ["hello", "world"])
  });
  it('Original array was not altered by the without function.', () => {
    assert.deepEqual(words, ["hello", "world", "lighthouse"])
  });
});