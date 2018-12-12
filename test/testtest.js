var assert = require('assert');
var expect = require('chai').expect;

function osszead(a, b) {
  return a + b;
}
describe("testtest", function () {
  it('should return 3 when a=1 and b=2', function () {
    var c = osszead(1, 2);
    expect(c).to.be.equal(3);
  });
});

