const Sequelize = require("sequelize");
const connection = require("../database/database");
const Usuario = require("./Usuario");
const Evento = require("./Evento");

const UsuarioEvento = connection.define('usuarioEvento');

UsuarioEvento.belongsTo(Usuario);
UsuarioEvento.belongsTo(Evento);

UsuarioEvento.sync({ force: true });

module.exports = UsuarioEvento;