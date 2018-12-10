
"use strict";


var queue = [];

module.exports = {

    get: function () {
        return queue;
    },
    enqueue: function (item) {
        queue.push(item);
    },

    dequeue: function () {
        return queue.splice(0, 1)[0];
    },
    isEmpty: function () {
        return queue.length === 0;
    }
};