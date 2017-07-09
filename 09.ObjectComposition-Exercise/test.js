let masterObj = {
    toString : function () {
        for(let prop in this){
            if(typeof 'Function') {
                console.log(this[prop]);
            }

        }
    }
}
// let objCreator = function (name, age) {
//     return {
//         name : name,
//         age : age
//     }
// }
// let firstObj = objCreator('objOne', 10);
let secObj = Object.create(masterObj);
secObj.name = 'objTwo';
secObj.age = 20;
// console.log(firstObj);
console.log(secObj.toString());