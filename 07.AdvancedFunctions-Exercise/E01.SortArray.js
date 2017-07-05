function solveArr(arr, sortMethod) {
    let sorter = {
        'asc' : (a, b)=> a-b,
        'desc' : (a, b)=> b-a,
    };
    arr.sort(sorter[sortMethod]);
    return arr;
}
solveArr([14, 7, 17, 6, 8], 'asc')