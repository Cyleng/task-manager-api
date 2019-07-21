const sgMail = require('@sendgrid/mail')

//const sendgridAPIKey = "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"
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name)=>{
    sgMail.send({
        to: email,
        from: 'zigue@me.com',
        subject:'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name)=>{
    sgMail.send({
        to: email,
        from: 'zigue@me.com',
        subject:'Goodbye',
        text: `Goodbye, ${name}!`
    })
}
module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}