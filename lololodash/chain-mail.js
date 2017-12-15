const _ = require('lodash');

module.exports = (words) => {
    return _.chain(words).map(word => word.toUpperCase() + 'CHAINED').sortBy(word => word[0]);
};
