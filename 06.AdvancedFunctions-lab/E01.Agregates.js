function aggregates(arr) {

    // Other solution

    // function reduce(array, func) {
    //     let result = array[0];
    //     array.slice(1).forEach(function (e) {
    //         result = func(result, e);
    //     });
    //     return result;
    // }
    //
    // console.log(reduce(arr, (a, b)=>a + b));
    // console.log(reduce(arr, (a, b)=> a>b ? b : a));
    // console.log(reduce(arr, (a, b)=> a<b ? b : a));
    // console.log(reduce(arr, (a, b)=>a * b));
    // console.log(reduce(arr, (a, b)=>'' + a + b));


    // My solution
    let sum = 0;
    let product = 1;
    let join = '';
    let min = arr[0];
    let max = arr[0];
    arr.forEach(function (e) {
        sum += e;
        product *= e;
        join += e;
        min = min > e ? e : min;
        max = max < e ? e : max;
    });
    console.log(`Sum = ${sum}`);
    console.log(`Min = ${min}`);
    console.log(`Max = ${max}`);
    console.log(`Product = ${product}`);
    console.log(`Join = ${join}`);
}
// aggregates([2,3,10,5]);
aggregates([5, -3, 20, 7, 0.5]);