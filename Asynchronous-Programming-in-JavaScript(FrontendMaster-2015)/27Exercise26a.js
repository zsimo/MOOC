var utils = require('../libs/Nubilaria/utils.js');

var lists = [
		{
			"id": 5434364,
			"name": "New Releases"
		},
		{
			"id": 65456475,
			name: "Thrillers"
		}
	],
	videos = [
		{
			"listId": 5434364,
			"id": 65432445,
			"title": "The Chamber"
		},
		{
			"listId": 5434364,
			"id": 675465,
			"title": "Fracture"
		},
		{
			"listId": 65456475,
			"id": 70111470,
			"title": "Die Hard"
		},
		{
			"listId": 65456475,
			"id": 654356453,
			"title": "Bad Boys"
		}
	],
	boxarts = [
		{ videoId: 65432445, width: 130, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
		{ videoId: 65432445, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" },
		{ videoId: 675465, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
		{ videoId: 675465, width: 120, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
		{ videoId: 675465, width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
		{ videoId: 70111470, width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
		{ videoId: 70111470, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" },
		{ videoId: 654356453, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
		{ videoId: 654356453, width: 140, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" }
	],
	bookmarks = [
		{ videoId: 65432445, time: 32432 },
		{ videoId: 675465, time: 3534543 },
		{ videoId: 70111470, time: 645243 },
		{ videoId: 654356453, time: 984934 }
	];



var out = lists
			.map(function(list){

				return {
					"name" : list.name,
					"videos": videos
								.filter(function(video){
									return video.listId === list.id;
								})
								.concatMap(function(video) {
									var time = bookmarks.filter(function(book){
													return video.id === book.videoId;
												});

									var boxart = boxarts.filter(function(box){
															return box.videoId === video.id;
														})
														.reduceAsync(function(acc, curr){
															var currWidth = curr.width * curr.height;
															var accWidth = acc.width * acc.height;

															return currWidth > accWidth ? curr : acc;
														});

									return [].zip(time, boxart, function(time, boxart){
										return {
											"id":video.id,
											"title":video.title,
											"time" : time.time,
											"boxart":boxart.url
										};
									});

								})

				};
			});



console.log(utils.pretty(out, 4));


		