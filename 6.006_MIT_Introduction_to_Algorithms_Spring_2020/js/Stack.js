/**
 * @author simo
 */

Node = function() {
    var item, // string
        next; // Node
};

(function (global) {

    "use strict";

    // last in - first out
    var Stack = (function () {

        var
            START_ROW = 0,
            item,
            next,

            first = null,


            push = function (item) {

                var oldFirst = first;
                first = new Node();
                first.item = item;
                first.next = oldFirst;

            },

            pop = function (item) {

                item = first.item;
                first = first.next;
                return item;

            },




            // \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
            // CONSTRUCTOR
            // /////////////////////////////////////////////////
            automaticInit = (function () {

                console.log("stack automatic init");

            }()),

            last = "last";


        // define public interface
        return {
            push : push,
            pop : pop,
            last : last
        };

    });

    global.Stack = Stack;

}(this));
