module.exports = function(it) {
	var ret = []
	for (var i of it) {
		if (Number.isInteger(i))
			ret.push(i)
	}
	return ret
}