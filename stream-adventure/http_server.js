var http = require('http')
var through = require('through2')

http.createServer(function(request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'})
	request.pipe(through(function(buf, _, next) {
		this.push(buf.toString().toUpperCase())
		next()
	})).pipe(response)
}).listen(process.argv[2])