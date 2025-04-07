// Import dbconnection
const con = require("../config/dbconnection");

// users table query
var sql = `CREATE TABLE Students (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Email VARCHAR(255) NOT NULL
  )`;

// create table
con.query(sql, (err, resuls) => {
  if (err) throw err;
  console.log("User Table Created");
});
