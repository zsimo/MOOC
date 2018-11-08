// MMS
// (nohup) python agent.py >> ../log/agent.log 2>&1 &
// kill pid (8424?)
// oppure semplicemnte fai python agent.py // per avere il log al prompt


// week01
MongoDb is not relational (no table) data store for json document
Shemeless: 2 documenti, possono avere struttura diversa
raccolta di DOCUMENTS all'interno di COLLECTION: non si possono
fare JOIN tra COLLECTIONS

CREATE -> INSERT
READ   -> FIND
UPDATE -> UPDATE
DELETE -> REMOVE


MONGO SHELL:
- help

// new document
db.fruit.insert({"name": "apple", "color": "red", "shape": "round"})


MONGO QUERY:
find(par1, par2)
par1 é un documento javascript che specifica cosa si vuole cercare
par2 è un documento javascript che specifica quale campo si vuole recuperare
es:
db.collection.find({"name": "simone"}, {"name": true, "_id": false})
// and
db.collection.find({"name": "simone", "cognome": "sacchi"}, {"name": true, "_id": false})

// QUERY OPERATORS
$gt, $lte
$exists
$type
$regex
$ne // not egual
// db.people.find({'title':{$ne:null}})


// prefix operator
$or
$and

// array operator
$all
{$set: {"nome_array.2": "nuovo_valore"}}
{$push: {"nome_array": "nuovo_valore"}}
{$pop: {"nome_array": 1}}
{$pushAll: {"nome_array": ["nuovo_valore1", "nuovo_valore2"]}}
{$pull: {"nome_array": "nuovo_valore"}}
{$pullAll: {"nome_array": ["vecchio_valore1", "vecchio_valore2"]}}
$addToSet

// UPDATE operators
$set
$inc
$unset


// subdocument
db.collection.find({"score": {$gt: 50}})
db.collection.find({"score": {$gt: 50}, "type": "essay"})
db.collection.find({"score": {$gt: 50, $lte: 80}, "type": "essay"})
// string inequalities
db.collection.find({"score": {$gt: "si"}})
// exists
db.collection.find({"certain_field": {$exists: true}})
// type
// in BSON, type 2 -> string
db.collection.find({"certain_field": {$type: 2}})
// RegExp
db.collection.find({"certain_field": {$regex: "a"}})
// finisce con la lettera e
db.collection.find({"certain_field": {$regex: "e$"}})
// incomincia con e
// questo è perfmormante in mongo
// in generale, le RegExp più complicate non lo sono
db.collection.find({"certain_field": {$regex: "^e"}})
// Write a query that retrieves documents from a users collection where the name 
// has a "q" in it, and the document has an email field.
db.users.find({"name": {$regex: "q"}, "email": {$exists: true}})

// $or prende come valore un array di query
db.users.find({$or: [{"name": {$regex: "q"}}, {"email": {$exists: true}}]})
// How would you find all documents in the scores collection where the score is 
// less than 50 or greater than 90?
db.scores.find({$or:[{"score": {$lt: 50}}, {"score": {$gt: 90}}]})

// cercare più valori all'interno di un array
// favorites è un array
// cerca i documenti che contengono i valori specificati da $all
db.scores.find({"favorites": {$all: ["beer", "preztel"]}})
db.students.find({'teachers' : {'$all' : [1, 3]}})

// query on OBJECT with dot notation
db.scores.find({"favorites.field": "value"})
// Write a query that finds all products that cost more than 10,000 
// and that have a rating of 5 or better
db.catalog.find({"price": {$gt: 10000}, "reviews.rating": {$gte: 5}})

// CURSOR
// db.collection.find ritorna un CURSOR
// e la shell è configurata per itarare il cursore e print out tutti i documenti
// posso salvare il cursore in una variabile ed impedire che la shll stampi i documenti
var cursor = db.collection.find(); null;
// e poi utilizzare metodi sul cursor
cursor.hasNext()
// return the next document to be visited
cursor.next()
// MODIFICATORI del CURSORE: 1 sort, 2 skip, 3 limit (da usare in questo ordine)
//ottenere gli elementi in ordine inverso
cursor.sort({"name": -1})
//limitare il numero di documenti ritonrnati
cursor.limit(5)
// saltare alcuni documenti
cursor.skip(2)
// default shell behaviour
while (cursor.hasNext()) {
	printjson(cursor.next())
}
// Write a query that retrieves exam documents, sorted by score in descending order, 
// skipping the first 50 and showing only the next 20.
db.scores.find({"type": "exam"}).sort({"score": -1}).skip(50).limit(20)
// How would you count the documents in the scores collection where the type was "essay" 
// and the score was greater than 90?
db.scores.count({"type": "essay", "score": {$gt: 90}})

// MODIFICARE un DOCUMENTO: 
// UPDATE, richiede 2 parametri: 
// the QUERY, a DOCUMENT che sostituirà tutto quello che c'era prima (a parte il campo "_id")
// 1 tipo di UPDATE
// sostituisce tutti i vecchi campi (eccetto "_id) con l'oggetto che gli passi come secondo parametro
db.people.update({"name": "alice"}, {"age": 30})

// 2 tipo di UPDATE
// UPDATE + $set
// aggiunge solo i campi interessati
// modifica solo il campo "age"
// se il campo "age" non c'era lo crea
db.people.update({"name": "alice"}, {$set: {"age": 30}})
// modificare solo incrementando
db.people.update({"name": "alice"}, {$inc: {"age": 1}})
// in the collection users, write the shell command for updating the country to 'RU' for only this user
db.users.update({"username": "splunker"}, {$set: {"country": "RU"}})
// rimuovere un campo da un documento
db.users.update({"username": "splunker"}, {$unset: {"country": 1}})
// Write an update query that will unset the interests key in the following document in the collection users. 
// The primary key is username.
db.users.update({"username": "jimmy"}, {$unset: {"interests": 1}})

// array operators
// cambiare un solo elemento di un Array, usando l'indice
db.collection.update({"id": "nome"}, {$set: {"nome_array.2": "nuovo valore"}})
// inserire un elemento alla fine dell'array
db.collection.update({"id": "nome"}, {$push: {"nome_array": "nuovo valore"}})
// rimuovere un elemento alla fine dell'array
db.collection.update({"id": "nome"}, {$pop: {"nome_array": 1}})
// rimuovere un elemento all'inizio dell'array
db.collection.update({"id": "nome"}, {$pop: {"nome_array": -1}})
// aggiungere (concatenare) una array alla fine dell'array già nel database
db.collection.update({"id": "nome"}, {$pushAll: {"nome_array": [100, 200, 300]}})
// rimuovere un elemento di un array in base al valore (indipendentemente dalla posizione che occupa)
db.collection.update({"id": "nome"}, {$pull: {"nome_array": "valore_da_rimuovere"}})
// rimuovere una lista di elmenti da un array (indipendentemente dalla posizione che occupano)
db.collection.update({"id": "nome"}, {$pullAll: {"nome_array": ["valore1", "valore2"]}})
// aggiungere un elemento ad un array solo se quell'elemento non esiste
db.collection.update({"id": "nome"}, {$addToSet: {"nome_array": "nuovo_valore"}})

// 3 tipo di UPDATE
// UPSERT
// modificare un documento o crearlo nuovo se non esiste
// cambiare un solo elemento di un Array, usando l'indice
// update prende un terzo argomento
db.collection.update({"id": "nome"}, {$set: {"nome_array.2": "nuovo valore"}, {upsert, true}})

// 4 tipo di UPDATE
// MULTI
// aggiungere un campo a tutti i documenti
db.people.update({}, {$set: {"title": "DR."}}, {multi: true})
// How would you give every record whose score was less than 70 an extra 20 points?
db.scores.update({"score": {$lt: 70}}, {$inc: {"score": 20}}, {multi: true})


// cancellare documenti dal database
// rimuove tutti i documenti
db.collection.remove()
// oppure drop è più veloce 
db.collection.drop()
// rimuove i documenti che corrispondono alla query
db.collection.remove({"nome": "valore"})
// 
mongo <dbname> --eval "db.dropDatabase()"
db.dropDatabase()


// ERROR
// la shell se c'è un errore lo stampa
// se vuoi recuperare l'ultimo errore dalla shell (a anche altre informazioni circa l'ultima operazione):
db.runCommand({getLastError: 1})


// IMPORT
// from CSV
mongoimport --type csv --headerline weather_data.csv -d weather -c data
mongoimport -d school -c students < students.json
// dropping the previous db (if exist)
mongoimport -d blog -c posts --drop < posts.json


// SCHEMA DESIGN
// MONGO support
// - rich documents (not only tabular data)
// - no mongo joins, usa invece:
// - *Pre-Join / Embedded data (prova a fare sempre questo in mongo, unico limite 16 mb max per ogni document)
// - no constraints (primary key as secondaru key in another table)
// - no mongo transaction, usa invece:
// - *Atomic Operations (più operazioni successive che agiscono come un'inca operazione)
//   quando tu stai lavorando su un documento, nessun altro può lavorarci prima che tu abbia finito
// - no declared schema (no nedd schema in advance)


// FIND
// window
find /n "hw3.2 TODO" *
// unix
grep -rn "hw3.2 TODO" *

// AGGREGATION
db.students.aggregate({'$unwind':'$scores'},
					  {'$group':{'_id':'$_id', 'average':{$avg:'$scores.score'}}}, 
					  {'$sort':{'average':-1}}, 
					  {'$limit':1}),
					  {'$limit':1});



					  
// WEEK 04 INDEX
gli operatori $gt, $lt, $ne possono usare un indice ma non ne traggono molto vantaggio
regex possono usare un indice se si cerca una parola che inizia con (^aa) (se si fornisce la prima parte)


con un indice: più veloce a leggere, più lento a scrivere (per ogni modifica, l'indice va aggiornato)
un indice non è a costo zero: richiede spazio sul disco e tempo per aggiornarlo

db.students.ensureIndex({'student_id': 1}) // ascendig order

// COMPOUND index
db.students.ensureIndex({'student_id': 1, 'class': -1})
// quando poi faccio una query su questo database, per usare gli indici
// devo specificare 'student_id' e 'class', oppure solo 'student_id'
// ma se specifico solo 'class', la query non userà gli indici

// vedere quali indici sono stati implementati
db.system.indexes.find()
// più dettagli sugli indici di una particolare collection
db.students.getIndexes()

// rimuovere un index
db.students.dropIndex({'student_id': 1, 'class': -1})

// multikeys index: indicizzare un array (mi sembra che venga costruita una 
// chiave per ogni elemento dell'array)
// ci può essere solo un multikeys index (indice di array) per collezione

// index su un sottoelemento (using dot notation)
db.people.ensureIndex({'addresses.tag': 1})

// index con chiave univoca
// non posso avere due coppie chiave/valore con lo stesso valore
// neanche valori nulli
db.people.ensureIndex({'addresses.tag': 1}, {'unique': true})
db.students.ensureIndex({'student_id': 1, 'class_id': 1}, {'unique': true})

// SPARSE indexes (nel caso si scelga l'opzione di indice univoco)
// indicizza solo i documenti che hanno la chiave che si vuole indicizzare
// i documenti che non hanno quella chiave non saranno indicizzati
db.students.ensureIndex({'class_id': 1}, {'unique': true, 'sparse': true})

// altrimenti, bisogna rimuovere definitivamente i duplicati
db.students.ensureIndex({'class_id': 1}, {'unique': true, 'dropDups': true})

// explain command
db.people.find().explain()
	'curson'          : 'BasicCursor',         // non è stato utilizzato un indice
	// oppure
	'curson'          : 'BtreeCursor a_1_b_1', // qui è stato utilizzato un indice
	
    'indexOnly'	      : false                  // la richiesta delle query può  non può 
											   // essere soddisfatta solo con l'indice
	// db.alimenti.find({'alimento': 'Pepe bianco'}, {'_id':0, 'alimento':1})  // indexOnly: true
	// non c'è bisogno di recuperare il documento, tutto quello che occorrè è presente nell'indice!
 	'n'               : 1,                     // numero di documenti ritornati
	'nscannedObjects' : 1                      // numero di documenti usati per fare la query
	'millis'          : 3,                     // tempo impiegato dalla query



// STATS
db.alimenti.stats()
db.alimenti.totalIndexSize()

// HINT
.hint({a:1, b:1})
// non fare usare un indice
.hint({$natural: 1})
db.alimenti.find({'alimento': 'Pepe bianco'}).hint({$natural: 1}).explain()

// location 2-d
db.places.find({'location': {$near: [74, 140]}}).limit(3)

// PROFILER
// profile 2 tutti i log
// tiene traccia delle operazioni più lunghe di 2 millisecondi
mongod --profile 2 --slowms 2
// e poi
db.system.profile.find().pretty()
// trova tutte le query che hanno impiegato più di un secondo, order by timeStamp descending
db.system.profile.find({millis:{$gt:1000}}).sort({ts:-1})
db.getProfilingLevel()
db.getProfilingStatus()
db.setProfilingLevel(2, 200)

// profiling's tools
mongotop 3
mongostat


// REPLICA SET

// config = { _id: "m101", members:[
		// // priority 0 non può diventare primary
          // { _id : 0, host : "localhost:27017", priority: 0, slaveDelay:5},
          // { _id : 1, host : "localhost:27018"},
          // { _id : 2, host : "localhost:27019"} ]
// };

// rs.initiate(config);
// rs.status();

// --fork puoi anche non usarlo
// mongod --replSet m101 --logpath "1.log" --dbpath /data/rs1 --port 27017 --smallfiles --fork
// mongod --replSet m101 --logpath "2.log" --dbpath /data/rs2 --port 27018 --smallfiles --fork
// mongod --replSet m101 --logpath "3.log" --dbpath /data/rs3 --port 27019 --smallfiles --fork

// permettere di leggere anche dai NON primari
// rs.slaveOk()

// rs.status()
// rs.isMaster()

// use admin e poi
// db.shutdownServer()

// WRITE CONCERN
// default w = 1 // return succes when the primary write data succesfully
//         w = 2 // return succes when the primary and the secondary write data succesfully
//         w = 3 // return succes when the primary, the secondary and the third write data succesfully
//         w = 0 // return immediatily succes after have send data (senza aspettare la conferma della scrittura)
//         w = j // return succes when the primary hace written on the journal
// "mongodb://localhost:30003/course?w=1"
// oppure passi un oggetto options: {'w': 1}

// READ preference
// "mongodb://localhost:27017,localhost:27018,localhost:27019/course?readPreference=secondary"
// oppure come oggetto passato come secondo parametro alla funzione find() o findOne():
// var ReadPreference = require('mongodb').ReadPreference;
// { 'readPreference' : ReadPreference.PRIMARY }

// aumentare numero risultati ritornati nella shell
DBQuery.shellBatchSizr = 40 // default 20


