function subSum(arr, startIndex, endIndex) {
    if(!Array.isArray(arr)){
        throw new Error('NAN');
        // return NaN
    }
    let start = startIndex<0 ? 0 : startIndex;
    let end = endIndex>arr.length-1 ? arr.length-1 : endIndex;
    let sum = 0;
    for(let i = start; i<=end; i++){
        if(!Number(arr[i])){
            throw new Error('NAN');
        }
        sum+=arr[i];
    }
    return Number(sum.toFixed(2));
}
// console.log(subSum('text', 0, 2));
console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(subSum([10, 'twenty', 30, 40], 0, 2));