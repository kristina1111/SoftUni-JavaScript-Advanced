class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get radius(){
        return this._radius;
    }
    set radius(value){
        this._radius = value;
    }

    get diameter() {
        return this.radius * 2;
    }
    set diameter(value){
        this.radius = value/2;
    }

    get area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
let circle = new Circle(12);
console.log(circle.diameter);
circle.diameter = 15;
console.log(circle.diameter);
console.log(circle.radius);