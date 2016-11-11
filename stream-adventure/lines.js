var split = require('split')
var through = require('through2')

var n = 0
process.stdin.pipe(split()).pipe(through(function(buf, _, next) {
	n += 1
	if (n % 2 === 0)
		this.push(buf.toString().toUpperCase() + "\n")
	else
		this.push(buf.toString().toLowerCase() + "\n")
	next()
})).pipe(process.stdout)