const tail = require('../tail')
const assert = require('chai').assert;

// TEST CODE
describe("#tail", () => {
  it('returns ["Labs" , "Web"] for ["Lighthouse", "Labs" , "Web"]', () => {
    assert.deepEqual(tail(["Lighthouse", "Labs" , "Web"]), ["Labs" , "Web"]);
  });
  it('returns [33] for [12,33]', () => {
    assert.deepEqual(tail([12,33]), [33]);
  });
  it('returns [] for [21]', () => {
    assert.deepEqual(tail([21]), []);
  });
  it('returns ["Labs" , "Web"] for ["Lighthouse", "Labs" , "Web"]', () => {
    assert.deepEqual(tail([]), []);
  });
});