const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('BelieveIndia_DB', 'postgres', '2001', {
    host: 'localhost',
    dialect: 'postgres',
});

module.exports = sequelize;
