
"use strict";

class userCreator {

    constructor (name, score) {
        this.name = name;
        this.score = score;
    }

    increment () {
        this.score ++;
    }
}


var user1 = new userCreator("simo", 4);
user1.increment();
user1.increment();
console.log(user1.score);