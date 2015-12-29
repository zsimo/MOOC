// function expression
var test = function test02 () {

};



// function statement
function test () {

}




// Closure
// The context of an inner function includes the scope of the outer function.
// An inner function enjoys that context even after the parent functions have returned.

var digit_name = (function () {
    var names = ['zero', 'one', 'two',
        'three', 'four', 'five', 'six',
        'seven', 'eight', 'nine'];
    return function (n) {
        return names[n];
    };
}());
alert(digit_name(3));



var statusHolder = (function () {
   var status, subscribers = [];
   return {
       getStatus: function () {
           return status;
        },
        addListener: function (func) {
                    if (typeof func !== 'function') {
                        throw new TypeError('Expected a function.');
        }
            subscribers.push(func);
        },
        setStatus: function (newStatus) {
            var func, i, n = subscribers.length;
            status = newStatus;
            for (i = 0; i < n; i += 1) {
                func = subscribers[i];
                try {
                    func(newStatus);
                } catch (ignore) {};
            } 
        }
    }; 
}());
