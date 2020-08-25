const {DataTypes} = require('sequelize');
const {sequelize} = require('../../../../db/db');
const User = require('../User');

const UserDetail = sequelize.define('UserDetail', {
    // Model attributes are defined here
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        required: true
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
    religion: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false
    },
    occupation: {
        type: DataTypes.STRING,
        allowNull: false
    },
    educationLevel: {
        type: DataTypes.STRING,
        allowNull: false,
        default: 0
    },
});

module.exports = UserDetail;