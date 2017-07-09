let functionality = (function solver() {

    let a, b, c;

    function init(selector1, selector2, resultSelector) {
        a = $(selector1); b = $(selector2); c = $(resultSelector)
    }

    function add() {
        c.val( Number(a.val()) + Number(b.val()) );
    }

    function subtract() {
        c.val( Number( a.val() ) - Number( b.val() ) );
    }

    return {
        init: init,
        add: add,
        subtract: subtract
    };
})();

functionality.init('#num1', '#num2', '#result');
// functionality.add();
$('#sumButton').on('click', function () {
    functionality.add();
});
$('#subtractButton').on('click', function () {
    functionality.subtract();
});
// console.dir(functionality.getInput1());