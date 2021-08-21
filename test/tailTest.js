const _ = require('../index');
const assert = require('chai').assert;

// TEST CODE
describe("#tail", () => {
  it('returns ["Labs" , "Web"] for ["Lighthouse", "Labs" , "Web"]', () => {
    assert.deepEqual(_.tail(["Lighthouse", "Labs" , "Web"]), ["Labs" , "Web"]);
  });
  it('returns [33] for [12,33]', () => {
    assert.deepEqual(_.tail([12,33]), [33]);
  });
  it('returns [] for [21]', () => {
    assert.deepEqual(_.tail([21]), []);
  });
  it('returns ["Labs" , "Web"] for ["Lighthouse", "Labs" , "Web"]', () => {
    assert.deepEqual(_.tail([]), []);
  });
});