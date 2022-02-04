const nodemailer  = require('nodemailer');

const mailTransport = nodemailer.createTransport({
    host : 'smtp-mail.outlook.com',
    secureConnection: true, // SSL
    auth : {
        user : 'capshultest2@outlook.com',
        pass : 'CapshulTest'
    },
});

const mailOptions = {
    from: '"capshul " <capshultest2@outlook.com>', // sender address (who sends)
    subject: 'capshul sign up', // Subject line
};

exports.send = async (receivers,subject,text) => {
    let options={
        ...mailOptions,
        to:receivers,
        subject,
        text, // plaintext body
    }
    mailTransport.sendMail(options, function(err, msg){
        if(err){
            return false
        }else {
            return true
        }
    });
}