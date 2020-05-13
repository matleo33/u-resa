var express = require('express');
var ConnectCas = require('node-cas-client');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var MemoryStore = require('session-memory-store')(session);
var router = express.Router();




//var app = express();

/*app.use(cookieParser());
app.use(session({
    name: 'NSESSIONID',
    secret: 'Hello I am a long long long secret',
    store: new MemoryStore()  // or other session store
}));*/

/*app.use(function (req, res, next) {
    res.redirect('/Connexion');
})*/



router.get('/Connexion', function (req, res, next) {
    // Parse out parameters from request.
    //var params = getRoomParameters(req, null, null, null);
    var casClient = new ConnectCas({
        debug: false,
        ignore: [
            /\/ignore/
        ],
        match: [],
        servicePrefix: 'http://localhost:8080',
        serverPath: 'https://cas.u-bordeaux.fr/cas/',
        paths: {
            login: '/login',
            logout: '/logout',
            validate: 'http://localhost:8080/validate',
            serviceValidate: '/serviceValidate',
            proxyValidate: '/proxyValidate',
            proxy: '/proxy',
            proxyCallback: '/proxyCallback'
        },
        redirect: false,
        gateway: false,
        renew: false,
        slo: true,
        cache: {
            enable: false,
            ttl: 5 * 60 * 1000,
            filter: []
        },
        fromAjax: {
            header: 'x-client-ajax',
            status: 418
        }
    });
    console.log("her")
    res.redirect(casClient.core());
    //casClient.core();
})

module.exports = router;

//router.get('/Connexion', casClient.core());
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));



/*app.get('/Connexion', function (req, res) {


    console.log("help");
}
)*/


//exports.testcas = testcas;


// NOTICE: If you want to enable single sign logout, you must use casClient middleware before bodyParser.


//app.get('/logout', casClient.logout());

// or do some logic yourself
/*app.get('/logout', function (req, res, next) {
    // Do whatever you like here, then call the logout middleware
    casClient.logout()(req, res, next);
});*/

//app.listen(8080);