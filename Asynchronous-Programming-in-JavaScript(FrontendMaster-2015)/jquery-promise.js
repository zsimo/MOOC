/**
 * Created by simonesacchi on 04/04/16.
 */

// https://jsbin.com/vohiwexido/edit?js,console

// https://api.jquery.com/jquery.when/
// In the multiple-Deferreds case where one of the Deferreds is rejected,
// jQuery.when() immediately fires the failCallbacks for its master Deferred.
// Note that some of the Deferreds may still be unresolved at that point.
// The arguments passed to the failCallbacks match the signature of the failCallback for the Deferred that was rejected.
// If you need to perform additional processing for this case, such as canceling any unfinished Ajax requests,
// you can keep references to the underlying jqXHR objects in a closure and inspect/cancel them in the failCallback.

var operations = (function () {
    var actions = [];

    return {
        add : function (action) {
            if (actions.indexOf(action) === -1) {
                actions.push(action);
            }
        },
        stop : function () {
            actions.forEach(function (id) {
                clearTimeout(id);
            });
        }
    };
}());

var callbacks = {
    beforeStart01 : function (deferredObj) {
        console.log("start 01");

        operations.add(setTimeout(function () {
            console.log("finish 01");
            deferredObj.reject();
        }, 10));
    },
    beforeStart02 : function (deferredObj) {
        console.log("start 02");

        operations.add(setTimeout(function () {
            console.log("finish 02");
            deferredObj.resolve();
        }, 2000));
    },
    beforeStart03 : function (deferredObj) {
        console.log("start 03");

        operations.add(setTimeout(function () {
            console.log("finish 03");
            deferredObj.resolve();
        }, 3000));
    },
    then : function () {
        console.log("then");
    },
    done : function () {
        console.log("done");
    },
    fail : function (obj) {
        console.log("fail");
        //operations.stop();
    }
};


//[$.Deferred(callbacks.beforeStart01), $.Deferred(callbacks.beforeStart02), $.Deferred(callbacks.beforeStart03)]
//    .forEach(function (deferred) {
//        deferred.done(callbacks.done)
//                .fail(callbacks.fail);
//    });

$.when(
    $.Deferred(callbacks.beforeStart01),
    $.Deferred(callbacks.beforeStart02),
    $.Deferred(callbacks.beforeStart03)
)
//.then(callbacks.done, callbacks.fail);
.done(callbacks.done)
.fail(callbacks.fail);



