var mysql = require("mysql");

// connection details
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb",
});

// create connection
con.connect(function (err) {
  if (err) throw err;
});

module.exports = con;
