// "use strict";
console.log("============================================");
console.log("Function declaration Vs Function expression");
console.log("============================================");

var foo = function bar() {

	var foo = "baz";

	bar.tre = "333";

	function baz(foo) {
		foo = bar;
		foo.tre = "4444";

		this.tre = 3;
		baz.tre = 4;
		console.log(bar.tre);
		// console.log(foo);
	}
	baz();

	this.uno = 1;
	bar.due = 2;
	// console.log(this.uno);
	// console.log(bar.due);
};

foo();
// bar();