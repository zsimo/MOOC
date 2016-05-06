/**
 * Created by simonesacchi on 28/04/16.
 */
var checkVariationObserver = window.Rx.Observable.fromPromise($.getJSON("test-variations.json"))
    .map(function (item) {
        console.log(item);
        //item.name = "variations_added";
        return item;
    })
    .delay(100)
;



//var a =




var updateObserver = Rx.Observable.startAsync(
    function () {
        return $.getJSON("test-update.json");
    })
    .map(function (item) {
        console.log(item);
        //item.name = "update_added";
        return item;
    })
    .delay(1000)
    //.take(1)
    ;


var observable = Rx.Observable
                    .concat(checkVariationObserver, updateObserver)
                    .map(function (item) {
                        //if (item.test === "variations") {
                        //    item.name = "variations_added";
                        //} else if (item.test === "update") {
                        //    item.name = "update_added";
                        //} else {
                        //    item.name = "???";
                        //}

                        return item;
                    })
    .pausable()
    //.takeUntil(abortObservbl);
    ;


observable.subscribe(
    function (itemEmitted) {
        console.log("onNext: " , itemEmitted);
        if (itemEmitted.variations === "ok") {
            //observable.pause();
            //modal();

        }

    }
    , function (err) {
        console.log(err);
    }

    , function() {
        console.log("completed");
    }
);
observable.resume();


var clicks = Rx.Observable.fromEvent(document.getElementById("button"), "click");
var obseerver = clicks.subscribe(
    function (item) {
        observable.resume();
        obseerver.dispose();
    }
    ,function (err) {
        console.log(err);
    }
    ,function () {
        console.log("onCompleted by clicking");
    }
);
//var timerObserver = Rx.Observable.interval(1000)
//                    .takeUntil(clicks);
//timerObserver.subscribe(
//    function (item) {
//        console.log(item);
//    }
//    ,function (err) {
//        console.log(err);
//    }
//    ,function () {
//        console.log("onCompleted by clicking");
//    }
//);