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

var searchButtonClicks = Rx.Observable.fromEvent(document.getElementById("search-button"), "click");


//searchButtonClicks.forEach(function() {
//    console.log("click");
//    document.getElementById("search-box").style.display = "block";
//});
// meglio doAction (restituisce un azione che verra eseguita quando con forEach)
// prima
var searchFormOpens = searchButtonClicks.doAction(function onNext() {
    console.log("click");
    document.getElementById("search-box").style.display = "block";
});


var searchResultSet =
    // dopo
    searchFormOpens.map(function() {
        var closeClicks = Rx.Observable.fromEvent(document.getElementById("close-button"), "click");
        var searchFormCloses = closeClicks.doAction(function () {
            document.getElementById("search-box").style.display = "none";
        });

        return keyPresses
                .throttle(20)
                .map(function (key) {
                    return textBox.value;
                })
                // video 43 // do not search twice for the same chars
                .distinctUntilChanged()
                // do not search for empty string
                .filter(function (search) {
                    return search.trim().length > 0;
                })
                .map(function (search) {
                    return getWikipdiaSearchResultsShort(search).retry(3); // retry in case of error
                })
                .switchLatest()
                .takeUntil(searchFormCloses)
                ;
    })
    .switchLatest();

// =============================================================================
// base implementation for autocomplete (to be used)
// ============================================================================
//searchResultSet = keyPresses
//    .throttle(20)
//    .map(function (key) {
//        return textBox.value;
//    })
//    // video 43 // do not search twice for the same chars
//    .distinctUntilChanged()
//    // do not search for empty string
//    .filter(function (search) {
//        return search.trim().length > 0;
//    })
//    .map(function (search) {
//        return getWikipdiaSearchResultsShort(search).retry(3); // retry in case of error
//    })
//    .switchLatest();


_onNext = function (result) {
    console.log(result);
    document.getElementById("text-area").value = result.join("\n");
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
