(function (){
    Array.prototype.last = function() {
        return this[this.length - 1];
    };
    Array.prototype.skip = function (n) {
        return this.slice(n);
    };
    Array.prototype.take = function (n) {
        return this.slice(0, n);
    };
    Array.prototype.sum = function () {
        let result = this[0];
        this.slice(1).forEach(e=>{
            result += e;
        });
        return result;
    };
    Array.prototype.average = function () {
        return this.sum()/this.length;
    };
})();

let arr = [2,3,6,9];
console.log(arr.skip(2));
console.log(arr.take(2));
console.log(arr.sum());
console.log(arr.average());