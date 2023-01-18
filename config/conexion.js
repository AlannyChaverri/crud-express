var mysql = require("mysql");
var conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "biblioteca",
});

conexion.connect((err) => {
  if (!err) {
    console.log("Conexion correcta");
  } else {
    console.log("Error de conexion ");
  }
});

module.exports = conexion;
