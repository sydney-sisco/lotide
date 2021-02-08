const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it('returns [2, 3] for [1, 2, 3]', () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it('returns empty array for array with single element', () => {
    assert.deepEqual(tail([5]), []);
  });

  it('returns empty array for empty array', () => {
    assert.deepEqual(tail([]), []);
  });

  it('should not modify the original array', () => {
    const input = ["Jan", "Feb", "March", "April"];
    tail(input);
    assert.equal(input.length, 4);
  });
});
