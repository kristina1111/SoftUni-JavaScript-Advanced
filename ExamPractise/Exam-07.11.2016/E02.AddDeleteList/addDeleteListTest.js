let list = require('./addDeleteList');
let expect = require('chai').expect;

describe("Test list functionality", function () {
    let testList = null;
    beforeEach(function () {
        testList = (function () {
        //     let data = [];
        //     return {
        //         add: function(item) {
        //             data.push(item);
        //         },
        //         delete: function(index) {
        //             if (Number.isInteger(index) && index >= 0 && index < data.length) {
        //                 return data.splice(index, 1)[0];
        //             } else {
        //                 return undefined;
        //             }
        //         },
        //         toString: function() {
        //             return data.join(", ");
        //         }
        //     };
            return list;
        })();
    });

    describe("Test initial value of the data array and the type of the object properties", function () {
        it("The initial value of the data array should be ''", function () {
            expect(testList.toString()).to.equal('');
        });
        it("testList.add should be of type function", function () {
            expect(typeof(testList.add)).to.equal('function');
        });
        it("testList.delete should be of type function", function () {
            expect(typeof(testList.delete)).to.equal('function');
        });
        it("testList.toString should be of type function", function () {
            expect(typeof(testList.toString)).to.equal('function');
        });
    });
    describe("Test add method functionality", function () {
        it("Should add number to the testList inner array", function () {
            testList.add(123);
            testList.add(0);
            expect(testList.toString()).to.equal('123, 0');
        });
        it("Should add string to the testList inner array", function () {
            testList.add('test 1');
            testList.add('test');
            expect(testList.toString()).to.equal('test 1, test');
        });
        it("Should add array to the testList inner array", function () {
            testList.add([1, 'two']);
            testList.add(['test', 123]);
            expect(testList.toString()).to.equal('1,two, test,123');
        });
        it("Should add object to the testList inner array", function () {
            testList.add({prop: 'test'});
            testList.add({test: 123});
            let newList = testList.toString().split(', ');
            expect(newList[1].toString()).to.equal({test: 123}.toString());
        });
    });
    describe("Test delete method functionality", function () {
        it("Should delete item at valid index only", function () {
            testList.add(123);
            testList.add('test');
            testList.add([1,'two', 3]);
            expect(testList.delete(2).toString()).to.equal([1,'two', 3].toString())
        });
        it("Should return undefined if index is not valid", function () {
            testList.add(123);
            testList.add('test');
            testList.add([1,'two', 3]);
            expect(testList.delete(20)).to.be.undefined;
        });
        it("Should return undefined if index is not valid", function () {
            testList.add(123);
            testList.add('test');
            testList.add([1,'two', 3]);
            expect(testList.delete(3.14)).to.be.undefined;
        });
        it("Should return undefined if index is not valid", function () {
            testList.add(123);
            testList.add('test');
            testList.add([1,'two', 3]);
            expect(testList.delete('2dd')).to.be.undefined;
        });
        it("Should return undefined if index is not valid", function () {
            testList.add(123);
            testList.add('test');
            testList.add([1,'two', 3]);
            expect(testList.delete(-1)).to.be.undefined;
        });
    });
    describe("Test toString method functionality", function () {
        it("Should return string representation of each item in the array, separated by ', '", function () {
            testList.add(123);
            testList.add('test');
            testList.add([1,'two', 3]);
            testList.delete(2);
            testList.add('new');
            expect(testList.toString()).to.equal("123, test, new");
        })
    })
});