function MONAD() {
    // unit is like a constructors
    return function unit(value) {
        // monad is an object
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

var unit = MONAD();
var monad = unit("Hello world");
monad.bind(log);