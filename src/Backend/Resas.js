const mysql = require('mysql');
var express = require('express');
var router = express.Router();


const connection = mysql.createPool({
    host: 'sql7.freemysqlhosting.net',
    user: 'sql7341566',
    password: 'mLMLfGnRCw',
    database: 'sql7341566'
});

router.get('/Historique', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {
        if (err) throw err;
        // Executing the MySQL query (select all data from the 'users' table).
        connection.query('SELECT * ' +
            'from reservant ' +
            'inner join reservation on(reservation.fk_id_reservant = reservant.id_reservant) ' +
            'where reservant.id_reservant=2 ' +
            'and NOW()+0-horaire+FLOOR(reservation.duree/60)*10000 + (reservation.duree/60 - FLOOR(reservation.duree/60)) *6000>0', function (error, results, fields) {

                // If some error occurs, we throw an error.
                if (error) throw error;

                // Getting the 'response' from the database and sending it to our route. This is were the data is.
                res.send(results)
            });
    });
});

router.get('/Encours', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {
        if (err) throw err;
        // Executing the MySQL query (select all data from the 'users' table).
        connection.query('SELECT * ' +
            'from reservant ' +
            'inner join reservation on(reservation.fk_id_reservant = reservant.id_reservant) ' +
            'where reservant.id_reservant=2 ' +
            'and NOW()+0-horaire+FLOOR(reservation.duree/60)*10000 + (reservation.duree/60 - FLOOR(reservation.duree/60)) *6000<0', function (error, results, fields) {

                // If some error occurs, we throw an error.
                if (error) throw error;

                // Getting the 'response' from the database and sending it to our route. This is were the data is.
                res.send(results)
            });
    });
});

module.exports = router;