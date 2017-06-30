function search() {
    let textInSearch = $('#searchText').val().toLowerCase();
    let lis = $('#towns').find('li');
    let cnt = 0;
    $.each(lis, function () {
        let textInLi = $(this).text().toLowerCase();
        $(this).css('font-weight', 'normal');
        if(textInLi.indexOf(textInSearch)!== -1){
            $(this).css('font-weight', 'bold');
            cnt++;
        }
    });
    $('#result').text(`${cnt} matches found.`);

}
