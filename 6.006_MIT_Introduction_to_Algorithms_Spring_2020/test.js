"use strict";

const process = require("process");
const path = require("path");
const LinkedList = require(path.resolve(process.cwd(), "src", "LinkedList"));





function testLinkedList() {
    var a = new LinkedList();
    a.delete_first();
    a.insert_first(2);
    a.insert_first(1);
    a.delete_first();
    a.set_at(0, "ciao");
    // a.delete_first();
    console.log(a.get_at(0));
    console.log(a.toString());
}

function main () {
    testLinkedList();
}

main();