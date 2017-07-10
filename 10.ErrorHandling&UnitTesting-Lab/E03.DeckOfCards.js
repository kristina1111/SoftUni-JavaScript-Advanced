let makeCard = require('./E02.PlayingCards').makeCard;

function printDeckOfCards(arr) {
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