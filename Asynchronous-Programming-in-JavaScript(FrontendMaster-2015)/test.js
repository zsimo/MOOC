/**
 * Created by Simone.Sacchi on 05/04/2016.
 */
var source01 = Rx.Observable.create(function (observer) {
    var id = setTimeout(function () {
        observer.onNext("next01");
    }, 100);

    console.log("start01");


    return function () {
        console.log("dispose");
        clearTimeout(id);
    };
});

var source02 = Rx.Observable.create(function (observer) {
    var id = setTimeout(function () {
        observer.onNext("next02");
    }, 1000);

    console.log("start02");


    return function () {
        console.log("dispose");
        clearTimeout(id);
    };
});


var source = Rx.Observable.zip(source01, source02);
//var source = source01.And(source02);

var disposable = source.forEach(function (x) {
    console.log(x);
});