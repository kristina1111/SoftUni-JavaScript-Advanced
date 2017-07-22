function attachEvents() {
    let selectElement = $('#towns');

    $('#btnAdd').on('click', function () {
        let inputTown = $('#newItem');
        if(inputTown.val().trim()!=''){
            selectElement.append(
                $('<option>').text(inputTown.val().trim())
            );
            inputTown.val('');
        }
    });
    $('#btnDelete').on('click', function () {
        $('#towns option:selected').remove();

        // OR

        // $('#towns option').filter(':selected').remove();

        // OR

        // selectElement.children().filter(function () {
        //     return $(this).prop('selected') == true
        // }).remove();

        // OR

        // for(let e of selectElement.children()) {
        //     if($(e).prop('selected')==true){
        //         $(e).remove();
        //     }
        // }
    })
}