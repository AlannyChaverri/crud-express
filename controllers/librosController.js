var conexion = require("../config/conexion");
var libroModels = require("../models/libroModels");
var borrar = require("fs");

module.exports = {
  // mostrar libros
  index: function (req, res) {
    // permite ontener inf de la db
    libroModels.obtener(conexion, function (err, datos) {
      console.log(datos);
      res.render("libros/libros", { title: "Libros", libros: datos });
    });
  },

  // crear libro
  crear: function (req, res) {
    res.render("libros/crear", { title: "Libros" });
  },

  // agregar libro
  guardar: function (req, res) {
    console.log(req.body);
    console.log(req.file.filename);
    libroModels.insertar(conexion, req.body, req.file, function (err, datos) {
      res.redirect("/libros");
      // console.log(datos);
    });
  },

  // eliminar libro
  eliminar: function (req, res) {
    console.log("Recepcion de datos");
    console.log(req.params.id);
    libroModels.retornarDatosId(
      conexion,
      req.params.id,
      function (err, registros) {
        var nombreImagen = "public/images/" + registros[0].imagen;

        if (borrar.existsSync(nombreImagen)) {
          borrar.unlinkSync(nombreImagen);
        }
        // res.send(nombreImagen);
        libroModels.borrar(conexion, req.params.id, function (err) {
          res.redirect("/libros");
        });
      }
    );
  },

  // editar libro
  editar: function (req, res) {
    libroModels.retornarDatosId(
      conexion,
      req.params.id,
      function (err, registros) {
        console.log(registros[0]);
        res.render("libros/editar", {
          libro: registros[0],
          title: "Editar libros",
        });
      }
    );
  },

  // editar libro
  actualizar: function (req, res) {
    console.log(req.body.nombre);
    if (req.file) {
      if (req.file.filename) {
        libroModels.retornarDatosId(
          conexion,
          req.body.id,
          function (err, registros) {
            var nombreImagen = "public/images/" + registros[0].imagen;

            if (borrar.existsSync(nombreImagen)) {
              borrar.unlinkSync(nombreImagen);
            }
            // res.send(nombreImagen);
            libroModels.actualizarArchivo(
              conexion,
              req.body,
              req.file,
              function (err) {}
            );
          }
        );
      }
    }
    if (req.body.nombre) {
      libroModels.actualizar(conexion, req.body, function (err) {});
    }

    res.redirect("/libros");
    // console.log(req.body.filename);
  },
};
