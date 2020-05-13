const mailer = require("nodemailer");


class Mail {
    constructor(smtpTransport, mail) {
        this.smtpTransport = mailer.createTransport("SMTP", {
            host: "smtp.mailtrap.io",
            port: 25,
            auth: {
                user: "3a7d95f0003a35",
                pass: "04c451d57e64cb"
            }
        });
        this.mail = {
            from: "536a6554a5-ff6ff8@inbox.mailtrap.io",
            to: "536a6554a5-ff6ff8@inbox.mailtrap.io",
            subject: "Send Email Using Node.js",
            text: "Node.js New world for me",
            html: "<b>Node.js New world for me</b>"
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