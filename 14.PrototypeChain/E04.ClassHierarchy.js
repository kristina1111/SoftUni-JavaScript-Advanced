function solver() {
    class Figure {
        constructor(){
            if(new.target === Figure){
                throw new TypeError('Cannot construct Figure instances directly')
            }
        }
        get area(){
            return undefined;
        }
        toString(){
            let output = this.constructor.name + ' -';
            for(let prop in this){
                output += ' ' + prop + ': ' + this[prop] + ',';
            }
            return output.slice(0, -1);
        }
    }

    class Circle extends Figure {
        constructor(radius){
            super ();
            this.radius = radius;
        }

        get area(){
            return Math.PI*Math.pow(this.radius, 2);
        }
    }

    class Rectangle extends Figure{
        constructor(width, height){
            super();
            this.width = width;
            this.height = height;
        }

        get area(){
            return this.width * this.height;
        }
    }

    // let f = new Figure();       //Error
    // let c = new Circle(5);
    // console.log(c.area);        //78.53981633974483
    // console.log(c.toString());
    // let r = new Rectangle(3,4);
    // console.log(r.area);        //12
    // console.log(r.toString());

    return {
        Figure,
        Circle,
        Rectangle
    }
}

solver();