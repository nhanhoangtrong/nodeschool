var http = require('http')

process.stdin.pipe(http.request({
	hostname: "localhost",
	port: 8099,
	path: "/",
	method: "POST",
}, function(response) {
	response.pipe(process.stdout)
}))

var request = require('request');
var r = request.post('http://localhost:8099');
process.stdin.pipe(r).pipe(process.stdout);