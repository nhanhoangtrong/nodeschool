module.exports = function (inputWords) {
	return inputWords.reduce(function(object, word) {
		object[word] = (object[word] || 0) + 1
		return object
	}, {})
}

