module.exports = {
  obtener: function (conexion, funcion) {
    conexion.query("SELECT * FROM libros_tb", funcion);
  },

  insertar: function (conexion, datos, archivos, funcion) {
    conexion.query(
      "INSERT INTO libros_tb (nombre, imagen) VALUES (?,?)",
      [datos.nombre, archivos.filename],
      funcion
    );
  },

  retornarDatosId: function (conexion, id, funcion) {
    conexion.query("SELECT * FROM libros_tb WHERE  id=?", [id], funcion);
  },

  borrar: function (conexion, id, funcion) {
    conexion.query("DELETE FROM libros_tb WHERE  id=?", [id], funcion);
  },

  actualizar: function (conexion, datos, funcion) {
    conexion.query(
      "UPDATE libros_tb SET nombre=? WHERE  id=? ",
      [datos.nombre, datos.id],
      funcion
    );
  },

  actualizarArchivo: function (conexion, datos, archivo, funcion) {
    conexion.query(
      "UPDATE libros_tb SET imagen=? WHERE  id=? ",
      [archivo.filename, datos.id],
      funcion
    );
  },
};
