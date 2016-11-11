var duplexer = require('duplexer2')
// var stream = require('stream')

// module.exports = function(counter) {
// 	counts = {}

// 	var writable = stream.Writable({objectMode: true})

// 	writable._write = function(data, _, done) {
// 		if (data["country"] in counts) {
// 			counts[data["country"]] += 1
// 		} else {
// 			counts[data["country"]] = 1
// 		}
// 		done()
// 	}

// 	writable.once("finish", function() {
// 		counter.setCounts(counts)
// 	})

// 	return duplexer({objectMode: true}, writable, counter)
// }

var through = require('through2')

module.exports = function(counter) {
	var counts = {}
	var write = function(data, _, next) {
		counts[data["country"]] = (counts[data["country"]] || 0) + 1
		next()
	}
	var end = function(done) {
		counter.setCounts(counts)
		done()
	}
	var writable = through.obj(write, end)
	return duplexer({objectMode:true}, writable, counter)
}