const {Sequelize} = require('sequelize');
const {database} = require('./config');
const {applyRelations} = require('./models/relations');

const sequelize = new Sequelize(database.database, database.username, database.password, {
    host: database.host,
    dialect: database.dialect
});


const modelDefiners = [
    require('./models/User/User'),
    require('./models/User/Detail/UserDetail'),
    require('./models/Appointment/Appointment')
];
for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize);
}

applyRelations(sequelize);

module.exports = sequelize;