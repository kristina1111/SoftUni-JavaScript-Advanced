let result = (function () {
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

    class Form {
        constructor(){
            this._element = $('<div>').addClass('form');
            this._textboxes = [];
            for (let a of arguments) {
                if(!(a instanceof Textbox)){
                    throw Error("Not valid argument passed to constructor!");
                }
            }
            for (let a of arguments) {
                $(a.elements).appendTo($(this.element));
                this._textboxes.push(a);
            }
        }

        get element(){
            return this._element;
        }
        get textboxes(){
            return this._textboxes;
        }

        submit(){
            let allValid = true;
            this.textboxes.forEach(e=>{
                if(!e.isValid()){
                    allValid = false;
                    $(e.elements).css({
                        border : '2px solid red'
                    });
                }else{
                    $(e.elements).css({
                        border : '2px solid green'
                    });
                }
            });
            return allValid;
        }

        attach(selector){
            $(selector).append(this.element);
        }
    }

    return {
        Textbox,
        Form
    }

})();
let Textbox = result.Textbox;
let Form = result.Form;
let username = new Textbox("#username",/[^a-zA-Z0-9]/);
let password = new Textbox("#password",/[^a-zA-Z]/);
username.value = "username";
password.value = "password2";
let form = new Form(username,password);
form.attach("#root");