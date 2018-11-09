### WEEK 01
// mongo shell solo prompt, senza essere collegata ai dbs
mongo --nodb

// stampare nelle mongo shell
print("qualcosa");
// per stampare oggetti jason
printjson({ nome : "simone" })

// CONNECTION
// connettersi con la shell ad un database specifico
mongo localhost/dba
mongo localhost/anna // +++
// alla variabile db viene assegnato il database correntemente utilizzato
db

// IMPORT
// --stopOnError
mongoimport --db dba --collection products < products.json

// FIND
// primo parametro la query, secondo parametro è la projection (field selection)
// cosi ritorna solo il campo 'name' e l' _id (bisogna esplicitamente dire di non volerlo)
db.products.find({}, {name: 1})
// senza _id
db.products.find({}, {name: 1, _id: 0})

// simile a .pretty(), raccoglie i documenti trovati in un array 
// meglio limitare (se hai moltissimi dati)
db.products.find().limit(5).toArray()

// QUERY
// di base, aggiungendo un valore alla query si usa l'operatore booleano 'and'
db.products.find({ price : {$lte: 200}, available : true})
db.products.find({ type : "case", "for" : "ac3"})

// simone

// query operators
$gte
$gt
$lte
db.products.find({ price : {$lte: 200}})
$lt
$in
$nin // not in
$type
$not
$or
$exists  // controlla che il campo for esista
db.products.find({ "for" : {$exists: true}})

// update operators
$inc
$set
$addToSet

// SORT
db.products.find({ }, { name:1, price:1 }).sort({price : 1})

// la QUERY diventa il CURSOR dopo che viene valutata

// CURSOR
var cursor = db.collection.find()
while (cursor.hasNext()) {
	printjson (cursor.next())
}

// { e poi a capo per scrivere più righe nella schell


### WEEK 02
mongo cluster -> databases -> collections -> documents (json/bson)
// INSERT
db.<collection name>.insert(<document>)

db.getLastError()

// UPDATE
db.<collection>.update(<where>, <doc or partial_update>, <upsert>, <multi>)

// cambia intero documento
use dba
db.test.update({_id: 1}, {_id: 1; x: "new hello", y: "ciao"})
// oppure anche
// recupera un oggetto
// usa findOne!!! (non sembra funzionare con find normale)
var obj = db.test.findOne();
// modificalo
obj.nome = "simone";
// salva la modifica
db.test.update({_id: obj._id}, obj)
// save() è l'equivalente più rapido (save è un helper function)
db.test.save(obj)

// cambia una parte del documento (partial update)

// special operators
$set
$push
$addToSet
$pop
$unset
$inc

db.test.update({_id: 1}, {$set: {y: "genova"}})
db.test.update({_id: 1}, {$set: {num: 10}})

db.test.update({_id: 1}, {$inc: {num: 1}})

// aggiungi un array
db.test.update({_id: 1}, {$set: {array: ["simone", "anna"]}})
db.test.update({_id: 1}, {$push: {array: "giovanni"}})

// terzo parametro upsert: true (crealo se non esiste)
db.users.update({_id: "Jane"}, {$addToSet : {likes: "football"}}, true)

// REMOVE
db.<collection>.remove({expression})
db.test.delete({_id: 1})

// remove all the documents from a collection
db.test.remove({})

// remove using regular expression (in the shell)
db.test.remove({x: /llo/})

db.users.remove({"addr.city":"Lyon", "registered" : false})


// DBA COMMANDS
db.getLastError()
db.isMaster()
db.drop()
db.create()
db.compact()
db.serverStatus()

aggregate
mapReduce
count

ensureIndex
dropIndex

currentOp
killOp

db.runCommand({getLastError: 1})

db.<collection>.stats()

db.system.namespaces.find()

use admin
db.runCommand({listDatabases: 1})

### week02, hw01
mongoimport --db pcat -c products < products.json
db.products.count()
mongo --shell pcat homework2.js
// mini backup - forEach
b = db.products_bak; db.products.find().forEach( function(o){ b.insert(o) } )
b.count()
homework.a() // 3.05


### hw02
use pcat
db.products.insert({"_id" : "ac9","name" : "AC9 Phone","brand" : "ACME","type" : "phone","price" : 333,
						"warranty_years" : 0.25,"available" : true})
var obj = db.products.findOne({_id : ObjectId("507d95d5719dbef170f15c00")})
obj.term_years = 3
db.products.save(obj)
homework.a()
var obj = db.products.findOne({_id : ObjectId("507d95d5719dbef170f15c00")})
obj.limits.sms.over_rate = 0.01
db.products.save(obj)
homework.b()

### hw03
db.products.count({"limits.voice" : {$exists : true}})

### hw04
db.products.find({},{for:1})
db.products.find({for: "ac3"})
db.products.find({for: "ac3"}).explain()

### hw05
db.products.update({for: "ac3"}, {$inc: {price: 2}}, false, true)


### WEEK 03
// Aggregation
db.collection.aggregate([
	{ $project : { _id : 1 } }
]) 

db.collection.aggregate([
	{ $project : { name : { $toUpper : "$_id" }, _id : 0 } }
])  

db.collection.aggregate([
	{ $project : { name : { $toUpper : "$_id" }, _id : 0 } },
	{ $sort : { name : 1 } }
])

// $ dollar operator
// find doc with _id john or joe
db.users.find( { _id : { $in : ["john", "joe"] } } )
// find doc withOUT _id john or joe
db.users.find( { _id : { $nin : ["john", "joe"] } } )

// find AND
db.users.find( { $and : [ { likes : "tennis" } , { likes : "golf" } ] } )
// opure, usando un metodo scorciatoia (shortcut)
db.users.find( { likes : { $all : [ "golf", "tennis" ] } } )

// $elemMatch // all the conditions need to be true in the same subdocument
db.products.find(
	{ additional_tariffs : { $elemMatch : { active : true, kind : "misc tarriff" } } }
).pretty()

// positional operator fro update operations: $
// find and update, $ will be the array index retrieve by the find operation

// Find and Modify command
// find a document, modify it end return the old version or the new version of that document
// il tutto con una sola ATOMIC operation
// remove and return the first document (in ascendent order)
db.collection.findAndModify({	
	sort   : { ts : 1},
	remove : true
})

db.collection.findAndModify({	
	query  : { status : null },
	update : { $set : { status : "inprogress" } },
	sort   : { ts : 1},
	remove : true,
	new    : false, // return the new document after the modification, default false 
	upsert : false  // default false
})


// Map/Reduce è un modo alternativo per fare Aggregation
// map function:
var map = function() {
	this.tags.forEach(function() {
		function(key) {
			emit(key, { count : 1 });
		}
	});
};	

var reduce = function(key, value) {
	var total = 0;
	for (var i = 0; i < values.length; i++) {
		total += values[i].count;
	}
	return { count : total }
};

res = db.collection.mapReduce(map, reduce, { out : { inline : 1 } });

// week03 hw03
db.policies.find({ 

	status : { $ne : "expired" }, 

	coverages : { $elemMatch : { 
								type : "liability", 
								rates : { $elemMatch : { 
														rate : { $gte : 100 }, 
														current : true } 
										} 
								} 
				} 
})


### WEEK 04 - Replication
Replication: copia ridondante di dati in diverse macchine
copia degli stessi dati (backup)
the replication is asynchronous
single primary disk, many slave disk (secondary)
come replicare (copiare):
- statement-based: viene ripetuto il comando insert su tutte le copie
- binary: insert viene fatto una volta e poi vengono copiati esattamente i settori scritti sul primo disco
-> mongodb lavora in tutte e due i modi (anche se è essenzialmente statement-based): 
	ogni file modificato nel disco master viene replicate negli slave

MongoDB Replica-Set give:
- automatic failover (se un primary si spegne, viene eletto un nuovo primary tra i secondary)
- automatic node recovery after failover (i server rimasti inattivi, vengono aggiornati con i nuovi dati ricevuti)
- the client driver is 'replica set aware' senno chi è primary e chi è secondary nei diversi momenti

### localhost port number + 1000 per 
mongod --rest
http://localhost:28017/
REST:
	Representational State Transfert
	
OPLOG: The oplog (operations log) is a special capped collection (fixed in size) that keeps a rolling record of all 
	operations that modify the data stored in your databases. MongoDB applies database operations on the primary and 
	then records the operations on the primary’s oplog. The secondary members then copy and apply these operations 
	in an asynchronous process. All replica set members contain a copy of the oplog, allowing them to maintain the 
	current state of the database.
	
### Replica Set configuration options:
- arbiterOnly: true or false, server with no data but partecipates to the election
- priority: default 1, 0 means never primary 
	se un server ha la priorità su altri per essere eletto come primary
- hidden: hide a member of the set from the client
- slaveDelay <seconds>

res.config()

// connect to another db
var server2 = new Mongo('localhost:27002')
var server2_test = server2.getDB('test')
// query to that db
server2_test.collection.count()

### Write Concern (in Replica Set)
- write is truly committed (ritorna un ack che dice che è stato scritto)
	quando è stato scritto nella maggior parte del set di replica
	w : 'majority'
	getLastError{w : 'majority'}




### WEEK 05 - INDEXES ###

all indexes are b-trees

- keys can be any type
- _id index is automatic creted
- other than _id, must be explicitly declared
- gli index sono usati automaticamente dalle query
- can index array contents 
- can index subdocuments and subfields
- fieldnames are not in the index (risparmia spazio)

// in mongodb, missing fields are avalueted ti null (it's not a error)

// default unique (key in the index): false
// sparse : true per mettere indici in campi che non sono sempre presenti
// che possono essere assenti (null): dovrebbe essere un ottimizzazione per la query
options : { 
	unique       : true, 
	sparse       : true,
	"TTL"        : ??,    // time to live
	"geospatial" : ????,
	dropDups     : true,   // delete elements with the same 
	background   : true    // only in the primary in a replica set (puoi continuare a leggere e scivere mentre sta creando l'indice)
}

db.collections.ensureIndex(<key-pattern>, <options>)
db.collections.dropIndex(<key-pattern>)
db.collections.getIndexes()
db.system.indexes.find().pretty()  // all indexes for the actual db

// Covered query: puoi fare la query solo utlizzando l'indice (se i dati che ti occorrono sono compeso nell'indice)
// trovi il documento che ti serve solo con l'indice
// anche se il restante contenuto dell'oggetto che ritorni non era nell'indice
db.collection.find(<query>, <projection>).explain()
// quando "n" == "nScanned"

// .explain() runs the query and give back some statistics

// invece "indexOnly" == true quando ritorni solo il contnuto dell'indice, es:
db.products.find({name: "AC3 Phone"}, {name:1, _id: 0}).explain()
db.products.find({name: "AC3 Phone"}, {name:1, _id: 0}).explain().indexOnly  // -> return True

db.products.find({name: "AC3 Phone"}, {name:1, _id: 0}).explain(true)  // return more information

db.products.find({name: "AC3 Phone"}, {name:1, _id: 0}).explain().hint({_id: 1})  // specifica quale indice usare

// per forzare la scansione dell'intero db: usa il "BasicCursor"
db.collections.find().hint({$natural:1})

// in general INDEXES velocizzano la lettura e rallentano la scrittura

db.currentOp()
db.killOp(<op-id>)

// PROFILE attivebile per ogni db individualmente
db.setProfilingLevel(2) // 0 off, 2 on, 1 con ritardo espresso in milliseconds 
// profile raggiungibile facendo show collections e poi facendo query su system.profile
db.system.profile.find().pretty()
// system.profile è una capped collections (a dimensione fissa, decisa a priori)

db.getProfilingStatus()

### week05 - HW
mongo --shell localhost/week5 week5.js
### HW01
db.sensor_readings.ensureIndex({tstamp:1, active-1})
homework.a() -> 6
### HW02
db.currentOp()
db.killOp(24628)
homework.c() -> 12
### HW03
db.runCommand({ compact : 'sensor_readings' })
homework.d() -> 21


### WEEK06 - SHARDING ###
 - shards = partitions (ognuna ha diversi dati)
 - ogni shard puo essere replicata (copia ridondante degli stessi dati)
 - la distribuzione di dati avviene attraverso una 'shard key' (la shard-key NON puo essere modificata)
	-> ogni collection avra una propria 'shard key' -> range based partitioning
	-> collezioni diverse avranno diverse 'shard key'
 - ogni shard ospitera un range di 'shard key' [key_low - key_high]
	-> dati all interno dello stesso range sono chiamati 'chunk' (circa 100 mb ognuno)
 - documenti che appartengono alla stessa collezione e con la stessa 'shard-key' saranno sullo stesso shard
es:
// nome inizia con
db.user.find({ name : /^jo/}); // regular expression
// oppure (stessa query)
db.user.find({ name : { $gte : 'jo'}}); // gte

- automatic Operations:
	1. 'Split' (veloce, solo 'metadata' operation, i dati rimangono sullo stesso shard)
	2. 'Migrate' (piu lenta, bilancia tra diversi shards)
		durante la 'migration' si pu continuare a leggere e scrivere dati
		
- 'config server' (piccoli mongod che immagazzinano 'metadata') sono processi che gestiscono
	i 'metadata' nei vari mongod server, tengono traccia di come i gruppi di documenti 
	'chunk' vengono distribuiti tra i 'shards'

- cluster setup:
	1. initiate the replicaSet
	2. add the shard (sh.addShard())

'scatter/gather' query operation: MONGOS manda la query a tutti i shards, get back responses
	merge responses and get back one response to the client
	
'shard key' selection:
	1. the shard-key is common in queries for the collection
	2. good 'cardinality': i dati possono essere ben 'spread out' tra i shards
	3. it is possibile to have a 'compound shard-key'

Processes:
	- shard servers    (mongod --shardsvr)
	- config servers   (mongod --configsvr)
	- mongos processes (mongos)

### week06 - hw01
mongo --shell localhost/week6 week6.js
db.trades.stats()
// 1.
// Stop the mongod process. Now, restart the mongod process adding the option --shardsvr. 
// If you started mongod with a --dbpath option, specify that as well.
mongod --shardsvr ...
// Note that with --shardsvr specified the default port for mongod becomes 27018

// 2.
// Start a mongo config server:
mongod --configsvr ...
// Note with --configsvr specified the default port for listening becomes 27019 
// and the default data directory /data/configdb. Wherever your data directory is, 
// it is suggested that you verify that the directory is empty before you begin.) 

// 3.
// Start a mongos: 
mongos --configdb simo-acer:27019

// 4.
// Connect to mongos with the shell: 

// 5.
// Connect to mongos with the shell: 
mongo --shell localhost/week6 week6.js

// 6.
// Add the first shard ("your_host_name:27018")
sh.addShard("simo-acer:27018")
db.trades.find().pretty()
db.trades.count()
db.trades.stats()
homework.a() -> 1000001

### week06 - hw02
sh.enableSharding('week6')
// è importante! no sharding senza indice sulla shard-key
db.trades.ensureIndex( { ticker:1, time:1 } )
// can now shard the trades collection on the shard key  { ticker:1, time:1 }
sh.shardCollection("week6.trades", { ticker:1, time:1 }, false)
use config
db.chunks.find()
// or
db.chunks.find({}, {min:1,max:1,shard:1,_id:0,ns:1})
homework.b() -> 3

### week06 - hw03
// Let's now add a new shard. Run another mongod as the new shard on a new port number
// mongod --shardsvr --port 27018 dbpath c://data/shard-a
mongod --shardsvr --port 27019 dbpath c://data/shard-b
// Then add the shard to the cluster (see sh.help())

homework.c() -> 2


### WEEk 7 - SECURITY ###
// trovare users per un particolare db
db.system.users.find()
// accedere ad un altro db senza cambire l'attuale
db.getSisterDB('anna').alimenti.find()

### FINAL ###
mongod --smallfiles --oplogSize 50 --port 27001 --dbpath C://data/z1 --replSet z
mongod --smallfiles --oplogSize 50 --port 27002 --dbpath C://data/z2 --replSet z
mongod --smallfiles --oplogSize 50 --port 27003 --dbpath C://data/z3 --replSet z

// enable to query using the shell on a secondary
rs.slaveOk()

// restituisce l'hostname
hostname() // -> simo-acer

rs.stepDown()
rs.stepDown(300) // in millis

// Tip: in powershell, list all mongo processes with:
//      ps mongo*
//  and you can terminate them all with:
//      ps mongo* | kill
