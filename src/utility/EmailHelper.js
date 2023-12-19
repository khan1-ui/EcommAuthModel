const nodeMailer = require('nodemailer')
const EmailSend = async(EmailTo,EmailText,EmailSubject)=>{
    let transport = nodeMailer.createTransport({
        host:"mail.teamrabbil.com",
        port:25,
        secure:false,
        auth:{user:"info@teamrabbil.com",pass:"~sR4[bhaC[Qs"},
        tls:{rejectUnauthorized:false}
    })
    let mailOption = {
        from:"Sazin's dream ...only for you <info@teamrabbil.com>",
        to:EmailTo,
        subject:EmailSubject,
        text:EmailText
    }
    return await transport.sendMail(mailOption)
}
module.exports= EmailSend