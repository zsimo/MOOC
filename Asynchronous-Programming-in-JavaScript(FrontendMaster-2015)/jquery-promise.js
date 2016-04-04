/**
 * Created by simonesacchi on 04/04/16.
 */


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
        operations.stop();
    }
};




$.when(
    $.Deferred(callbacks.beforeStart01),
    $.Deferred(callbacks.beforeStart02),
    $.Deferred(callbacks.beforeStart03)
)
.done(callbacks.done)
.fail(callbacks.fail);



