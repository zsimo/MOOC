import pymongo

c = pymongo.MongoClient(host="mongodb://localhost:27017",
													w=1,
													j=True)

#nelle nuove api il valore default è w=1, j=false


db = c.test
prova = db.prova

print "findig"

output = prova.find();

print output


