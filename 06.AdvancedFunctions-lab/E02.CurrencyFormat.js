function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}

function dollarFormatter(func) {
    return function (value) {
        return func(',', '$', true, value)
    }
}

let dollars = dollarFormatter(currencyFormatter);
console.log(dollars(5000));