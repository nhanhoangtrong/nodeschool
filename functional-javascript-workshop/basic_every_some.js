module.exports = function(goodUsers) {
	return function(users) {
		return (users.every(function(suppliedUser) {
			return goodUsers.some(function(goodUser) {
				return goodUser.id === suppliedUser.id
			})
		}))
	}
}