var repeatCallback = require(process.argv[2])
var test = require('tape')

var time = 0
function callback() {
	time += 1
}

test('call extract n times', function(t) {
	repeatCallback(5, callback)
	t.ok(time === 5, 'not called 5 times')
	t.end()
})