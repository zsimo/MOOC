var subscribe = function(button) {
	var handler = function(event) {
		button.removeEventListener("click", handler);

		alert("Button was clicked. Unsubscribing from event.");
	};

	button.addEventListener("click", handler);
};


var subscribe = function(button) {
	var buttonClicks = Observable.fromEvent(button, "click");

	// In the case of an Observable, forEach returns a subscription object.
	var subscription =
		buttonClicks.
			forEach(function(clickEvent) {
				alert("Button was clicked. Stopping Traversal.");

				// Stop traversing the button clicks
				subscription.dispose();
			});
}
