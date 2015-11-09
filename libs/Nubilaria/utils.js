Array.prototype.concatAll = function() {
	var result = [];
	this.forEach(function(items){
		items.forEach(function(item){
			result.push(item);
		});
	});
	return result;
};

// MAP: creates a NEW array with the results of calling a 
// provided function on every element in this array
// with out changing the orginal arrayz
Array.prototype.map = Array.prototype.map || function(projectionFunction) {
	var result = [];
	this.forEach(function(item){
		result.push(projectionFunction(item));
	});
	return result;
};

// FILTER: creates a NEW array with all elements 
// that pass the test implemented by the provided function.
Array.prototype.filter = Array.prototype.filter || function(predicateFunction) {
	var result = [];
	this.forEach(function(item){
		if (predicateFunction(item)) {
			result.push(item);	
		}
	});
	return result;
};

// JSON.stringify([ [1,2,3], [4,5,6], [7,8,9] ].concatAll()) === "[1,2,3,4,5,6,7,8,9]"
// [1,2,3].concatAll(); // throws an error because this is a one-dimensional array
Array.prototype.concatAll = Array.prototype.concatAll || function() {
	var results = [];
	this.forEach(function(subArray) {
		subArray.forEach(function(item){
			results.push(item);
		});
	});

	return results;
};


// replace any map follow by concatAll
Array.prototype.concatMap = function(projectionFunctionThatReturnsArray) {
	return this
		.map(function(item){
			return projectionFunctionThatReturnsArray(item);
		})
		// apply the concatAll function to flatten the two-dimensional array
		.concatAll();
};


// usato quando serve considerare 2 elementi per volta di un array
// return array od one value
Array.prototype.reduceAsync = function(){

};


var pretty = function (obj) {
	return JSON.stringify(obj, null, 4);
};


module.exports = {
	concatAll : Array.prototype.concatAll,
	pretty : pretty
};