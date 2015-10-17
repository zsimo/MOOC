// "use strict";
console.log("");
console.log("============================");
var foo = "bar";

function bar() {
	var foo = "baz";
}

function baz() {
	foo = "bam";

	// bam is a global variable, "strict mode" gives an error
	bam = "yay";

	console.log(foo);
	console.log(bam);
}

console.log(foo);
baz();