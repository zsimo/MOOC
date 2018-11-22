"use strict";

var userFunctionStore = {
    increment: function () {
        this.score ++;
    }
};

function userCreator (name, score) {
    /**
     * Qualsiasi parametro si passi, Object.create ritorna sempre un oggetto vuoto.
     *
     * @type {any} empty object
     */
    var newUser = Object.create(userFunctionStore);
    newUser.name = name;
    newUser.score = score;
    return newUser;
}

var user1 = userCreator("simo", 4);
var user2 = userCreator("pippo", 0);

user1.increment();