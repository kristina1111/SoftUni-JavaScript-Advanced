function tableBuilder(selector) {
    let parentElement = $(selector);
    let table = $('<table>');
    function createTable(columnNamesArr) {
        parentElement.html('');
        if(columnNamesArr.length>0){
            let row = $('<tr>');
            columnNamesArr.forEach(e=>{
                row.append(
                    $('<th>').text(e)
                )
            });
            row.append(
                $('<th>').text('Action')
            );
            parentElement.append(table.append(row));
        }

    }
    function fillData(dataRowsArr) {
        if(dataRowsArr.length>0){
            dataRowsArr.forEach(dataRow=>{
                let row = $('<tr>');
                dataRow.forEach(e=>{
                    row.append($('<td>').text(e));
                });

                row.append(
                    $('<td>').append(
                        $('<button>').text('Delete').on('click', function (event) {
                            $(event.target).parent().parent().remove();
                        })
                    )
                );

                table.append(row);

            });
        }

    }
    return {
        createTable,
        fillData
    }
}