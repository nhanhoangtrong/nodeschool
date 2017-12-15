const _ = require('lodash');

module.exports = (towns) => {
    return _.reduce(towns, (obj, temps, townName) => {
        if (_.every(temps, temp => temp > 19)) {
            obj.hot.push(townName);
        } else if (_.some(temps, temp => temp > 19)) {
            obj.warm.push(townName);
        }
        return obj;
    }, {hot: [], warm: []});
};
