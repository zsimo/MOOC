/**
 * Created by simonesacchi on 28/04/16.
 */
var checkVariationObserver = Rx.Observable.startAsync(
    function () {
        return $.getJSON("test-variations.json");
    })
    .map(function (item) {
        item.name = "variations_added";
        return item;
    })
    .delay(1000)
    ;

var updateObserver = Rx.Observable.startAsync(
    function () {
        return $.getJSON("test-update.json");
    })
    .map(function (item) {
        item.name = "update_added";
        return item;
    })
    .delay(500)
    ;


var observable = Rx.Observable
                    .concat(checkVariationObserver, updateObserver)
                    .map(function (item) {
                        if (item.test === "variations") {
                            item.name = "variations_added";
                        } else if (item.test === "update") {
                            item.name = "update_added";
                        } else {
                            item.name = "???";
                        }

                        return item;
                    })
    ;


observable.subscribe(
    function (itemEmitted) {
        console.log(itemEmitted);
    }
    , function (err) {
        console.log(err);
    }

    , function() {
        console.log("completed");
    }
);



var clicks = Rx.Observable.fromEvent(document.getElementById("button"), "click");
var timerObserver = Rx.Observable.interval(1000)
                    .takeUntil(clicks);
timerObserver.subscribe(
    function (item) {
        console.log(item);
    }
    ,function (err) {
        console.log(err);
    }
    ,function () {
        console.log("onCompleted by clicking");
    }
);