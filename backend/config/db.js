require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false // This skips cert validation for easier setup
        }
    }
});

module.exports = sequelize;
