
"use strict";

var functions = {

    get: function () {
        return this.queue;
    },
    enqueue: function (item) {
        this.queue.push(item);
    },

    dequeue: function () {
        return this.queue.splice(0, 1)[0];
    },
    isEmpty: function () {
        return this.queue.length === 0;
    }
};



module.exports = function () {
    var obj = Object.create(functions);

    obj.queue = [];

    return obj;
};