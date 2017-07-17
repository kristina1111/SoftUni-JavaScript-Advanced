function solver() {
    class Person {
        constructor(name, email){
            this.name = name;
            this.email = email;
        }
    }

    class Teacher extends Person{
        constructor(name, email, subject){
            super(name, email);
            this.subject = subject;
        }
    }
    return {
        Person,
        Teacher
    }
}

let p = new Person('Krisi', 'kk@abv.bg');
let t = new Teacher('Niki', 'nn@abv.bg', 'JS');
console.log(p.__proto__);
console.log(t.__proto__.__proto__);