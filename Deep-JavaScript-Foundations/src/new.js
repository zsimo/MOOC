// see https://frontendmasters.com/courses/javascript-foundations/the-new-keyword/ video


/**
 * call a function with new determines 4 thing inside that function
 * 1. it create a new empty object
 * 2. link that object to another object this.__proto__ === foo.prototype
 * 3. pass that object in as to this context
 * 4. return that object if something else wasn't already returned
 */
function foo() {
    var this = {};

    // ...

    return this;
}



new foo();