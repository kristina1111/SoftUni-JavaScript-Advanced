let processor = (function (){
    let output = [];
    let manager = {
        add : (thing) => {
            output.push(thing);
        },
        remove : (thing) =>{
            // functional removing of matching element
            output = output.filter(e => e!==thing);

            // OR procedural core
            // let found = output.indexOf(thing);
            // while (output.indexOf(thing) !== -1) {
            //     output.splice(found, 1);
            //     found = output.indexOf(thing);
            // }
        },
        print : ()=>{
            // return output.join(',');
            console.log(output.join(','))
        }
    };
    return function (arr) {

        arr.forEach(e=>{
            let tokens = e.split(' ');
            manager[tokens[0]](tokens[1]);
        })
    }
})();

processor(['add hello', 'add again', 'remove hello', 'add again', 'print'])