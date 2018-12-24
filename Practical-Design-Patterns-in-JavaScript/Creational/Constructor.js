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

    this.complete = function () {
      this.completed = true;
    };

    this.save = function () {
        console.log("saving: " + this.name);
    }


};

// Protor


var task1 = new Task("dddd01");
var task2 = new Task("dddd02");
var task3 = new Task("dddd03");
var task4 = new Task("dddd04");