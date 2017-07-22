function generateSummary(buttonSelector) {
    $(buttonSelector).on('click', function () {
        summerize();
    });
    function summerize() {
        let originalArticle = $('#content');
        originalArticle.parent().append(
            $('<div>')
                .attr('id', 'summary')
                .append(
                    $('<h2>').text('Summary')
                )
                .append(
                    $('<p>').text(
                        originalArticle.find('strong').text()
                    )
                )
        );
    }
}

generateSummary('#generate');