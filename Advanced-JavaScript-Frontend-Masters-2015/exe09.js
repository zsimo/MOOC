// ---------------------------------
// IIFE (immediately-invoked-function-expression)
// http://benalman.com/news/2010/11/immediately-invoked-function-expression/
// ---------------------------------


// Either of the following two patterns can be used to immediately invoke
// a function expression, utilizing the function's execution context to
// create "privacy."
(function () {
	console.log("Crockford recommends this one");
}());

(function () {
	console.log("another way");
})();


// If you don't care about the return value, or the possibility of making
// your code slightly harder to read, you can save a byte by just prefixing
// the function with a unary operator.

!function(){ /* code */ }();


console.log(this.q);
q = "a";
