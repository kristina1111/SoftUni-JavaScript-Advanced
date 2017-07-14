let expect = require('chai').expect;
let jsdom = require('jsdom-global')();

global.$ = global.jQuery = require('jquery');

let nuke = require('./armageDOM').nuke;
// document.body.innerHTML = `<div id="target">
//     <div class="nested target">
//         <p>This is some text</p>
//     </div>
//     <div class="target">
//         <p>Empty div</p>
//     </div>
//     <div class="inside">
//         <span class="nested">Some more text</span>
//         <span class="target">Some more text</span>
//     </div>
// </div>`;
describe("Test nuke function", function () {
    describe("Test function parameters", function () {
        beforeEach(function () {
            document.body.innerHTML = ``;
            document.body.innerHTML = `<div id="target">
    <div class="nested target">
        <p>This is some text</p>
    </div>
    <div class="target">
        <p>Empty div</p>
    </div>
    <div class="inside">
        <span class="nested">Some more text</span>
        <span class="target">Some more text</span>
    </div>
</div>`;
        });
        it("Should do nothing if one of the parameters is integer", function () {
            let stringifiedBody = JSON.stringify($('body'));
            nuke(123, '.nested');
            expect(JSON.stringify($('body'))).to.equal(stringifiedBody);
            // expect($('.nested').length).to.equal(2);
        });
        it("Should do nothing if both parameters are not strings", function () {
            let stringifiedBody = JSON.stringify($('body'));
            nuke(123, ['test', 'test']);
            expect(JSON.stringify($('body'))).to.equal(stringifiedBody);
            // expect($('.nested').length).to.equal(2);
        });
        it("Should do nothing if one of the parameters is object", function () {
            let stringifiedBody = JSON.stringify($('body'));
            nuke('.target', {test:'test'});
            expect(JSON.stringify($('body'))).to.equal(stringifiedBody);
            // expect($('.target').length).to.equal(3);
        });
        it("Should do nothing if the two parameters are strings and are the same", function () {
            // let stringifiedBody = JSON.stringify($('body'));
            let beforeNuke = $('body').html();
            nuke('.target', '.target');
            // expect(JSON.stringify($('body'))).to.equal(stringifiedBody);
            // expect($('.target').length).to.equal(3);
            expect($('body').html()).to.equal(beforeNuke);
        });
        it("Should do nothing if one of the parameters are omitted", function () {
            let stringifiedBody = JSON.stringify($('body'));
            nuke('.target');
            expect(JSON.stringify($('body'))).to.equal(stringifiedBody);
            // expect($('.target').length).to.equal(3);
        });
        it("Should do nothing if the two parameters are omitted", function () {
            let stringifiedBody = JSON.stringify($('body'));
            nuke();
            expect(JSON.stringify($('body'))).to.equal(stringifiedBody);
            // expect($('.target').length).to.equal(3);
        });
    });
    describe("Test function functionality", function () {
        beforeEach(function () {
            document.body.innerHTML = ``;
            document.body.innerHTML = `<div id="target">
    <div class="nested target">
        <p>This is some text</p>
    </div>
    <div class="target">
        <p>Empty div</p>
    </div>
    <div class="inside">
        <span class="nested">Some more text</span>
        <span class="target">Some more text</span>
    </div>
</div>`;
        });
        it("Should remove all the elements that have the two selectors", function () {
            nuke('.target', '.nested');
            expect($('.target').filter('.nested').length).to.equal(0);
        });
        it("Should remove all the elements that have the two selectors", function () {
            nuke('#target', '.target');
            expect($('#target').filter('.target').length).to.equal(0);
        });
        it("Should remove all the elements that have the two selectors", function () {
            nuke('#target', '.not-included');
            expect($('#target').filter('.not-included').length).to.equal(0);
        });
        it("Should remove all the elements that have the two selectors", function () {
            nuke('div', '.target');
            expect($('div').length).to.equal(2);
        });
        it("Should remove all the elements that have the two selectors", function () {
            nuke('p', '.target p');
            expect($('p').length).to.equal(0);
        });
    })
});