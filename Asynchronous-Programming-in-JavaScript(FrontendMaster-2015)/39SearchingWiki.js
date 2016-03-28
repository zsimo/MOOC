var textBox = document.getElementsByTagName("input");
var observable;
var keyPresses = Rx.Observable.fromEvent(textBox, "keypress");
var _onNext = function (event) {
	console.log("onNext");
	// only once
	observable.dispose();
};
var _onError = function () {
	console.log("onError");
};
var _onCompleted = function () {
	console.log("onCompleted");
};
// observable = keyPresses.forEach(_onNext, _onError, _onCompleted);


// var searchWikiedia = function (term){
// 	console.log(encodeURIComponent(term));
// 	var url = "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search="+ encodeURIComponent(term) +"&callback=?";
// 	$.getJSON(url, function(data){
// 		console.log(data[1]);
// 	})
// };
// searchWikiedia("pippo");

// // create an observable from $.JSON
var getWikipdiaSearchResults = function(term) {
	return Rx.Observable.create(function forEach(observer) {
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
};

// getWikipdiaSearchResults("pippo").forEach(function(results) {
// 	console.log(results );
// });

//observable = keyPresses
//				.throttle(20)
//				.map(_onNext, _onError, _onCompleted);

keyPresses.map(function (data) {
	return "uno";
}).forEach(function(data){
	console.log(data);
});

// observable.forEach(function (data) {
// 	console.log(data);
// });