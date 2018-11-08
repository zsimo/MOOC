use weather

var query = {"Wind Direction": {$gt: 180, $lt: 360}};
var projection = {"State": 1, "Temperature": 1, "_id": 0}

db.data.find(query, projection).sort({"Temperature": 1}).limit(1);