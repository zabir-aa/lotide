const _ = require('../index');
const assert = require('chai').assert;


//Test
describe("#map:", () => {
  it('returns ["g","c","t","m","t"] from map(["ground", "control", "to", "major", "tom"], words => words[0])', () => {
    assert.deepEqual(_.map(["ground", "control", "to", "major", "tom"], words => words[0]),["g","c","t","m","t"])
  });
});