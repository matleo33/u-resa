const mysql = require('mysql');
var express = require('express');
var router = express.Router();


const connection = mysql.createPool({
    host: 'sql7.freemysqlhosting.net',
    user: 'sql7341566',
    password: 'mLMLfGnRCw',
    database: 'sql7341566'
});

router.get('/Historique/:user', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {
        if (err) throw err;
        // Executing the MySQL query (select all data from the 'users' table).
        connection.query('SELECT * ' +
            'from reservant ' +
            'inner join reservation on(reservation.fk_id_reservant = reservant.id_reservant) ' +
            'where reservant.id_reservant=' + req.params.user +
            ' and NOW()+0-horaire+FLOOR(reservation.duree/60)*10000 + (reservation.duree/60 - FLOOR(reservation.duree/60)) *6000>0', function (error, results, fields) {

                // If some error occurs, we throw an error.
                if (error) throw error;

                // Getting the 'response' from the database and sending it to our route. This is were the data is.
                res.send(results)
            });
    });
});

router.get('/Encours/:user', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {
        if (err) throw err;
        // Executing the MySQL query (select all data from the 'users' table).
        connection.query('SELECT * ' +
            'from reservant ' +
            'inner join reservation on(reservation.fk_id_reservant = reservant.id_reservant) ' +
            'where reservant.id_reservant=' + req.params.user +
            ' and NOW()+0-horaire+FLOOR(reservation.duree/60)*10000 + (reservation.duree/60 - FLOOR(reservation.duree/60)) *6000<0', function (error, results, fields) {

                // If some error occurs, we throw an error.
                if (error) throw error;

                // Getting the 'response' from the database and sending it to our route. This is were the data is.
                res.send(results)
            });
    });
});

router.use(express.json());

router.post('/Reserver', function (req, res) {
    if (!req.body.horaire) {
        res.setHeader('Content-Type', 'text/plain');
        res.status(400).json({ "status": "Horaire non renseigné" });
    }
    if (!req.body.duree) {
        res.setHeader('Content-Type', 'text/plain');
        res.status(400).json({ "status": "Durée du créneau non renseigné" });
    }
    if (!req.body.idsalle) {
        res.setHeader('Content-Type', 'text/plain');
        res.status(400).json({ "status": "Salle non renseigné" });
    }
    if (!req.body.idreservant) {
        res.setHeader('Content-Type', 'text/plain');
        res.status(400).json({ "status": "Personne réservante non renseigné" });
    }
    // Connecting to the database.
    connection.getConnection(function (err, connection) {
        const query = 'INSERT INTO reservation(horaire,horaire_salle,fk_id_reservant,fk_id_salle, duree) VALUES (str_to_date(' + "'" + req.body.horaire + "'" + ', "%d/%c/%Y %H:%i"),' + "'" + req.body.horaire + "_" + req.body.idsalle + "'," + "'" + req.body.idreservant + "','" + req.body.idsalle + "','" + req.body.duree + "')";
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