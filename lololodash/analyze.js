const _ = require('lodash');

module.exports = (freelancers) => {
    const average = _.reduce(freelancers, (total, fl) => total + fl.income, 0) / _.size(freelancers);
    return {
        average,
        underperform: _.chain(freelancers).filter(fl => fl.income <= average).sortBy('income'),
        overperform: _.chain(freelancers).filter(fl => fl.income > average).sortBy('income'),
    };
};
