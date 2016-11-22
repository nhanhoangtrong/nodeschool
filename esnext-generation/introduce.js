module.exports = function makeCounter(someObj) {
	var counter = 0
	someObj.next = function() {
		if (counter === 10)
			return {value: counter, done: true}
		counter += 1
		return {value: counter, done: false}
	}
}