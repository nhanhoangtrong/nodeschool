var feedCat = require(process.argv[2])
var test = require('tape')

test('test feedCat', function(t) {
	t.throws(feedCat.bind(null, 'chocolate'))
	// t.throws(feedCat.bind(null, 'Chocolate'))
	t.ok(feedCat('abc') === 'yum')
	t.end()
})
// try {
// 	feedCat('chocolate')
// } catch (err) {
// 	// console.error(err)
// }