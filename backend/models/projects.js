const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Projects = sequelize.define('BI_Projects', {
    project_name: { type: DataTypes.TEXT, allowNull: false },
    project_description: { type: DataTypes.TEXT, allowNull: false },
    project_status: { type: DataTypes.ENUM('pending', 'approved', 'rejected'), allowNull: false },
    project_category: { type: DataTypes.ENUM('technology', 'education', 'health', 'environment', 'social', 'other'), allowNull: false },
    project_tags: { type: DataTypes.ARRAY(DataTypes.TEXT), allowNull: false },
    project_attachments: { type: DataTypes.ARRAY(DataTypes.TEXT), allowNull: true },
    project_created_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    project_updated_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
}, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'BI_Projects',
});

module.exports = Projects;