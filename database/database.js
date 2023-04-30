const Sequelize = require("sequelize");
const connection = new Sequelize('tcc_pinu', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;
