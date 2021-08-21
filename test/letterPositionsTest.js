const _ = require('../index');
const assert = require('chai').assert;

//TEST

describe("#letterPositions:", () => {
  it('returns [1] from letterPositions("hello").e', () => {
    assert.deepEqual(_.letterPositions("hello").e, [1])
  });
  it('returns [1] from letterPositions("hello").e', () => {
    assert.deepEqual(_.letterPositions("Lighthouse in the house"), {
      L: [ 0 ],
      i: [ 1, 11 ],
      g: [ 2 ],
      h: [ 3, 5, 15, 18 ],
      t: [ 4, 14 ],
      o: [ 6, 19 ],
      u: [ 7, 20 ],
      s: [ 8, 21 ],
      e: [ 9, 16, 22 ],
      n: [ 12 ]
    })
  });
});