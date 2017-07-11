let rgbToHexColor = require('./rgbToHex').rgbToHexColor;
let expect = require('chai').expect;

describe("Test conversion from RGB to Hex", function () {
    describe("Test arguments to be valid numbers between [0-255]", function () {
        it("negative red", function () {
            expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
        });

        it("negative green", function () {
            expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
        });

        it("negative blue", function () {
            expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
        });
        it("Should return undefined", function () {
            expect(rgbToHexColor('25', 25, 25)).to.be.undefined;
        });
        it("Should return undefined", function () {
            expect(rgbToHexColor(25, '25', 25)).to.be.undefined;
        });
        it("Should return undefined", function () {
            expect(rgbToHexColor(25, 25, '25')).to.be.undefined;
        });
        it("Should return undefined", function () {
            expect(rgbToHexColor(25, 25, 256)).to.be.undefined;
        });
        it("Should return undefined", function () {
            expect(rgbToHexColor(256, 25, 25)).to.be.undefined;
        });
        it("Should return undefined", function () {
            expect(rgbToHexColor(25, 256, 25)).to.be.undefined;
        });
        it("Should return undefined", function () {
            expect(rgbToHexColor(25, 25, 24.6)).to.be.undefined;
        });
        it("Should return undefined", function () {
            expect(rgbToHexColor(23.4, 25, 25)).to.be.undefined;
        });
        it("Should return undefined", function () {
            expect(rgbToHexColor(25, 25.6, 25)).to.be.undefined;
        });
        it("Should return undefined", function () {
            expect(rgbToHexColor([], 25.6, 25)).to.be.undefined;
        });
        it("Should return undefined", function () {
            expect(rgbToHexColor(25, {}, 25)).to.be.undefined;
        });
        it("rgbToHexColor(25, 25.6, new Date()) Should return undefined", function () {
            expect(rgbToHexColor(25, 25.6, new Date())).to.be.undefined;
        });
    });
    describe("Test return value to be string and valid hexadecimal color", function () {
        it("Should return string", function () {
            expect(typeof(rgbToHexColor(25, 25, 25))).to.equal('string')
        });
        it("Should return #445D98", function () {
            expect(rgbToHexColor(68, 93, 152)).to.equal('#445D98')
        });
        it("Should return #000000", function () {
            expect(rgbToHexColor(0, 0, 0)).to.equal('#000000')
        });
        it("Should return #FFFFFF", function () {
            expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF')
        });
    });
});