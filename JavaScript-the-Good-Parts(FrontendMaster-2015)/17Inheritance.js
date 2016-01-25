// ./node_modules/.bin/live-server --quiet --browser=chrome

// Pseudoclassical
function Gizmo(id) {
    this.id = id;
}
Gizmo.prototype.toString = function () {
    return "gizmo " + this.id;
};
  

var uno = function() {

	return {"w": 2};
};
console.log(Gizmo.prototype);
console.log(uno.prototype);


