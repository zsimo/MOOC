"use strict";

var Rx = require("rxjs");

var click$ = new Rx.Subject();


document.write("click!");

document.addEventListener("click", function (ev) {
    click$.next(ev);
});

click$.subscribe(function (ev) {
    console.log(ev);
});