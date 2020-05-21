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
    if (!req.body.horairefin) {
        res.setHeader('Content-Type', 'text/plain');
        res.status(400).json({ "status": "Durée du créneau non renseigné" });
    }
    connection.getConnection(function (err, connection) {
        //on vérifie si le checkin avant le checkout
        //on vérifie si le checkout est après le checkin
        const query = 'select nomSalle from salle s where nomSalle not in (select nomSalle from salle s join reservation r on s.id_salle = r.fk_id_salle where str_to_date("' + req.body.horaire + '", "%d/%m/%Y %H:%i") < str_to_date((str_to_date(duree, "%i")+horaire), "%Y%m%d%H%i") AND str_to_date("' + req.body.horairefin + '", "%d/%m/%Y %H:%i") > horaire )';
        //const query = 'select nomSalle from salle where nomSalle NOT IN( select nomSalle from salle s inner join reservation r on s.id_salle = r.fk_id_salle where FROM_UNIXTIME(UNIX_TIMESTAMP(horaire) + duree60) > str_to_date("' + req.body.horaire + '", "%d/%c/%Y %H:%i") AND FROM_UNIXTIME(UNIX_TIMESTAMP(horaire) + duree60) < FROM_UNIXTIME(UNIX_TIMESTAMP(str_to_date("' + req.body.horaire + '", "%d/%c/%Y %H:%i")) + duree60) OR FROM_UNIXTIME(UNIX_TIMESTAMP(horaire)) > str_to_date("' + req.body.horaire + '", "%d/%c/%Y %H:%i") AND FROM_UNIXTIME(UNIX_TIMESTAMP(horaire)) < FROM_UNIXTIME(UNIX_TIMESTAMP(str_to_date("' + req.body.horaire + '", "%d/%c/%Y %H:%i")) + duree60))';
        //const query = 'select nomSalle from salle where nomSalle NOT IN( select nomSalle from salle s inner join reservation r on s.id_salle = r.fk_id_salle where str_to_date("' + req.body.horaire + '", "%d/%c/%Y %H:%i") >= FROM_UNIXTIME(UNIX_TIMESTAMP(horaire) - "' + req.body.duree * 60 + '") OR str_to_date("' + req.body.horaire + '", "%d/%c/%Y %H:%i") <= str_to_date(horaire + str_to_date(duree, "%H"), "%Y%m%d%H%i") AND str_to_date("' + req.body.horaire + '", "%d/%c/%Y %H:%i") >= str_to_date(horaire, "%Y%m%d%H%i"))';
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