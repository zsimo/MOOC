"use strict";

var { Machine, assign } = require('xstate');

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



module.exports = toggleMachine;