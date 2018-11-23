
"use strict";

function userCreator (name, score) {

    // 1.
    // new crea un nuovo oggetto
    // var newUser = Object.create(userFunctionStore);

    // this is automatically bounded to an empty object
    //var this = {};

    // 2. new bounds this.__proto__ to userCreator.prototype

    this.name = name;
    this.score = score;


    // 3.
    // new ritorna il nuovo oggetto creato
    // return this;
}

userCreator.prototype.increment = function () {
    this.score ++;
};


var user1 = new userCreator("simo", 4);
user1.increment();