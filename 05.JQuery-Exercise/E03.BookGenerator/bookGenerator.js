function createBook(selector, title, author, isbn) {
    let index = 1;
    let bookGenerator = function (selector, title, author, isbn) {
        let bookObj = {
            id: 'book' + index,
            title: title,
            author: author,
            isbn: isbn
        };

        let bookContainer = $('<div>')
                .attr('id', bookObj.id)
                .css({
                    border: 'none'
                })
                .append(
                    $('<p>').addClass('title').text(bookObj.title)
                )
                .append(
                    $('<p>').addClass('author').text(bookObj.author)
                )
                .append(
                    $('<p>').addClass('isbn').text(bookObj.isbn)
                )
                .append(
                    $('<button>').text('Select').on('click', function () {
                        $(this).parent().css({
                            border: '2px solid blue'
                        });
                    })
                )
                .append(
                    $('<button>').text('Deselect').on('click', function () {
                        $(this).parent().css({
                            border: 'none'
                        });
                    })
                )
            ;

        $(selector).append(bookContainer);

        index++;
    };

    bookGenerator(selector, title, author, isbn);

    // bookGenerator(selector, title, author, isbn)
}