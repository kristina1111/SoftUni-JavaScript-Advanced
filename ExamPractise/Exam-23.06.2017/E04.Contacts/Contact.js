class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;

        this.infoTag = [phone, email];
        this.online = false;
    }

    get infoTag() {
        return this._infoTag;
    }

    set infoTag(arr) {
        this._infoTag = $('<div>')
            .addClass('info')
            .css({
                display: 'none'
            })
            .append(
                $('<span>').html('&phone; ' + arr[0]),
                $('<span>').html('&#9993; ' + arr[1])
            );
    }

    get online() {
        return this._online;
    }

    set online(bool) {
        this._online = bool;
        this.changeInfoTagDisplay();
    }

    changeInfoTagDisplay() {
        if (this.online) {
            $(this.infoTag).parent().addClass('online');
        } else {
            $(this.infoTag).parent().removeClass('online');
        }
    }

    render(id) {
        let infoTag = this.infoTag;
        let resultTag = $('<article>')
            .append(
                $('<div>')
                    .addClass('title')
                    .text(this.firstName + ' ' + this.lastName)
                    .append(
                        $('<button>').html('&#8505;').on('click', function () {
                            $(infoTag).toggle();
                        })
                    )
                    .append(
                        infoTag
                    )
            );
        if (this.online) {
            $(infoTag).parent().addClass('online');
        }
        $('#' + id).append(resultTag);
    }

}

let data = {
    firstName: 'Ivan',
    lastName: 'Ivanov',
    phone: '0888 123 456',
    email: 'i.ivanov@gmail.com'
};
let contact = new Contact(data.firstName, data.lastName, data.phone, data.email);
contact.online = true;
contact.render('main');

// let contacts = [
//     new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
//     new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
//     new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
// ];
// contacts.forEach(c => c.render('main'));
//
// // After 1 second, change the online status to true
// setTimeout(() => contacts[1].online = true, 2000);