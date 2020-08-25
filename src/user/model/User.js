const {DataTypes} = require('sequelize');
const {sequelize} = require('../../../db/db');
const UserDetail = require('./detail/UserDetail');

const User = sequelize.define('User', {
    // Model attributes are defined here
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
}, {
// Other model options go here
});

User.hasOne(UserDetail, {foreignKey: 'userId'});
module.exports = User, UserDetail;