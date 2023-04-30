const express = require("express");
const router = express.Router();
const Categoria = require("../models/Categoria");

router.get("/categorias/new", (req, res) => {
    res.render("categorias/new");
});

router.post("/categorias/save", (req, res) => {
    var nome = req.body.nome;
    if(nome != undefined) {

        Categoria.create({
            nome: nome
        }).then(() => {
            res.redirect("/");
        })

    } else {
        res.redirect("/categorias/new");
    }
});

router.get("/categorias", (req, res) => {
    Categoria.findAll().then(categorias => {
        res.render("categorias", {categorias: categorias});
    });
});

router.post("/categorias/delete", (req, res) => {
    var id = req.body.id;
    if(id != undefined) {
        if(!isNaN(id)) {
            Categoria.destroy({
                where: {
                    id: id
                }
            }).then(() => {
                res.redirect("/categorias");
            })
        } else {
            res.redirect("/categorias/new");
        } 
    } else {
        res.redirect("/categorias/new");
    }
});


module.exports = router;
