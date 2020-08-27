const {Sequelize} = require('sequelize');
const {database} = require('./config');
const {applyRelations} = require('./relations');

const sequelize = new Sequelize(database.database, database.username, database.password, {
    host: database.host,
    dialect: database.dialect
});


const modelDefiners = [
    require('../src/user/model/User'),
    require('../src/user/model/Detail/UserDetail'),
    require('../src/appointment/model/Appointment')
];
for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize);
}

applyRelations(sequelize);

module.exports = sequelize;