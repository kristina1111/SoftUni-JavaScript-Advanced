let Extensible = (function () {
    let id = 0;
    class Extensible {
        constructor(){
            this.id = id++;
        }
        extend(template){
            for(let prop in template){
                if(typeof(template[prop]) == 'function'){
                    Object.getPrototypeOf(this)[prop] = template[prop]
                }else{
                    this[prop] = template[prop];
                }
            }
        }
    }
    return Extensible;

})();
let obj1 = new Extensible();
let obj2 = new Extensible();
let obj3 = new Extensible();
let template = {
    extensionData: 5,
        extensionMethod: function (value) {
        return value + 1;
    }
};
console.log(obj1);
obj1.extend(template);
console.log(Object.getPrototypeOf(obj1).hasOwnProperty('extensionMethod'));
console.log(obj2);
// console.log(obj3);