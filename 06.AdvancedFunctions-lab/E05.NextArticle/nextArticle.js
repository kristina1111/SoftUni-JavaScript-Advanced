function getArticleGenerator(arr) {
    let cnt = 0;
    return function showArticle() {
        if(cnt<arr.length){
            $('<article>').text(arr[cnt]).appendTo($('#content'));
        }
        cnt++
    }
}