let SortedList = require('./SortedList');
let expect = require('chai').expect;

describe("Test SortedList class functionality", function () {
    let newList = null;
    beforeEach(function () {
        newList = new SortedList();
    });
    describe("Test newly created object if it has all properties", function () {
        it("should have all of the functions in it's prototype", function() {
            expect(SortedList.prototype.hasOwnProperty('add')).to.equal(true, "Function add() was not found.");
            expect(SortedList.prototype.hasOwnProperty('remove')).to.equal(true, "Function remove() was not found.");
            expect(SortedList.prototype.hasOwnProperty('get')).to.equal(true, "Function get() was not found.");
        });

        it("should have size property getter", function() {
            expect(SortedList.prototype.hasOwnProperty('size')).to.equal(true, "Property size was not found.");
            expect(typeof newList.size).to.not.equal('function', "Property size should not be a function.");
        });

        it("Should be instance of SortedList", function () {
            expect(newList instanceof SortedList).to.be.true;
        });
        it("Should have property list which is empty array", function () {
            expect(newList.list instanceof Array).to.be.true;
            expect(newList.list.length).to.equal(0);
        });
        it("Should have method add", function () {
            expect(typeof(newList.add)).to.equal('function');
        });
        it("Should have method remove", function () {
            expect(typeof(newList.remove)).to.equal('function');
        });
        it("Should have method get", function () {
            expect(typeof(newList.get)).to.equal('function');
        });
        it("Should have method vrfyRange", function () {
            expect(typeof(newList.vrfyRange)).to.equal('function');
        });
        it("Should have method sort", function () {
            expect(typeof(newList.sort)).to.equal('function');
        });
        it("Should have accessor property size which returns number", function () {
            expect(typeof(newList.size)).to.equal('number');
        });
    });
    
    describe("Test add method functionality", function () {
        it("Should add element to the collection", function () {
            newList.add(13);
            expect(newList.list.toString()).to.equal('13');
            newList.add(135);
            expect(newList.list.toString()).to.equal('13,135');
        });
        it("Should sort elements in ascending order after add method is called", function () {
            newList.add(13);
            expect(newList.list.toString()).to.equal('13');
            newList.add(-13);
            expect(newList.list.toString()).to.equal('-13,13');
            newList.add(5);
            newList.add(1);
            expect(newList.list.toString()).to.equal('-13,1,5,13');
        });
    });
    describe("Test remove method which removes the element at position index", function () {
        describe("Test behaviour when invalid index is passed", function () {
            it("Should throw error, when collection is empty", function () {
                expect(()=>{newList.remove(0)}).to.throw(Error,"Collection is empty.");
            });
            it("Should throw error, when index is outside the range of the collection", function () {
                newList.add(5);
                newList.add(1);
                newList.add(13);
                expect(()=>{newList.remove(3)}).to.throw(Error,"Index was outside the bounds of the collection.");
            });
            it("Should throw error, when index is outside the range of the collection", function () {
                newList.add(5);
                newList.add(1);
                newList.add(13);
                expect(()=>{newList.remove(-1)}).to.throw(Error,"Index was outside the bounds of the collection.");
            });
        });
        describe("Test behaviour when valid index is passed", function () {
            it("Should remove the n-th element from the collection", function () {
                newList.add(5);
                newList.add(1);
                newList.add(13);
                newList.add(43);
                newList.add(14);
                newList.add(6);
                newList.remove(2);
                expect(newList.list.toString()).to.equal('1,5,13,14,43');
                newList.remove(0);
                expect(newList.list.toString()).to.equal('5,13,14,43');
                newList.remove(3);
                expect(newList.list.toString()).to.equal('5,13,14');
            });
        });
    });
    describe("Test get method which returns the element at position index", function () {
        describe("Test behaviour when invalid index is passed", function () {
            it("Should throw error, when collection is empty", function () {
                expect(()=>{newList.get(0)}).to.throw(Error,"Collection is empty.");
            });
            it("Should throw error, when index is outside the range of the collection", function () {
                newList.add(5);
                newList.add(1);
                newList.add(13);
                expect(()=>{newList.get(3)}).to.throw(Error,"Index was outside the bounds of the collection.");
            });
            it("Should throw error, when index is outside the range of the collection", function () {
                newList.add(5);
                newList.add(1);
                newList.add(13);
                expect(()=>{newList.get(-1)}).to.throw(Error,"Index was outside the bounds of the collection.");
            });
        });
        describe("Test behaviour when valid index is passed", function () {
            it("Should return the n-th element from the collection", function () {
                newList.add(5);
                newList.add(1);
                newList.add(13);
                newList.add(43);
                newList.add(14);
                newList.add(6);
                expect(newList.get(2)).to.equal(6);
                expect(newList.get(0)).to.equal(1);
                expect(newList.get(5)).to.equal(43);
            });
        });
    });
    describe("Test size property", function () {
        it("Should return 0", function () {
            expect(newList.size).to.equal(0);
        });
        it("Should return 6", function () {
            newList.add(5);
            newList.add(1);
            newList.add(13);
            newList.add(43);
            newList.add(14);
            newList.add(6);
            expect(newList.size).to.equal(6);
        });
    });
});

