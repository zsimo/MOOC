use hw5_2;

// db.zips.find({'state': 'CT'}).pretty()

//db.zips.findOne()

db.zips.aggregate([
	{$match:{$or:[{'state':'NY'}, {'state':'CA'}]}}
	//{match : {state : {in : ["CA", "NY"]}
	//{$match:{'state':'NY'}}
	//{$match:{$or:[{state:'CT'}, {state:'NJ'}]}}
	,{
			$group:
			{
				_id: 
				{ 
					  state:'$state'
					, city:'$city'
					//,zip:'$_id'
					
				}
				//, avg_pop:{'$avg':'$pop'}				
				//, number_of_zips:{'$sum': 1}
				//, max:{'$max': '$pop'}
				//, min:{'$min': '$pop'}
				//, populations:{'$addToSet':'$pop'}
				, tot_pop:{'$sum':'$pop'}
			}
	}
	//,{$sort:{'_id.city':-1}}
	
	//,{$skip: 50}
	
	//,{$match:{'_id.city':'CLIFTON'}}
	
	
	,{$match:{'tot_pop':{$gt:25000}}}
	
	
	,{
			$group:
			{
				_id: {state:'$state'}				
				//,avg_array:{'$addToSet':'$avg_pop'}
				, avg_pop:{'$avg':'$tot_pop'}
			}
	}
	
	// ,{    
        // "$project":
            // {    
                // "_id":"$_id.state",
                // "city": "$_id.city", 
                // "pop": "$avg_pop",
                // "state": "$_id.state"
                // //"zip": "$_id"
                
			// }
    // }
	
	// ,{$unwind:'$populations'}
	
	// ,{$match:{'populations':{$gt:25000}}}

	// ,{$match:{'avg':{$gt:25000}}}
	
	// ,{
			// $group:
			// {
				// _id: 
				// { 					
					// state:'$_id.state'
				// }
				// ,avg_pop:{'$avg':'$populations'}
			// }
	// }

])