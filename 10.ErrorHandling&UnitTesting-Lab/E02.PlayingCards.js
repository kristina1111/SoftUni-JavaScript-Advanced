let makeCard = (function () {
    let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let validSuits = {
        'S' : '\u2660',
        'H' : '\u2665',
        'D' : '\u2666',
        'C' : '\u2663'
    };
    let obj = {
        cardFace : undefined,
        cardSuit : undefined,
        toString : function () {
            return `${obj.cardFace}${obj.cardSuit}`
        }
    };
    return function (face, suit) {
        if(!validFaces.includes(face) || validSuits[suit] == undefined){
            throw Error('Error');
        }
        obj.cardFace = face;
        obj.cardSuit = validSuits[suit];
        return obj;
    }
})();

module.exports = {
    makeCard : makeCard
}

// console.log(makeCard('1', 'S').toString());