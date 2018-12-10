
"use strict";


var _head = {
    next: undefined,
    type: "head"
};
var _tail = {
    prev: undefined,
    type: "tail"
};

function _nodeConstructor (key) {
    return {
        key : key
    };
}

_head.next = _tail;
_tail.prev = _head;

module.exports = {

    get: function () {
        return _head;
    },

    popBack: function (key) {

        if (!_head.next) {
            throw new Error("The list is empty");
        }

        if (_tail.prev !== _head) {
            _tail.prev = _tail.prev.prev
        }
    },
    pushBack: function (key) {
        var newNode = _nodeConstructor(key);

        if (!_tail.prev) {
            _tail.prev = newNode;
            newNode.next = _tail;
            newNode.prev = _head;
            _head.next = newNode;
        } else {
            _tail.prev.next = newNode;
            newNode.prev = _tail.prev;
            _tail.prev = newNode;
            newNode.next = _tail;
        }
    }
};