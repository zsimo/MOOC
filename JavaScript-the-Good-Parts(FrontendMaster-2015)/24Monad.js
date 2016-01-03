function MONAD() {
    return function unit(value) {
        var monad = Object.create(null);
        monad.bind = function (func) {
            return func(value);
        };
        return monad;
    };
}

function log (msg) {
    console.log(msg);
}

var identity = MONAD();
var monad = identity("Hello world.");
monad.bind(log);