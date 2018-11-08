var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/weather', function(err, db) {
    if(err) throw err;

	var data = db.collection('data');
	var temp = "";
	var cursor = data.find({}).sort([['State', 1], ['Temperature', -1]]);
	cursor.each(function(err, doc) {
		if (err) throw err;
		if (doc == null) {
			return db.close();
		}
		
		if (doc.State !== temp) {
			console.log(doc.State);
			console.log(doc.Temperature);
			console.log(doc.month_high);
			doc.month_high = true;
			data.save(doc, function(err, saved) {
				if(err) throw err;
				console.dir("Successfully saved " + saved + " document!");
				// return db.close();
			});
			
		}
		temp = doc.State;
		
	});
	
	
	
	
});
