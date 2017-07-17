class Textbox {
    constructor(selector, regex) {
        this._elements = $(selector);
        this._individualSymbols = regex;
        this.value = this._elements.val();

        this.onInput();
    }

    get value() {
        return this._value
    }

    set value(value) {
        for (let e of this.elements) {
            $(e).val(value);
        }

        this._value = value;
    }

    get elements() {
        return this._elements;
    }

    isValid() {
        return !this._individualSymbols.test(this.value);
    }

    onInput() {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
        // fixing the this issue by assigning the value in this to a variable that could be closed over.
        let that = this;
        this.elements.on('input', function (event) {
            // console.log(this);
            that.value = $(event.target).val();
        });

        // An arrow function does not create its own this, the this value of the enclosing execution context is used. Not supported in IE !!!
        // this.elements.on('input', (event) => {
        //     this.value = $(event.target).val();
        // });

    }

}

let textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/);
let inputs = $('.textbox');

inputs.on('input', function () {
    console.log(textbox.value);
});