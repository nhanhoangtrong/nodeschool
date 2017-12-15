const _ = require('lodash');

module.exports = (towns) => {
    return _.forEach(towns, (town) => {
        town.size = town.population > 1 ? 'big' : (town.population > 0.5 ? 'med' : 'small');
    });
};
