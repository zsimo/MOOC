/**
 * Created by simonesacchi on 13/09/2017.
 */

"use strict";

import xs from 'xstream';
import run from '@cycle/run';
import {label, input, div, h2, makeDOMDriver} from '@cycle/dom';
import {makeHTTPDriver} from '@cycle/http';
import fromEvent from 'xstream/extra/fromEvent';


document.write('<div id="app"></div>');

document.addEventListener("DOMContentLoaded", function() {

    // DOM READ: detect slide event
    // recalculate BMI w / (h * h)
    // DOM WRITE : display BMI

    function main (sources) {

        var changeWeight = sources.DOM.select(".weight").events("input")
            .map(function (event) {
                return event.target.value;
            });
        var changeHeight = sources.DOM.select(".height").events("input")
            .map(function (event) {
                return event.target.value;
            });
        var state$ = xs.combine(changeWeight.startWith("80"), changeHeight.startWith("180"))
            .map(function ([weight, height]) {
                var heightMeters = height * 0.01;
                var bmi = Math.round(weight / (heightMeters * heightMeters));

                return {
                    bmi: bmi,
                    weight: weight,
                    height: height
                };
            });


        var vdom$ = state$.map(function (state) {
            return div([
                div([
                    label("weight: "+ state.weight +" kg"),
                    input(".weight", {attrs: {type: "range", min: 40, max: 150, value: state.weigh}})
                ]),
                div([
                    label("height: "+ state.height +" cm"),
                    input(".height", {attrs: {type: "range", min: 100, max: 250, value: state.height}})
                ]),
                h2("BMI is " + state.bmi)
            ])
        });

        // starting returning object of synks
        // each sink stream from each DOM driver
        return {
            DOM: vdom$
        };

    }

    var drivers = {
        DOM: makeDOMDriver("#app")
    };

    run(main, drivers);

});