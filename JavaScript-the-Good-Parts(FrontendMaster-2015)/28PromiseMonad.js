
var my_vow = VOW.make();

my_vow.keep(value)
		.break(reason)
		.promise
		.when(kept, broken);