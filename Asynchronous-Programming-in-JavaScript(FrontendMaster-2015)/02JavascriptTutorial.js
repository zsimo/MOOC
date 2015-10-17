console.log("================================");
console.log("Program with out loops");
console.log("");


// FOREACH: takes a function and apply that function 
// to every item in an array
console.log("FOREACH");
[1, 2, 3].forEach(function (par) {
	console.log(par);
});
console.log("");


// MAP: creates a NEW array with the results of calling a 
// provided function on every element in this array
// with out changing the orginal array
console.log("MAP");
var out = [1, 2, 3].map(function (par) {
	return par + 1;
});
console.log(out);
console.log("");


// FILTER: creates a NEW array with all elements 
// that pass the test implemented by the provided function.
console.log("FILTER");
var out = [1, 2, 3].filter(function (par) {
	return par > 1;
});
console.log(out);
console.log("");