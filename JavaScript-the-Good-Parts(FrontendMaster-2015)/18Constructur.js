function myPowerConstructor(x) {
    // 1. Make an object
    var that = otherMaker(x);
    // 2. Define some variables and functions
    var secret = f(x);
    // 3. Augment the object with privileged methods
    that.priv = function () {
        // work with secret
    };
    // 4. Return the object. 
    return that;
}


function gizmo(id) {
    return {
        id: id,
        toString: function () {
            return "gizmo " + this.id;
        }
    }; 
}
function hoozit(id) {
    var that = gizmo(id);
    that.test = function (testid) {
        return testid === this.id;
    };
    return that;
}