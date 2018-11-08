use blog

db.posts.aggregate([

	{$project:
		{
			_id      : 0,
			// author   : 1,
			comments : "$comments"
		}
	}
	
	, {$unwind : '$comments'}
	
	, {$group:
		{
			_id : "$comments.author"
			, num_comment : {$sum: 1}
		}
	}
	
	, {$sort: {num_comment: 1}}

])