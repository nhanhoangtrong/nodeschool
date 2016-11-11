var tar = require('tar')
var crypto = require('crypto')
var through = require('through2')

var decipher = crypto.createDecipher(process.argv[2], process.argv[3])
var parser = tar.Parse()

parser.on('entry', function(e) {
	if (e.type == 'File') {

		var hashed_text = ""

		var hash = crypto.createHash('md5', {
			encoding: 'hex'
		})

		var write = function(hashed_buf, _, next) {
			hashed_text += hashed_buf.toString()
			next()
		}
		var end = function(done) {
			this.push(hashed_text + " " + e.path + "\n")
			done()
		}

		var printable = through(write, end)
		e.pipe(hash).pipe(printable).pipe(process.stdout)
	}
})

var unzip = require('zlib').createGunzip()

process.stdin.pipe(decipher).pipe(unzip).pipe(parser)