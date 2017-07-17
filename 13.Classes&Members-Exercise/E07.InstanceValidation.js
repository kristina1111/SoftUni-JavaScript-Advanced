class CheckingAccount {
    constructor(clientId, email, firstName, lastName){
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;

        this._products = [];
    }
    get clientId() {
        return this._clientId;
    }
    set clientId(value){
        if(typeof(value) !='string'
            || value.length != 6
            || isNaN(Number(value))){
            throw TypeError('Client ID must be a 6-digit number');
        }
        this._clientId = value;
    }

    get email(){
        return this._email;
    }
    set email(email){
        const regex = /\b[a-zA-Z0-9]+@[a-zA-Z.]+\b/;
        if(!regex.test(email)){
            throw TypeError('Invalid e-mail');
        }
        this._email = email;
    }

    get firstName(){
        return this._firstName;
    }
    set firstName(firstName){
        if(this.validateName(firstName, 'First')){
            this._firstName = firstName;
        }
    }

    get lastName(){
        return this._lastName;
    }
    set lastName(lastName){
        if(this.validateName(lastName, 'Last')){
            this._lastName = lastName;
        }
    }

    validateName(value, flag){
        if(!(value.length>=3 && value.length<=20)){
            throw TypeError(`${flag} name must be between 3 and 20 characters long`);
        }

        const regex = /^[a-zA-Z]+$/;
        if(!regex.test(value)){
            throw TypeError(`${flag} name must contain only Latin characters`);
        }
        return true;
    }
}
// let acc = new CheckingAccount('1314', 'ivan@some.com', 'Ivan', 'Petrov');
// TypeError: Client ID must be a 6-digit number

// let acc = new CheckingAccount('131455', 'ivan@', 'Ivan', 'Petrov');
// TypeError: Invalid e-mail

// let acc = new CheckingAccount('131455', 'ivan@some.com', 'I', 'Petrov');
// TypeError: First name must be between 3 and 20 characters long

let acc = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov');
// TypeError: "Last name must contain only Latin characters
