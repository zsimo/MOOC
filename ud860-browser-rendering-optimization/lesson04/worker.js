this.onmessage = function (e) {

	var data = e.data.message;
	var pippo = e.data.pippo;
	console.log(data);
	console.log(pippo);


	this.postMessage("message from worker");

};
