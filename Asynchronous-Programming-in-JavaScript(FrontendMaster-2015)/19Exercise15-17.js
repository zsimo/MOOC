var utils = require('../libs/Nubilaria/utils.js');


var ratings = [2,3,1,4,5];

// You should return an array containing only the largest rating. Remember that reduce always
// returns an array with one item.
var out = ratings
		.reduceAsync(function(x, y) {
			return x + y;
		});

console.log(out);


