use blog;

//db.messages.findOne()

//var query = {'headers.Message-ID': '<8147308.1075851042335.JavaMail.evans@thyme>'};

//db.messages.find({'headers.Message-ID': '<8147308.1075851042335.JavaMail.evans@thyme>'}).pretty()

//db.messages.update(query,{$push: { "headers.To": "mrpotatohead@10gen.com" }})

//db.posts.findOne({'permalink': "TLxrBfyxTZjqOKqxgnUP", 'comments.author': 'Aleida Elsass'})


db.posts.aggregate([
	{$project: 
		{
			  comments: "$comments"
			//, to: "$headers.To"
		}
	}	 	
	
	, {$limit: 1}
	
	// , {$unwind: '$comments'}
	
	// , {$limit: 10}
	
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
	
	// {
		// "$group":
			// {
				// _id: {"from" : "$headers.From", "to" : "$headers.To"}
				
				// // costruisce un array di elementi unici
				// // , "sum": 
						// // {
							// // $sum: 1
						// // }
			// }
	// }
	
	// , {$match:{"_id.from":"susan.mara@enron.com"}}
	// , {$match:{"_id.to":"jeff.dasovich@enron.com"}}
	
	//{ 'soblander@carrfut.com' : { $in :  "_id.to"}}
	
	// , {
		// "$group":
			// {
				// _id: {"from" : "$_id.from"}
				
				// // costruisce un array di elementi unici
				// , "sum": 
						// {
							// $sum: 1
						// }
			// }
	// }
	
	
])