function cardDeckBuilder(selector) {
    let validSuits = {
        "D" : '\u2666',
        "S" : '\u2660',
        "H" : '\u2665',
        "C" : '\u2663'
    };
    let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    let parentElement = $(selector);
    function addCard(face, suit) {
        if(validFaces.includes(face) && validSuits.hasOwnProperty(suit)){
            parentElement.append(
                $('<div>')
                    .addClass('card')
                    .text(face + ' ' + validSuits[suit])
                    .on('click', function () {
                        reverseCards()
                    })
            );
        }
        return this;
    }
    function reverseCards() {
        // As each node is appended it's automatically removed from its original position in the DOM, and put back in the right place unmodified
        // https://stackoverflow.com/questions/27671053/how-can-i-reverse-the-order-of-a-ul-with-the-click-of-a-button
        let arrCard = parentElement.children().get().reverse();
        parentElement.append(arrCard);
    }

    return {
        addCard
    }
}