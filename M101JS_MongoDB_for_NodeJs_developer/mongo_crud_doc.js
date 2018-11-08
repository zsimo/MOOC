var MongoClient = require('mongodb').MongoClient;
var request = require('request');

MongoClient.connect('mongodb://localhost:27017/course', function(err, db) {
    if(err) throw err;

    var query = { 'grade' : 100 };

	// 1. findOne	
    // db.collection('grades').findOne(query, function(err, doc) {
        // if(err) throw err;

        // console.dir(doc);

        // db.close();
    // });
	
	
	// 2. find return a CURSOR, trasformato poi in un array
    // db.collection('grades').find(query).toArray(function(err, docs) {
        // if(err) throw err;

        // console.dir(docs);

        // db.close();
    // });

	
	// 3. manage a CURSOR, synchronous way	
	// creando un cursor, hai semplicemente creato un oggetto che descrive la query
	// ma non hai ancora eseguito nessuna query al database
	// var cursor = db.collection('grades').find(query);
	// // ora esegui la query e per ogni documento ritornato
	// // esegui la funzione di callback
	// cursor.each(function(err, doc) {
		// if(err) throw err;
		
		// // sei arrivato alla fine del cursor, chiudi
		// if (doc == null) {
			// return db.close();
		// }
		
		// console.dir(doc.student + " got a good grade!");
	//});		
	
	
	// 4 projection
	// voglio recuperare solo il campo 'student'
	// e esplicitamente non voglio vedere il campo '_id'
	// var projection = {'student': 1, '_id': 0};
	// db.collection('grades').find(query, projection).toArray(function(err, docs) {
		// if (err) throw err;
		
		// docs.forEach(function(doc) {
			// console.dir(doc);
			// console.dir(doc.student);
		// });
	
	// });
	
	
	// 5 $gt and $lt
	// var query = {'student': 'Joe', 'grade': {'$gt': 80, '$lt': 95}};
	// db.collection('grades').find(query).each(function(err, doc) {
		// if (err) throw err;
		// if (doc == null) {
			// return db.close();
		// }
		// console.dir(doc);				
	// });
	
	// 6 import from reddit
	// request('http://www.reddit.com/r/technology/.json', function (error, response, body) {
        // if (!error && response.statusCode == 200) {
			// // parsing a json string into native json object
            // var obj = JSON.parse(body);			
			// // map it's a javascipt native array function
			// // return an array
            // var stories = obj.data.children.map(function (story) { return story.data; });
            // db.collection('reddit').insert(stories, function (err, data) {
                    // if(err) throw err;
                    // console.dir(data);
                    // db.close();
            // });
        // }
    // });
	
	
	// 7 regex
	// var collection = db.collection('reddit');
	// var query = { 'title' : {'$regex': 'NSA'} };
	// var projection = {'title': 1, '_id': 0};
	// collection.find(query, projection).each(function(err, doc) {
		// if (err) throw err;
		// if (doc == null) {
			// return db.close();
		// }		
		// console.dir(doc.title);
	// });
	
	
	// 8 dot notation
	// this query doesn't return anithing because
	// reddit collections doesn't have this fields
	// var query = {'media.oembed.type': 'video'};
	// var projection = {'media.oembed.url': 1, '_id': 0};
	// db.collection('reddit').find(query, projection).each(function(err, doc) {
		// if (err) throw err;
		// if (doc == null) {
			// return db.close();
		// }		
		// console.dir(doc.title);
	// });	
	
	
	// 9. 1 sort, 2 skip, 3 limit (da usare in questo ordine)
	// i driver comunque ordinano l'esecuzione
	// var grades = db.collection('grades');
	// // FIND:
	// // 1. argomento: the selector
	// // 2. argomento: the projection
	// // 3. argomento: the options
	// var options = {'skip': 1, 
				   // 'limit': 4,
				   // 'sort': [['grade', 1], ['student', -1]]};
	// var cursor = grades.find({}, {}, options);
	// // primo parametro è la key da ordinare
	// // secondo parametro è la direzione dell'ordinamento
	// // sort riceve come parametro 2 argomenti, non un oggetto!
	// // cursor.sort('grade', 1);
	// // è un array e non un oggetto perchè l'ordine in questo caso conta
	// // cursor.sort([['grade', 1], ['student', -1]]);
	// // cursor.skip(1);
	// // cursor.limit(4);
	// cursor.each(function(err, doc) {
		// if (err) throw err;
		// if (doc == null) {
			// return db.close();
		// }
		// console.dir(doc);
	// });
	
	
	// 10. INSERT
	// // doc without '_id' (mongo will automatically generate an id object)
	// // var doc = {'student': 'Calvin', 'age': 6};
	// // doc with '_id' field
	// // var doc = {'_id': 'Calvin', 'age': 6};
	// // inserting more than one document:
	// var doc = [{'student': 'Calvin', 'age': 6},
			   // {'student': 'Susie', 'age': 7}];			   
	// db.collection('students').insert(doc, function(err, inserted) {
		// if(err) {
			// console.log(err.message);
			// return db.close();
		// }
		// // the doc is a javascript object, stringify to have a string rappresentation
		// console.dir("Succesfully inserted: " + JSON.stringify(inserted));
		// return db.close();
	// });
	
	
	// 11 UPDATE (replace an entire document)
	// var query = { 'assignment' : 'hw1' };
    // db.collection('grades').findOne(query, function(err, doc) {
		// if(err) throw err;
		// if(!doc) {
			// console.log('No documents for assignment ' + query.assignment + ' found!');
			// return db.close();
		// }
		// // modifico lo stesso doc che viene ritornato da findOne
		// query['_id'] = doc['_id'];
		// // e aggiungo la data
		// doc['date_returned'] = new Date();

		// db.collection('grades').update(query, doc, function(err, updated) {
			// if(err) throw err;
			// // updated is the number of docs updated 
			// console.dir("Successfully updated " + updated + " document!");

			// return db.close();
		// });
    // });
	
	
	// 12. UPDATE in place, change only a part of the document
	// var query = { 'assignment' : 'hw1' };
	// var operator = {'$set': {'date_returned': new Date()}};
	// db.collection('grades').update(query, operator, function(err, updated) {
		// if(err) throw err;
		// // updated is the number of docs updated 
		// console.dir("Successfully updated " + updated + " document!");
		// return db.close();
	// });
	
	
	// 13. UPDATE multi docs
	// var query = {};
	// var operator = {'$unset': {'date_returned': ''}};
	// var options = {'multi': true};
	// db.collection('grades').update(query, operator, options, function(err, updated) {
		// if(err) throw err;
		// // updated is the number of docs updated 
		// console.dir("Successfully updated " + updated + " document!");
		// return db.close();
	// });
	
	
	// 14. UPSERT
    // var query = { 'student' : 'Frank', 'assignment' : 'hw1' };
    // var operator = { 'student' : 'Frank', 'assignment' : 'hw1', 'grade' : 100 };
    // //var operator = { '$set' : { 'date_returned' : new Date(), 'grade' : 100 } };
    // var options = { 'upsert' : true };
    // db.collection('grades').update(query, operator, options, function(err, upserted) {
        // if(err) throw err;
        // console.dir("Successfully upserted " + upserted + " document!");
        // return db.close();
    // });	
	
	
	// 15. SAVE
    // var query = { 'assignment' : 'hw2' };
    // db.collection('grades').findOne(query, function(err, doc) {
        // if(err) throw err;
        // doc['date_returned'] = new Date();
		// // save: se il doc non esisteva, lo crea nuovo
		// // altrimenti, fa un upsert (controllando se '_id' è già presente)
        // db.collection('grades').save(doc, function(err, saved) {
            // if(err) throw err;
            // console.dir("Successfully saved " + saved + " document!");
            // return db.close();
        // });
    // });	
	
	
	// 16 FIND and MODIFY
	// fa una query nel db, trova un doc, lo modifica senza possibilità che 
	// altre operazioni sul db possano intervenire nel mentre, e lo ritorna
	// find, modify and return a doc atomically
    // var query = { 'name' : 'comments' };
    // var sort = [];
    // var operator = { '$inc' : { 'counter' : 1 } };
	// // ritorna il doc dopo la modifica (il documento nuovo)
    // var options = { 'new' : true };
	// // findAndModify takes 4 arguments
    // db.collection('counters').findAndModify(query, sort, operator, options, function(err, doc) {
        // if(err) throw err;
        // if (!doc) {
            // console.log("No counter found for comments.");
        // }
        // else {
            // console.log("Number of comments: " + doc.counter);
        // }
        // return db.close();
    // });
	
	
	// 17 REMOVE
    var query = { 'assignment' : 'hw3' };
    db.collection('grades').remove(query, function(err, removed) {
        if(err) throw err;

        console.dir("Successfully updated " + removed + " documents!");

        return db.close();
    });	
	
});
