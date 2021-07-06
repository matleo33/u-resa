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


router.use(express.json());



router.get('/HoraireReservable', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query('SELECT heure FROM horairereservable WHERE 1', function (error, results, fields) {

            // If some error occurs, we throw an error.
            if (error) throw error;
            // Getting the 'response' from the database and sending it to our route. This is were the data is.
            res.send(results)
        });
    });
});



module.exports = router;