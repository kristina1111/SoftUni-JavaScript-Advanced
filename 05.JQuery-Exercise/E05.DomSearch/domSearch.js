// Judge expects on('input') event when searching in the list!!!
// https://stackoverflow.com/questions/38502560/diffrence-between-keyup-keydown-keypress-and-input-events
function domSearch(selector, isCaseSensitiveSearch = false) {

    function addItemToList(inputElement, list) {
        if (inputElement.val().length > 0) {
            list.append(
                $('<li>').addClass('list-item')
                    .append(
                        $('<a>').addClass('button').attr('href', '#').text('X').on('click', function () {
                            $(this).parent().remove();
                        })
                    )
                    .append(
                        $('<strong>').text(inputElement.val())
                    )
            );
            inputElement.val('');
        }

    }

    let fieldControl = $('<div>')
        .addClass('add-controls')
        .append(
            $('<label>').text('Enter text:')
        )
        .append(
            $('<input>')
        )
        .append(
            $('<a>').addClass('button')
                .attr('href', '#')
                .text('Add')
                .on('click', function () {
                    addItemToList($('.add-controls input'), resultList)
                })
        );

    function filterListElements(searchValue, list, isCaseSensitiveSearch) {
        list.find('li').css({
            display: 'block'
        });

        $.each(list.find('li'), function () {
            let hasMatch = false;

            if (!isCaseSensitiveSearch) {
                hasMatch = $(this).text().toLowerCase().indexOf(searchValue.toLowerCase()) === -1;
            }else{
                hasMatch = $(this).text().indexOf(searchValue) === -1
            }

            if (hasMatch) {
                $(this).css({
                    display: 'none'
                })
            }
        })
    }

    let searchControl = $('<div>')
        .addClass('search-controls')
        .append(
            $('<label>').text('Search:')
        )
        .append(
            $('<input>').on('keyup', function () {
            // $('<input>').on('input', function () {
                filterListElements($('.search-controls input').val(), resultList, isCaseSensitiveSearch)
            })
        );

    let list = $('<div>').addClass('result-controls')
        .append(
            $('<ul>').addClass('items-list')
        );
    $(selector).append(fieldControl, searchControl, list);
    let resultList = $('.result-controls .items-list');
}