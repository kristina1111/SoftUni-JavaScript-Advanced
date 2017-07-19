function solver() {
    class Employee {
        constructor(name, age){
            if(new.target == Employee){
                throw new Error('Cannot instantiate directly.')
            }

            this.name = name;
            this.age = age;
            this.tasks = [];
            this.salary = 0;
            this.work = (function () {
                let cnt = 0;
                function printWork() {
                    console.log(this.name + ' ' + this.tasks[cnt%this.tasks.length]);
                    cnt++;
                    return this;
                }
                return printWork;
            })();
        }

        collectSalary(){
            console.log(this.name + ' received ' + this.getSalary() + ' this month.')
        }

        getSalary(){
            return this.salary;
        }
    }

    class Junior extends Employee{
        constructor(name, age){
            super(name, age);
            this.tasks.push('is working on a simple task.');
        }
    }

    class Senior extends Employee{
        constructor(name, age){
            super(name, age);
            this.tasks.push('is working on a complicated task.',
                'is taking time off work.',
                'is supervising junior workers.'
            );
        }
    }

    class Manager extends Employee{
        constructor(name, age){
            super(name, age);
            this.dividend = 0;
            this.tasks.push('scheduled a meeting.',
                'is preparing a quarterly report.'
            );
        }

        getSalary() {
            return this.salary + this.dividend;
        }
    }

    return {
        Employee,
        Junior,
        Senior,
        Manager
    };
}
solver();