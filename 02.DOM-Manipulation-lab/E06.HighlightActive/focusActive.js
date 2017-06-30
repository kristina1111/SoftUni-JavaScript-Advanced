function focus() {
    document.addEventListener('click', function(evt) {
        if(evt.target.tagName == 'INPUT'){
            removeClassOfAllChildren(evt.target.parentNode.parentNode, 'focused');
            evt.target.parentNode.className += 'focused';
        }
    }, false);
    function removeClassOfAllChildren(element, className) {
        for(let i = 0; i<element.children.length; i++){
            if(element.children[i].classList.contains(className)){
                element.children[i].classList.remove(className);
                break;
            }
        }
    }
}