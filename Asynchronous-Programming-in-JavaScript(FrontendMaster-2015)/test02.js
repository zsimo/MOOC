/**
 * Created by simonesacchi on 28/04/16.
 */
// An observer (reactor) subscribes to an Observable.
// An Observable emits items or sends notifications to its observers by calling the observers' methods.

// 1. Define a method that does something useful with the return value from the asynchronous call;
//      this method is part of the observer.
// 2. Define the asynchronous call itself as an Observable.
// 3. Attach the observer to that Observable by subscribing it (this also initiates the actions of the Observable).
// 4. Go on with your business; whenever the call returns, the observer’s method will begin to operate on its return
//      value or values — the items emitted by the Observable.

// EMISSIONS     --> onNext
// NOTIFICATIONS --> onCompleted, onError


var observable01 = Rx.Observable.just("uno");
//observable01.subscribe(
//    function (itemEmitted) {
//        console.log(itemEmitted);
//    }
//    , function (err) {
//        console.log(err);
//    }
//
//    , function() {
//        console.log("completed 01");
//    }
//);


//var observable02 = Rx.Observable.start(function () {
//    return "sync";
//});
//observable02.subscribe(
//    function (itemEmitted) {
//        console.log(itemEmitted);
//    }
//    , function (err) {
//        console.log(err);
//    }
//
//    , function() {
//        console.log("completed 02");
//    }
//);

//$.getJSON("test.json").done(function (data) {
//    console.log(data);
//});

var observable03 = Rx.Observable.startAsync(
    function () {
        return $.getJSON("test.json");
    })
    .map(function (item) {
        item.test_new = "json2";
        return item;
    });
observable03.subscribe(
    function (itemEmitted) {
        console.log(itemEmitted);
    }
    , function (err) {
        console.log(err);
    }

    , function() {
        console.log("completed 03");
    }
);