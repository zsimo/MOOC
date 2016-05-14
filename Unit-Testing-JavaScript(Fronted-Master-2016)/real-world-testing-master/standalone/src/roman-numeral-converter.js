window.ConvertsNumerals = function() {

    "use strict";

    var VALUES = {
        "I" : 1,
        "II" : 2,
        "III" : 3,
        "IV" :4
    };

    return {

        fromRoman : function (input) {
            return VALUES[input];
        }
    };

};