function move(command) {
    switch (command.toLowerCase()){
        case 'right' : moveRight(); break;
        case 'left' : moveLeft(); break;
        case 'print': print();
    }

    function moveRight() {
        let selectedAvailableTown = $('#available-towns option:selected');
        $('#selected-towns').append(selectedAvailableTown);
        // console.dir(selectedAvailableTown);
    }
    function moveLeft() {
        let selectedTownToMove = $('#selected-towns option:selected');
        $('#available-towns').append(selectedTownToMove);
    }
    function print() {
        let output = [];
        for(let option of $('#selected-towns option')){
            output.push($(option).text());
        }
        $('#output').text(
            output.join('; ')
        );
    }
}