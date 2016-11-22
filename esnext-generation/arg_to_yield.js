module.exports = function*() {
	var num = 1
	var next = 1
	while (true) {
		var multi = yield next
		num += 1
		if (multi) {
			next = num *  multi
		} else {
			next = num
		}
	}
}