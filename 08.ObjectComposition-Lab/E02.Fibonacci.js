let f = (function getFibonacciNumber() {
    let fibNum1 = 0;
    let fibNum2 = 0;
    return function (){
        let number = fibNum1 + fibNum2 || 1;
        fibNum1 = fibNum2;
        fibNum2 = number;
        return number;
    }
})();
console.log(f())
console.log(f());
console.log(f());
console.log(f());
console.log(f());
console.log(f());
console.log(f());
console.log(f());
console.log(f());