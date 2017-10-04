/**
 * Created by simonesacchi on 13/09/2017.
 */

"use strict";

import xs from 'xstream';
import run from '@cycle/run';
import {h1, span, makeDOMDriver} from '@cycle/dom';
import fromEvent from 'xstream/extra/fromEvent';


document.write('<div id="app"></div>');



document.addEventListener("DOMContentLoaded", function() {


    function main (sources) {

        var mouseover$ = sources.DOM.select("span").events("mouseover");

        // LOGIC
        return {
            DOM: mouseover$
                .startWith(null)
                .map(function () {
                    return xs.periodic(1000)
                        .fold(function (prev) {
                            return prev + 1;
                        }, 0);
                })
                .flatten()
                .map(function (i) {
                    return h1({style: {background: "red"}}, [span(["second: " + i])]);

                }),
            log: xs.periodic(3000)
                .fold(function (prev) {
                    return prev + 1;
                }, 0)
        };
    }



    function logDriver (msg$) {
        // EFFECTS (change external word)
        msg$.subscribe({
            next: function (str) {
                console.log(str);
            }
        });
    }



    run(main, {
        DOM: makeDOMDriver("#app"),
        log: logDriver
    });





});