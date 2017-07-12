let mathEnforcer = require('./mathEnforcer').mathEnforcer;
let expect = require('chai').expect;

describe("Test mathEnforcer with three methods", function () {
    describe("Test if mathEnforcer is of valid type and if has expected methods", function () {
        it("mathEnforcer should be of type object", function () {
            expect(typeof(mathEnforcer)).to.equal('object');
        });
        it("mathEnforcer should have property addFive", function () {
            expect(mathEnforcer.hasOwnProperty('addFive')).to.be.true;
        });
        it("mathEnforcer should have property subtractTen", function () {
            expect(mathEnforcer.hasOwnProperty('subtractTen')).to.be.true;
        });
        it("mathEnforcer should have property sum", function () {
            expect(mathEnforcer.hasOwnProperty('sum')).to.be.true;
        });
    });
    describe("Test method 'addFive'", function () {
        it("Should be of type function", function () {
            expect(typeof(mathEnforcer.addFive)).to.equal('function');
        });
        it("Should return undefined if parameter is array", function () {
            expect(mathEnforcer.addFive([])).to.be.undefined;
        });
        it("Should return undefined if parameter is object", function () {
            expect(mathEnforcer.addFive({test:'test'})).to.be.undefined;
        });
        it("Should return undefined if parameter is string", function () {
            expect(mathEnforcer.addFive('5')).to.be.undefined;
        });
        it("Should return number", function () {
            expect(typeof(mathEnforcer.addFive(15))).to.equal('number');
        });
        it("Should work with positive numbers", function () {
            expect(mathEnforcer.addFive(5)).to.equal(10);
        });
        it("Should work with negative numbers", function () {
            expect(mathEnforcer.addFive(-5)).to.equal(0);
        });
        it("Should work with floating point numbers", function () {
            expect(mathEnforcer.addFive(-5.34)).to.be.closeTo(-0.34, 0.0001);
        });
    });
    describe("Test method 'subtractTen'", function () {
        it("Should be of type function", function () {
            expect(typeof(mathEnforcer.subtractTen)).to.equal('function');
        });
        it("Should return undefined if parameter is array", function () {
            expect(mathEnforcer.subtractTen([])).to.be.undefined;
        });
        it("Should return undefined if parameter is object", function () {
            expect(mathEnforcer.subtractTen({test:'test'})).to.be.undefined;
        });
        it("Should return undefined if parameter is string", function () {
            expect(mathEnforcer.subtractTen('5')).to.be.undefined;
        });
        it("Should return number", function () {
            expect(typeof(mathEnforcer.subtractTen(15))).to.equal('number');
        });
        it("Should work with positive numbers", function () {
            expect(mathEnforcer.subtractTen(5)).to.equal(-5);
        });
        it("Should work with negative numbers", function () {
            expect(mathEnforcer.subtractTen(-5)).to.equal(-15);
        });
        it("Should work with floating point numbers", function () {
            expect(mathEnforcer.subtractTen(5.34)).to.be.closeTo(-4.66, 0.0001);
        });
    });
    describe("Test method 'sum'", function () {
        it("Should be of type function", function () {
            expect(typeof(mathEnforcer.sum)).to.equal('function');
        });
        it("Should return undefined if the first parameter is array", function () {
            expect(mathEnforcer.sum([], 5)).to.be.undefined;
        });
        it("Should return undefined if the second parameter is array", function () {
            expect(mathEnforcer.sum(5, [])).to.be.undefined;
        });
        it("Should return undefined if the first parameter is object", function () {
            expect(mathEnforcer.sum({test:'test'}, 0)).to.be.undefined;
        });
        it("Should return undefined if the second parameter is object", function () {
            expect(mathEnforcer.sum(0, {test:'test'})).to.be.undefined;
        });
        it("Should return undefined if the first parameter is string", function () {
            expect(mathEnforcer.sum('5', 5)).to.be.undefined;
        });
        it("Should return undefined if the second parameter is string", function () {
            expect(mathEnforcer.sum(5, '5')).to.be.undefined;
        });
        it("Should return number", function () {
            expect(typeof(mathEnforcer.sum(15, 0))).to.equal('number');
        });
        it("Should work with positive numbers", function () {
            expect(mathEnforcer.sum(5, 6)).to.equal(11);
        });
        it("Should work with negative numbers", function () {
            expect(mathEnforcer.sum(-5, -7)).to.equal(-12);
        });
        it("Should work with one positive and one negative number", function () {
            expect(mathEnforcer.sum(5, -7)).to.equal(-2);
        });
        it("Should work with floating point numbers", function () {
            expect(mathEnforcer.sum(5.34, 0.6)).to.be.closeTo(5.94, 0.01);
        });
    });
});