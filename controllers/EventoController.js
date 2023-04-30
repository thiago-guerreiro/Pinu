const express = require("express");
const Categoria = require("../models/Categoria");
const Evento = require("../models/Evento");
const router = express.Router();

router.get("/eventos", (req, res) => {
    Evento.findAll().then(eventos => {
        res.render("eventos", { eventos: eventos });
    })
});

router.get("/evento/:id", (req, res) => {
    var id = req.params.id;
    Evento.findByPk(id).then(evento => {
        if(evento != undefined) {
            Categoria.findAll().then(categorias => {
                res.render("evento", {evento: evento, categorias: categorias})
            });
        } else {
            res.redirect("/");
        }
    }).catch(err => {
        res.redirect("/");
    });
});

router.get("/registrar-evento", (req, res) => {
    Categoria.findAll().then(categorias => {
        res.render("registrar-evento", { categorias: categorias });
    });
})

router.post("/registrar-evento/save", (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    var data_hora = req.body.data_hora;
    var latitude = req.body.latitude;
    var longitude = req.body.longitude;
    var categoria = req.body.categoriumId;

    Evento.create({
        titulo: titulo,
        descricao: descricao,
        data_hora: data_hora,
        latitude: latitude,
        longitude: longitude,
        categoriumId: categoria
    }).then(() => {
        res.redirect("/eventos");
    });
});

module.exports = router;
