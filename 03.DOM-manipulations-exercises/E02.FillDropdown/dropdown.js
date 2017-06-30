function addItem() {
    let selectElement = document.getElementById('menu');
    let newOptionText = document.getElementById('newItemText');
    let newOptionValue =  document.getElementById('newItemValue');

    let newOption = document.createElement('option');
    newOption.textContent = newOptionText.value;
    newOption.value = newOptionValue.value;
    newOptionText.value = '';
    newOptionValue.value = '';

    selectElement.appendChild(newOption);
}