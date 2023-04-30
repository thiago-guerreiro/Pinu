const Sequelize= require("sequelize");
const connection = require("../database/database");
const Categoria = require("./Categoria");

const Evento = connection.define('evento', {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    data_hora: {
        type: Sequelize.DATE,
        allowNull: false
    },
    latitude: {
        type: Sequelize.STRING,
        allowNull: false
    },
    longitude: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Evento.belongsTo(Categoria);

//Evento.sync({ force: true });

module.exports = Evento;
