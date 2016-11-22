module.exports = function*(isEven) {
	var num = isEven ? 0 : -1
	while (true) {
		num += 2
		yield num
	}
}