const _ = require('../index');
const assert = require('chai').assert;

const cd = { c: "1", d: ["2", 3]};
const dc = { d: ["2", 3], c: "1"};

const cd2 = { c: "1", d: ["2", 3, 4] };
describe("#eqObjects:", () => {
  it('equating { c: "1", d: ["2", 3]} and { d: ["2", 3], c: "1"} : true', () => {
    assert.deepEqual(_.eqObjects(cd, dc), true);
  });
  it('equating {c: "1", d: ["2", 3]} and {c: "1", d: ["2", 3, 4] } : false', () => {
    assert.deepEqual(_.eqObjects(cd, cd2), false);
  });
});



