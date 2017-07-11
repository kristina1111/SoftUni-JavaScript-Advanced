let createCalculator = require('./addOrSubstract').createCalculator;
let expect = require('chai').expect;

describe("Test created testCalculator and its functionality", function () {
    describe("Test what function returns", function () {
        it("Should return object", function () {
            expect(typeof(createCalculator())).to.equal('object');
        });
        it("Should return object with properties 'add', 'subtract' and 'get'", function () {
            expect(createCalculator()).to.have.all.keys('add', 'subtract', 'get')
        });
        it("Should return object with property 'add' that is function", function () {
            expect(typeof(createCalculator().add)).to.equal('function');
        });
        it("Should return object with property 'subtract' that is function", function () {
            expect(typeof(createCalculator().subtract)).to.equal('function');
        });
        it("Should return object with property 'get' that is function", function () {
            expect(typeof(createCalculator().get)).to.equal('function');
        });
    });
    // describe("Test internal variable that cannot be modified outside module", function () {
    //     it("Internal sum Should not exists outside the module scope", function () {
    //         expect(bar).to.not.exist;
    //     })
    // });
    describe("Test add function", function () {
        let testCalculator;

        beforeEach(function () {
            testCalculator = createCalculator();
        });
        it("Should accept strings that can be parsed to numbers", function () {
            // let testCalculator = createCalculator();
            testCalculator.add('12');
            expect(testCalculator.get()).to.equal(12);
        });
        it("Should accept strings that can be parsed to numbers", function () {
            // let testCalculator = createCalculator();
            testCalculator.add('-12');
            expect(testCalculator.get()).to.equal(-12);
        });
        it("Should accept positive numbers", function () {
            // let testCalculator = createCalculator();
            testCalculator.add(12);
            expect(testCalculator.get()).to.equal(12);
        });
        it("Should accept negative numbers", function () {
            // let testCalculator = createCalculator();
            testCalculator.add(-12);
            expect(testCalculator.get()).to.equal(-12);
        });
        it("Should accept floating point numbers", function () {
            // let testCalculator = createCalculator();
            testCalculator.add(-12.44);
            expect(testCalculator.get()).to.equal(-12.44);
        });
        it("Should not accept strings that cannot cast to numbers", function () {
            // let testCalculator = createCalculator();
            testCalculator.add('test');
            expect(testCalculator.get()).to.be.NaN;
        });
        it("Should not accept objects", function () {
            // let testCalculator = createCalculator();
            testCalculator.add({foo:'bar'});
            expect(testCalculator.get()).to.be.NaN;
        });
        it("Should not accept array that contains one number", function () {
            // let testCalculator = createCalculator();
            testCalculator.add([12]);
            expect(testCalculator.get()).to.be.NaN;
        });
        it("Should not accept empty arrays", function () {
            // let testCalculator = createCalculator();
            testCalculator.add([]);
            expect(testCalculator.get()).to.be.NaN;
        });
        it("Should not accept array that contains numbers", function () {
            // let testCalculator = createCalculator();
            testCalculator.add([12, 3]);
            expect(testCalculator.get()).to.be.NaN;
        });
        it("Should add to the internal sum", function () {
            // let testCalculator = createCalculator();
            testCalculator.add(5);
            testCalculator.add(15);
            expect(testCalculator.get()).to.equal(20);
        })
    });
    describe("Test subtract function", function () {
        let testCalculator;

        beforeEach(function () {
            testCalculator = createCalculator();
        });

        it("Should accept strings that can be parsed to numbers", function () {
            // let testCalculator = createCalculator();
            testCalculator.subtract('12');
            expect(testCalculator.get()).to.equal(-12);
        });
        it("Should accept strings that can be parsed to numbers", function () {
            // let testCalculator = createCalculator();
            testCalculator.subtract('-12');
            expect(testCalculator.get()).to.equal(12);
        });
        it("Should accept positive numbers", function () {
            // let testCalculator = createCalculator();
            testCalculator.subtract(12);
            expect(testCalculator.get()).to.equal(-12);
        });
        it("Should accept negative numbers", function () {
            // let testCalculator = createCalculator();
            testCalculator.subtract(-12);
            expect(testCalculator.get()).to.equal(12);
        });
        it("Should accept floating point numbers", function () {
            // let testCalculator = createCalculator();
            testCalculator.subtract(-12.44);
            expect(testCalculator.get()).to.equal(12.44);
        });
        it("Should not accept strings that cannot cast to numbers", function () {
            // let testCalculator = createCalculator();
            testCalculator.add('test');
            expect(testCalculator.get()).to.be.NaN;
        });
        it("Should not accept objects", function () {
            // let testCalculator = createCalculator();
            testCalculator.subtract({foo:'bar'});
            expect(testCalculator.get()).to.be.NaN;
        });
        it("Should not accept array that contains one number", function () {
            // let testCalculator = createCalculator();
            testCalculator.subtract([12]);
            expect(testCalculator.get()).to.be.NaN;
        });
        it("Should not accept empty arrays", function () {
            // let testCalculator = createCalculator();
            testCalculator.subtract([]);
            expect(testCalculator.get()).to.be.NaN;
        });
        it("Should not accept array that contains numbers", function () {
            // let testCalculator = createCalculator();
            testCalculator.subtract([12, 3]);
            expect(testCalculator.get()).to.be.NaN;
        });
        it("Should subtract from the internal sum", function () {
            // let testCalculator = createCalculator();
            testCalculator.subtract(9);
            testCalculator.subtract(15);
            expect(testCalculator.get()).to.equal(-24);
        })
    });
    describe("Test add and subtract functions working together and changing the internal sum", function () {
        it("Should add and subtract from the internal sum", function () {
            let testCalculator = createCalculator();
            testCalculator.subtract(10);
            testCalculator.subtract(15);
            testCalculator.add(33);
            testCalculator.subtract(3);
            expect(testCalculator.get()).to.equal(5);
        })
    });
    describe("Test get function", function () {
        it("Should return the internal sum = 0 when only instantiated", function () {
            expect(createCalculator().get()).to.equal(0);
        });
    })
});