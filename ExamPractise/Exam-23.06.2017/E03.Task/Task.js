class Task {
    constructor(title, deadline){
        this.title = title;
        this.deadline = deadline;
        this.status = "Open"
    }
    get isOverdue(){
        return (this.status.toLowerCase() !=='complete'
        && this.deadline < Date.now());
    }
    get deadline(){
        return this._deadline;
    }

    set deadline(date){
        if(date instanceof Date){
            if(date < Date.now()){
                throw new Error("Passed argument date is a past date");
            }
            this._deadline = date;
        }else{
            throw new Error("Passed argument is not of type Date");
        }
    }

    get propForSorting(){
        let helpObj = {
            'in progress' : 2,
            'open' : 3,
            'complete' : 4
        };

        if(this.isOverdue && this.status.toLowerCase() !== 'complete'){
            return 1;
        }
        return helpObj[this.status.toLowerCase()];
    }

    static comparator(t1, t2){
        if(t1.propForSorting == t2.propForSorting){
            return new Date(t1.deadline) - new Date(t2.deadline);
        }
        return t1.propForSorting - t2.propForSorting;
    }

    toString(){
        let statusIcons = {
            'open': '\u2731',
            'in progress' : '\u219D',
            'complete' : '\u2714',
            'overdue' : '\u26A0'
        };
        let symbol = undefined;
        let lastPart = undefined;
        if(this.isOverdue && this.status.toLowerCase() !== 'complete'){
            symbol = statusIcons['overdue'];
            lastPart = " (overdue)";
        }else{
            symbol = statusIcons[this.status.toLowerCase()];
            if(this.status.toLowerCase() == 'complete'){
                lastPart = "";
            }else{
                lastPart = ' (deadline: ' + this.deadline + ')';
            }
        }


        return "["+ symbol + "] "
            + this.title + lastPart;
    }
}

let date1 = new Date();
date1.setDate(date1.getDate() + 7); // Set date 7 days from now
let task1 = new Task('JS Homework', date1);
let date2 = new Date();
date2.setFullYear(date2.getFullYear() + 1); // Set date 1 year from now
let task2 = new Task('Start career', date2);
console.log(task1.toString());
console.log();
console.log(task2.toString());

console.log();
console.log();

let date3 = new Date();
date3.setDate(date3.getDate() + 3); // Set date 3 days from now
let task3 = new Task('football', date3);
let task4 = new Task('Task 4', new Date());
let task5 = new Task('Task 5', new Date());
task1.status = 'In Progress';
task3.status = 'In Progress';
task5.status = "Complete";

let tasks = [task1, task2, task3, task4, task5];
setTimeout(() => {
    tasks.sort(Task.comparator);
    console.log(tasks.join('\n'));
}, 1000); // Sort and print one second later
//
// console.log(task4.isOverdue);
// // let overdueTask = new Task('Overdue Task', new Date(2005, '4', '20'));
// // task1.deadline = new Date(2005, '4', '20');