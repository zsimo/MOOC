"use strict";

var compose = require("../compose");

function toUpper () {
    var args = Array.prototype.slice.call(arguments);
    return args.join(", ").toUpperCase();
}

function toLower () {
    var args = Array.prototype.slice.call(arguments);
    return  args.join(", ").toLowerCase();
}


var input = "ciao";

var app = compose(toUpper, toLower);

console.log(app(input, "te"));
