const mysql = require('mysql');
var express = require('express');
var router = express.Router();

const connection = mysql.createPool({
    host: 'sql7.freemysqlhosting.net',
    user: 'sql7341566',
    password: 'mLMLfGnRCw',
    database: 'sql7341566'
});

router.get('/Liste', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {
        if (err) throw err;
        // Executing the MySQL query (select all data from the 'users' table).
        connection.query('SELECT *,horaire + FLOOR(duree/60)*10000 + (duree/60 - FLOOR(duree/60)) *6000  as HeureFin FROM reservation', function (error, results, fields) {

            // If some error occurs, we throw an error.
            if (error) throw error;

            // Getting the 'response' from the database and sending it to our route. This is were the data is.
            res.send(results)
        });
    });
});


router.get('/Disponibilitehoraire', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {
        if (err) throw err;
        // Executing the MySQL query (select all data from the 'users' table).
        connection.query('select nomSalle from salle where nomSalle NOT IN( select nomSalle from salle s inner join reservation r on s.id_salle = r.fk_id_salle where str_to_date("18/5/2020 11:00", "%d/%c/%Y %H:%i") >= horaire AND str_to_date("18/5/2020 11:00", "%d/%c/%Y %H:%i") <= str_to_date(horaire + str_to_date(duree, "%H"), "%Y%m%d%H%i") )', function (error, results, fields) {

            // If some error occurs, we throw an error.
            if (error) throw error;

            // Getting the 'response' from the database and sending it to our route. This is were the data is.
            res.send(results)
        });
    });
});

module.exports = router;