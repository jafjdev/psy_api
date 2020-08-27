const {DataTypes} = require('sequelize');
const {sequelize} = require('../../../db/db');


const Appointment = sequelize.define('Appointment', {
    uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
    },
    date: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {});

module.exports = Appointment;