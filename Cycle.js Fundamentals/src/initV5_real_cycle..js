
/**
 * Created by simonesacchi on 13/09/2017.
 */

"use strict";

import xs from 'xstream';
import run from '@cycle/run';
import {button, p, label, div, makeDOMDriver} from '@cycle/dom';
import fromEvent from 'xstream/extra/fromEvent';

document.write('<div id="app"></div>');

document.addEventListener("DOMContentLoaded", function() {

    function main (sources) {

        var decClick$ = sources.DOM.select(".dec").events("click");
        var incClick$ = sources.DOM.select(".inc").events("click");

        var dec$ = decClick$.map(function () {
            return -1;
        });
        var inc$ = incClick$.map(function () {
            return +1;
        });

        var delta$ = xs.merge(dec$, inc$);

        // fold maintains the state, starting from zero
        var number$ = delta$.fold(function (prev, current) {
            return prev + current;
        }, 0);


        // starting returning object of synks
        // each sink stream from each DOM driver
        return {
            DOM:
                number$.map(function (number) {
                    return div([
                        button(".dec", "Decrement"),
                        button(".inc", "Increment"),
                        p([
                            label("Count: " + number)
                        ])
                    ])
                })
        };

    }

    var drivers = {
        DOM: makeDOMDriver("#app")
    };

    run(main, drivers);

});