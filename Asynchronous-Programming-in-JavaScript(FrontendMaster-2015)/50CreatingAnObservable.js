
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
    }
};

Observable.fromEvent = function (dom, eventName) {
    return new Obervable(function forEach(observer) {
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


new Observable(function forEach(observer) {

});