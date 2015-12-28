/**
 * Created by Simone.Sacchi on 21/12/2015.
 */
// the new operator do this:
function new (func, args) {
   var that = Object.create(func.prototype);
   var result = func.apply(that, args);

   return (typeof result === 'object' && result) || that;
}

console.log("Ok");