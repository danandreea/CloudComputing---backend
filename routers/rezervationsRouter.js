const connection = require("../db.js");
const mysql = require("mysql");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    connection.query("SELECT * FROM rezervations", (err, results) => {
      if (err) {
        return res.send(err);
      }
  
      return res.json({
        data: results,
      });
    });
  });



router.post("/", (req, res) => {
    const {
      courtID, 
      dateStart,
      hourStart,
      hourEnd,
      rezervationName,
      rezervationEmail,
      rezervationPhone
    } = req.body;
    
    if (!courtID || !dateStart || !hourStart ||!hourEnd|| !rezervationName|| !rezervationEmail || !rezervationPhone ) {
      // send bad request error
      return res.status(400).send("Bad request. Missing parametres.");
    }
  
    function padTo2Digits(num) {
      return num.toString().padStart(2, '0');
    }
    
    function formatDate(date) {
      return (
        [
          date.getFullYear(),
          padTo2Digits(date.getMonth() + 1),
          padTo2Digits(date.getDate()),
        ].join('-') +
        ' ' +
        [
          padTo2Digits(date.getHours()),
          padTo2Digits(date.getMinutes()),
          padTo2Digits(date.getSeconds()),
        ].join(':')
      );
    }


  var dateStartInsert=new Date(dateStart)
  var hourStartHour = (hourStart.substr(0, 2))
  var hourStartMinutes = (hourStart.substr(3, 2))

  dateStartInsert.setHours(hourStartHour, hourStartMinutes)

  
  var dateEndInsert=new Date(dateStart)
  var hourEndHour = (hourEnd.substr(0, 2))
  var hourEndMinutes = (hourEnd.substr(3, 2))

  dateEndInsert.setHours(hourEndHour, hourEndMinutes)

  dateStartInsert = formatDate(new Date(dateStartInsert.toString()))
  dateEndInsert = formatDate(new Date(dateEndInsert.toString()))

    const queryString = `INSERT INTO rezervations (courtID, dateStart, dateEnd, rezervationName,rezervationEmail,rezervationPhone) VALUES (${mysql.escape(courtID)}, ${mysql.escape(dateStartInsert)}, ${mysql.escape(dateEndInsert)}, ${mysql.escape(rezervationName)}, ${mysql.escape(rezervationEmail)}, ${mysql.escape(rezervationPhone)})`;
  
    connection.query(queryString, (err, results) => {
      if (err) {
        return res.send(err);
      }
  
      return res.json({
        data: results,
      });
    });
  });


  router.get("/:id", (req, res) => {
    const { id } = req.params;

    connection.query(
        `SELECT * FROM rezervations where courtID = ${mysql.escape(id)} `,
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