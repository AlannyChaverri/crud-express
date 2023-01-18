var express = require("express");
var router = express.Router();

const librosController = require("../controllers/librosController");

// ruta para mostrar libros a funcion index
router.get("/", librosController.index);
router.get("/crear", librosController.crear);
router.post("/", librosController.guardar);

module.exports = router;
