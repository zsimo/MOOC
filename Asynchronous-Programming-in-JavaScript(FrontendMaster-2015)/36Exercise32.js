var subscribe = function(sprite, spriteContainer) {

	var spriteMouseDowns = Rx.Observable.fromEvent(sprite, "mousedown"),
		spriteContainerMouseMoves = Rx.Observable.fromEvent(spriteContainer, "mousemove"),
		spriteContainerMouseUps = Rx.Observable.fromEvent(spriteContainer, "mouseup"),
		spriteMouseDrags =
			// For every mouse down event on the sprite...
			spriteMouseDowns.
				concatMap(function(contactPoint) {
					// ...retrieve all the mouse move events on the sprite container...
					return spriteContainerMouseMoves.
						// ...until a mouse up event occurs.
						takeUntil(spriteContainerMouseUps).
						map(function(movePoint) {
							console.log(contactPoint.offsetX);
							return {
								pageX: movePoint.pageX - contactPoint.offsetX,
								pageY: movePoint.pageY - contactPoint.offsetY
							};
						});
				});

	// For each mouse drag event, move the sprite to the absolute page position.
	spriteMouseDrags.forEach(function(dragPoint) {
		sprite.style.left = dragPoint.pageX+ "px";
		sprite.style.top = dragPoint.pageY + "px";
	});
};

subscribe(document.getElementById("button"), document.getElementById("container"));