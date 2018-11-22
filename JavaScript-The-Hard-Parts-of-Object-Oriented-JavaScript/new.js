
"use strict";

function userCreator (name, score) {

    // new crea un nuovo oggetto
    // var newUser = Object.create(userFunctionStore);

    this.name = name;
    this.score = score;

    // new ritorna il nuovo oggetto creato
    // return newUser;
}


var user1 = new userCreator("simo", 4);