let sum = require('./sumOfNumbers').sum;
let expect = require('chai').expect;

describe("Test summator", function () {
    it("Should return 3 for [1, 2]", function () {
        expect(sum([1, 2])).to.equal(3)
    });
    it("Should return 0", function () {
        expect(sum([])).to.equal(0)
    });
    it("Should return NaN", function () {
        expect(sum(['pesho', 1, 2])).to.be.NaN;
    });
    it("Should return 3.3", function () {
        expect(sum([1.1, 1.1, 1.1])).to.be.closeTo(3.3, 0.0001)
    });
    it("Should work with negative numbers", function () {
        expect(sum([-1, 5, -7])).to.equal(-3)
    });
    it("Should return NaN", function () {
        expect(sum('test')).to.be.NaN;
    })
});