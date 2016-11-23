var http = require('http')
var fs = require('fs')

fs.readFile(process.argv[2], function(err, data) {
	if (err) {
		return console.error(err)
	}
	var url = data.toString()
	http.get(url, function(res) {
		var received_str = ""
		res.on('data', function(data) {
			received_str += data.toString()
		})
		res.on('end', function() {
			console.log(received_str)
		})
	}).on('err', function(err) {
		console.error(err)
	})
})