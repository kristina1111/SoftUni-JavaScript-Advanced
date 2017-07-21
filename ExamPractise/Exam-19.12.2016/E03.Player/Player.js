class Player {
    constructor(nickName) {
        this.nickName = nickName;
        this.scores = [];
    }

    addScore(score) {
        if (!isNaN(Number(score)) && score !== null) {
            this.scores.push(Number(score));
        }
        return this;
    }

    get scoreCount() {
        return this.scores.length;
    }

    get highestScore() {
        return this.scores.length > 0 ?
            this.scores.reduce(function (prev, cur) {
                return prev > cur ? prev : cur;
            }, Number.MIN_SAFE_INTEGER)
            :
            undefined;
    }

    get topFiveScore() {
        return this.scores.sort((a, b)=>b - a).slice(0, 5);
    }
    toString(){
        return this.nickName + ': [' + this.scores.sort((a, b)=>b - a)+ ']';
    }
}
let p = new Player('Trotro');
// p.addScore(undefined);
p.addScore(null);

console.log('' + p);
console.log('Highest score: ' + p.highestScore);
console.log(`Top 5 score: [${p.topFiveScore}]`);
console.log('Score count: ' + p.scoreCount);

console.log();

let peter = new Player("Peter");
console.log('Highest score: ' + peter.highestScore);
console.log(`Top 5 score: [${peter.topFiveScore}]`);
console.log('' + peter);
console.log('Score count: ' + peter.scoreCount);
//
peter.addScore('450');
peter.addScore(200);
console.log('Highest score: ' + peter.highestScore);
console.log(`Top 5 score: [${peter.topFiveScore}]`);
console.log('' + peter);
//
peter.addScore(2000);
peter.addScore(300);
peter.addScore(50);
// peter.addScore(700);
// peter.addScore(700);
console.log('Highest score: ' + peter.highestScore);
console.log(`Top 5 score: [${peter.topFiveScore}]`);
console.log('' + peter);
console.log('Score count: ' + peter.scoreCount);

console.log();
let maria = new Player("Maria")
    .addScore(350)
    .addScore(779)
    .addScore(180);
console.log('Highest score: ' + maria.highestScore);
console.log(`Top 5 score: [${maria.topFiveScore}]`);
console.log('' + maria);