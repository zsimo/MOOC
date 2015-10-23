Array.prototype.concatAll = function() {
	var result = [];
	this.forEach(function(items){
		items.forEach(function(item){
			result.push(item);
		});
	});
	return result;
};



module.exports.utils = {
	concatAll : Array.prototype.concatAll
};