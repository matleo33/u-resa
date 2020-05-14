const mailer = require("nodemailer");


class Mail {
    constructor(from, subject, message) {
        this.smtpTransport = mailer.createTransport("SMTP", {
            host: "smtp.mailtrap.io",
            port: 25,
            auth: {
                user: "3a7d95f0003a35",
                pass: "04c451d57e64cb"
            }
        });
        this.mail = {
            from: from,
            to: "536a6554a5-ff6ff8@inbox.mailtrap.io",
            subject: subject,
            text: message,
            html: "<b>" + message + "</b>"
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