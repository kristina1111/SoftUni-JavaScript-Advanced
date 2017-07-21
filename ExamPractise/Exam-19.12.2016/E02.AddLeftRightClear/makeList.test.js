let makeList = require('./makeList');
let expect = require('chai').expect;

describe("Test makeList functionality", function () {
    let myList = null;
    beforeEach(function () {
        myList = makeList();
    });
    afterEach(function () {
        myList = null;
    });
    describe("Test the initial value of the array and type of properties", function () {
        it("Should be empty array when first initialized", function () {
            expect(myList.toString()).to.equal('');
            expect(typeof myList.addLeft).to.equal('function');
            expect(typeof myList.addRight).to.equal('function');
            expect(typeof myList.clear).to.equal('function');
            expect(typeof myList.toString).to.equal('function');
        });
    });
    describe("Test addLeft method Functionality", function () {
        it("Should add strings at the beginning of the array", function () {
            for(let i = 0; i<3; i++){
                myList.addLeft(`Test item ${i}`);
            }
            myList.addLeft('Test');
            let resultArr = myList.toString().split(', ');
            expect(resultArr[0]).to.equal("Test");
        });
        it("Should add array at the beginning of the array", function () {
            for(let i = 0; i<3; i++){
                myList.addLeft([{i}]);
            }
            myList.addLeft([1,2,3]);
            let resultArr = myList.toString().split(', ');
            expect(resultArr[0]).to.equal([1,2,3].toString());
        });
        it("Should add object at the beginning of the array", function () {
            for(let i = 0; i<3; i++){
                myList.addLeft({prop:{i}});
            }
            myList.addLeft({prop:'Test'});
            let resultArr = myList.toString().split(', ');
            expect(resultArr[0]).to.equal({prop:'Test'}.toString());
        });
        it("Should add numbers at the beginning of the array", function () {
            for(let i = 0; i<3; i++){
                myList.addLeft(i);
            }
            myList.addLeft(202);
            let resultArr = myList.toString().split(', ');
            expect(resultArr[0]).to.equal('202');
        });
    });
    describe("Test addRight method Functionality", function () {
        it("Should add strings at the end of the array", function () {
            for(let i = 0; i<3; i++){
                myList.addRight(`Test item ${i}`);
            }
            myList.addRight('Test');
            let resultArr = myList.toString().split(', ');
            expect(resultArr[3]).to.equal("Test");
        });
        it("Should add array at the end of the array", function () {
            for(let i = 0; i<3; i++){
                myList.addRight([{i}]);
            }
            myList.addRight([1,2,3]);
            let resultArr = myList.toString().split(', ');
            expect(resultArr[3]).to.equal([1,2,3].toString());
        });
        it("Should add object at the end of the array", function () {
            for(let i = 0; i<3; i++){
                myList.addRight({prop:{i}});
            }
            myList.addRight({prop:'Test'});
            let resultArr = myList.toString().split(', ');
            expect(resultArr[3]).to.equal({prop:'Test'}.toString());
        });
        it("Should add numbers at the end of the array", function () {
            for(let i = 0; i<3; i++){
                myList.addRight(i);
            }
            myList.addRight(202);
            let resultArr = myList.toString().split(', ');
            expect(resultArr[3]).to.equal('202');
        });
    });
    describe("Test clear method functionality", function () {
        it("Should make the array empty when clear is called", function () {
            for(let i = 0; i<3; i++){
                myList.addRight(i);
            }
            for(let i = 0; i<3; i++){
                myList.addLeft(`Test ${i}`);
            }
            myList.clear();
            expect(myList.toString()).to.equal('');
        });
    });
    describe("Test toString method functionality", function () {
        it("Should return the array elements joined by ', '", function () {
            myList.addRight(1);
            myList.addRight("two");
            myList.addLeft([1, 2, 'story']);
            myList.addLeft(201);
            myList.addLeft({prop:"test"});
            expect(myList.toString()).to.equal("[object Object], 201, 1,2,story, 1, two")
        });
    });
});