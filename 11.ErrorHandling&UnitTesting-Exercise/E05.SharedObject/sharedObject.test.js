let expect = require('chai').expect;
let jsdom = require('jsdom-global')();


// https://stackoverflow.com/questions/38479664/jquery-not-defined-using-mocha-for-testing-wordpress-javascript
// let $ = require('jquery'); //// I don't use that because it throws error jQuery undefined
global.$ = global.jQuery = require('jquery'); //// apparently one has to export $ and jQuery to the global space


document.body.innerHTML = `<div id="wrapper">
    <input type="text" id="name">
    <input type="text" id="income">
</div>`;

let sharedObject = require('./sharedObject').sharedObject;
// let $('#income') = $('#income');
// let $('#name') = $('#name');

describe("SharedObject unit tests", function () {
    describe("Test initial value of properties", function () {
        it("name property Should be null", function () {
            expect(sharedObject.name).to.be.null;
        });
        it("income property Should be null", function () {
            expect(sharedObject.income).to.be.null;
        });
    });
    describe("Test changeName method", function () {
        describe("Test html Name input before change of object property", function () {
            it("Should not change name property if parameter is empty string", function () {
                sharedObject.changeName('');
                let htmlInputElValue = $('#name').val();
                expect(htmlInputElValue).to.equal('');
            });
        });
        describe("Test object property Name", function () {
            it("Should not change Name property if parameter is empty string", function () {
                let name = sharedObject.name;
                sharedObject.changeName('');
                expect(sharedObject.name).to.equal(name);
            });
            it("Should change Name property if parameter is not empty string", function () {
                sharedObject.changeName('Test');
                expect(sharedObject.name).to.equal('Test');
            });
        });

        describe("Test html Name input after change of object property", function () {
            it("Should not change html Name input if parameter is empty string", function () {
                sharedObject.changeName('Valid name'); // first configure the html input value to something valid;
                sharedObject.changeName(''); // then I try to change the html input value;
                // then make the test
                let htmlInputElValue = $('#name').val();
                expect(htmlInputElValue).to.equal('Valid name');
            });
            it("Should change html Name input if parameter is not empty string", function () {
                sharedObject.changeName('Valid name'); // first configure the html input value to something valid;
                sharedObject.changeName('Changed name'); // then I try to change the html input value;
                // then make the test
                let htmlInputElValue = $('#name').val();
                expect(htmlInputElValue).to.equal('Changed name');
            });
        });
    });
    describe("Test changeIncome method", function () {
        describe("Test html Income input before changeIncome is called", function () {
            it("html Income input value should be empty string", function () {
                let htmlIncomeValue = $('#income').val();
                expect(htmlIncomeValue).to.equal('');
            });
        });
        describe("Test object property Income when passing invalid argument to changeIncome method", function () {
            it("property Income should not change if passed argument is negative integer", function () {
                let income = sharedObject.income;
                sharedObject.changeIncome(-7);
                expect(sharedObject.income).to.equal(income);
            });
            it("property Income should not change if passed argument is floating point number", function () {
                let income = sharedObject.income;
                sharedObject.changeIncome(7.66);
                expect(sharedObject.income).to.equal(income);
            });
            it("property Income should not change if passed argument is object", function () {
                let income = sharedObject.income;
                sharedObject.changeIncome({test: 'test'});
                expect(sharedObject.income).to.equal(income);
            });
            it("property Income should not change if passed argument is array", function () {
                let income = sharedObject.income;
                sharedObject.changeIncome([1, 2, 3]);
                expect(sharedObject.income).to.equal(income);
            });
            it("property Income should not change if passed argument is string", function () {
                let income = sharedObject.income;
                sharedObject.changeIncome('44');
                expect(sharedObject.income).to.equal(income);
            });
            it("property Income should not change if passed argument is 0", function () {
                let income = sharedObject.income;
                sharedObject.changeIncome(0);
                expect(sharedObject.income).to.equal(income);
            });
        });
        describe("Test object property Income when passing valid argument to changeIncome method", function () {
            it("property Income should change if passed argument is positive integer", function () {
                sharedObject.changeIncome(7);
                expect(sharedObject.income).to.equal(7);
            });
            it("property Income should change if passed argument is positive integer", function () {
                sharedObject.changeIncome(7);
                sharedObject.changeIncome(17);
                expect(sharedObject.income).to.equal(17);
            });
        });
        describe("Test html Income input after changeIncome is called", function () {
            it("html Income input value should not change if invalid argument is passed", function () {
                sharedObject.changeIncome(100);// set income to a specific value
                sharedObject.changeIncome('22'); // pass invalid argument
                let htmlInputIncomeValue = Number($('#income').val());
                expect(htmlInputIncomeValue).to.equal(100);
            });
            it("html Income input value should change if valid argument is passed", function () {
                sharedObject.changeIncome(100);// set income to a specific value
                sharedObject.changeIncome(22); // pass invalid argument
                let htmlInputIncomeValue = Number($('#income').val());
                expect(htmlInputIncomeValue).to.equal(22);
            });
        });
    });
    describe("Test updateName method", function () {
        it("Should not change object.name when name input value is empty string and updateName is called", function () {
            sharedObject.changeName('Valid name');
            $('#name').val('');
            sharedObject.updateName();
            expect(sharedObject.name).to.equal('Valid name');
        });
        it("Should change object.name when name input value is not empty string and updateName is called", function () {
            sharedObject.changeName('Valid name');
            $('#name').val('Changed for test');
            sharedObject.updateName();
            expect(sharedObject.name).to.equal('Changed for test');
        });
    });
    describe("Test updateIncome method", function () {
        describe("Test when income input value is not valid", function () {
            it("Should not change object.income when income input value is empty string and updateIncome is called", function () {
                sharedObject.changeIncome(12);
                $('#income').val('');
                sharedObject.updateIncome();
                expect(sharedObject.income).to.equal(12);
            });
            it("Should not change object.income when income input value is string that cannot be cast to positive and updateIncome is called", function () {
                sharedObject.changeIncome(12);
                $('#income').val('-test');
                sharedObject.updateIncome();
                expect(sharedObject.income).to.equal(12);
            });
            it("Should not change object.income when income input value is string that cannot be cast to positive and updateIncome is called", function () {
                sharedObject.changeIncome(12);
                $('#income').val({test:'test'});
                sharedObject.updateIncome();
                expect(sharedObject.income).to.equal(12);
            });
            it("Should not change object.income when income input value is string that cannot be cast to positive and updateIncome is called", function () {
                sharedObject.changeIncome(12);
                $('#income').val([1,2,3]);
                sharedObject.updateIncome();
                expect(sharedObject.income).to.equal(12);
            });
            it("Should not change object.income when income input value is string that cannot be cast to positive and updateIncome is called", function () {
                sharedObject.changeIncome(12);
                $('#income').val('0');
                sharedObject.updateIncome();
                expect(sharedObject.income).to.equal(12);
            });
            it("Should not change object.income when income input value is string that cannot be cast to positive and updateIncome is called", function () {
                sharedObject.changeIncome(12);
                $('#income').val('-10');
                sharedObject.updateIncome();
                expect(sharedObject.income).to.equal(12);
            });
            it("Should not change object.income when income input value is string that cannot be cast to positive and updateIncome is called", function () {
                sharedObject.changeIncome(12);
                $('#income').val('23.56');
                sharedObject.updateIncome();
                expect(sharedObject.income).to.equal(12);
            });
        });
        describe("Test when value of income input is string that can be cast to integer and updateIncome is called", function () {
            it("Should change object.income when income input value is 100", function () {
                sharedObject.changeIncome(33);
                $('#income').val(100);
                sharedObject.updateIncome();
                expect(sharedObject.income).to.equal(100);
            })
        })
    });
});