let isOddOrEven = require('./isEvenOrOdd').isEvenOrOdd;
let expect = require('chai').expect;

describe("Test passed string parameter's length if it is even or odd", function () {
    describe("Test if function process invalid parameter", function () {
        it("Should return undefined if parameter is array", function () {
            expect(isOddOrEven([1,2,3])).to.be.undefined;
        });
        it("Should return undefined if parameter is object", function () {
            expect(isOddOrEven({test : 'test'})).to.be.undefined;
        });
        it("Should return undefined if parameter is number", function () {
            expect(isOddOrEven(123)).to.be.undefined;
        })
    });
    describe("Test if function process valid parameter", function () {
        it("Should return 'odd' if parameter is 'bunny'", function () {
            expect(isOddOrEven('bunny')).to.equal('odd');
        });
        it("Should return 'odd' if parameter is 'bunny and foxy'", function () {
            expect(isOddOrEven('bunny and foxy')).to.equal('even');
        });
        it("Should return 'odd' if parameter is empty string", function () {
            expect(isOddOrEven('')).to.equal('even');
        });
    })
});