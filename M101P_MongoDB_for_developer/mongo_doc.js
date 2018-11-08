
- Rich documents
- Pre Join / Embedded data
- No Mongo Joins
- No constraints (no key constraints)
- Atomic operations
- No declared schema

CRUD:
- Create -> Insert
- Reade -> Find
- Update -> Update
- Delete -> Removes


db.<nome_collection>.insert({nome: "simone", id: "zsimo})

db.<nome_collection>.find()

db.<nome_collection>.find().pretty()

var cursor = db.<nome_collection>.findOne()

while (cursor.hasNext) {
    printjson(cursor.next());
}

foo.nome = "sacchi"

db.<nome_collection>.save(foo)

// senza parametri, stampa il codice javascript
// della funzione save()
db.<nome_collection>.save

show.collections

// in una cartella con una cartella dump
mongoresotore

// QUERY
// il primo parametro e' l'oggetto che si vuole cercare
// il secondo indica quali parti si vuole cercare
db.collection1.findOne({name: "simone"}, {name: true, _id: false})

// query operators
// cerco score > 95 e <= 98
db.scores.find({score: {$gt: 95, $lte: 98}})
// cerco tutti gli oggetti che hanno un campo 'profession'
db.people.find({profession: {$exists: true}})
// cerco tutti gli oggetti che hanno un campo 'name'
// di tipo string
db.people.find({name: {$type: 2}})

// cerco tutti gli oggetti con il campo 'name'
// che contiene la lettera 'a'
db.people.find({name: {$regex: 'a'}})
// cerco tutti gli oggetti con il campo 'name'
// che finisce con 'e'
db.people.find({name: {$regex: 'e$'}})
// cerco tutti gli oggetti con il campo 'name'
// che inizia con 'a'
db.people.find({name: {$regex: '^a'}})


// UPDATE operation
db.people.update({name: "simone"}, {name: "giovanni", eta: 35});
// modifica un campo (o aggiunge se prima non c'era)
db.people.update({name: "simone"}, {$set: {eta: 35}});
// incrementa di uno il campo specificato
db.people.update({name: "simone"}, {$inc: {eta: 1}});
// rimuove il campo specificato
db.people.update({name: "simone"}, {$unset: {eta: 35}});
// aggiorna il campo eta dell'elemento simone
// se questo elemento già c'è, se no lo crea nuovo
db.people.update({name: "simone"}, {$set: {eta: 35}}, {upset: true});
// aggiunge un campo a tutti i documenti della collezione
db.people.update({}, {$set: {eta: 35}}, {multi: true});


// ERROR
db.runCommand({getLastError: 1})

db.scores.remove({score: {$lt: 60}})


// multikeys
db.students.ensureIndex({'teachers': 1})
// cerca nella students collections tutti gli
// studenti che hanno nell'array fi teachers
// i valori 1 e 3
db.students.find({'teachers': {'$all': [1, 3]}})


// INDEX
// crea un indice in ordine ascendente
db.students.ensureIndex({student_id: 1})
// cerca se ci sono degli indici
db.system.indexes.find()
// descrizione degli indici piu' dettagliata
db.students.getIndexes()
// elimina un indice
db.students.dropIndex({student_id: 1})


// info sul database
db.students.find().explain()
db.students.stats()
db.students.totalIndexSie()

//
db.places.find({location:{$near:[74, 140]}}).limit(3)

// far partire mongod.exe con log su tutte le query (for debugging)
mongod.exe --profile2
// (profile1 solo query lente)



// aggregation
db.product.aggregate([
	// si pass un Array
	// ogni elemento dell'array può essere un diverso
	// stage delle pipeline (aggregation pipeline) di mongodb
	// sullo STAGE il documento viene modificato in base ai parametri della query
	// (si possono usare diversi filtri)
	
		// stages in the aggregation pipeline::
		//$project -> select, reshape (1:1)
		//$match -> filter (n:1)
		//$group -> aggregation (n:1)
		//$sort (1:1)
		//$skip (n:1)
		//$limit (n:1)
		//$unwind (1:n)
	
	
	// $group operator
	{$group:
		{
			// group by manufacter
			// conto per ogni manufacter (produttore) quanti prodotti ha
			// conto solo i valori unici (se ci sono doppi, conto solo il primo)
			_id: '$manufacter',
			// create a new key, e l'aumentiamo di 1 ad ogni prodotto trovato
			// in pratica, per ogni manufacter conta quanti prodotti ci sono
			num_product: {$sum: 1}
		}
	
	}
])

db.posts.aggregate([{$group:{_id: "$comments.author"}])

// agregation, compound grouping
db.product.aggregate([

	{$group:
		{
			_id: {
				// cerco elementi unici sia per manufacturer
				// sia category
				"manufacturer": "$manufacturer",
				"category": "$category"
			},

			num_product: {$sum: 1}
		}
	
	}
])

// aggregation expressions:
//$sum
//$avg
//$min
//$max
//$push (into an array)
//$addtoset (into an array, solo se il valore è unico)
//$first (per usare $first e $last, devi fare prima $sort)
//$last


db.product.aggregate([

	{$group:
		{
			_id: {
				// cerco elementi unici sia per manufacturer
				// sia category
				"makerr": "$manufacturer"				
			},
			// fa la somma dei prezzi
			sum_prices: {$sum: "$price"}
		}
	
	}
])


// calcola la media
db.product.aggregate([

	{$group:
		{
			_id: {
				// cerco elementi unici sia per manufacturer
				// sia category
				"category": "$category"				
			},
			// fa la somma dei prezzi
			avg_price: {$avg: "$price"}
		}
	
	}
])

// addToSte
db.products.aggregate([
	{
		"$group":
			{
				_id: "$manufacturer", 
				
				// costruisce un array di elementi unici
				"categories": 
						{
							"$addToSet":"$category"
						}
			}
	}	
])


// double grouping
db.grades.aggregate([
    {'$group':{_id:{class_id:"$class_id", student_id:"$student_id"}, 'average':{"$avg":"$score"}}},-
	
    {'$group':{_id:"$_id.class_id", 'average':{"$avg":"$average"}}}])


//$project
// - remove keys
// - add new keys
// - reshape keys
// - use simple functions
// 		- $toUpper
// 		- $toLower
// 		- $add
// 		- $multiply

db.products.aggregate([
    {$project:
     {
	 //non voglio il campi _id
	 _id:0,
	 // oppure se volgio un campo esattamente com'era prima:
	 // "nome_campo": 1
	 'maker': {$toLower:"$manufacturer"},
	 'details': {'category': "$category",
		     'price' : {"$multiply":["$price",10]}
		    },
	 'item':'$name'
     }
    }
])


//$match -> performe a filter
db.zips.aggregate([
    {$match:	
     {
	 // il nome state deve essere lo stesso di una delle chiavi
	 state:"NY"
     }
    },
    {$group:
     {
	 _id: "$city",
	 population: {$sum:"$pop"},
	 zip_codes: {$addToSet: "$_id"}
     }
    }
])


//$sort
db.zips.aggregate([
    {$match:
     {
	 state:"NY"
     }
    },
    {$group:
     {
	 _id: "$city",
	 population: {$sum:"$pop"},
     }
    },
    {$project:
     {
	 _id: 0,
	 city: "$_id",
	 population: 1,
     }
    },
    {$sort:
     {
	 population:-1
     }
    },
    {$skip: 10},
    {$limit: 5}	
])


//$group _id: null  per avere tutti i documenti


//hw5.1:
db.posts.aggregate([
	{$unwind:'$comments'}, 
	{$group: 
		{
			_id:'$comments.author',
			count: {$sum:1}
		}
	},
	{
	$sort:
		{
			count:1
		}
	
	}
	
])
