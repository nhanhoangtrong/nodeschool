module.exports = function(total) {
	return function delay() {
		if (arguments.length === 0) {
			return total
		}
		total += arguments[0]
		return delay
	}
}