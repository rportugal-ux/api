const express = require("express");
const router = express.Router();

const controller = require("../controllers/categoriasController");

router.get("/categorias", controller.listarCategorias);
router.post("/categorias", controller.cadastrarCategoria);
router.delete("/categorias/:id", controller.removerCategoria);

module.exports = router;