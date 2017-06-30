function extractText() {
    let lis = $('ul#items li');
    // console.dir(lis);
    let output = "";

    $.each(lis, function () {
        output += $(this).text() + ', ';
    });


    // for(let i = 0; i<lis.length; i++){
    //     output+=$(lis[i]).text() + ', ';
    // }
    output = output.slice(0,-2);
    $('#result').text(output);
}