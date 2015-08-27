"use strict";
console.log("============================================");
console.log("THIS");
console.log("============================================");

// per stabilire a cosa si riferisce THIS,
// quello che conta e'il momento della chiamata:
// - quando viene chiamata
// - come viene chiamata

// 4 regole:
// 4. default bindig

function foo() {
	console.log(this.bar);
}


var bar = "bar1";


foo();
