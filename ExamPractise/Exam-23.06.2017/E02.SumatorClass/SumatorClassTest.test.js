let Sumator = require('./SumatorClass');
let expect = require('chai').expect;

describe("Test SumatorClass functionality", function () {
    let newSumator = null;
    beforeEach(function () {
        newSumator = new Sumator()
    });
    describe("Test class Sumator has expected properties", function () {
        it("Should have methods add, sumNums, removeByFilter, toString", function () {
            expect(Sumator.prototype.hasOwnProperty('add')).to.be.true;
            expect(Sumator.prototype.hasOwnProperty('sumNums')).to.be.true;
            expect(Sumator.prototype.hasOwnProperty('removeByFilter')).to.be.true;
            expect(Sumator.prototype.hasOwnProperty('toString')).to.be.true;
        })
    });
    
    describe("Test if new instances have all properties", function () {
        it("Should have property data that is empty array", function () {
            expect(newSumator.hasOwnProperty('data')).to.be.true;
        });
        it("Property data should be array", function () {
            expect(newSumator.data instanceof Array).to.be.true;
        });
        it("Property data should be empty array", function () {
            expect(newSumator.data.length).to.equal(0);
        });
        it("Property add should e function", function () {
            expect(typeof(newSumator.add)).to.equal('function');
        });
        it("Property sumNums should e function", function () {
            expect(typeof(newSumator.sumNums)).to.equal('function');
        });
        it("Property removeByFilter should e function", function () {
            expect(typeof(newSumator.removeByFilter)).to.equal('function');
        });
        it("Property toString should e function", function () {
            expect(typeof(newSumator.toString)).to.equal('function');
        });
    });

    describe("Test add functionality", function () {
        it("Should add strings to the data collection", function () {
            newSumator.add('Test');
            expect(newSumator.toString()).to.equal('Test');
            newSumator.add('Some other string');
            expect(newSumator.toString()).to.equal('Test, Some other string');
            newSumator.add('');
            expect(newSumator.toString()).to.equal('Test, Some other string, ');
            newSumator.add('101');
            expect(newSumator.toString()).to.equal('Test, Some other string, , 101');
        });
        it("Should add numbers to the data collection", function () {
            newSumator.add(1);
            expect(newSumator.toString()).to.equal('1');
            newSumator.add(-10);
            expect(newSumator.toString()).to.equal('1, -10');
            newSumator.add(0);
            expect(newSumator.toString()).to.equal('1, -10, 0');
            newSumator.add(3.14);
            expect(newSumator.toString()).to.equal('1, -10, 0, 3.14');
        });

        it("Should add empty arrays and empty objects to the data collection", function () {
            newSumator.add([]);
            expect(newSumator.data[0].toString()).to.equal('');
            newSumator.add({});
            expect(JSON.stringify(newSumator.data[1])).to.equal(JSON.stringify({}));
        });

        it("Should add arrays to the data collection", function () {
            newSumator.add([0]);
            expect(newSumator.toString()).to.equal('0');
            expect(newSumator.data[0][0]).to.equal(0);

            newSumator.add(['two', '']);
            expect(newSumator.toString()).to.equal('0, two,');
            expect(newSumator.data[1][0]).to.equal('two');

            newSumator.add([{prop: 'test'}]);
            expect(newSumator.toString()).to.equal('0, two,, [object Object]');
            expect(JSON.stringify(newSumator.data[2][0])).to.equal(JSON.stringify({prop: 'test'}));

            newSumator.add([1, 'hello', {newProp: 'test'}]);
            expect(newSumator.toString()).to.equal('0, two,, [object Object], 1,hello,[object Object]');
            expect(newSumator.data[3][1]).to.equal('hello');
            expect(JSON.stringify(newSumator.data[3][2])).to.equal(JSON.stringify({newProp: 'test'}));
        });
        it("Should add objects to the data collection", function () {
            newSumator.add({some:"Property", other: 19});
            expect(JSON.stringify(newSumator.data[0])).to.equal(JSON.stringify({some:"Property", other: 19}));
        });
        it("Should add null, undefined and boolean to the data collection", function () {
            newSumator.add(undefined);
            expect(newSumator.data[0]).to.be.undefined;
            newSumator.add(null);
            expect(newSumator.data[1]).to.be.null;
            newSumator.add(true);
            expect(newSumator.data[2]).to.be.true;
            newSumator.add(false);
            expect(newSumator.data[3]).to.be.false;
        })
    });
    describe("Test sumNumbers functionality", function () {
        it("Should return 0 when data collection is empty", function () {
            expect(newSumator.sumNums()).to.equal(0);
        });
        it("Should only sum numbers and return 15", function () {
            newSumator.add(1);
            newSumator.add('2');
            newSumator.add([0,14,77]);
            newSumator.add(3.45);
            newSumator.add(6.55);
            newSumator.add({prop: 'test'});
            newSumator.add(null);
            newSumator.add(4);
            expect(newSumator.sumNums()).to.equal(15)
        });
        it("Should only sum numbers and return 0 when there are no numbers in the data collection", function () {
            newSumator.add('2');
            newSumator.add([0,14,77]);
            newSumator.add({prop: 'test'});
            newSumator.add(null);
            newSumator.add(true);
            expect(newSumator.sumNums()).to.equal(0)
        });

    });
    describe("Test removeByFilter functionality", function () {
        it("Should remove the elements that are matched and returned by the passed function", function () {
            let func = function (e) {
                return e.hasOwnProperty('prop');
            };
            newSumator.add({prop: 'test'});
            newSumator.add(101);
            newSumator.add({property: 'test'});
            newSumator.removeByFilter(func);
            expect(newSumator.data[0]).to.equal(101);
            expect(JSON.stringify(newSumator.data[1])).to.equal(JSON.stringify({property: 'test'}));
        });
        it("Should not remove elements when no function is passed", function () {
            let func = 3;
            newSumator.add({prop: 'test'});
            newSumator.add(101);
            newSumator.add({property: 'test'});
            expect(()=>{newSumator.removeByFilter(func)}).to.throw(TypeError);
            expect(newSumator.data[1]).to.equal(101);
            expect(JSON.stringify(newSumator.data[2])).to.equal(JSON.stringify({property: 'test'}));
        });
        it("Should not remove elements when no function is passed", function () {
            let func = 'function';
            newSumator.add({prop: 'test'});
            newSumator.add(101);
            newSumator.add({property: 'test'});
            expect(()=>{newSumator.removeByFilter(func)}).to.throw(TypeError);
            expect(newSumator.data[1]).to.equal(101);
            expect(JSON.stringify(newSumator.data[2])).to.equal(JSON.stringify({property: 'test'}));
        });
    });
    describe("Test toString functionality", function () {
        it("Should return '(empty)' if the data collection is empty", function () {
            expect(newSumator.toString()).to.equal('(empty)')
        });
        it("Should join elements in the data collection by ', '", function () {
            let arr = [1, [2,'three'], 'test string', {prop: 'Test'}, 3.14];
            for(let el of arr){
                newSumator.add(el);
            }
            expect(newSumator.toString()).to.equal(arr.join(', '));
        })
    });
});