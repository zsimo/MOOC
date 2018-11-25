function foo() {
    console.log(this); // undefined in strict mode, otherwise window
}
foo();