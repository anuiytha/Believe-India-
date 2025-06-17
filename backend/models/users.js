const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Users = sequelize.define('BI_Users', {
    user_name: { type: DataTypes.TEXT, allowNull: false },
    user_email: { type: DataTypes.TEXT, allowNull: false },
    user_password: { type: DataTypes.TEXT, allowNull: false },
    user_role: { type: DataTypes.ENUM('admin', 'user'), allowNull: false },
    user_created_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    user_updated_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
}, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'BI_Users',
});

module.exports = Users;