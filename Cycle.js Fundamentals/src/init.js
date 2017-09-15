/**
 * Created by simonesacchi on 13/09/2017.
 */

import xs from 'xstream';
import run from '@cycle/run';
import fromEvent from 'xstream/extra/fromEvent';

document.write('<div id="app"></div>');



document.addEventListener("DOMContentLoaded", function() {


    function main (sources) {

        var click$ = sources.DOM;

        // LOGIC
        return {
            DOM: click$
                .startWith(null)
                .map(function () {
                    return xs.periodic(1000)
                        .fold(function (prev) {
                            return prev + 1;
                    }, 0);
                })
                .flatten()
                .map(function (i) {
                    return "Second: " + i;
                }),
            log: xs.periodic(3000)
                .fold(function (prev) {
                    return prev + 1;
                }, 0)
        };
    }

    function domDriver (text$) {
        // EFFECTS (change external word)
        text$.subscribe({
            next: function (str) {
                var elem = document.getElementById("app");
                elem.textContent = str;
            }
        });


        var domSource = fromEvent(document, "click");
        return domSource;
    }

    function logDriver (msg$) {
        // EFFECTS (change external word)
        msg$.subscribe({
            next: function (str) {
                console.log(str);
            }
        });
    }

    //function run (mainFn, drivers) {
    //
    //    // source = input (read) effect
    //    // sink = output (write) effect
    //
    //    var fakeSinks = {};
    //    Object.keys(drivers).forEach(function (key) {
    //        fakeSinks[key] = xs.create();
    //    });
    //
    //    var sources = {};
    //    Object.keys(drivers).forEach(function (key) {
    //        sources[key] = drivers[key](fakeSinks[key]);
    //    });
    //
    //    var sinks = mainFn(sources);
    //
    //    Object.keys(sinks).forEach(function (key) {
    //        fakeSinks[key].imitate(sinks[key]);
    //    });
    //
    //
    //}


    run(main, {
        DOM: domDriver,
        log: logDriver
    });





});