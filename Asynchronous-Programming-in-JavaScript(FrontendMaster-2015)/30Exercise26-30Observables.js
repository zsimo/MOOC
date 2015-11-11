var subscribe = function(button) {
	var handler = function(event) {
		button.removeEventListener("click", handler);

		alert("Button was clicked. Unsubscribing from event.");
	};

	button.addEventListener("click", handler);
};