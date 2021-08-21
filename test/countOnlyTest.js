const _ = require('../index');
const assert = require('chai').assert;

// TEST
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const result = _.countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// TEST CASES
describe("#countOnly:", () => {
  it("returns 1 for 'Jason'", () => {
    assert.strictEqual(result["Jason"], 1);
  });
  it("returns undefined for 'Karima'", () => {
    assert.strictEqual(result["Karima"], undefined);
  });
  it("returns undefined for 'Agouhanna'", () => {
    assert.strictEqual(result["Agouhanna"], undefined);
  });
  it("returns 2 for 'Fang'", () => {
    assert.strictEqual(result["Fang"], 2);
  });
});