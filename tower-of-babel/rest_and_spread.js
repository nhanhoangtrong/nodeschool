var rawArgs = process.argv.slice(2);
var args = [];

rawArgs.forEach(val => {
	let commaSep = val.split(',');
	commaSep.forEach(val => {
		if (val !== '') args.push(+val);
	});
});

// write a function called `avg` here that calculates the average.
var avg = (...args) => {
	var total = args.reduce((sum, arg) => {
		sum += arg
		return sum
	}, 0)
	return total / args.length
}

console.log(avg(...args));