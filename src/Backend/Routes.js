var express = require('express');
var ConnectCas = require('node-cas-client');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var MemoryStore = require('session-memory-store')(session);
var Connexion = require('./Connexion');
var Mail = require('./Contactus');

var router = express.Router();



router.use(cookieParser());
router.use(session({
    name: 'NSESSIONID',
    secret: 'Hello I am a long long long secret',
    store: new MemoryStore()  // or other session store
}));

router.get('/Connexion', Connexion.getCasClient().core());


router.get('/Contactus', function (req, res, next) {
    var mail = new Mail;
    if (!mail.send()) {
        res.setHeader('Content-Type', 'text/plain');
        res.status(500).send('Email fail');
    }
    else {
        res.setHeader('Content-Type', 'text/plain');
        res.status(200).send('Email sent');
    }
});


module.exports = router;
