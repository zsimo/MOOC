db.post.ensureIndex({'date': -1})
db.post.ensureIndex({'permalink': 1}, {'unique': true})
db.post.ensureIndex({'tags': 1})