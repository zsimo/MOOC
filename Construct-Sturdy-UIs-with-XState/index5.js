const { interpret } = require('xstate');
var changeColorMachine = require("./machines/color");
const service = interpret(changeColorMachine).start();

var next = service.send({ type: 'CHANGE_COLOR', color: '#F00' }) // updates color in context to red
console.log(next.context);