use enron;

//db.messages.findOne()

db.messages.aggregate([
	{$project: 
		{
			  from: "$headers.From"
			, to: "$headers.To"
		}
	}	 	
	, {$match:{"from":"andrew.fastow@enron.com"}}
	, {$match:{"to":"jeff.skilling@enron.com"}}
	// , {$match:{"to":"john.lavorato@enron.com"}}
	
])
