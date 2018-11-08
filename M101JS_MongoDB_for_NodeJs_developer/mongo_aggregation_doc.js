// WEEK 5: AGGREGATION
// possibili stages della mongo pipeline
// $project (select, reshape) 1:1
// $match   (filter)        n:1
// $group   (aggregation)   n:1
// $sort    (sort)          1:1
// $skip    (skips)         n:1
// $limit   (limit)         n:1
// $unwind  (unjoined data) 1:n

use course

// GROUPING
// db.products.aggregate([
    // {$group:
        // {
            // _id: "$category",
			// create a new key
            // num_products: {$sum:1}
        // }
    // }
// ])


// COMPOUND GROUPING
// db.products.aggregate([
    // {$group:
        // {
            // _id: {
					// "manufacturer" : "$manufacturer",
					// "category"    :  "$category"
				// },
            // num_products: {$sum:1}
        // }
    // }
// ])

// Expression utilizzabili in $group stage
// $sum
// $agv
// $min
// $max
// $push      (array, add un elemento ad un array)
// $addToSet  (array, ad element se non c'è già)
// $first     (prima devi fare $sort)
// $last      (prima devi fare $sort)


// $sum
// db.products.aggregate([
    // {$group:
        // {
            // _id: {
					// "maker" : "$manufacturer"
				// },
            // sum_prices: {$sum: "$price"}
        // }
    // }
// ])


// db.zips.aggregate([
	// {$group:
		// {
			// _id        : "$state",
			// population : {$sum: "$pop"}
		// }
	// }
// ])

// oppure, con un custom id e calcolando la media
// db.zips.aggregate([
	// {$group:
		// {
			// _id        : {stato : "$state"},
			// avg_population : {$avg: "$pop"}
		// }
	// }
// ])

// db.zips.aggregate([
	// {$group:
		// {
			// _id        : "$state",
			// average_pop : {$avg: "$pop"}
		// }
	// }
// ])

// addToSet: aggiunge in un array solo se il valore è unico
// non è già nell'array
// db.zips.aggregate([
	// {$group:
		// {
			// _id        : "$city",
			// postal_codes : {$addToSet: "$_id"}
		// }
	// }
// ])

// db.zips.aggregate([
	// {$group:
		// {
			// _id : "$state",
			// pop : {$max: "$pop"}
		// }
	// }
// ])


// PROJECTION
// simple function
// $toLower
// $toUpper
// $add
// $multiply
// db.zips.aggregate([
	// {$project:
		// {
			// // non voglio il campo id
			// _id : 0,
			// invece, per le altre chiavi non vengono 
			// riportate se non menzionate
			// city: "$city",
			// details : 
				// {
					// state: {$toLower: "$state"},
					// multiply_pop: {$multiply: "$pop"}
				// }
		// }
	// },
	// {$limit: 5}
// ])

// db.zips.aggregate([
	// {$project:
		// {
			// _id   : 0,
			// city  : {$toLower: "$city"},
			// // 1 se vuoi riportare una chiave
			// // esattamente col suo nome
			// pop   : 1,
		    // state : 1,
			// zip   : "$_id"
		// }
	// },
	// {$limit: 10}
// ])


// MATCH
// db.zips.aggregate([
	// {$match:
		// {
			// state : "NY"
		// }
	// },
	// {$group:
		// {
			// _id        : "$city",
			// population : {$sum: "$pop"},
			// zip_codes  : {$addToSet: "$_id"}
		// }
	// },
	// {$project:
		// {	
			// _id        : 0,
			// city       : "$_id",
			// population : 1,
			// zip_codes  : 1
		// }
	// }
// ])

// db.zips.aggregate([
	// {$match:
		// {	
			// pop:{$gt: 100000}
		// }
	// }
// ])


// SORT
// db.zips.aggregate([
	// {$match:
		// {
			// state : "NY"
		// }
	// },
	// {$group:
		// {
			// _id        : "$city",
			// population : {$sum: "$pop"},
			// zip_codes  : {$addToSet: "$_id"}
		// }
	// },
	// {$project:
		// {	
			// _id        : 0,
			// city       : "$_id",
			// population : 1
		// }
	// },
	// {$sort: 
		// {	//descending
			// population : 1 // qui non server il $, bisogno passare il nome della key
		// }
	// }
// ])


// db.zips.aggregate([
	// {$sort:
		// {	//descending
			// state : 1,
			// city  : 1
		// }
	// }
// ])

// SKIP and LIMIT
// db.zips.aggregate([
	// {$match:
		// {
			// state : "NY"
		// }
	// },
	// {$group:
		// {
			// _id        : "$city",
			// population : {$sum: "$pop"},
			// zip_codes  : {$addToSet: "$_id"}
		// }
	// },
	// {$project:
		// {	
			// _id        : 0,
			// city       : "$_id",
			// population : 1
		// }
	// },
	// {$sort:
		// {	//descending
			// population : 1
		// }
	// },
	// {$skip  : 10},
	// {$limit : 5}
// ])

// find the largest city in every state
// db.zips.aggregate([
	// {$group:
		// {
			// _id : {state: "$state", city: "$city"},
			// population : {$sum: "$pop"}
			
		// }
	
	// }
	// , {$sort : {"_id.state" : 1, "population": -1}}
	// , {$group:
		// {
			// _id  : "$_id.state",
			// city : {$first: "$_id.city"},
			// population : {$first: "$population"}
		// }
	
	// }
	// , {$sort: {_id: 1}}
// ])


// find the tags most used in the blog db
// use blog
// db.posts.aggregate([
	  // {$unwind: "$tags"}
	// , {$group:
		// {
			// _id   : "$tags",
			// count : {$sum: 1}
		// }
	  // } 
	// , {$sort  : {count: -1}} // sort by popularity
	// , {$limit : 10}
	// , {$project: // change the name of _id to be tag
		// {	
			// _id   : 0, // non vglio vedere l'id
			// tag   : "$_id",
			// count : 1
		// }
	// }
// ])


// DOUBLE UNWIND
// db.inventory.aggregate([
	  // {$unwind: "$sizes"}
	// , {$unwind: "$colors"}	  
	// , {$group:
		// {
			// _id   : {size : '$sizes', color : '$colors'},
			// count : {$sum: 1}
		// }
	  // }
	// // , {$group: // ricostituisco il size array dell'inizio
		// // {
			// // _id : {name : '$_id.name', colors : '$colors'},
			// // sizes : {$push : "$_id.size"}
		// // }
	// // }
// ])


// _id = null to pass all the documents
// use blog
// db.posts.aggregate([
	// {$group:
		// {
			// _id   : null,
			// count : {$sum: 1}
		// }
	  // } 
// ])

// db.zips.findOne()






