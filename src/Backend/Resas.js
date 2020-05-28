const mysql = require('mysql');
var express = require('express');
var router = express.Router();


/*const connection = mysql.createPool({
    host: 'sql7.freemysqlhosting.net',
    user: 'sql7341566',
    password: 'mLMLfGnRCw',
    database: 'sql7341566'
});*/

const connection = mysql.createPool({
    host: 'localhost',
    port: 3308,
    user: 'root',
    password: '',
    database: 'résa'
});


router.get('/Historique', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {
        if (err) throw err;
        // Executing the MySQL query (select all data from the 'users' table).
        connection.query('select s.id_salle, s.nomSalle,s.nomBatiment, r.horaire, r.duree, r.finReservation, r.horaire_salle from salle s join reservation r on s.id_salle = r.fk_id_salle WHERE r.fk_id_reservant = ' + req.User + ' and r.horaire < sysdate() ', function (error, results, fields) {
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
        connection.query('select s.id_salle, s.nomSalle,s.nomBatiment, r.horaire, r.duree, r.finReservation, r.horaire_salle from salle s join reservation r on s.id_salle = r.fk_id_salle WHERE r.fk_id_reservant = ' + req.User + ' and r.horaire > sysdate() ', function (error, results, fields) {


            // If some error occurs, we throw an error.
            if (error) throw error;

            // Getting the 'response' from the database and sending it to our route. This is were the data is.
            res.send(results)
        });
    });
});



module.exports = router;