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

router.use(express.json());


router.post('/Disponibilitehoraire', function (req, res) {
    // Connecting to the database.
    if (!req.body.horaire) {
        res.setHeader('Content-Type', 'text/plain');
        res.status(400).json({ "status": "Horaire non renseigné" });
    }
    if (!req.body.duree) {
        res.setHeader('Content-Type', 'text/plain');
        res.status(400).json({ "status": "Durée du créneau non renseigné" });
    }
    connection.getConnection(function (err, connection) {
        const query = 'select nomSalle from salle where nomSalle NOT IN( select nomSalle from salle s inner join reservation r on s.id_salle = r.fk_id_salle where str_to_date("' + req.body.horaire + '", "%d/%c/%Y %H:%i") >= FROM_UNIXTIME(UNIX_TIMESTAMP(horaire) - "' + req.body.duree * 60 + '") OR str_to_date("' + req.body.horaire + '", "%d/%c/%Y %H:%i") <= str_to_date(horaire + str_to_date(duree, "%H"), "%Y%m%d%H%i") AND str_to_date("' + req.body.horaire + '", "%d/%c/%Y %H:%i") >= str_to_date(horaire, "%Y%m%d%H%i"))';
        if (err) throw err;
        // Executing the MySQL query (select all data from the 'users' table).
        connection.query(query, function (error, results, fields) {
            // If some error occurs, we throw an error.
            if (error) throw error;

            // Getting the 'response' from the database and sending it to our route. This is were the data is.
            res.send(results)
        });
    });
});

module.exports = router;