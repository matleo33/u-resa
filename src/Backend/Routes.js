var express = require('express');
var ConnectCas = require('node-cas-client');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var MemoryStore = require('session-memory-store')(session);
var Connexion = require('./Connexion');
var Contactus = require('./Contactus');

const mysql = require('mysql');
var router = express.Router();

const connection = mysql.createPool({
  host     : 'sql7.freemysqlhosting.net',
  user     : 'sql7341566',
  password : 'mLMLfGnRCw',
  database : 'sql7341566'
});

// Creating a GET route that returns data from the 'users' table.
router.get('/users', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {
        if (err) throw err;
    // Executing the MySQL query (select all data from the 'users' table).
    connection.query('SELECT nom,prenom FROM reservant where id_reservant =2', function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;

      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      res.send(results)
    });
  });
});   


router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router.use(session({
    name: 'NSESSIONID',
    secret: 'Hello I am a long long long secret',
    store: new MemoryStore()  // or other session store
}));

router.get('/Connexion', Connexion.getCasClient().core());

router.post('/Contactus', Contactus);



module.exports = router;
