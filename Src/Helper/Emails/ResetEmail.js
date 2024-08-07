const transporter = require('../../Config/Transporter');
const ejs = require('ejs');
const ResetEmailTemplate = require('../../Templates/ResetEmailTemplate')

const sendMail = async (transporter, email, name, token) => {
  const emailTemplate = ResetEmailTemplate(name, token)

  mailOptions = {
    from: '"TraVisor Support" <travel.travisor@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "Password Reset Request", // Subject line 
    html: emailTemplate // html body
  }

  try {
    await transporter.sendMail(mailOptions)
    return true;
  } catch (err) { return false }
}

const ResetEmail = (email, name, token) => {
  const mail = sendMail(transporter, email.toLowerCase(), name, token)
  return mail;
}

module.exports = ResetEmail;
