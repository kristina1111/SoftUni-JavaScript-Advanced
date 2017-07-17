class Rat {
    constructor(name){
        this.name = name;
        this.unitedRats = [];
    }

    unite(otherRat){
        if(otherRat instanceof Rat){
            this.unitedRats.push(otherRat);
        }
    }
    getRats(){
        return this.unitedRats;
    }
    toString(){
        let output = this.name + '\n';
        this.unitedRats.forEach(r=>{
            output += '##' + r.name + '\n';
        });
        return output;
    }
}
let test = new Rat("Pesho");
test.unite(new Rat("Gosho"));
test.unite(new Rat("Sasho"));
console.log(test.getRats());
//[ Rat { name: 'Gosho', unitedRats: [] },
//  Rat { name: 'Sasho', unitedRats: [] } ]

console.log(test.toString());