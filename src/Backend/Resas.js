const mysql = require('mysql');
var express = require('express');
var router = express.Router();


const connection = mysql.createPool({
    host: 'localhost',
    port: 3308,
    user: 'root',
    password: '',
    database: 'résa_v7'
});


router.get('/Historique', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {
        if (err) throw err;
        // Executing the MySQL query (select all data from the 'users' table).
        connection.query('select s.id_salle, s.Code_salle as nomSalle,b.Batiment as nomBatiment, r.horaire, r.duree, r.finReservation, r.horaire_salle from salle s join reservation r on s.id_salle = r.fk_id_salle join batiment b on s.idBatiment=b.Id WHERE r.fk_id_reservant = ' + req.User + ' and r.horaire < sysdate() ', function (error, results, fields) {
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
        connection.query('select s.id_salle, s.Code_salle as nomSalle,b.Batiment as nomBatiment, r.horaire, r.duree, r.finReservation, r.horaire_salle from salle s join reservation r on s.id_salle = r.fk_id_salle join batiment b on s.idBatiment=b.Id WHERE r.fk_id_reservant = ' + req.User + ' and r.horaire > sysdate() ', function (error, results, fields) {


            // If some error occurs, we throw an error.
            if (error) throw error;

            // Getting the 'response' from the database and sending it to our route. This is were the data is.
            res.send(results)
        });
    });
});



module.exports = router;