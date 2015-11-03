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
// with out changing the orginal array
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


var pretty = function (obj) {
	return JSON.stringify(obj, null, 4);
};


module.exports = {
	concatAll : Array.prototype.concatAll,
	pretty : pretty
};