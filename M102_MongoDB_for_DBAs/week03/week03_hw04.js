use dba;


function map_closest() {
    var pitt = [-80.064879, 40.612044];
    var phil = [-74.978052, 40.089738];

    function distance(a, b) {
        var dx = a[0] - b[0];
        var dy = a[1] - b[1];
        return Math.sqrt(dx * dx + dy * dy);
    }

    if (distance(this.loc, pitt) < distance(this.loc, phil)) {
        emit("pitt",1);
    } else {
        emit("phil",1);
    }
}

// values is an array of value with the same key
var reduce = function(key, values) {
	// var total = 0;
	// for (var i = 0; i < values.length; i++) {
		// total += values[i];
	// }
	// return total;
	
	// oppure
	return Array.sum(values);
	
};




// res = db.zips.mapReduce(map_closest, reduce, { out : { inline : 1 } });

// printjson(res);


db.runCommand({
	mapreduce: "zips",
	map : map_closest,
	reduce: reduce,
	out : { inline : 1 }
	, query: {state:"PA"}     // optional
	// , sort: {}           // optional
	// , finalize: method(key, value)   // run at the very end, after reduce
})

// db.zips.count({state:"PA"}) // 1458 (726+732)






