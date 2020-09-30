const mysql = require('mysql');
var express = require('express');
var router = express.Router();
var Resas = require('./Resas');



const connection = mysql.createPool({
  host: 'localhost',
  port: 3308,
  user: 'root',
  password: '',
  database: 'résa_v7'
});

router.param('User', function (request, response, next, User) {
  // ... Perform database query and
  // ... Store the user object from the database in the req object
  request.User = User;
  return next();
});


router.use('/:User/Resas', Resas);

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
    connection.query('SELECT nom,prenom FROM reservant where id_reservant =' + req.params.User, function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;

      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      res.send(results)
    });
  });
});

router.get('/:User/CGU', function (req, res) {
  // Connecting to the database.
  connection.getConnection(function (err, connection) {
    if (err) throw err;
    // Executing the MySQL query (select all data from the 'users' table).
    connection.query('SELECT CGU FROM reservant where id_reservant =' + req.params.User, function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;

      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      res.send(results)
    });
  });
});

router.use(express.json());

router.post('/CGU', function (req, res) {
  // Connecting to the database.
  if (!req.body.idutilisateur) {
    res.setHeader('Content-Type', 'text/plain');
    res.status(400).json({ "status": "Utilisateur manquant" });
  }
  else {
    connection.getConnection(function (err, connection) {
      if (err) throw err;
      // Executing the MySQL query (select all data from the 'users' table).
      connection.query('UPDATE reservant SET CGU=1 where id_reservant =' + req.body.idutilisateur, function (error, results, fields) {
        // If some error occurs, we throw an error.
        if (error) throw error;

        // Getting the 'response' from the database and sending it to our route. This is were the data is.
        res.send(results)
      });
    });
  }
});




module.exports = router;