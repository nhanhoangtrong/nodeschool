const _ = require('lodash');

module.exports = (comments) => {
    return _.chain(comments).groupBy('username').map((comments, username) => ({
            username: username,
            comment_count: _.size(comments)})).sortBy('comment_count').reverse();
};
