// "use strict";
console.log("");
console.log("============================");

var foo = function bar() {

	var foo = "baz";

	function baz(foo) {
		foo = bar;
		foo;
		this.tre = 3;
		baz.tre = 4;
		// console.log(baz);
		console.log(foo);;
	}
	baz();

	this.uno = 1;
	bar.due = 2;
	// console.log(this.uno);
	// console.log(bar.due);
};

foo();
// bar();