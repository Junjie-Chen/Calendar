const Sequelize = require('sequelize');
const database = require('../database');
const moment = require('moment');

const Event = database.define('event', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  startTime: {
    type: Sequelize.STRING,
    allowNull: false,
    set(startTime) {
      this.setDataValue('startTime', moment(startTime, 'HH:mm', true).format('h:mm a'));
    },
    get() {
      return this.getDataValue('startTime');
    }
  },
  endTime: {
    type: Sequelize.STRING,
    allowNull: false,
    set(endTime) {
      this.setDataValue('endTime', moment(endTime, 'HH:mm', true).format('h:mm a'));
    },
    get() {
      return this.getDataValue('endTime');
    }
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

module.exports = Event;
