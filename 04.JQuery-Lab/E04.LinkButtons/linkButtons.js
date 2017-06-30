function attachEvents() {
    $('.button').on('click', function () {
        $(this).siblings().removeClass('selected');
        $(this).addClass('selected')
    })
}