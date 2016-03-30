var textBox = document.getElementsByTagName("input")[0];
var observable;
var keyPresses = Rx.Observable.fromEvent(textBox, "keypress");
var _onNext = function (event) {
    console.log("onNext");
    return event.keyChar;
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
var getWikipdiaSearchResultsShort = function(term) {
	return Rx.Observable.create(
        function forEach(observer) {
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
        }
    );
};


//observable = getWikipdiaSearchResultsShort("pippo");
//observable.forEach(function(results) {
//    console.log(results);
//});




var searchResultSet = keyPresses
				.throttle(20)
				.map(function (key) {
                    return textBox.value;
                })
                // video 43
                .distinctUntilChanged()
                .map(function (search) {
                    return getWikipdiaSearchResultsShort(search).retry(3); // retry in case of error
                })
                .switchLatest();


_onNext = function (result) {
    console.log(result);
};
_onError = function (error) {
    console.log(error);
};
searchResultSet.forEach(_onNext, _onError);

//keyPresses.map(function (data) {
//	return "press";
//}).forEach(function(data){
//	console.log(data);
//});
