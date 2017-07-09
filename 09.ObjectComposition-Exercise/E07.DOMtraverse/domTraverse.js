// the solution with recursion exceeds the time limit in judge
function highlighter(selector) {
    function findDeepestChild(parent) {
        let result = {depth: 0, element: parent};

        parent.children().each(
            function(idx) {
                let child = $(this);
                let childResult = findDeepestChild(child);
                if (childResult.depth + 1 > result.depth) {
                    result = {
                        depth: 1 + childResult.depth,
                        element: childResult.element};
                }
            }
        );
        return result;
    }
    let element = findDeepestChild($(selector)).element;
    while (!element.parent().is($(selector))){
        element.addClass('highlight');
        element = element.parent();
    }
    $(selector).addClass('highlight');
}
// highlighter('#content');

function domTraversal(selector) {
    let $target = $(selector).children();
    if($target.length == 0){
        $(selector).addClass("highlight");
        return;
    }
    let $next = $target;

    while( $next.length ) {
        $target = $next;
        $next = $next.children();
    }

    $target.first().addClass("highlight");
    $target.first().parentsUntil($(selector).parent()).addClass('highlight');
}
domTraversal('#content');