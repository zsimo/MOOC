var { Machine, interpret, assign } = require('xstate');

// Stateless machine definition
// machine.transition(...) is a pure function used by the interpreter.
const toggleMachine = Machine({
    id: 'toggle',
    initial: 'inactive',
    context: {
        rating: ""
    },
    states: {
        inactive: { on: { TOGGLE: 'active' } },
        active: {
            on: {
                TOGGLE: {
                    target: 'inactive',
                    actions: assign({
                        rating: function (ctx, event) {
                            return event.value;
                        }
                    })
                }
            }
        }
    }
});

// 1.
// Machine instance with internal state
const toggleService = interpret(toggleMachine)
    .onTransition(function (state) {
        // console.log(state.value);
        return state;
    })
    .start();
var a = toggleService.send('TOGGLE');
a = toggleService.send({
    type: 'TOGGLE',
    value: "ciao"
});



// 2.
// var a = toggleMachine.transition('inactive', 'TOGGLE');



console.log(a.value); // finite state
console.log(a.context); // extended state
console.log(a.actions); // side effects

console.log(a.matches("active"));
console.log(a.matches("inactive"));