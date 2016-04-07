// Observable = Collection + Time
		time
// ------------------------->
// {1.....2................3}

// come un foreach con tempi diversi 
// tra un item e un altro

// Importante per:
// - Events
// - Async Server Request
// - Animations


var mouseMove = Observable.fromEvent(element, "mousemove");
// An Observable is a lot like an Event.
// Like an Event, an Observable is a sequence of values that a data producer pushes to the consumer.
// However unlike an Event, an Observable can signal to a listener that it has completed,
// and will send no more data.

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


// Declarative create Event Streams that end on certain condition
// no more need to build "state machine"
