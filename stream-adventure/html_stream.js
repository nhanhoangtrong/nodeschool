var trumpet = require('trumpet')
var fs = require('fs')
var through = require('through2')
var tr = trumpet()

tr.selectAll('.loud', function(ele) {
	var stream = ele.createStream()
	stream.pipe(through(function(buf, _, next) {
		this.push(buf.toString().toUpperCase())
		next()
	})).pipe(stream)
})
process.stdin.pipe(tr).pipe(process.stdout)