const { assign, Machine } = require('xstate');

// infinite machine
const changeColorMachine = Machine(
    {
        id: 'multiColoredBulb',
        initial: 'ready',
        context: {
            color: '#fff',
        },
        states: {
            ready: {
                on: {
                    // event that do not do any transition, just change the context
                    CHANGE_COLOR: {
                        actions: ['changeColor'],
                    },
                },
            }
        }
    },
    {
        actions: {
            changeColor: assign({
                color: (context, event) => event.color,
            }),
        },
    }
);

module.exports = changeColorMachine;