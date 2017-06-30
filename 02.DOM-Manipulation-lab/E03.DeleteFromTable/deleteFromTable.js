function deleteByEmail() {
    let emailText = document.getElementsByName('email')[0].value;
    let rows = document.querySelectorAll('#customers tr');
    console.dir(rows.parentNode);
    for(let i = 1; i<rows.length; rows++){
        if(rows[i].lastChild.textContent == emailText){
            rows[i].parentNode.removeChild(rows[i]);
            document.getElementById('result').textContent = 'Deleted.';
            return;
        }
    }
    document.getElementById('result').textContent = 'Not found.';
}