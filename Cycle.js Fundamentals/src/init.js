/**
 * Created by simonesacchi on 13/09/2017.
 */

import xs from 'xstream';
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
            log: xs.periodic(2000)
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

    function run (mainFn, drivers) {
        var fakeDOMSink = xs.create();
        var domSource = domDriver(fakeDOMSink);
        var sinks = mainFn({
            DOM: domSource
        });
        fakeDOMSink.imitate(sinks.DOM);

        //Object.keys(drivers).forEach(function (key) {
        //    if (sinks[key]) {
        //        drivers[key](sinks[key]);
        //    }
        //});

    }


    run(main, {
        DOM: domDriver,
        log: logDriver
    });





});