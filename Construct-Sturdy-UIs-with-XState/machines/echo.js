const { Machine, send } = require('xstate')

// every time the speck event occur, it send the echo event
const echoMachine = Machine({
    id: 'echo',
    initial: 'listening',
    strict: true,
    states: {
        listening: {
            on: {
                SPEAK: {
                    actions: send('ECHO'),
                },
                ECHO: {
                    actions: () => {
                        console.log('echo, echo')
                    },
                },
            },
        },
    },
});

module.exports = echoMachine;