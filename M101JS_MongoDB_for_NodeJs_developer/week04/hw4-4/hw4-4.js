use m101

var query = {'ns': 'school2.students'};

db.profile.find(query, {'_id':0, 'millis':1}).sort({'millis': -1}).limit(1);
