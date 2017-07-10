function printDeckOfCards(arr) {
    let makeCard = (function () {
        let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let validSuits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        };
        let obj = {
            cardFace: undefined,
            cardSuit: undefined,
            toString: function () {
                return `${obj.cardFace}${obj.cardSuit}`
            }
        };
        return function (face, suit) {
            if (!validFaces.includes(face) || validSuits[suit] == undefined) {
                throw Error(`Invalid card: ${face}${suit}`);
            }
            obj.cardFace = face;
            obj.cardSuit = validSuits[suit];
            return obj;
        }
    })();

    let deck = [];
    try {
        arr.forEach(e=> {
            let face = e.substring(0, e.length - 1);
            let suit = e.substr(e.length - 1);
            deck.push(makeCard(face, suit).toString());
        });
    } catch (error) {
        // return error.message;
        console.log(error.message);
        return;
    }
    // return deck.join(' ');
    console.log(deck.join(' '));
}
printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);