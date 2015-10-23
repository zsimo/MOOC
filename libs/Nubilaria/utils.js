Array.prototype.concatAll = function() {
	var result = [];
	this.forEach(function(items){
		items.forEach(function(item){
			result.push(item);
		});
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