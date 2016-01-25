function MONAD() {
    var prototype = Object.create(null);
    // unit is like a constructors
    function unit(value) {
        // monad is an object
        var monad = Object.create(prototype);
        monad.bind = function (func, args) {
            // args is not exatly an array..
            return func.apply(undefined,
                [value].concat(Array.prototype.slice.apply(args || [])));
        };
        return monad;
    }

    unit.method = function (name, func) {
        prototype[name] = func;
        return unit;
    };

    return unit;
}

function log (msg) {
    console.log(msg);
}
function log2 (msg) {
    console.log(msg + " " + 2);
}

var unit = MONAD();
var monad = unit("Hello world");
monad.bind(log);