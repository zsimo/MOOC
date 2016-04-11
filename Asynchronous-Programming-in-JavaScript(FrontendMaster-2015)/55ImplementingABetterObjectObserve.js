/**
 * Created by simonesacchi on 07/04/16.
 */



var firstName = document.getElementById("firstName");
firstName.value = "sss";
var age = document.getElementById("age");


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

var person = {firstName : "simone", age:29};
var onNext = function (changes) {
    console.log(firstName);
    firstName.value = person.firstName;
};


var observer = observable(person)
    .take(1)
    .subscribe(onNext);

person.firstName = "antonio";