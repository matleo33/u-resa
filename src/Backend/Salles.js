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
    else if (!req.body.horairefin) {
        res.setHeader('Content-Type', 'text/plain');
        res.status(400).json({ "status": "Durée du créneau non renseigné" });
    }
    else {
        connection.getConnection(function (err, connection) {
            //on vérifie si le checkin avant le checkout
            //on vérifie si le checkout est après le checkin
            const query = 'select nomSalle,  id_salle from salle s where nomSalle not in (select nomSalle from salle s join reservation r on s.id_salle = r.fk_id_salle where str_to_date("' + req.body.horaire + '", "%Y-%m-%d %HH%i:%s") < finReservation AND str_to_date("' + req.body.horairefin + '", "%Y-%m-%d %HH%i:%s") > horaire)';
            if (err) throw err;
            // Executing the MySQL query (select all data from the 'users' table).
            connection.query(query, function (error, results, fields) {
                // If some error occurs, we throw an error.
                if (error) throw error;

                // Getting the 'response' from the database and sending it to our route. This is were the data is.*
                res.send(results)
            });
        });
    }
});

router.post('/Disponibilitesalle', function (req, res) { //A DEV REQUETE
    // Connecting to the database.
    if (!req.body.date) {
        res.setHeader('Content-Type', 'text/plain');
        res.status(400).json({ "status": "Date non renseignée" });
    }
    else if (!req.body.idsalle) {
        res.setHeader('Content-Type', 'text/plain');
        res.status(400).json({ "status": "Salle non renseignée" });
    }
    else {
        connection.getConnection(function (err, connection) {
            //on vérifie si le checkin avant le checkout
            //on vérifie si le checkout est après le checkin
            const query = '';
            if (err) throw err;
            // Executing the MySQL query (select all data from the 'users' table).
            connection.query(query, function (error, results, fields) {
                // If some error occurs, we throw an error.
                if (error) throw error;

                // Getting the 'response' from the database and sending it to our route. This is were the data is.
                res.send(results)
            });
        });
    }
});



router.post('/Disponibilite', function (req, res) {
    // Connecting to the database.
    if (!req.body.horaire) {
        res.setHeader('Content-Type', 'text/plain');
        res.status(400).json({ "status": "Date non renseignée" });
    }
    else if (!req.body.horairefin) {
        res.setHeader('Content-Type', 'text/plain');
        res.status(400).json({ "status": "Date de fin non renseignée" });
    }
    else if (!req.body.idsalle) {
        res.setHeader('Content-Type', 'text/plain');
        res.status(400).json({ "status": "Salle non renseignée" });
    }
    else {
        connection.getConnection(function (err, connection) {
            const query = 'select * from salle s where id_salle = ' + req.body.idsalle + ' and nomSalle not in ( select nomSalle from salle s join reservation r on s.id_salle = r.fk_id_salle where str_to_date("' + req.body.horaire + '", "%Y-%m-%d %HH%i:%s") < finReservation AND str_to_date("' + req.body.horairefin + '", "%Y-%m-%d %HH%i:%s") > horaire and s.id_salle =' + req.body.idsalle + ')';
            if (err) throw err;
            // Executing the MySQL query (select all data from the 'users' table).
            connection.query(query, function (error, results, fields) {
                // If some error occurs, we throw an error.
                if (error) throw error;
                // Getting the 'response' from the database and sending it to our route. This is were the data is.
                res.send(results)
            });
        });
    }
});

router.post('/Supprimer', function (req, res) { //A DEV REQUETE
    // Connecting to the database.
    if (!req.body.horaire_salle) {
        res.setHeader('Content-Type', 'text/plain');
        res.status(400).json({ "status": "horaire_salle non renseignée" });
    }
    else {
        connection.getConnection(function (err, connection) {
            const query = 'DELETE FROM reservation WHERE horaire_salle = "' + req.body.horaire_salle + '"';
            if (err) throw err;
            // Executing the MySQL query (select all data from the 'users' table).
            connection.query(query, function (error, results, fields) {
                // If some error occurs, we throw an error.
                if (error) throw error;

                // Getting the 'response' from the database and sending it to our route. This is were the data is.
                res.send(results)
            });
        });
    }
});

router.use(express.json());

router.post('/Reserver', function (req, res) {
    if (!req.body.horaire) {
        res.setHeader('Content-Type', 'text/plain');
        res.status(400).json({ "status": "Horaire non renseigné" });
    }
    else if (!req.body.duree) {
        res.setHeader('Content-Type', 'text/plain');
        res.status(400).json({ "status": "Durée du créneau non renseigné" });
    }
    else if (!req.body.idsalle) {
        res.setHeader('Content-Type', 'text/plain');
        res.status(400).json({ "status": "Salle non renseigné" });
    }
    else if (!req.body.idreservant) {
        res.setHeader('Content-Type', 'text/plain');
        res.status(400).json({ "status": "Personne réservante non renseigné" });
    }
    else if (!req.body.horairefin) {
        res.setHeader('Content-Type', 'text/plain');
        res.status(400).json({ "status": "Horaire de fin non renseignée" });
    }
    else {
        // Connecting to the database.
        connection.getConnection(function (err, connection) {
            const query = 'SELECT fk_id_salle, horaire, finReservation FROM `reservation` WHERE fk_id_reservant = ' + req.body.idreservant + ' and str_to_date("' + req.body.horaire + '", "%Y-%m-%d %HH%i") < finReservation AND str_to_date("' + req.body.horairefin + '", "%Y-%m-%d %HH%i") > horaire';
            if (err) throw err;
            connection.query(query, function (error, results, fields) {
                if (error) throw error;
                if (results.length !== 0) {
                    res.send("Vous avez déjà une réservation de prévu à cette période, merci de réserver une seule salle à la fois.")
                }
                else {
                    if (true) { //ajouter condition en appelant service /disponibilite et en gérant la réponse
                        res.send("Le créneau n'est plus disponible pour cette salle à cette période.")
                    }
                    else {
                        const query = 'INSERT INTO reservation(horaire,horaire_salle,fk_id_reservant,fk_id_salle, duree,finReservation) VALUES (str_to_date("' + req.body.horaire + '", "%Y-%m-%d %HH%i"),' + "'" + req.body.horaire + "_" + req.body.idsalle + "'," + "'" + req.body.idreservant + "','" + req.body.idsalle + "','" + req.body.duree + "','" + req.body.horairefin + "')";
                        connection.query(query, function (error, results, fields) {
                            if (error) throw error;
                            res.send("Salle réservée")
                        });
                    }

                }
            });
        });
    }
});


module.exports = router;