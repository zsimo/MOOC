"use strict";
console.log("============================================");
console.log("HOISTING");
console.log("============================================");

foo();


var foo = 2;


function foo() {
	console.log("foo1");
}

function foo() {
	console.log("foo2");
}