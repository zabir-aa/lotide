const _ = require('../index');
const assert = require('chai').assert;

// TEST CASE

describe("#flatten:", () => {
  it('returns [1, 2, 3, 4, 5, 6] by flattenning [1, 2, [3, 4], 5, [6]]', () => {
    assert.deepEqual(_.flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])
  });
});