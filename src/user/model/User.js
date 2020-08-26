const {DataTypes, Model} = require('sequelize');
const {sequelize} = require('../../../db/db');
const UserDetail = require('./detail/UserDetail');

const User = sequelize.define('User', {
    uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {});

User.hasOne(UserDetail, {foreignKey: 'userId'});

module.exports = User;