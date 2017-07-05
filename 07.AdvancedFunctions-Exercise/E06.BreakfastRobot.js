let breakfastRobot = (function robotFunctionality() {
    let recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        coke: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        omelet: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        cheverme: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    };
    let robot = {
        stockAvailable: {
            protein: 0,
            carbohydrate: 0,
            fat: 0,
            flavour: 0
        },
        restock: (ingredient, qty) => {
            if (robot.stockAvailable.hasOwnProperty(ingredient)) {
                robot.stockAvailable[ingredient] += Number(qty);
                return 'Success';
            }
        },
        prepare: (recipe, qty)=> {
            let recipeIngredients = Object.keys(recipes[recipe]);
            for(let i = 0; i<recipeIngredients.length; i++){
            // for (let product in recipes[recipe]) {
                if(!robot.hasEnoughStock(recipe, recipeIngredients[i], qty)){
                   return `Error: not enough ${recipeIngredients[i]} in stock`;
                }
            }
            for(let i = 0; i<recipeIngredients.length; i++){
                robot.stockAvailable[recipeIngredients[i]] -= recipes[recipe][recipeIngredients[i]] * qty;
            }
            return 'Success';

        },
        report: ()=> {
            return `protein=${robot.stockAvailable.protein} carbohydrate=${robot.stockAvailable.carbohydrate} fat=${robot.stockAvailable.fat} flavour=${robot.stockAvailable.flavour}`;
        },
        hasEnoughStock: (recipe, product, qty)=> {
            if (robot.stockAvailable.hasOwnProperty(product)) {
                if (recipes[recipe][product] * qty > robot.stockAvailable[product]) {
                    return false
                }
            } else {
                return false
            }
            return true;
        }
    };

    function manage(command) {
        let commandTokens = command.split(' ');
        if (robot.hasOwnProperty(commandTokens[0])) {
            return robot[commandTokens[0]](commandTokens[1], commandTokens[2]);
        }
    }

    return manage;
})();

// console.log(breakfastRobot('prepare cheverme 1'));
// console.log(breakfastRobot('restock protein 10'));
// console.log(breakfastRobot('prepare cheverme 1'));
// console.log(breakfastRobot('restock carbohydrate 10'));
// console.log(breakfastRobot('prepare cheverme 1'));
// console.log(breakfastRobot('restock fat 10'));
// console.log(breakfastRobot('prepare cheverme 1'));
// console.log(breakfastRobot('restock flavour 10'));
// console.log(breakfastRobot('prepare cheverme 1'));
// console.log(breakfastRobot('report'));
//
// console.log(breakfastRobot('restock flavour 50'));
// console.log(breakfastRobot('prepare coke 4'));
// console.log(breakfastRobot('restock carbohydrate 10'));
// console.log(breakfastRobot('restock flavour 10'));
// console.log(breakfastRobot('prepare apple 1'));
// console.log(breakfastRobot('restock fat 10'));
// console.log(breakfastRobot('prepare burger 1'));
// console.log(breakfastRobot('report'));

// console.log(breakfastRobot('restock protein 100'));
// console.log(breakfastRobot('restock carbohydrate 100'));
// console.log(breakfastRobot('restock fat 100'));
// console.log(breakfastRobot('restock flavour 100'));
// console.log(breakfastRobot('report'));
// console.log(breakfastRobot('prepare omelet 2'));
// console.log(breakfastRobot('report'));
// console.log(breakfastRobot('prepare omelet 1'));
// console.log(breakfastRobot('report'));