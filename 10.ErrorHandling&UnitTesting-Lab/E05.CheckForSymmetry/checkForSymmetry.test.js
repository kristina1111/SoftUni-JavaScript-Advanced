let isSymmetric = require('./checkForSymmetry').isSymmetric;
let expect = require('chai').expect;

describe("Test symmetry of array", function () {
    describe("Tests for isSymmetric function and arguments", function () {
        it("Should be function", function () {
            expect(typeof(isSymmetric)).to.equal('function');
        });
        it("Should accept arguments", function () {
            expect(isSymmetric()).to.be.false;
        });
        it("Should accept only array", function () {
            expect(isSymmetric('test')).to.be.false;
        });
        it("Should accept only array", function () {
            expect(isSymmetric({})).to.be.false;
        });
    });

    describe("Should return true", function () {
        it("Should return true", function () {
            expect(isSymmetric(['bunny'])).to.be.true;
        });
        it("Should return true", function () {
            expect(isSymmetric([1, 2, 0, 2, 1])).to.be.true;
        });
        it("Should return true", function () {
            expect(isSymmetric([1.43, 2, 0, 2, 1.34])).to.be.false;
        });
        it("Should return true", function () {
            expect(isSymmetric(['bunny', 'fox'])).to.be.false;
        });
        it("Should return true", function () {
            expect(isSymmetric(['bunny', {}, new Date(), [], new Date(), {}, 'bunny'])).to.be.true;
        });
    });
});