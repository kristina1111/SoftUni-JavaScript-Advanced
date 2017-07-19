function solver() {
    class Melon {
        constructor(weight, melonSort) {
            if (new.target == Melon) {
                throw new TypeError("Abstract class cannot be instantiated directly");
            }
            this.weight = weight;
            this.melonSort = melonSort;

            this.element = this.constructor.name.replace('melon', '');
            // this._elementIndex = this.weitgh * this.melonSort.length;
        }

        get elementIndex() {
            return this.weight * this.melonSort.length;
        }

        toString() {
            return 'Element: ' + this.element + '\n'
                + 'Sort: ' + this.melonSort + '\n'
                + 'Element Index: ' + this.elementIndex;
        }
    }

    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }
    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }
    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }
    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }

    class Melolemonmelon extends Watermelon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = 'Water';
            this.morph = (function () {
                let elements = ['Fire', 'Earth', 'Air', 'Water'];
                let length = elements.length;
                let cnt = 0;
                return function () {
                    this.element = elements[cnt % length];
                    cnt++;
                    return this;
                }
            })();
        }
    }

    return {
        Melon,
        Watermelon,
        Firemelon,
        Earthmelon,
        Airmelon,
        Melolemonmelon
    };


    // let test = new Melon(100, "Test");
//Throws error
//     let watermelon = new Watermelon(12.5, "Kingsize");
//     // let watermelon = new Melolemonmelon(12.5, "Kingsize");
//     console.log(watermelon.toString());
//     // watermelon.morph().morph();
//     // console.log(watermelon.toString());
}

solver();