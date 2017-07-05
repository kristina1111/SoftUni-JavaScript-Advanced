function validate() {
    function isUsernameValid(username){
        const regex = /^[a-zA-Z0-9]{3,20}(?=$)/;
        return username.match(regex);
    }

    function isPasswordsValid(password, confirmPassword) {
        const regex = /^[\w]{5,15}(?=$)/;
        if(password.match(regex)){
            if(password == confirmPassword){
                return true;
            }
        }
        return false;
    }

    function isEmailValid(email) {
        const regex = /^.*?@.*?\..*$/;
        return email.match(regex);
    }

    function isCompanyNumberValid(companyNumber) {
        return companyNumber>=1000 && companyNumber<=9999;
    }

    let usernameInput = $('#username');
    let emailInput = $('#email');
    let passwordInput = $('#password');
    let confirmPasswordInput = $('#confirm-password');
    let companyNumberInput = $('#companyNumber');
    let checkboxCompanyInfo = $('#company');
    let validDiv = $('#valid');

    function triggerValidityCheck() {
        let isAllValid = true;
        usernameInput.css({
            'border' : 'none'
        });
        emailInput.css({
            'border' : 'none'
        });
        passwordInput.css({
            'border' : 'none'
        });
        confirmPasswordInput.css({
            'border' : 'none'
        });
        companyNumberInput.css({
            'border' : 'none'
        });

        if(!isUsernameValid(usernameInput.val())){
            usernameInput.css({
                'border' : 'solid red'
            });
            isAllValid = false;
        }
        if(!isEmailValid(emailInput.val())){
            emailInput.css({
                'border' : 'solid red'
            });
            isAllValid = false;
        }
        if(!isPasswordsValid(passwordInput.val(), confirmPasswordInput.val())){
            passwordInput.css({
                'border' : 'solid red'
            });
            confirmPasswordInput.css({
                'border' : 'solid red'
            });
            isAllValid = false;
        }

        if(checkboxCompanyInfo.is(':checked')){
            if(!isCompanyNumberValid(Number(companyNumberInput.val()))){
                companyNumberInput.css({
                    'border' : 'solid red'
                });
                isAllValid = false;
            }
        }

        return isAllValid;
    }

    $('#submit').on('click', function (event) {
        event.preventDefault();
        validDiv.css({
            'display' : 'none'
        });
        if(triggerValidityCheck()){
            validDiv.css({
                'display' : 'block'
            });
        }
    });

    checkboxCompanyInfo.on('change', function () {
        validDiv.css({
            'display' : 'none'
        });
        $('#companyInfo').toggle();
    })
}
