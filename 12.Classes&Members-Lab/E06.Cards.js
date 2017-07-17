let result = (function () {
    let validFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    let validSuits = ['♠','♥', '♦', '♣'];
    let Suits = {
        SPADES : '♠',
        HEARTS : '♥',
        DIAMONDS : '♦',
        CLUBS : '♣'
    };

    class Card {
        constructor(face, suit){
            this.face = face;
            this.suit = suit;
        }
        get face(){
            return this._face;
        }
        set face(face){
            if(!validFaces.includes(face)){
                throw Error('Invalid face!');
            }
            this._face = face;
        }
        get suit(){
            return this._suit;
        }
        set suit(value){
            if(!validSuits.includes(value)){
                throw Error('Invalid suit!');
            }
            this._suit = value;
        }

        toString(){
            return this.face + this.suit;
        }
    }

    return {
        Suits,
        Card
    };
})();

let Card = result.Card;
let Suits = result.Suits;
let card = new Card('2', Suits.CLUBS);
console.log(card.toString());
card.face = '3';
console.log(card.toString());
// validSuits = ['♠','♥', '♦', '♣', 'ff'];
let card2 = new Card('4', 'ff');
