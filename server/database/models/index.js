const Event = require('./event');
const Date = require('./date');

Event.belongsToMany(Date, {through: 'EventDate'});
Date.belongsToMany(Event, {through: 'EventDate'});

module.exports = {
  Event,
  Date
};
