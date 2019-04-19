"use strict";

function compose () {
    var funcs = Array.prototype.slice.call(arguments);

    return function (input) {
        var args = Array.prototype.slice.call(arguments);
        return funcs.map(function (fn) {
            return fn(...args);
        });
    };

}


module.exports = compose;