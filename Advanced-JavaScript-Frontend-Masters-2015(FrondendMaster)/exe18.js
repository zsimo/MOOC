// "use strict";
console.log("============================================");
console.log("THIS");
console.log("============================================");

// per stabilire a cosa si riferisce THIS,
// quello che conta e'il momento della chiamata, dove viene eseguita (call site):
// - quando viene chiamata
// - come viene chiamata

// https://github.com/getify/You-Dont-Know-JS/blob/master/this%20&%20object%20prototypes/ch2.md
// 4 regole:
// 1. new binding
// 2. explicit binding
// 3. implicit binding
// 4. default bindig

function foo() {
	// 4. default bindig
	// in strict mode:
	// - this is undefined
	// in NOT strict mode:
	// - this is the global/window
	console.log(this === global); // true
	// console.log(this); // true
}

// 3. implicit binding
// l'oggetto che chiama la funzione [o.foo()] sara' this
var bar = "bar1";
var o2 = {
	bar : "bar2",
	foo : foo
};
var o3 = {
	bar : "bar3",
	foo : foo
};


var bar = "bar1";


foo();

o2.foo();
o3.foo();
