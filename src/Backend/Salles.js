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
    else if (!req.body.idBatiment) {
        res.setHeader('Content-Type', 'text/plain');
        res.status(400).json({ "status": "Batiment non renseigné" });
    }
    else {
        connection.getConnection(function (err, connection) {
            //on vérifie si le checkin avant le checkout
            //on vérifie si le checkout est après le checkin
            const query = 'select s.Code_salle as nomSalle, s.id_salle as id_salle, b.Batiment as nomBatiment, s.Capacite as Capacite from salle s join batiment b on s.idBatiment = b.Id where s.idBatiment = ' + req.body.idBatiment + ' AND s.Code_salle not in (select s.Code_salle from salle s join reservation r on s.id_salle = r.fk_id_salle where str_to_date("' + req.body.horaire + '", "%Y-%m-%d %HH%i:%s") < finReservation AND str_to_date("' + req.body.horairefin + '", "%Y-%m-%d %HH%i:%s") > horaire) LIMIT 20';
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
        //Factoriser ce code pour être utilisé aussi dans /réserver
        connection.getConnection(function (err, connection) {
            const query = 'select s.Code_salle as nomSalle, s.id_salle as id_salle, b.Batiment as nomBatiment, s.Capacite as Capacite from salle s join batiment b on s.idBatiment = b.Id where id_salle = ' + req.body.idsalle + ' and s.Code_salle not in ( select s.Code_salle from salle s join reservation r on s.id_salle = r.fk_id_salle where str_to_date("' + req.body.horaire + '", "%Y-%m-%d %HH%i:%s") < finReservation AND str_to_date("' + req.body.horairefin + '", "%Y-%m-%d %HH%i:%s") > horaire and s.id_salle =' + req.body.idsalle + ')';
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
        return;
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


router.get('/Salles', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query('SELECT Code_site, idBatiment, id_salle, id_salle, Code_salle, Capacite FROM salle WHERE estReservable=1 ORDER BY id_salle', function (error, results, fields) {

            // If some error occurs, we throw an error.
            if (error) throw error;

            // Getting the 'response' from the database and sending it to our route. This is were the data is.
            res.send(results)
        });
    });
});

router.get('/Batiments', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query('SELECT Id, Secteur, Code_site, Code_batiment, Batiment FROM batiment ORDER BY Id', function (error, results, fields) {

            // If some error occurs, we throw an error.
            if (error) throw error;

            // Getting the 'response' from the database and sending it to our route. This is were the data is.
            res.send(results)
        });
    });
});

router.get('/Sites', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query('SELECT Code_site, Site FROM site', function (error, results, fields) {

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
        return;
    }
    else if (!req.body.duree) {
        res.setHeader('Content-Type', 'text/plain');
        res.status(400).json({ "status": "Durée du créneau non renseigné" });
        return;
    }
    else if (!req.body.idsalle) {
        res.setHeader('Content-Type', 'text/plain');
        res.status(400).json({ "status": "Salle non renseigné" });
        return;
    }
    else if (!req.body.idreservant) {
        res.setHeader('Content-Type', 'text/plain');
        res.status(400).json({ "status": "Personne réservante non renseigné" });
        return;
    }
    else if (!req.body.horairefin) {
        res.setHeader('Content-Type', 'text/plain');
        res.status(400).json({ "status": "Horaire de fin non renseignée" });
        return;
    }
    else {
        // Connecting to the database.
        connection.getConnection(function (err, connection) {
            const query = 'SELECT fk_id_salle, horaire, finReservation FROM `reservation` WHERE fk_id_reservant = ' + req.body.idreservant + ' and str_to_date("' + req.body.horaire + '", "%Y-%m-%d %HH%i") < finReservation AND str_to_date("' + req.body.horairefin + '", "%Y-%m-%d %HH%i") > horaire';
            if (err) throw err;
            connection.query(query, function (error, results, fields) {
                if (error) throw error;
                if (results.length !== 0) {
                    res.status(401).json({ "status": "Vous avez déjà une réservation de prévu à cette période, merci de réserver une seule salle à la fois." });
                }
                else {
                    if (false) {//utiliser aussi l'appel au service /disponibilite et tester si c'est dispo ou non
                        res.send("Le créneau n'est plus disponible pour cette salle à cette période.")
                    }
                    else {
                        const query = 'INSERT INTO reservation(horaire,horaire_salle,fk_id_reservant,fk_id_salle, duree,finReservation) VALUES (str_to_date("' + req.body.horaire + '", "%Y-%m-%d %HH%i"),' + "'" + req.body.horaire + "_" + req.body.idsalle + "'," + "'" + req.body.idreservant + "','" + req.body.idsalle + "','" + req.body.duree + "','" + req.body.horairefin + "')";
                        connection.query(query, function (error, results, fields) {
                            if (error) throw error;
                            res.status(200).json({ "status": "Salle réservée" });
                        });
                    }

                }
            });
        });
    }
});

var fileupload = require("express-fileupload");
router.use(fileupload({
    useTempFiles: true,
    tempFileDir: './'
}));
var fs = require("fs");
var path = require('path');


router.post("/import", function (req, res) {
    var file;

    if (!req.files) {
        res.setHeader('Content-Type', 'text/plain');
        res.status(404).json({ "status": "Aucun fichier envoyé" });
        return;
    } else {
        var edt = null;
        fs.readFile(req.files.file.tempFilePath, 'utf8', (err, data) => {
            if (err) {
                console.error(err)
                return
            }
            edt = JSON.parse(data);

        })
        connection.getConnection(function (err, connection) {
            if (err) throw err;
            // Executing the MySQL query (select all data from the 'users' table).
            for (let i = 0; i < edt.length; i++) {
                connection.query('INSERT INTO import (codeBatiment, codeSalle, codeSite, dateDebut, dateFin, duree, libelleBatiment, libelleSalle, libelleSite, promotion) VALUES ("' + edt[i].codeBatiment + '","' + edt[i].codeSalle + '","' + edt[i].codeSite + '","' + edt[i].dateDebut + '","' + edt[i].dateFin + '",' + edt[i].duree + ',"' + edt[i].libelleBatiment + '","' + edt[i].libelleSalle + '","' + edt[i].libelleSite + '","' + edt[i].promotion + '");', function (error, results, fields) {
                    if (error) throw error;
                });
            }

            // If some error occurs, we throw an error.


            // Getting the 'response' from the database and sending it to our route. This is were the data is.
            res.send({ "status": "import OK" })

        });
    }
});

module.exports = router;