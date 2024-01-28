/**
 * @author simo
 */

Node = function() {
    var item, // string
        next; // Node
};

(function (global) {

    "use strict";

    // una coda: esce quello che è in coda da piu tempo
    // last in - first out
    var Queue = (function () {

        var
            first,
            last,

            isEmpty = function () {
                return first == null;
            },

            enqueque = function (item) {

                var oldLast = last;
                last = new Node();
                last.item = item;
                last.next = null;

                if (isEmpty()) {
                    first = last;
                } else {
                    oldLast.next = last;
                }

            },

            dequeque = function () {

                var item = first.item;
                first = first.next;
                if (isEmpty()) {
                    last = null;
                }
                return item;

            },


            // \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
            // CONSTRUCTOR
            // /////////////////////////////////////////////////
            automaticInit = (function () {

                console.log("queue automatic init");

            }()),

            last = "last";


        // define public interface
        return {
            enqueque : enqueque,
            pop : pop,
            isEmpty : isEmpty,
            last : last
        };

    });

    global.Queue = Queue;

}(this));
