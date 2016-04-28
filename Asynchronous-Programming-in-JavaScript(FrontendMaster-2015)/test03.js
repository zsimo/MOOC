/**
 * Created by simonesacchi on 28/04/16.
 */
var checkVariationObserver = Rx.Observable.startAsync(
    function () {
        return $.getJSON("test.json");
    })
    //.map(function (item) {
    //    item.name = "checkVariation";
    //    return item;
    //})
    .delay(2000);

var updateObserver = Rx.Observable.startAsync(
    function () {
        return $.getJSON("test.json");
    })
    //.map(function (item) {
    //    item.name = "update";
    //    return item;
    //})
    .delay(2000);


var observable = Rx.Observable
                    .concat(checkVariationObserver, updateObserver)
                    .map(function (item) {
                        item.name = "update";
                        return item;
                    });

observable.subscribe(
    function (itemEmitted) {
        console.log(itemEmitted);
    }
    , function (err) {
        console.log(err);
    }

    , function() {
        console.log("completed 01");
    }
);