const con = require("../config/dbconnection");

module.exports = {
  getUsers: (req, res) => {
    const sql = "SELECT * FROM Students";

    con.query(sql, (err, results) => {
      if (err) return console.log(`Error: ${err}`);
      return res.json(results);
    });
  },

  createUsers: (req, res) => {
    const sql = "INSERT INTO Students (Name, Email) VALUES (?)";
    const values = [req.body.name, req.body.email];

    con.query(sql, [values], (err, results) => {
      if (err) return res.json(err);
      return res.json(results);
    });
  },

  readUsers: (req, res) => {
    const sql = "SELECT * FROM Students WHERE ID = ?";
    const id = req.params.id;

    con.query(sql, [id], (err, results) => {
      if (err) return console.log(`Error: ${err}`);
      return res.json(results);
    });
  },

  updateUsers: (req, res) => {
    const sql = "UPDATE Students SET `Name`=?, `Email`=? WHERE ID=?";
    const id = req.params.id;
    con.query(sql, [req.body.name, req.body.email, id], (err, result) => {
      if (err) return res.json({ Message: "Error inside server" });
      return res.json(result);
    });
  },
};
