/**
 * Created by simonesacchi on 13/09/2017.
 */

"use strict";

import xs from 'xstream';
import run from '@cycle/run';
import fromEvent from 'xstream/extra/fromEvent';

document.write('<div id="app"></div>');



document.addEventListener("DOMContentLoaded", function() {


    function main (sources) {

        var mouseover$ = sources.DOM.selectEvents("span", "mouseover");

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
                    return {
                        tagName: "H1",
                        children: [
                            {
                                tagName: "SPAN",
                                children: [
                                    "Second: " + i
                                ]
                            }
                        ]
                    };
                }),
            log: xs.periodic(3000)
                .fold(function (prev) {
                    return prev + 1;
                }, 0)
        };
    }



    function domDriver (obj$) {

        function createElement (obj) {
            var element = document.createElement(obj.tagName);
            obj.children.forEach(function (child) {
                if (typeof child === "object") {
                    element.appendChild(createElement(child));
                } else {
                    element.textContent = child;
                }
            });
//            element.textContent = obj.children[0];
            return element;
        }


        // EFFECTS (change external word)
        obj$.subscribe({
            next: function (obj) {
                var container = document.getElementById("app");
                container.textContent = "";
                var element = createElement(obj);
                container.append(element);
            }
        });


        var domSource = {
            selectEvents: function (tagName, eventType) {
                return fromEvent(document, eventType)
                    .filter(function (ev) {
                        return ev.target.tagName === tagName.toUpperCase();
                    });
            }
        };
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