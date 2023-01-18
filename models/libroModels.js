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
};
