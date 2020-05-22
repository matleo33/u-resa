var express = require('express');
var ConnectCas = require('node-cas-client');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var MemoryStore = require('session-memory-store')(session);
var Profil = require('./Profil');
var Utilisateur = require('./Utilisateur');
var Salles = require('./Salles');




var router = express.Router();

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



router.use('/User', Utilisateur);
router.use('/Salles', Salles);
router.use('/Profil', Profil);


module.exports = router;
