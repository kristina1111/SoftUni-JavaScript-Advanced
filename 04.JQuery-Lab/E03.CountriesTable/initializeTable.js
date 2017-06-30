// https://stackoverflow.com/questions/11074261/jquery-click-event-stops-working-after-one-click
function initializeTable() {
    let defaultCountries = ['Bulgaria', 'Sofia', 'Germany', 'Berlin', 'Russia', 'Moscow'];
    let table = $('#countriesTable');

    fillWithDefaultData(defaultCountries);

    function fillWithDefaultData(arrayData) {
        for (let i = 1; i < defaultCountries.length; i += 2) {
            let row = getFilledDataRowForTable(defaultCountries[i - 1], defaultCountries[i]);
            table.append(row);
        }
        correctButtons(true);
    }


    $('#createLink').on('click', function () {
        let countryInput = $('#newCountryText');
        let capitalInput = $('#newCapitalText');
        table.append(getFilledDataRowForTable(countryInput.val(), capitalInput.val()));
        countryInput.val('');
        capitalInput.val('');
        correctButtons(false);
    });


    function correctButtons(correctFirstRow) {
        table.find('tr td:last-child a').show();
        table.find('tr:nth-child(3) td:last-child a:contains(Up)')
        // .eq(2)
        // .find('td:last-child a:contains(Up)')
            .hide();
        table.find('tr:last-child td:last-child a:contains(Down)').hide();
    }

    function moveUp() {
        let rowToMove = $(this).parent().parent();
        rowToMove.insertBefore(rowToMove.prev());
        correctButtons();
    }

    function moveDown() {
        let rowToMove = $(this).parent().parent();
        rowToMove.insertAfter(rowToMove.next());
        correctButtons();
    }

    function deleteRow() {
        $(this).parent().parent().remove();
        correctButtons();
    }

    function getFilledDataRowForTable(countryName, countryCapital) {
        let row = createRow(3);
        // console.dir(row.children().eq(0));
        row.children().eq(0).text(countryName);
        row.children().eq(1).text(countryCapital);
        row.children().eq(2)
            .append(
            $('<a>', {
                'href': '#'
            }).text('[Up]').click(moveUp))
            .append(
                $('<a>', {
                    'href': '#'
                }).text('[Down]').click(moveDown))
            .append(
                $('<a>', {
                    'href': '#'
                }).text('[Delete]').click(deleteRow));

        return row;

        function createRow(numberCols) {
            let row = $('<tr>');
            for (let i = 1; i <= numberCols; i++) {
                row.append($('<td>'));
            }
            return row;
        }
    }
}