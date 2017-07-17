class SortedList{
    constructor(){
        this.arr = [];
        this.size = 0;
    }
    sorting(a, b){
        return a-b;
    }
    add(element){
        this.arr.push(element);
        this.size++;
        this.arr.sort(this.sorting);
        return this;
    }
    remove(index){
        if(index>=0 && index<this.arr.length){
            this.arr.splice(index, 1);
            this.size--;
            return this;
        }
    }
    get(index){
        if(index>=0 && index<this.arr.length) {
            return this.arr[index];
        }
    }
}
let sortedList = new SortedList();
sortedList.add(2).add(57).add(4).add(33).add(28).add(14);
sortedList.remove(5).remove(0);
console.log(sortedList.get(3));

console.log(sortedList);