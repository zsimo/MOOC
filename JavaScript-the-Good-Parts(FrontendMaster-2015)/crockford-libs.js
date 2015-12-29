
// the new operator do this:
function new (func, args) {
   var that = Object.create(func.prototype);
   var result = func.apply(that, args);

   return (typeof result === 'object' && result) || that;
}


if (typeof String.prototype.trim !=='function') {
	String.prototype.trim = function () {
		return this.replace(/^\s*(\S*(\s+\S+)*)\s*$/, "$1");
	};
}


// var template = '<table border="{border}">' +
// 				'<tr><th>Last</th><td>{last}</td></tr>' +
// 				'<tr><th>First</th><td>{first}</td></tr>' +
// 				'</table>';
// var data = {
// 	first: "Carl",
// 	last: "Hollywood",
// 	border: 2
// };
// mydiv.innerHTML = template.supplant(data);
if (typeof String.prototype.supplant !== 'function') {
	String.prototype.supplant = function (o) {
		return this.replace(/{([^{}]*)}/g, function (a, b) {
			var r = o[b];
			return typeof r === 'string' ? r : a;
		});
	};
}

if (typeof Array.isArray !== 'function') {
	Array.isArray = function (value) {
		return Object.prototype.toString.apply(value) ==='[object Array]';
	};
}

myArray = ['a', 'b', 'c', 'd'];
// Deleting Elements
delete myArray[1];
// Removes the element, but leaves a hole in the numbering
myArray.splice(1, 1);
// Removes the element and renumbers all the following elements.
// 
// 
// type         typeof
// object    => 'object'
// function  => 'function'
// array     => 'object'
// number    => 'number'
// string    => 'string'
// boolean   =>'boolean'
// null      => 'object'
// undefined => 'undefined'

// Falsy values (tutto il resto e' true)
// false
// null
// undefined
// "" (empty string)
//  0
// NaN
// 
// Evils of type coercion
// '' == '0' // false
// 0 == '' // true
// 0 == '0' // true
// false == 'false' // false
// false == '0' // true
// false == undefined // false
// false == null // false
// null == undefined // true
// ' \t\r\n ' == 0 // true