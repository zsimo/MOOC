// observable is an object with a forEach method that can take 3 callbacks:
/*
- onNext(x)
- onError(e)
- onCompleted()
*/

// registrarsi ad un Observable e' come registrarsi ad un evento ma con 3 callbacks


function timeout (time) {
	return {
		"forEach" : function(observer){
			var handler = setTimeout(function(){
				observer.onNext(undefined);
				observer.onCompleted();
			}, time);

			return {
				"dispose" : function(){
					clearTimeout(handler);
				}
			};
		}
	};
}


var ops = timeout(5000).foreach(function(){
	ops.dispose();
});

function fromEvent(dom, eventName) {
	return {
		"forEach" : function(observer){

			var handler = function (event) {
				observer.onNext(event);
				// an event does not completes
				// observer.onCompleted();
			};

			dom.addEventListener(eventName, handler);


			return {
				"dispose" : function(){
					dom.removeEventListener(eventName, handler);
				}
			};
		}
	};
}