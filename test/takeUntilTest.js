const _ = require('../index');
const assert = require('chai').assert;

describe("#takeUntil:", () => {
  it('returns [ 1, 2, 5, 7, 2 ] from  takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0)', () => {
    assert.deepEqual(_.takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [1, 2, 5, 7, 2])
  });
  it('returns ["I\'ve", "been", "to", "Hollywood"] from  takeUntil(["I\'ve", "been", "to", "Hollywood", ",", "I\'ve", "been", "to", "Redwood"], x => x === ",")', () => {
    assert.deepEqual(_.takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ','),["I've", "been", "to", "Hollywood"])
  });
});