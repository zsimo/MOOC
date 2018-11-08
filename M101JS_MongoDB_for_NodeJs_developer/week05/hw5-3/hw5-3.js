use course

db.grades.aggregate([
	// {
		// $group:
			// {
				// _id: {class_id: '$class_id', student_id: '$student_id',				
						// scores: '$scores', avg_exams:{$avg:'$scores.type.exams'}
					// }
			// }
	// }
	
	{$unwind:"$scores"},
	//{$match:{'scores.type':'homework'}}
	{$match:{$or:[{'scores.type':'homework'}, {'scores.type':'exams'}]}}
	,{
			$group:
			{
				_id: 
				{ 
					class:'$class_id', 
					student_id:'$student_id'					
				}
				,avg_exams:{'$avg':'$scores.score'}
			}
	}
	
	,{
			$group:
			{
				_id: {class:'$_id.class'}
				,avg:{'$avg':'$avg_exams'}
				
			}
			
	}
	,{$sort:{'avg':1}}
	
])