function solver() {
    class Person {
        constructor(name, email){
            this.name = name;
            this.email = email;
        }

        toString(){
            return this.constructor.name + ' (name: ' + this.name + ', email: ' + this.email+')';
        }
    }

    class Teacher extends Person{
        constructor(name, email, subject){
            super(name, email);
            this.subject = subject;
        }

        toString(){
            let output = super.toString().slice(0, -1);
            return output + ', subject: ' + this.subject + ')';
        }
    }

    class Student extends Person{
        constructor(name, email, course){
            super (name, email);
            this.course = course;
        }

        toString(){
            let output = super.toString().slice(0, -1);
            return output + ', course: ' + this.course + ')';
        }
    }

    // let p = new Person('Monkey', 'mm@abv.bg');
    // console.log(p.toString());
    // let t = new Teacher('Niki', 'nn@abv.bg', 'JS');
    // console.log(t.toString());
    // let s = new Student('Redi', 'rk@abv.bg', 'PHP');
    // console.log(s.toString());
    return {
        Person,
        Teacher,
        Student
    }
}

solver();