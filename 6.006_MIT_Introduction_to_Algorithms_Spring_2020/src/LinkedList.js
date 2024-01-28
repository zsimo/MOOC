"use strict";


var Node = function () {
    this.item = undefined;
    this.next = undefined;
}


var LinkedList = function () {
    this.head = undefined;
    this.length = 0;
};

function _findNode (head, length, index) {
    var node = head;
    if (!node) {
        return;
    }
    if (index < 0 || index >= length) {
        return;
    }
    if (node) {
        var counter = 0;
        while (node.next && counter < index) {
            node = node.next;
            counter += 1;
        }
    }
    return node;
}

LinkedList.prototype.get_at = function (i) {
    var node = _findNode(this.head, this.length, i);
    if (node) {
        return node.item;
    }
};
LinkedList.prototype.set_at = function (i, x) {
    var node = _findNode(this.head, this.length, i);
    if (node) {
        node.item = x;
        return node.item;
    }
};
LinkedList.prototype.insert_first = function (x) {
    var newNode = new Node();
    newNode.item = x;
    if (this.head) {
        newNode.next = this.head;
        this.head = newNode;
    } else {
        this.head = newNode;
    }
    this.length += 1;
};
LinkedList.prototype.delete_first = function () {
    if (this.head) {
        this.head = this.head.next;
        this.length -= 1;
    }
};
LinkedList.prototype.insert_last = function (x) {

};
LinkedList.prototype.delete_last = function () {

};
LinkedList.prototype.insert_at = function (i, x) {

};
LinkedList.prototype.delete_at = function (i) {

};
LinkedList.prototype.toString = function () {
    var out = [];
    var node = this.head;
    if (node) {
        out.push(node.item);

        while (node.next) {
            node = node.next;
            out.push(node.item);
        }
    }

    return out;
};
module.exports = LinkedList;