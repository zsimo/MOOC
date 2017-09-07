/**
 * Created by Simone.Sacchi on 07/09/2017.
 */

"use strict";

var fun01 = function func01Itself() {


    console.log(fun01);
    console.log(func01Itself);

    console.log(fun01 === func01Itself); // true


    // the outer scooped fun01 variable can be re-assigned
    fun01 = 3;

    // func01Itself is read only
    // func01Itself = 3; Uncaught TypeError: Assignment to constant variable.

};


module.exports = fun01;
