function create(sentences) {
    let content = document.getElementById('content');

    function showParagraph() {
        this.childNodes[0].style.display = 'block';
    }

    for(let i = 0; i<sentences.length; i++){
        let newDiv = document.createElement('div');
        newDiv.addEventListener('click', showParagraph);
        let paragraph = document.createElement('p');
        paragraph.style.display = 'none';
        paragraph.textContent = sentences[i];
        newDiv.appendChild(paragraph);
        content.appendChild(newDiv);
    }
}