function solver(arr) {
    let rectangles = [];
    arr.forEach(e => {
        let newRect =
        {
            width: e[0],
            height: e[1],
            area: ()=> {
                // doesn't work with this!!!!
                return newRect.width * newRect.height
            },
            // define compare function in each object
            // this function compares first by area in descending order
            // if areas are the same, compares by width in descending order
            compareTo: (other)=> {
                let areaDiff = other.area() - newRect.area();
                return areaDiff || other.width - newRect.width;
            }
        };
        rectangles.push(newRect);
    });

    // sort works in place (we don't need to save the returned value)
    rectangles.sort((a, b)=> {
        // here we use the custom function in each object
        return a.compareTo(b);
    });
    return rectangles;
}
solver([[10, 5], [3, 20], [5, 12]]);