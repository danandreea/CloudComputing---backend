const connection = require("../db.js");
const mysql = require("mysql");
const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
    connection.query("SELECT * FROM courts", (err, results) => {
      if (err) {
        return res.send(err);
      }
  
      return res.send(results);
    })
  });


router.get("/:id", (req, res) => {
    const { id } = req.params;

    connection.query(
        `SELECT * FROM courts where courtID = ${mysql.escape(id)} `,
        (err, results) => {
            if (err) {
                console.log(err);
                return res.send(err);
            }
          
            return res.send(results);
        }
    );
});


module.exports = router;