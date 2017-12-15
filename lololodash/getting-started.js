const _ = require('lodash');

module.exports = function(users) {
    return _.filter(users, { active: true });
};
