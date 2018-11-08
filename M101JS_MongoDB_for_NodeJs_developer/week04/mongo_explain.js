var MongoClient = require('mongodb').MongoClient;


MongoClient.connect('mongodb://127.0.0.1:27017/anna', function(err, db) {

            // if(err) throw err;
            if(err) {
               console.log(err.message);
               return db.close();
            }

            // collection.count(function(err, count) {
                // console.log("count: " + count);
            // });

            var collection = db.collection('alimenti');
			
			var query = {'alimento': 'Pepe bianco'};
			var projection = {};
			var hint = {'hint': {'$natural': 1}};
						//{},
						//{'hint': {'$natural': 1}};
			
            var cursor = collection.find(query, projection, hint);
			
			cursor.explain(function(err, explain_ouput) {
			
				if(err) throw err;
				
				console.log(explain_ouput);
				
				db.close();
			
			});




});