"use strict";

function userCreator (name, score) {

    this.name = name;
    this.score = score;
}

userCreator.prototype.increment = function () {
    /**
     * by default, the this inside a function is bounded to the left side of the dot (.)
     *
     * e.g.: user1.increment();
     */
    var add = function () {
        this.score ++;
    };
    /**
     * in this case, no dot left side, so the this is undefined
     */
    add();
};

userCreator.prototype.increment = function () {
    /**
     * arrow function has a lexical scope:
     * the this inside is bound to the this where the arrow is declared
     *
     */
    var add = () => {
        this.score++;
    }
    add();
};


var user1 = new userCreator("simo", 4);
user1.increment();