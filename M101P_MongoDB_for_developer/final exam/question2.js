use enron;

//db.messages.findOne()

db.messages.aggregate([
	// {$project: 
		// {
			  // from: "$headers.From"
			// , to: "$headers.To"
		// }
	// }	 	
	
	// , {$match:{"from":"susan.mara@enron.com"}}
		
	// , {$unwind:'$to'}
	
	// , {$match:{"to":"alan.comnes@enron.com"}}
	
	// , {
		// "$group":
			// {
				// _id: {"from" : "$from", "to" : "$to"}
				
				// // costruisce un array di elementi unici
				// , "sum": 
						// {
							// $sum: 1
						// }
			// }
	// }
	
	{
		"$group":
			{
				_id: {"from" : "$headers.From", "to" : "$headers.To"}
				
				// costruisce un array di elementi unici
				// , "sum": 
						// {
							// $sum: 1
						// }
			}
	}
	
	, {$match:{"_id.from":"susan.mara@enron.com"}}
	, {$match:{"_id.to":"jeff.dasovich@enron.com"}}
	//{ 'soblander@carrfut.com' : { $in :  "_id.to"}}
	
	, {
		"$group":
			{
				_id: {"from" : "$_id.from"}
				
				// costruisce un array di elementi unici
				, "sum": 
						{
							$sum: 1
						}
			}
	}
	
	
])

// susan.mara@enron.com to jeff.dasovich@enron.com    -> 750, 150
// susan.mara@enron.com to richard.shapiro@enron.com  -> 974, 106
// soblander@carrfut.com to soblander@carrfut.com     -> 679, 1
// susan.mara@enron.com to james.steffes@enron.com    -> 648, 109
// evelyn.metoyer@enron.com to kate.symes@enron.com   -> 567, 1
// susan.mara@enron.com to alan.comnes@enron.com      -> 550, 100
