var conexion = require("../config/conexion");
var libroModels = require("../models/libroModels");
var borrar = require("fs");

module.exports = {
  // mostrar libros
  index: function (req, res) {
    res.render("../views/index.ejs", { title: "Libros", libros: datos });
  },
};
