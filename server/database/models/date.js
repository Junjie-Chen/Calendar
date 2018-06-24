const Sequelize = require('sequelize');
const database = require('../database');

const Date = database.define('date', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
});

module.exports = Date;
