
function Observable (forEach) {
    this._forEach = forEach;
}

Observable.prototype = {
    forEach : function (onNext, onError, onCompleted) {
        // pass 3 functions as parameters
        if (typeof onNext === "function") {
            return this._forEach({
                onNext      : onNext,
                onError     : onError || function () {

                },
                onCompleted : onCompleted || function () {

                }
            });
        }
        // pass observer object as parameter
        else {
            return this._forEach(onNext);
        }
    },

    map : function (projectionFunction) {
        var self = this;
        return new Observable(function forEach(observer) {
            self.forEach(
                function onNext (x) {
                    observer.onNext(projectionFunction(x));
                },
                function onError(e) {
                    observer.onError(e);
                },
                function onCompleted() {
                    observer.onCompleted();
                }
            );
        });
    },
    filter : function (testFunction) {
        var self = this;
        return new Observable(function forEach(observer) {
            self.forEach(
                function onNext (x) {
                    if (testFunction(x)) {
                        observer.onNext(x);
                    }
                },
                function onError(e) {
                    observer.onError(e);
                },
                function onCompleted() {
                    observer.onCompleted();
                }
            );
        });
    },
    take : function (num) {
        var self = this;
        // take observable
        return new Observable(function forEach(observer) {
            var counter = 0;
            var subscription = self.forEach(
                function onNext(v) {
                    observer.onNext(v);
                    counter ++;
                    if (counter === num) {
                        observer.onCompleted();
                        subscription.dispose();
                    }
                },
                function onError(e) {
                    observer.onError(e);
                },
                function onCompleted() {
                    observer.onCompleted();
                });

            return subscription;
        });
    }
};

Observable.fromEvent = function (dom, eventName) {
    return new Observable(function forEach(observer) {
        var handler = function (event) {
            observer.onNext(event);
        };
        dom.addEventListener(eventName, handler);

        // subscription object
        return {
            dispose : function () {
                dom.removeEventListener(eventName, handler);
            }
        };
    });
};

var buttonClicks = Observable.fromEvent(document.getElementById("search-button"), "click")
                            .map(function (event) {
                                return "uno";
                            });
buttonClicks.forEach(function (data) {
    console.log(data);
});


