let createList = require('./createList');
let expect = require('chai').expect;

describe("Test listManipulator functionality", function () {
    let listManipulator = null;
    beforeEach(function () {
        listManipulator = createList()
    });
    describe("Test if inner array is initially empty and if listManipulator properties are functions", function () {
        it("inner array should be initially empty", function () {
            expect(listManipulator.toString()).to.equal('');
        });
        it("listManipulator.add should be of type function", function () {
            expect(typeof(listManipulator.add)).to.equal('function');
        });
        it("listManipulator.shiftLeft should be of type function", function () {
            expect(typeof(listManipulator.shiftLeft)).to.equal('function');
        });
        it("listManipulator.shiftRight should be of type function", function () {
            expect(typeof(listManipulator.shiftRight)).to.equal('function');
        });
        it("listManipulator.swap should be of type function", function () {
            expect(typeof(listManipulator.swap)).to.equal('function');
        });
        it("listManipulator.toString should be of type function", function () {
            expect(typeof(listManipulator.toString)).to.equal('function');
        });
    });
    
    describe("Test listManipulator.add functionality", function () {
        it("Should add string to the end of the inner array", function () {
            for(let i = 0; i<5; i++){
                listManipulator.add(`Test string ${i}`);
            }
            expect(listManipulator.toString().split(', ')[4]).to.equal('Test string 4')
        });
        it("Should add integer to the end of the inner array", function () {
            for(let i = 0; i<5; i++){
                listManipulator.add(i);
            }
            expect(listManipulator.toString().split(', ')[4]).to.equal('4')
        });
        it("Should add integer to the end of the inner array", function () {
            for(let i = 0; i<5; i++){
                listManipulator.add(-i);
            }
            expect(listManipulator.toString().split(', ')[4]).to.equal('-4')
        });
        it("Should add floating point number to the end of the inner array", function () {
            for(let i = 0; i<5; i++){
                listManipulator.add(i + 0.345);
            }
            expect(listManipulator.toString().split(', ')[4]).to.equal('4.345')
        });
        it("Should add array to the end of the inner array", function () {
            for(let i = 0; i<5; i++){
                listManipulator.add([i, 'two']);
            }
            expect(listManipulator.toString().split(', ')[4]).to.equal('4,two')
        });
        it("Should add object to the end of the inner array", function () {
            for(let i = 0; i<5; i++){
                listManipulator.add({prop: i});
            }
            expect(listManipulator.toString().split(', ')[4]).to.equal({prop: 4}.toString())
        });
    });
    describe("Test listManipulator.shiftLeft functionality", function () {
        it("Should shifts all elements one position left and the first elements comes last at a call", function () {
            listManipulator.add(1);
            listManipulator.add('two');
            listManipulator.add([3]);
            listManipulator.add({prop:4});
            listManipulator.shiftLeft();
            expect(listManipulator.toString().split(', ')[0]).to.equal('two');
            expect(listManipulator.toString().split(', ')[3]).to.equal('1');
        });
        it("Should shifts all elements one position left and the first elements comes last at a call", function () {
            listManipulator.add(1);
            listManipulator.add('two');
            listManipulator.add([3]);
            listManipulator.add({prop:4});
            listManipulator.shiftLeft();
            listManipulator.shiftLeft();
            listManipulator.shiftLeft();
            expect(listManipulator.toString().split(', ')[0]).to.equal({prop:4}.toString());
            expect(listManipulator.toString().split(', ')[3]).to.equal([3].toString());
        });
        it("Should not change the inner array if its length is 1", function () {
            listManipulator.add(1);
            listManipulator.shiftLeft();
            expect(listManipulator.toString()).to.equal('1');
        });
        it("Should not change the inner array if its length is 0", function () {
            listManipulator.shiftLeft();
            expect(listManipulator.toString()).to.equal('');
        });
    });
    describe("Test listManipulator.shiftRight functionality", function () {
        it("shifts all elements one position right and the last elements comes first", function () {
            listManipulator.add(1);
            listManipulator.add('two');
            listManipulator.add([3]);
            listManipulator.add({prop:4});
            listManipulator.shiftRight();
            expect(listManipulator.toString().split(', ')[0]).to.equal({prop:4}.toString());
            expect(listManipulator.toString().split(', ')[3]).to.equal([3].toString());
        });
        it("shifts all elements one position right and the last elements comes first", function () {
            listManipulator.add(1);
            listManipulator.add('two');
            listManipulator.add([3]);
            listManipulator.add({prop:4});
            listManipulator.shiftRight();
            listManipulator.shiftRight();
            listManipulator.shiftRight();
            expect(listManipulator.toString().split(', ')[0]).to.equal('two');
            expect(listManipulator.toString().split(', ')[3]).to.equal('1');
        });
        it("Should not change the inner array if its length is 1", function () {
            listManipulator.add(1);
            listManipulator.shiftRight();
            expect(listManipulator.toString()).to.equal('1');
        });
        it("Should not change the inner array if its length is 0", function () {
            listManipulator.shiftRight();
            expect(listManipulator.toString()).to.equal('');
        });
    });
    describe("Test listManipulator.swap functionality", function () {
        it("Should not change the inner array if indexes are invalid", function () {
            listManipulator.add(1);
            listManipulator.add('two');
            listManipulator.add([3]);
            listManipulator.add({prop:4});
            let testString = listManipulator.toString();
            expect(listManipulator.swap(0, 20)).to.be.false;
            expect(listManipulator.swap(20, 0)).to.be.false;
            expect(listManipulator.toString()).to.equal(testString);
        });
        it("Should not change the inner array if indexes are invalid", function () {
            listManipulator.add(1);
            listManipulator.add('two');
            listManipulator.add([3]);
            listManipulator.add({prop:4});
            let testString = listManipulator.toString();
            expect(listManipulator.swap(10, 20)).to.be.false;
            expect(listManipulator.swap(20, 10)).to.be.false;
            expect(listManipulator.toString()).to.equal(testString);
        });
        it("Should not change the inner array if indexes are invalid", function () {
            listManipulator.add(1);
            listManipulator.add('two');
            listManipulator.add([3]);
            listManipulator.add({prop:4});
            let testString = listManipulator.toString();
            expect(listManipulator.swap(-10, -20)).to.be.false;
            expect(listManipulator.swap(1, -20)).to.be.false;
            expect(listManipulator.swap(-20, 1)).to.be.false;
            expect(listManipulator.toString()).to.equal(testString);
        });
        it("Should not change the inner array if indexes are invalid", function () {
            listManipulator.add(1);
            listManipulator.add('two');
            listManipulator.add([3]);
            listManipulator.add({prop:4});
            let testString = listManipulator.toString();
            expect(listManipulator.swap(0.44, 3.14)).to.be.false;
            expect(listManipulator.swap(0.44, 3)).to.be.false;
            expect(listManipulator.swap(3, 0.44)).to.be.false;
            expect(listManipulator.toString()).to.equal(testString);
        });
        it("Should not change the inner array if indexes are invalid", function () {
            listManipulator.add(1);
            listManipulator.add('two');
            listManipulator.add([3]);
            listManipulator.add({prop:4});
            let testString = listManipulator.toString();
            expect(listManipulator.swap('two', 3)).to.be.false;
            expect(listManipulator.swap(3, 'two')).to.be.false;
            expect(listManipulator.toString()).to.equal(testString);
        });
        it("Should not change the inner array if indexes are invalid", function () {
            listManipulator.add(1);
            listManipulator.add('two');
            listManipulator.add([3]);
            listManipulator.add({prop:4});
            let testString = listManipulator.toString();
            expect(listManipulator.swap(3, 3)).to.be.false;
            expect(listManipulator.toString()).to.equal(testString);
        });
        it("Should not change the inner array if indexes are invalid", function () {
            listManipulator.add(1);
            listManipulator.add('two');
            listManipulator.add([3]);
            listManipulator.add({prop:4});
            let testString = listManipulator.toString();
            expect(listManipulator.swap('2', '0')).to.be.false;
            expect(listManipulator.swap('0', '2')).to.be.false;
            expect(listManipulator.swap("2", 0)).to.be.false;
            expect(listManipulator.swap(0, "2")).to.be.false;
            expect(listManipulator.toString()).to.equal(testString);
        });
        it("Should not change the inner array if indexes are invalid", function () {
            listManipulator.add(1);
            listManipulator.add('two');
            listManipulator.add([3]);
            listManipulator.add({prop:4});
            let testString = listManipulator.toString();
            expect(listManipulator.swap([1,2], {prop:0})).to.be.false;
            expect(listManipulator.toString()).to.equal(testString);
        });
        it("should return false on swap with incorrect or equal indices", function () {
            listManipulator.add(5);
            listManipulator.add(7);
            listManipulator.add(8);
            expect(listManipulator.swap(0, 3)).to.equal(false);
            expect(listManipulator.toString()).to.equal("5, 7, 8");
            expect(listManipulator.swap(3, 0)).to.equal(false);
            expect(listManipulator.toString()).to.equal("5, 7, 8");
        });
        it("Should swap the items at the specified indexes and return true when indexes are valid", function () {
            listManipulator.add(1);
            listManipulator.add('two');
            listManipulator.add([3]);
            listManipulator.add({prop:4});
            expect(listManipulator.swap(3, 1)).to.be.true;
            expect(listManipulator.swap(2,0)).to.be.true;
            expect(listManipulator.toString().split(', ')[3]).to.equal('two');
            expect(listManipulator.toString().split(', ')[1]).to.equal({prop:4}.toString());
            expect(listManipulator.toString().split(', ')[2]).to.equal('1');
            expect(listManipulator.toString().split(', ')[0]).to.equal([3].toString());
        });
    });
    describe("Test listManipulator.toString functionality", function () {
        it("Should print inner array elements joined by ', '", function () {
            let testArr = [1, 'two', {prop:3}, [4, 5]];
            testArr.forEach(e=>{
                listManipulator.add(e);
            });
            expect(listManipulator.toString()).to.equal(testArr.join(', '));

            listManipulator.swap(0,3);
            expect(listManipulator.toString()).to.equal([[4, 5], 'two', {prop:3}, 1].join(', '))
        });

    });
});