const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Ideas = sequelize.define('BI_Ideas', {
    idea_id: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
    idea_title: { type: DataTypes.TEXT, allowNull: false },
    idea_description: { type: DataTypes.TEXT, allowNull: false },
    idea_status: { type: DataTypes.TEXT, allowNull: false },
    idea_category: { type: DataTypes.TEXT, allowNull: false },
    idea_image: { type: DataTypes.BLOB, allowNull: true },
    idea_created_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
}, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'BI_Ideas',
});

module.exports = Ideas; 