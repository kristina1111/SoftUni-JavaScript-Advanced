let lookupChar = require('./charLookup').lookupChar;
let expect = require('chai').expect;

describe("Test if function returns char from passed parameter string at passed parameter index", function () {
    describe("Test if passed parameters are invalid", function () {
        it("Should return 'undefined' if first parameter is array", function () {
            expect(lookupChar([1,2,3], 1)).to.be.undefined;
        });
        it("Should return 'undefined' if first parameter is object", function () {
            expect(lookupChar({test:'test'}, 1)).to.be.undefined;
        });
        it("Should return 'undefined' if first parameter is number", function () {
            expect(lookupChar(123, 1)).to.be.undefined;
        });
        it("Should return 'undefined' if second parameter is array", function () {
            expect(lookupChar('bunny', [1,2,3])).to.be.undefined;
        });
        it("Should return 'undefined' if second parameter is object", function () {
            expect(lookupChar('bunny', {test:'test'})).to.be.undefined;
        });
        it("Should return 'undefined' if second parameter is string", function () {
            expect(lookupChar('bunny', 'fox')).to.be.undefined;
        });
        it("Should return 'undefined' if second parameter is string", function () {
            expect(lookupChar('bunny', '3')).to.be.undefined;
        });
        it("Should return 'undefined' if both parameters are invalid", function () {
            expect(lookupChar([1,2,3], '3')).to.be.undefined;
        });
        it("Should return 'undefined' if second parameter is floating point number", function () {
            expect(lookupChar('bunny', 3.3)).to.be.undefined;
        });
    });
    describe("Test if both parameters are valid but the value of the second parameter is out of the range of the first parameter length", function () {
        it("Should return 'Incorrect index' if index = 10 and string length = 5", function () {
            expect(lookupChar('bunny', 10)).to.equal('Incorrect index');
        });
        it("Should return 'Incorrect index' if index = -10 and string length = 5", function () {
            expect(lookupChar('bunny', -10)).to.equal('Incorrect index');
        });
        it("Should return 'Incorrect index' if index = 5 and string length = 5", function () {
            expect(lookupChar('bunny', 5)).to.equal('Incorrect index');
        });
        it("Should return 'Incorrect index' if index = 0 and string is empty", function () {
            expect(lookupChar('', 0)).to.equal('Incorrect index');
        });

    });
    describe("Test if function returns char equal to the char at position index in the passed string", function () {
        it("Should return 'b' if index = 0 and string = 'bunny'", function () {
            expect(lookupChar('bunny', 0)).to.equal('b');
        });
        it("Should return 'y' if index = 0 and string = 'bunny'", function () {
            expect(lookupChar('bunny', 4)).to.equal('y');
        });
        it("Should return 'n' if index = 2 and string = 'bunny'", function () {
            expect(lookupChar('bunny', 2)).to.equal('n');
        });
    });
});