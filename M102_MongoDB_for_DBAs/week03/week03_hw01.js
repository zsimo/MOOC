use dba;

db.zips.aggregate([
	
	{ $group: {
			_id: {state : "$state"},
			zips_num : { $sum : 1 }
		}		
	} 
	, { $sort : {zips_num:-1} }
	, { $skip:3 }
	, { $limit:1 }
]);