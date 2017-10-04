
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

        // return a stream of input events
        var inputEv$ = sources.DOM.select(".field").events("input");
        var name$ = inputEv$.map(function (ev) {
            return ev.target.value;
        }).startWith("");

        // starting returning object of synks
        // each sink stream from each DOM driver
        return {
            DOM:
                name$.map(function (name) {
                        return div([
                            label(["Name"]),
                            input(".field", {attrs: {type: "text"}}),
                            hr(),
                            h1("Hello " + name)
                        ])
                })
        };

    }

    var drivers = {
        DOM: makeDOMDriver("#app")
    };

    run(main, drivers);
});