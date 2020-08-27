const {DataTypes} = require('sequelize');

module.exports = sequelize => (
    sequelize.define('user', {
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            required: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {})
);