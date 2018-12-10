
"use strict";


var stack = [];

module.exports = {

    get: function () {
        return stack;
    },
    push: function (item) {
        stack.push(item);
    },

    top: function () {
        return stack[stack.length - 1];
    },

    pop: function () {
        return stack.splice(-1, 1)[0];
    },

    isEmpty: function () {
        return stack.length === 0;
    }
};