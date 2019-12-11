"use strict";

var {fetchMachine, interpret} = require("./machine");

// var [sendToFetchMachine] = fetcMachine.withConfig({
//     actions: {
//         fetchData: (context, event) => {
//             console.log('green');
//         }
//     }
// });

var fetchService = interpret(fetchMachine.withConfig({
    actions: {
        fetchData: (context, event) => {
            fetchService.send({
                type: "RESOLVE",
                results: "ciao"
            });
        }
    }
}))
    .onTransition(state => console.log(state.value))
    .start();

fetchService = fetchService.send({
    type: "FETCH"
});

console.log(fetchService);
if (fetchService.matches("successful")) {
    console.log("ok");
    console.log(fetchService.context.results);
}