let objCreator = (function () {
    let objects = [];

    let creator = {
        create: (name)=> {
            objects[name] = {};
        },
        inherit: (name, parentName) => {
            // objects[name] = Object.create(objects[parentName], {name : {value : name}});
            objects[name] = Object.create(objects[parentName]);
        },
        set: (name, key, value)=> {
            objects[name][key] = value;
        },
        print: (name)=> {
            let output = [];
            for(let prop in objects[name]){
                output.push(`${prop}:${objects[name][prop]}`);
            }
            console.log(output.join(', '));
        }
    };

    return function (arr) {
        arr.forEach(e=> {
            let tokens = e.split(' ');
            if (tokens[2] == 'inherit') {
                creator[tokens[2]](tokens[1], tokens[3]);
            } else {
                creator[tokens[0]](tokens[1], tokens[2], tokens[3])
            }

        })
    }

})();

objCreator(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);