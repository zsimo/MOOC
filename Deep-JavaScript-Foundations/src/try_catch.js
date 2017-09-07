/**
 * Created by Simone.Sacchi on 07/09/2017.
 */

"use strict";


module.exports = function () {
    try {
        id;
        //id.length;
    } catch(err) {
        // err variable exists only in the catch scope
        // instead, id is available at the global scope
        var id = 3;
        var id2 = 4;
    }

    console.log(id2); // undefined
};
