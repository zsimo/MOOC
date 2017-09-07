/**
 * Created by simonesacchi on 07/09/2017.
 */


"use strict";

var foo = (function () {

    var o = {
      bar: "bar"
    };

    return {

        bar: function () {
            console.log(o.bar);
        }
    };

})();

// Usage:
foo.bar();
