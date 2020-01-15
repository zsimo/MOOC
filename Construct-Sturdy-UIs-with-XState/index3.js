var { interpret } = require('xstate');

const toggleMachine  = require("./machines/toggle");

// console.log(toggleMachine.initialState);

// 1.
// Machine instance with internal state
//An interpreted, running instance of a statechart is called a service
const toggleService = interpret(toggleMachine)
    .onTransition(function (state) {
        // console.log(state.value);
        return state;
    })
    .start();
var newState = toggleService.send('TOGGLE');
newState = toggleService.send({
    type: 'TOGGLE',
    value: "ciao"
});
// same syntax as:
// toggleService.send('TOGGLE', { "value": value });


// 2.
var oldState = 'inactive';
// var newState = toggleMachine.transition(oldState, 'TOGGLE');



console.log(newState.value); // finite state
console.log(newState.context); // extended state
console.log(newState.actions); // side effects

console.log(newState.matches("active"));
console.log(newState.matches("inactive"));