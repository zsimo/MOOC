// https://frontendmasters.com/courses/organizing-javascript/#v=905ut58g8k&p=0.0833
// Nested Scope

console.log("-----------------------");

function makeAdder(x) {
	// parameter 'x' is an inner variable

	// inner function 'add' uses 'x', so
	// it has a 'closure' over it
	function add(y) {
		return y + x;
	}

	return add;

}

var adder = makeAdder(5);

console.log(adder(5));

