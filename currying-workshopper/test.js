var curry = require('./curry_function.js')

function add(a, b, c) {
	return a + b + c
}

var curryA = curry(add)
var curryB = curryA(2)
var curryC = curryB(3)
var curryC2 = curryB(4)
var curryC3 = curryB(15)
console.log(curryC3(2))