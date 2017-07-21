function attachEvents() {
    function removeTown() {
        let input = $('#townName');
        let towns = $('select#towns option');
        let townToRemove = input.val().trim();

        input.val("");
        let deleted = false;
        for(let town of towns){
            if($(town).text().trim()=== townToRemove){
                town.remove();
                deleted = true;
            }
        }
        let resultDiv = $('#result');
        if(deleted){
            resultDiv.text(townToRemove + " deleted.")
        }else{
            resultDiv.text(townToRemove + " not found.")
        }
    }

    $('#btnDelete').on('click', function () {
        removeTown();
    });
}