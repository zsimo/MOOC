var { interpret } = require('xstate');

const echoMachine  = require("./machines/echo");

const echoService = interpret(echoMachine).start();


var newState = echoService.send('SPEAK');
// newState = echoService.send({
//     type: 'TOGGLE',
//     value: "ciao"
// });
// // same syntax as:
// // echoService.send('TOGGLE', { "value": value });
//
//
// // 2.
// var oldState = 'inactive';
// // var newState = toggleMachine.transition(oldState, 'TOGGLE');
//
//
//
// console.log(newState.value); // finite state
// console.log(newState.context); // extended state
// console.log(newState.actions); // side effects
//
// console.log(newState.matches("active"));
// console.log(newState.matches("inactive"));