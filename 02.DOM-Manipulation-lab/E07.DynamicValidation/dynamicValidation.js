function validate() {
    let emailField = document.getElementById('email');
    emailField.addEventListener('keyup', function (event) {
        if(checkEmailValidity(emailField.value)){
            if(!hasClass(emailField, 'error')){
                emailField.className += ' error';
            }
        }else{
            if(hasClass(emailField, 'error')){
                emailField.classList.remove('error');
            }
        }
    });
    function hasClass( elem, klass ) {
        return (" " + elem.className + " " ).indexOf( " "+klass+" " ) > -1;
    }

    function checkEmailValidity(email) {
        const regex = /(?:^)([a-z]+)@([a-z]+)(\.([a-z]+))+(?=$)/g;
        console.log(email.match(regex));
        return email.match(regex) == null;
    }
}