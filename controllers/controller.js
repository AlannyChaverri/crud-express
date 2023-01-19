// var conexion = require("../config/conexion");
// var libroModels = require("../models/libroModels");

module.exports = {
  // mostrar libros
  index: function (req, res) {
    res.render("../views/index.ejs");
  },
};
