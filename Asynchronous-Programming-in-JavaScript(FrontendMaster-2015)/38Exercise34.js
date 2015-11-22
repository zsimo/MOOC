// var rx = require("rx");
// var ajax = require("jquery","ajax");


var Observable = Rx.Observable;
var textbox = document.getElementById("textbox");


var searchWikiedia = function (term){
	var url = "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search="+ encodeURIComponent(term) +"&callback=?";
	$.getJSON(url, function(data){
		console.log(data[1]);
	})
};
searchWikiedia("pippo");

var keypresses = Observable.fromEvent(textbox, "keypress");
keypresses.forEach(function(e){
	console.log(e);
});
