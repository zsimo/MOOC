use snps

// db.problem9.find()

db.problem9.aggregate([
	{$group:
		{
			_id : { N2:"$N2", mutant:"$mutant" }
			,num: {$sum:1}
		}
	}
	,{$group:
		{	
			_id        : "N2",
			// questo era sbagliato
			// total      : {$sum : "$num"}
			// questo invece è quello giusto...
			total      : {$sum : 1}
		}
	}
])