function attachEvents() {
    $('#items').find('li').on('click', function () {
        if(!this.hasAttribute('data-selected')){
            $(this).attr('data-selected', 'true');
            $(this).css({
                backgroundColor : '#DDD'
            });
        }else{
            $(this).removeAttr('data-selected');
            $(this).css({
                backgroundColor : 'transparent'
            });
        }
    });
    $('#showTownsButton').on('click', function () {
        let arrayLis = $('#items').find('li').filter('[data-selected]');
        let output = [];
        $.each(arrayLis, function () {
            output.push($(this).text());
        });
        $('#selectedTowns').text(`Selected towns: ${output.join(', ')}`);
    })
}