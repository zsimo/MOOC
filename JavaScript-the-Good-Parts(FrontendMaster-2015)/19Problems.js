
function add(x, y) {
    return x + y;
}
function mul(x, y) {
    return x * y;
}

// Write a function that takes an argument and returns a function that returns that argument
var identify = function (x) {
    return function () {
        return x;
    };
};

console.log(identify(3));
console.log("=======================================");


// Write a function that adds from two invocations
var addf = function (x) {
    return function (y) {
        return x + y;
    };

};
console.log(addf(3)(4));
console.log("=======================================");


// Write a function that takes a binary function, and makes it callable with two invocations.
var applyf = function (binary) {
    return function (x) {
        return function (y) {
            return binary(x, y);
        };
    };
};
var addf = applyf(add);
console.log(addf(3)(4));
console.log("=======================================");

// Write a function that takes a function and an argument, and returns a function that can supply a second argument.
var curry = function (func, first) {
    return function (second) {
        return func(first, second);
    };
}; 
add3 = curry(add, 3);
console.log(add3(4));
console.log("=======================================");

// Write a function that allows another function to only be called once.
var once = function (func) {
    return function () {
        var f = func;
        func = null;
        // apply(this, arguments) means call the new function with exactly the same bindings as the orginal
        return f.apply(this, arguments);
    };
};
var add_once = once(add);
console.log(add_once(3, 4));    // 7
// add_once(3, 4);    // throw!
console.log("=======================================");



// Write a factory function that returns two functions that implement an up/down counter.
var counterf = function (num) {
    return {
        inc : function () {
            return num ++;
        },
        dec : function () {
            return num --;
        }
    };
};
var counter = counterf(10);
console.log(counter.inc());    // 11
console.log(counter.dec());    // 10
console.log("=======================================");