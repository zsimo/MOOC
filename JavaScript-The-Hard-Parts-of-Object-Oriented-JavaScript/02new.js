
"use strict";

function userCreator (name, score) {

    // 1.
    // new creates a new (implicit) object
    // without new -> var newUser = Object.create(userFunctionStore);

    // this is automatically bounded to that empty object
    // similar to: var this = {};

    // 2. link this.__proto__ to userCreator.prototype

    this.name = name;
    this.score = score;


    // 3.
    // new returns the just created object
    // return this;
}

userCreator.prototype.increment = function () {
    this.score ++;
};


var user1 = new userCreator("simo", 4);
user1.increment();