function listBuilder(selector) {
    let selected = $(selector);
    let uList = $('<ul>');
    function createNewList() {
        selected.html("");
        selected.append(uList);
    }

    function addItem(text) {
        function moveUp(event) {
            let li = $(event.target).parent();
            li.insertBefore(li.prev());
        }
        function moveDown(event) {
            let li = $(event.target).parent();
            li.insertAfter(li.next());
        }
        
        uList.append(
            $('<li>').text(text)
                .append($('<button>').text('Up').on('click', function (event) {
                    moveUp(event);
                }))
                .append($('<button>').text('Down').on('click', function (event) {
                    moveDown(event);
                }))
        );
        selected.append(uList);
    }

    return {
        createNewList,
        addItem
    }
}