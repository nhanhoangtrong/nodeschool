var combine = require('stream-combiner')
var split = require('split')
var through = require('through2')
var zlib = require('zlib')

module.exports = function() {
	var genres = []
	var current_genres = -1
	function write(buf, _, next) {
		// console.log("line:\"" + buf.toString() + "\"")
		if (buf.length > 0) {
			var json = JSON.parse(buf.toString())
			if (json.type == "genre") {
				genres.push({
					name: json.name,
					books: []
				})
				current_genres += 1
			} else {
				genres[current_genres].books.push(json.name)
			}
			
		}
		next()
	}
	function end(done) {
		for (var i in genres) {
			var genre = genres[i]
			// console.log("key:", key)
			this.push(JSON.stringify(genre) + "\n")
			console.log(JSON.stringify(genre))
		}
		done()
	}

	var middle = through(write, end)

	return combine(
		split(),
		middle,
		zlib.createGzip()
		)
}