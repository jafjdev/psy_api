const app = require('./app');
const PORT = 3000;
const sequelize = require('../sequelize/index');

app.listen(PORT, () => {
    sequelize.sync({force: false}).then(() => { //improve or change with migrations
        console.log(`Listening on ${PORT}`);
    }).catch(error => {
        console.log("se ha producido un error " + error);
    })
});