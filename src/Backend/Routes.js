var express = require('express');
var ConnectCas = require('node-cas-client');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var MemoryStore = require('session-memory-store')(session);
var Connexion = require('./Connexion');
var router = express.Router();



router.use(cookieParser());
router.use(session({
    name: 'NSESSIONID',
    secret: 'Hello I am a long long long secret',
    store: new MemoryStore()  // or other session store
}));

router.get('/Connexion', Connexion.getCasClient().core()); //Connexion.getCasClient.core()

module.exports = router;
