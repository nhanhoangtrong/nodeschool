module.exports = function(isEven) {
	var num = isEven ? 0 : -1
	return {
		next: function(isSwap) {
			return {
				value: isSwap ? num += 1 : num += 2
			}
		}
	}
}