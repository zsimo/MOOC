"use strict";



// var DoublyLinkedLists = require("./Week01/01DoublyLinkedLists");
// DoublyLinkedLists.pushBack("uno");
// DoublyLinkedLists.pushBack("due");


// var Stack = require("./Week01/02Stack");
// Stack.push("uno");
// Stack.push("due");
// Stack.pop();
// Stack.pop();


var Queue = require("./Week01/03Queue");

Queue.enqueue("uno");
Queue.enqueue("due");
Queue.dequeue();


console.log(Queue.get());