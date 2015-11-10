var utils = require('../libs/Nubilaria/utils.js');

var lists = [
		{
			"id": 5434364,
			"name": "New Releases"
		},
		{
			"id": 65456475,
			"name": "Thrillers"
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
	];

var out = lists.map(function(list) {
			return {
				name: list.name,
				videos:
					videos.
						filter(function(video) {
							return video.listId === list.id;
						}).
						map(function(video) {
							return {id: video.id, title: video.title};
						})
			};
		});


console.log(utils.pretty(out));


