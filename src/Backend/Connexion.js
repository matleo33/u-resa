var ConnectCas = require('node-cas-client');


function getCasClient() {
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
    return casClient;
}

exports.getCasClient = getCasClient;