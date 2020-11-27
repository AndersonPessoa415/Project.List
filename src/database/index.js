const { connect } = require('sequelize');

const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Listas = require('../models/Listas');

const connection = new Sequelize(dbConfig);

Listas.init(connection);

module.exports = connection;