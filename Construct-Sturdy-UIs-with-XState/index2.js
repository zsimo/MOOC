"use strict";

var paymentMachine = require("./machines/payment");




// const checkState = paymentMachine.transition('method.cash', 'SWITCH_CHECK');
const checkState = paymentMachine.transition(paymentMachine.initialState, 'SWITCH_CHECK');
const reviewState = paymentMachine.transition(checkState, 'NEXT');
const previousState = paymentMachine.transition(reviewState, 'PREVIOUS');
const nextState = paymentMachine.transition(reviewState, 'NEXT');
const nextState2 = paymentMachine.transition(reviewState, 'NEXT');


console.log(checkState.value);
console.log(reviewState.value);
console.log(previousState.value);
console.log(nextState.value);
console.log(nextState2.value);