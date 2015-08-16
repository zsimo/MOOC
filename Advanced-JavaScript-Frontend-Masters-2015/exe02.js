// "use strict";
console.log("");
console.log("============================");
var foo = "bar";

function bar() {
	var foo = "baz";

	function baz() {
		foo = "bam";
		bam = "yay";
	}
	baz();

}


bar();
foo;
// bam is a global variable declared inside the baz function
bam;
baz();