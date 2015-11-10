var utils = require('../libs/Nubilaria/utils.js');


var boxarts = [
		{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
		{ width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
		{ width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
		{ width: 425, height:150, url:"http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
	];

// You should return an array containing only the URL of the largest box art. Remember that reduce always
// returns an array with one item.
var out = boxarts.
	reduceAsync(function(acc, cur) {

		var accSize = acc.width * acc.height;
		var curSize = cur.width * cur.height;

		if (curSize > accSize) {
			return cur;
		}
		else {
			return acc;
		}

	})
	.map(function(item){
		return item.url;
	});


var videos = [
	{
		"id": 65432445,
		"title": "The Chamber"
	},
	{
		"id": 675465,
		"title": "Fracture"
	},
	{
		"id": 70111470,
		"title": "Die Hard"
	},
	{
		"id": 654356453,
		"title": "Bad Boys"
	}
];

var out2 = videos.reduceAsync(function(accumulatedMap, video){
	// Object.create() makes a fast copy of the accumulatedMap by
	// creating a new object and setting the accumulatedMap to be the
	// new object's prototype.
	// Initially the new object is empty and has no members of its own,
	// except a pointer to the object on which it was based. If an
	// attempt to find a member on the new object fails, the new object
	// silently attempts to find the member on its prototype. This
	// process continues recursively, with each object checking its
	// prototype until the member is found or we reach the first object
	// we created.
	// If we set a member value on the new object, it is stored
	// directly on that object, leaving the prototype unchanged.
	// Object.create() is perfect for functional programming because it
	// makes creating a new object with a different member value almost
	// as cheap as changing the member on the original object!
	// var copyOfAccumulatedMap = Object.create(accumulatedMap);

	// DO NOT change the value passed as parameter
	var clone = JSON.parse(JSON.stringify(accumulatedMap));
	// var clone = Object.create(accumulatedMap);
	clone[video.id] = video.title;
	return clone;

}, {});



console.log(out2);
console.log("============================================");



		