let copier = (function copyTemplate() {
    let obj = {
        __proto__: {},
        extend: function (templateObj) {
            for(let prop in templateObj){
                if(typeof(templateObj[prop]) == 'function'){
                    Object.getPrototypeOf(obj)[prop] = templateObj[prop];
                }else{
                    obj[prop] = templateObj[prop];
                }
            }
        }
    };
    return obj;
})();

copier.extend({
    extensionMethod: function () {
        console.log('YES');
    },
    extensionProperty: 'someString'
});
console.log(copier);