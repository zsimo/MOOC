
"use strict";



// a tree is:
// - empty, or
// - a node with:
//    - a key, and
//    - a list of child trees



// a node has:
// - a key
// - children: list of child nodes
// - parent (optional)



var functions = {


};

var node = {
    left: undefined,
    right: undefined,
    key: "dosadmdsaosa"
};


module.exports = function () {
    var obj = Object.create(functions);

    obj.queue = [];

    return obj;
};