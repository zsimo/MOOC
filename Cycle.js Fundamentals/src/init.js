/**
 * Created by simonesacchi on 13/09/2017.
 */

"use strict";

import xs from 'xstream';
import run from '@cycle/run';
import {button, p, label, div, makeDOMDriver} from '@cycle/dom';
import {makeHTTPDriver} from '@cycle/http';
import fromEvent from 'xstream/extra/fromEvent';


document.write('<div id="app"></div>');

document.addEventListener("DOMContentLoaded", function() {

    function main (sources) {

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
        DOM: makeDOMDriver("#app"),
        HTTP: makeHTTPDriver()
    };

    run(main, drivers);

});