const assert = require('chai').assert;
const rectangle = require('../diagonal');

describe('Rectangle', () => {
  const rec = { width: 10, height: 10 };

  it('#area', () => {
    assert.equal(rectangle.area(rec), 100);
  });

  it('#diagonal', () => {
    assert.equal(rectangle.diagonal(rec), 14.142135623730951);
  });

  it('#perimeter', () => {
    assert.equal(rectangle.perimeter(rec), 40);
  });

  it('#isSquare', () => {
    assert.isTrue(rectangle.isSquare(rec));
  });
});
