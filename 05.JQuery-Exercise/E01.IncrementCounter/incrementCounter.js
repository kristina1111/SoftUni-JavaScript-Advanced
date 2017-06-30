function increment(selector) {
    let container = $(selector);
    let textArea, incrementBtn, addBtn, uList = null;
    let valueInTextArea = 0;
    createDefaultElement();

    function incrementValueInTextArea() {
        valueInTextArea ++;
        textArea.val(valueInTextArea);
    }

    incrementBtn.on('click', incrementValueInTextArea);
    function addNewLiToUList() {
        $('<li>').text(valueInTextArea).appendTo(uList);
    }

    addBtn.on('click', addNewLiToUList);

    function createDefaultElement() {
        textArea = $('<textarea>')
            .addClass('counter')
            .attr('disabled', 'disabled')
            .val(valueInTextArea);


        incrementBtn = $('<button>')
            .addClass('btn')
            .attr('id', 'incrementBtn')
            .text('Increment');

        addBtn = $('<button>')
            .addClass('btn')
            .attr('id', 'addBtn')
            .text('Add');

        uList = $('<ul>').addClass('results');

        container.append(textArea, incrementBtn, addBtn, uList);
    }
}