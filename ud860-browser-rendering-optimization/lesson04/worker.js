this.onmessage = function (e) {

	var data = e.data;
	console.log(data);

	this.postMessage("message from worker");

};
