var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/school', function(err, db) {
    if(err) throw err;

    var query = {};

    db.collection('students').find(query).toArray(function(err, docs) {
        if(err) throw err;

        // console.dir(docs);
		docs.forEach(function(doc) {
			var temp_score = doc.scores;
			
			// console.dir(temp_score);			
			
			// console.dir(temp_score.sort());
			var index = 0;
			var min = 1000;
			
			for (var i = 0; i < temp_score.length; i ++) {
				if (temp_score[i].type === 'homework' && temp_score[i].score <= min) {
					min = temp_score[i].score;
					index = i;
				}
			}						
			// console.dir(temp_score[index].score);
			temp_score.splice(index, 1);
			
			db.collection('students').save(doc, function(err, saved) {
				if(err) throw err;
				console.dir("Successfully saved " + saved + " document!");
				return db.close();
			});
			
		});
		
		// checking aggregation
		// db.students.aggregate({'$unwind':'$scores'},{'$group':{'_id':'$_id', 'average':{$avg:'$scores.score'}}}, {'$sort':{'average':-1}}, {'$limit':1})

        db.close();
    });
	
	
});


