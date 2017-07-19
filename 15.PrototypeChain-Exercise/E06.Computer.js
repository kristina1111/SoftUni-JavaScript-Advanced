function createComputerHierarchy() {
    function isValidNumber(number) {
        // return !isNaN(Number(number));
        return typeof(number) == 'number';
    }
    class Part {
        constructor(manufacturer){
            if(new.target == Part){
                throw new TypeError("Abstract class cannot be instantiated directly");
            }
            this.manufacturer = manufacturer;
        }
    }

    class Keyboard extends Part{
        constructor(manufacturer, responseTime){
            super(manufacturer);
            this.responseTime = responseTime;
        }
        get responseTime(){
            return this._responseTime;
        }
        set responseTime(responseTime){
            if(!isValidNumber(responseTime)){
                throw new TypeError('Not valid argument is passed to constructor');
            }
            this._responseTime = responseTime;
        }
    }

    class Monitor extends Part{
        constructor(manufacturer, width, height){
            super(manufacturer);
            this.width = width;
            this.height = height;
        }

        get width(){
            return this._width;
        }
        set width(width){
            if(!isValidNumber(width)){
                throw new TypeError('Not valid argument is passed to constructor');
            }
            this._width = width;
        }

        get height(){
            return this._height;
        }

        set height(height){
            if(!isValidNumber(height)){
                throw new TypeError('Not valid argument is passed to constructor');
            }
            this._height = height;
        }

    }

    class Battery extends Part{
        constructor(manufacturer, expectedLife){
            super(manufacturer);
            this.expectedLife = expectedLife;
        }

        get expectedLife(){
            return this._expectedLife;
        }
        set expectedLife(expectedLife){
            if(!isValidNumber(expectedLife)){
                throw new TypeError('Not valid argument is passed to constructor');
            }
            this._expectedLife = expectedLife;
        }
    }

    class Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace){
            if(new.target == Computer){
                throw new TypeError("Abstract class cannot be instantiated directly");
            }

            this.manufacturer = manufacturer;
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
        get processorSpeed(){
            return this._processorSpeed;
        }
        set processorSpeed(processorSpeed){
            if(!isValidNumber(processorSpeed)){
                throw new TypeError('Not valid argument is passed to constructor');
            }
            this._processorSpeed = processorSpeed;
        }
        get ram() {
            return this._ram;
        }

        set ram(value) {
            if(!isValidNumber(value)){
                throw new TypeError('Not valid argument is passed to constructor');
            }
            this._ram = value;
        }

        get hardDiskSpace() {
            return this._hardDiskSpace;
        }

        set hardDiskSpace(value) {
            if(!isValidNumber(value)){
                throw new TypeError('Not valid argument is passed to constructor');
            }
            this._hardDiskSpace = value;
        }
    }

    class Laptop extends Computer{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery){
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.color = color;
            this.weight = weight;
            this.battery = battery;
        }

        get weight() {
            return this._weight;
        }

        set weight(value) {
            if(!isValidNumber(value)){
                throw new TypeError('Not valid argument is passed to constructor');
            }
            this._weight = value;
        }

        get battery() {
            return this._battery;
        }

        set battery(value) {
            if(!(value instanceof Battery)){
                throw new TypeError('Not valid argument is passed to constructor');
            }
            this._battery = value;
        }
    }

    class Desktop extends Computer{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor){
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }
        get keyboard() {
            return this._keyboard;
        }

        set keyboard(value) {
            if(!(value instanceof Keyboard)){
                throw new TypeError('Not valid argument is passed to constructor');
            }
            this._keyboard = value;
        }

        get monitor() {
            return this._monitor;
        }

        set monitor(value) {
            if(!(value instanceof Monitor)){
                throw new TypeError('Not valid argument is passed to constructor');
            }
            this._monitor = value;
        }
    }

    return {
        Part,
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}

let classes = createComputerHierarchy();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let keyboard = new Keyboard('Logitech',70);
let monitor = new Monitor('Benq',28,18);
let lp = new Laptop("Hewlett Packard",2.4,4,0.5,3.12,"Silver","pesho");
console.log(lp);
