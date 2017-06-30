function addItem() {
    let list = document.getElementById('items');
    let newLiElement = document.createElement('li');
    let inputElement = document.getElementById('newText');
    if (inputElement.value == '') {
        return;
    }
    newLiElement.textContent = inputElement.value + ' ';
    let anchorElement = document.createElement('a');
    anchorElement.setAttribute('href', '#');
    anchorElement.textContent = '[Delete]';
    newLiElement.appendChild(anchorElement);
    list.appendChild(newLiElement);
    inputElement.value = '';

    anchorElement.addEventListener('click', deleteElement);

    function deleteElement() {
        list.removeChild(this.parentNode);
    }

}