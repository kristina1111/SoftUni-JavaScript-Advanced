// let post = {
//     id: '3',
//     author: 'emil',
//     content: 'wazaaaaa',
//     upvotes: 100,
//     downvotes: 100
// };
// le

let post = {
    id: '2',
    author: 'gosho',
    content: 'whats up?',
    upvotes: 120,
    downvotes: 30
}

let solution = function (action) {
    //doesn't work without assigning this to new variable
    let that = this;

    function upvote() {
        that.upvotes += 1;
    }

    function downvote() {
        that.downvotes += 1;
    }

    function score() {
        let upvotesToReport = that.upvotes;
        let downvotesToReport = that.downvotes;
        if (that.upvotes + that.downvotes > 50) {
            let adder = that.upvotes > that.downvotes ? Math.ceil(that.upvotes * 0.25) : Math.ceil(that.downvotes * 0.25);
            upvotesToReport += adder;
            downvotesToReport += adder;
        }
        let balance = that.upvotes - that.downvotes;
        let rating = "";

        if (that.upvotes / (that.upvotes + that.downvotes) > 0.66) {
            rating = "hot";
        } else if ((that.upvotes > 100 || that.downvotes > 100) && that.upvotes >= that.downvotes) {
            rating = "controversial";
        } else if (that.downvotes > that.upvotes) {
            rating = "unpopular";
        } else {
            rating = "new";
        }

        if (that.upvotes + that.downvotes < 10) {
            rating = "new";
        }

        return [upvotesToReport, downvotesToReport, balance, rating];
    }

    let modifier = {
        upvote: upvote,
        downvote: downvote,
        score: score
    };
    return modifier[action]();
};

// solution.call(post, 'upvote');
// solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
console.log(score);
// for(let i = 0; i<50; i++){
//     solution.call(post, 'downvote');        // (executed 50 times)
// }
// score = solution.call(post, 'score');
// solution.call(post, 'downvote');
// score = solution.call(post, 'score');
// console.log(score);