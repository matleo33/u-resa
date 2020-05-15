const mailer = require("nodemailer");


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

module.exports = Mail;