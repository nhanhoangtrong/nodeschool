var child_process = require('child_process')
var duplexer = require('duplexer2')

module.exports = function(cmd, args) {
	var cp = child_process.spawn(cmd, args)
	return duplexer(cp.stdin, cp.stdout)
}