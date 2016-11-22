module.exports = function(fn) {

	return (function curry(func) {
        return function() {
            var new_func = func
            for (var i = 0; i < arguments.length; ++i) {
                new_func = new_func.bind(null, arguments[i])
            }
            if (new_func.length === 0) {
                return new_func()
            }
            return curry(new_func)
        }
	})(fn)
}

