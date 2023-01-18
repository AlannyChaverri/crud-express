var conexion = require("../config/conexion");
var libroModels = require("../models/libroModels");

module.exports = {
  // mostrar libros
  index: function (req, res) {
    // permite ontener inf de la db
    libroModels.obtener(conexion, function (err, datos) {
      console.log(datos);
      res.render("libros/libros", { title: "Libros", libros: datos });
    });
  },
  crear: function (req, res) {
    res.render("libros/crear", { title: "Libros" });
  },
  guardar: function (req, res) {
    res.send(req.body);
  },
};
