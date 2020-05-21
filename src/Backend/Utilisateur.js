const mysql = require('mysql');
var express = require('express');
var router = express.Router();


const connection = mysql.createPool({
  host: 'localhost',
  port: 3308,
  user: 'root',
  password: '',
  database: 'résa'
});

// Creating a GET route that returns data from the 'users' table.
router.get('/Users', function (req, res) {
  // Connecting to the database.
  connection.getConnection(function (err, connection) {
    if (err) throw err;
    // Executing the MySQL query (select all data from the 'users' table).
    connection.query('SELECT nom,prenom FROM reservant', function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;

      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      res.send(results)
    });
  });
});

router.get('/:User', function (req, res) {
  // Connecting to the database.
  connection.getConnection(function (err, connection) {
    if (err) throw err;
    // Executing the MySQL query (select all data from the 'users' table).
    connection.query('SELECT nom,prenom FROM reservant where id_reservant =' + req.params.user, function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;

      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      res.send(results)
    });
  });
});



module.exports = router;