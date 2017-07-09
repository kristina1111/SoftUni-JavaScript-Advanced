function carFactory(carObj) {

    let carRepairer = (function () {
        let engineCatalogue = {
            smallEngine : {
                power : 90,
                volume : 1800
            },
            normalEngine : {
                power: 120,
                volume:2400
            },
            monsterEngine : {
                power : 200,
                volume : 3500
            }
        };
        let carriageCatalogue = {
            hatchback : {
                type : 'hatchback'
            },
            coupe : {
                type : 'coupe'
            }
        };

        function fixWheels(carObj) {
            // if we are fixing car that has already been fixed;
            let wheel = carObj.wheelsize[0] || carObj.wheelsize || carObj.wheels[0];
            if(Math.ceil(wheel)%2 ==0){
                wheel = Math.floor(wheel)-1;
            }
            delete carObj.wheelsize;

            carObj.wheels = [wheel, wheel, wheel, wheel];
        }

        function repairModel(carObj) {
            for(let engine in engineCatalogue){
                if(carObj.power<=engineCatalogue[engine].power){
                    // Deep copy of engineCatalogue[engine],
                    // because otherwise if some changes to engineCatalogue[engine] are made,
                    // this reflects carObj.engine (by reference)
                    carObj.engine = JSON.parse(JSON.stringify(engineCatalogue[engine]));
                    delete carObj.power;
                    return;
                }
            }
        }

        function repairCarriage(carObj) {
            for(let carriage in carriageCatalogue){
                if(carriageCatalogue[carriage].type == carObj.carriage){
                    // Deep copy of engineCatalogue[engine],
                    // because otherwise if some changes to engineCatalogue[engine] are made,
                    // this reflects carObj.engine (by reference)
                    carObj.carriage = JSON.parse(JSON.stringify(carriageCatalogue[carriage]));
                    carObj.carriage.color = carObj.color;
                    delete carObj.color;
                    return;
                }
            }
        }

        return function (carObject) {
            repairModel(carObject);
            repairCarriage(carObject);
            fixWheels(carObject);
        }
    })();

    carRepairer(carObj);
    return carObj;
}

let output = carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});
console.log(output);