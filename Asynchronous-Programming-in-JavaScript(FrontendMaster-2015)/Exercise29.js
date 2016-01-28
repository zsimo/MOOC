var subscribeOnce01 = function(button) {
	var buttonClicks = Rx.Observable.fromEvent(button, "click");

	// In the case of an Observable, forEach returns a subscription object.
	var subscription =
		buttonClicks.
			forEach(function(clickEvent) {

				// Stop traversing the button clicks
				subscription.dispose();

				console.log("only one click");

			});
};
var subscribeOnce02 = function(button) {
	var buttonClicks = Rx.Observable.fromEvent(button, "click");

	// In the case of an Observable, forEach returns a subscription object.
	var subscription =
		buttonClicks.
			take(1).
			forEach(function(clickEvent) {

				console.log("only one click");

			});
};


var button = document.getElementById("button");
// subscribeOnce01(button);
subscribeOnce02(button);
	