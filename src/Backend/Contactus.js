const mailer = require("nodemailer");
var express = require('express');
var router = express.Router();


class Mail {
    constructor(from, subject, message) {
        this.smtpTransport = mailer.createTransport("SMTP", {
            host: "smtp.gmail.com",
            port: 25,
            auth: {
                user: "uresa33@gmail.com",
                pass: "u1r2$s&a"
            }
        });
        this.mail = {
            to: "uresa33@gmail.com", //536a6554a5-ff6ff8@inbox.mailtrap.io
            subject: subject,
            text: "Message de :" + from + message,
            html: "<p>" + "Message de : " + from + "</p>" + "<p>" + message + "</p>"
        };
    }
    send() {
        this.smtpTransport.sendMail(this.mail, function (error, response) {
            if (error) {
                console.log(error);
                return false;
            } else {
                console.log("Message sent: " + response.message);
            }
        });
        this.smtpTransport.close();
        return true;
    }
}

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router.use(express.json());

router.post('/Contactus', function (req, res, next) {
    if (!req.body.from) {
        res.setHeader('Content-Type', 'text/plain');
        res.status(400).json({ "status": "Adresse mail manquante" });
    }
    else if (!req.body.subject) {
        res.setHeader('Content-Type', 'text/plain');
        res.status(400).json({ "status": "Sujet du message manquant" });
    }
    else if (!req.body.message) {
        res.setHeader('Content-Type', 'text/plain');
        res.status(400).json({ "status": "Message manquant" });
    }
    else {
        var mail = new Mail(req.body.from, req.body.subject, req.body.message);
        if (!mail.send()) {
            res.setHeader('Content-Type', 'text/plain');
            return res.status(500).json({ "status": "failed" });
        }
        else {
            res.setHeader('Content-Type', 'text/plain');
            res.status(200).json({ "status": "envoyé" });
        }
    }
});


module.exports = router;

//module.exports = Mail;