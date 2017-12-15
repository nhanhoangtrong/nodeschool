const _ = require('lodash');

module.exports = (orders) => {
    return _.chain(orders).groupBy('article').map((orders, article) => ({article: parseInt(article), total_orders: _.reduce(orders, (total, order) => total + order.quantity, 0)})).sortBy('total_orders').reverse();
};
