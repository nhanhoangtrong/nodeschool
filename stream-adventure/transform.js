// var map = require('through2-map')
// process.stdin.pipe(map(function(chunk) {
// 	return chunk.toString().toUpperCase()
// })).pipe(process.stdout)

var through = require('through2')
process.stdin.pipe(through(function(buf, _, next) {
	this.push(buf.toString().toUpperCase())
	next()
})).pipe(process.stdout)