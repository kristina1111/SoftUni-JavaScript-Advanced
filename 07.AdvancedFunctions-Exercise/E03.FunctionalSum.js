let bbb = (function functionalSum() {
    let sum = 0;

    function add(num) {
        sum += num;
        return add;
    }

    // Define toString method

    // add.toString = function () {
    //     return sum;
    // };
    add.toString = () => sum;

    return add;
}());
console.log(bbb(6)(5)(4).toString());