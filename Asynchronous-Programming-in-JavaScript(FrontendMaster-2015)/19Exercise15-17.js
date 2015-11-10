var utils = require('../libs/Nubilaria/utils.js');


var ratings = [200,3,28,4,5];

// You should return an array containing only the largest rating. Remember that reduce always
// returns an array with one item.
var out = ratings
		.reduceAsync(function(accumulator, current) {
			// if (current > accumulator) {
			// 	return current;
			// }
			// else {
			// 	return accumulator;
			// }
			

			return accumulator > current ? accumulator : current;
			
		});

console.log(out);

console.log("--------------------------------------");



