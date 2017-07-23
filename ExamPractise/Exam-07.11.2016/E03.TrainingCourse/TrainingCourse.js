class TrainingCourse{
    constructor(title, trainer){
        this.title = title;
        this.trainer = trainer;
        this.topics = [];
    }

    addTopic(title, date){
        this.topics.push({
            title: title,
            date: date
        });

        this.topics = this.topics.sort((a,b) => new Date(a.date) - new Date(b.date));
        return this;
    }

    get firstTopic(){
        return this.topics[0];
    }

    get lastTopic(){
        return this.topics[this.topics.length - 1];
    }

    toString(){
        let output = `Course "${this.title}" by ${this.trainer}`;
        if(this.topics.length > 0){
            this.topics.forEach(t => output += `\n * ${t.title} - ${t.date}`);
        } else {
            output += "\n";
        }

        return output;
    }
}