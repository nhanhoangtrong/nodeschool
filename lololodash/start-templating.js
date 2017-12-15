const _ = require('lodash');

module.exports = (obj) => {
    return _.template('Hello <%= name %> (logins: <%= count %>)')({ name: obj.name, count: _.size(obj.login)});
};
