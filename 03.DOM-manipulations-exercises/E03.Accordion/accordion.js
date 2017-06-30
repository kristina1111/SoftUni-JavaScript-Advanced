function toggle() {
    let button = document.querySelector('#accordion div:first-child .button');
    let elementToToggle = document.getElementById('extra');
    if(elementToToggle.style.display == 'block'){
        elementToToggle.style.display = 'none';
        button.textContent = 'More';
    }else{
        elementToToggle.style.display = 'block';
        button.textContent = 'Less';
    }
}