
### Undefined variable
```
Declared variable, belonging to a particular scope, that at the moment has no any other value (any other from 'undefined')
```
```javascript
// example
var pippo;
```

### Undeclared variable
```
Never formally declared variable in any scope we have access to
```
```javascript
// example
pippo; // ReferenceError
```

### Lexical scope
```
It's fixed, static, predictible, compile time event, author time event
```

### Function declaration
```javascript
// the word 'function' is the first thing in the statement
// the name identifier 'pippo' is added to the enclosing scope
function pippo() {
    // 
}
```

### (named) Function expression
```javascript
// the word 'function' is NOT the first thing in the statement
// the name identifier pippo is added to the scope of the function 'pluto' (the identifier id read only, it's constant)
// 1. it's allow to access to the function inside of itself
// 2. more debuggable stake traces
var pluto = function pippo() {
    // 
};
```

### (anonymous) Function expression
```javascript
var pluto = function () {
    // 
};
```

### Closure
```
When a function remembers its lexical scope even when the function is executed outside that lexical scope
```

### IIFE (Immediately Invoked Function Expression)
```javascript
// is a function expression because the word 'function' is NOT the first thing in the statement
(function () {
    // 
}())
```


### try / catch statement create a block scope
```javascript
var foo;
try {
    foo.lenght;
} catch (err) {
    console.log(err); // TypeError: Cannot read property 'lenght' of undefined
}
console.log(err); // ReferenceError: err is not defined
```