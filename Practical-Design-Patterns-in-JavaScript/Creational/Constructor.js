// create a new Object with their own object scope


// call the Task function with the "new" keyword in front of it
var Task = function (name) {
    // the "new" keyword does 4 things:
    // 1. creates a brand new object
    // 2. links to an object prototype
    // 3. binds "this" to the new object scope
    // 4. implicitly returns this



    this.name = name;
    this.completed = false;


};

Task.prototype.complete = function () {
    this.completed = true;
};

Task.prototype.save = function () {
    console.log("saving: " + this.name);
}




module.exports = Task;