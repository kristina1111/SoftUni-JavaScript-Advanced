(function () {
    String.prototype.ensureStart = function (str) {
        // console.log(this);
        if (this.indexOf(str) !== 0) {
            return str + this;
        }
        return this.toString();
        // return this;
    };

    String.prototype.ensureEnd = function (str) {
        if (this.indexOf(str) + str.length !== this.length) {
            return this + str;
        }
        return this.toString();
    };

    String.prototype.isEmpty = function () {
        return this.length === 0;
    };
    String.prototype.truncate = function (numberChars) {
        if(numberChars <4){
            return '.'.repeat(numberChars);
        }
        if(this.length>numberChars){
            let str = this.toString().slice(0,numberChars-3);
            let lastSpace = str.length;
            if(this.toString()[numberChars-3]!==' ' && this.toString()[numberChars-3]!== undefined){
                lastSpace = str.lastIndexOf(' ') == -1 ? str.length : str.lastIndexOf(' ');
            }
            return str.slice(0, lastSpace) + '...';
        }
        return this.toString();
    };

    String.format = function (string, ...params) {
        const regexPlaceholder = /{[\d]+}/;
        while (params.length>0){
            string = string.replace(regexPlaceholder, params.shift());
        }
        return string;
    }

})();

// let str = 'my string'
// str = str.ensureStart('my')
// str = str.ensureStart('hello ')
// str = str.truncate(16)
// str = str.truncate(14)
// // str = str.truncate(8)
// // str = str.truncate(4)
// // str = str.truncate(2)
// str = String.format('The {0} {1} fox',
//     'quick', 'brown');
// console.log(str);

var testString = 'the quick on brown fox jumps over the lazy dog';
// testString = testString.truncate(6);
// console.log(testString);
testString = testString.truncate(12);
console.log(testString);