/**
 * Created by simonesacchi on 13/09/2017.
 */

"use strict";

import xs from 'xstream';
import run from '@cycle/run';
import {button, h1, h4, a, div, makeDOMDriver} from '@cycle/dom';
import {makeHTTPDriver} from '@cycle/http';
import fromEvent from 'xstream/extra/fromEvent';


document.write('<div id="app"></div>');

document.addEventListener("DOMContentLoaded", function() {

    // READ DOM   : button click
    // WRITE HTTP : request sent
    // READ HTTP  : response received
    // WRITE DOM  : data displayed

    function main (sources) {
        var click$ = sources.DOM.select(".get-first").events("click");

        var request$ = click$.map(function () {
            return {
                url: "https://jsonplaceholder.typicode.com/users",
                method: "GET",
                category: "user-data"
            };
        });

        var response$ = sources.HTTP
            .select("user-data")
            .flatten()
            .map(function (response) {
                return response.body[0];
            });

        var vdom$ = response$
            .startWith({})
            .map(function (response) {
            return div([
                button('.get-first', 'Get first user'),
                div(".user-details", [
                    h1(".user-name", response.name),
                    h4(".user-email", response.email),
                    a(".user-website", {attrs: {href: response.website}}, response.website)
                ])
            ]);
        });

        // starting returning object of synks
        // each sink stream from each DOM driver
        return {
            DOM: vdom$,
            HTTP: request$
        };

    }

    var drivers = {
        DOM: makeDOMDriver("#app"),
        HTTP: makeHTTPDriver()
    };

    run(main, drivers);

});