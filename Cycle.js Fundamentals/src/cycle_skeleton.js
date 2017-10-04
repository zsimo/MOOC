
/**
 * Created by simonesacchi on 13/09/2017.
 */

"use strict";

import xs from 'xstream';
import run from '@cycle/run';
import {div, label, input, hr, h1, makeDOMDriver} from '@cycle/dom';
import fromEvent from 'xstream/extra/fromEvent';


document.write('<div id="app"></div>');

document.addEventListener("DOMContentLoaded", function() {

    function main (sources) {

        // starting returning object of synks
        // each sink stream from each DOM driver
        return {
            DOM: xs.of(
                div([
                    label(["Name"]),
                    input(".field", {attrs: {type: "text"}}),
                    hr(),
                    h1("Hello!")
                ])
            )
        };

    }

    var drivers = {
        DOM: makeDOMDriver("#app")
    };

    run(main, drivers);

});