const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

const categoriaController = require("./controllers/CategoriaController");
const eventoController = require("./controllers/EventoController");

const Categoria = require("./models/Categoria");
const Evento = require("./models/Evento");

// view wngine
app.set('view engine', 'ejs');

// static
app.use(express.static('public'));

// body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// database
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso");
    }).catch((error) => {
        console.log(error);
    });

// rotas
app.use("/", categoriaController);
app.use("/", eventoController);    

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(8080, () => {
    console.log("Servidor rodando na porta 8080");
});
