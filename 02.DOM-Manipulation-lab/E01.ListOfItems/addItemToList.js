function addItem() {
    let list = document.getElementById('items');
    let newLiElement = document.createElement('li');
    let inputElement = document.getElementById('newItemText');
    newLiElement.textContent = inputElement.value;
    if(inputElement.value != ''){
        list.appendChild(newLiElement);
        inputElement.value = '';
    }
}