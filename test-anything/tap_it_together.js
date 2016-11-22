var test = require('tape')
var fancify = require(process.argv[2])
test('fancify(str) returns the str wrapped in ~*~', function(t) {
	t.ok(fancify('Hello') === '~*~Hello~*~')
	t.ok(fancify('Hello', true) === '~*~HELLO~*~')
	t.ok(fancify('Hello', false, '!') === '~!~Hello~!~')
	t.end()
})