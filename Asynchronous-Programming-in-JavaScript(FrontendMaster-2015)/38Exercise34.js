// var rx = require("rx");
// var ajax = require("jquery","ajax");


var Observable = Rx.Observable;
var textbox = document.getElementById("textbox");
// var results = document.getElementById("results");


var searchWikiedia = function (term){
	var url = "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search="+ encodeURIComponent(term) +"&callback=?";
	$.getJSON(url, function(data){
		console.log(data[1]);
	})
};
// searchWikiedia("pippo");


// create an observable from $.JSON
var getWikipdiaSearchResults = function(term) {
		// short form
		return Observable.create(function forEach(observer) {
			var cancelled = false;
			var url = "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search="+ encodeURIComponent(term) +"&callback=?";
				$.getJSON(url, function(data){
					if (!cancelled) {
						observer.onNext(data[1]);
						// only one call
						observer.onCompleted();
					}
				});

				return function dispose() {
					cancelled = true;
				};
			});
	// long form
	// return {
	// 	forEach : function(observer) {
	// 		var cancelled = false;
	// 		var url = "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search="+ encodeURIComponent(term) +"&callback=?";
	// 		$.getJSON(url, function(data){
	// 			if (!cancelled) {
	// 				observer.onNext(data[1]);
	// 				// only one call
	// 				observer.onCompleted();
	// 			} 
	// 			return {
	// 				dispose : function() {
	// 					cancelled = true;
	// 				}
	// 			}
	// 		})
	// 	}
	// };
};

// getWikipdiaSearchResults("pippo").forEach(function(results){
// 	console.log(results);
// });

var keypresses = Observable.fromEvent(textbox, "keypress");
var searchResultsSet = keypresses
						.throttle(20)
						.map(function(e) {
							return textbox.value;
						})
						.distinctUntilChanged()
						.filter(function(search){
							return search.trim().length > 0;
						})
						.map(function(search) {
							// return [String.fromCharCode(e.charCode)];
							return getWikipdiaSearchResults(search);
						})
						.switchLatest();

// searchResultsSet.forEach(function(resultSet){
// 							// console.log(result);
// 							// results.value = JSON.stringify(resultSet);
// 							results.value = resultSet;
// 						},
// 						function(error){
// 							console.log(error);
// 						});

var keydowObservable = Observable.fromEvent(textbox, "keydown");
keydowObservable.forEach(function (e) {
	console.log(e.keyCode);
	console.log(e);
});



