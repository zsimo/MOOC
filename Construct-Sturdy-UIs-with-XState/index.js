"use strict";

var {interpret} = require("xstate");
var fetchMachine = require("./machines/fetch");

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



// service = interpret(toggleMachine).onTransition(current =>
//     this.setState({ current })
// );
//
// this.service.start();
// this.service.stop();