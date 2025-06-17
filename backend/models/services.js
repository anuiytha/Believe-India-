const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Services = sequelize.define('BI_Services', {
    service_name: { type: DataTypes.TEXT, allowNull: false },
    service_description: { type: DataTypes.TEXT, allowNull: false },
    service_status: { type: DataTypes.ENUM('pending', 'approved', 'rejected'), allowNull: false },
    service_category: { type: DataTypes.ENUM('technology', 'education', 'health', 'environment', 'social', 'other'), allowNull: false },
    service_tags: { type: DataTypes.ARRAY(DataTypes.TEXT), allowNull: false },
    service_attachments: { type: DataTypes.ARRAY(DataTypes.TEXT), allowNull: true },
}, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'BI_Services',
});

module.exports = Services;