function move(direction) {
    let selected = $("#towns option:selected");

    // if(direction == -1){
    //     if(selected.index()>0){
    //         selected.prop('selected', false);
    //         selected.prev().prop('selected', true);
    //         // selected.get(0).selected = false;
    //         // selected.prev().get(0).selected = true;
    //     }
    // }
    // if(direction == 1){
    //     if(selected.index()<$("#towns").children().length-1){
    //         selected.prop('selected', false);
    //         selected.next().prop('selected', true);
    //         // selected.get(0).selected = false;
    //         // selected.next().get(0).selected = true;
    //     }
    // }
    if (direction == -1) {
        selected.insertBefore(selected.prev());
    }
    if (direction == +1) {
        selected.insertAfter(selected.next());
    }
}