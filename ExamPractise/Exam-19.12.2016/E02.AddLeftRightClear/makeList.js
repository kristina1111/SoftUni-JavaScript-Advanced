function makeList() {
    let data = [];
    return {
        addLeft: function(item) {
            data.unshift(item);
        },
        addRight: function(item) {
            data.push(item);
        },
        clear: function() {
            data = [];
        },
        toString: function() {
            return data.join(", ");
        }
    };
}

let list = makeList();
// console.log(`list = [${list}]`);
list.addRight(1);
list.addRight("two");
list.addLeft([1, 2, 'story']);
list.addLeft(201)
list.addLeft({prop:"test"});
// let newArr = list.toString();
console.log(`list = [${list}]`);
// list.clear();
// list.addLeft("beer");

module.exports = makeList;