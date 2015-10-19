// Observable = Collection + Time
		time
------------------------->
{1.....2................3}

// come un foreach con tempi diversi 
// tra un item e un altro

// Importante per:
// - Events
// - Async Server Request
// - Animations


var mouseMove = Observable.fromEvent(element, "mousemove");
// Observable come un DOM event
// che accetta 3 callbacks:
// - onNext()
// - onError()
// - onCompleted()
var subscription = mouseMove.forEach(
	function(event){
		console.log(event);
	},
	function(error){
		console.log(error);
	},
	function(){
		console.log("done");
	}
);

