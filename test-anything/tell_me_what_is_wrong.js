var isCoolNumber = require(process.argv[2])
var assert = require('assert')

assert(isCoolNumber(42) === true, 'isCoolNumber(42) must be true')