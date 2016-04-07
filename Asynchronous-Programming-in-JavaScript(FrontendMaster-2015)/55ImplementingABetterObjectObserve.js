/**
 * Created by simonesacchi on 07/04/16.
 */


var observable = function (obj) {
    return Rx.Observable.create(function forEach(observer) {
        var handler = function (e) {
            observer.onNext(e);
        };
        Object.observe(obj, handler);

        return function dispose () {
            Object.unobserve(obj, handler);
        };

    });
};

var person = {name : "simone"};
var onNext = function () {
  console.log("change");
};

var observer = observable(person)
    .take(1)
    .subscribe(onNext);

person.name = "antonio";