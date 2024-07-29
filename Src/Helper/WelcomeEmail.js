const nodemailer = require("nodemailer");
const resetUrl = 'http://localhost:3000/ResetPassword'
const transporter = require('../Config/Transporter');
const ejs = require('ejs');
const WelcomeEmailTemplate = require('../Templates/WelcomeEmailTemplate')

const sendMail = async (transporter, email, name) => {
  const emailTemplate = WelcomeEmailTemplate(name)

  mailOptions = {
    from: '"TraVisor Support" <travel.travisor@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "Welcome to TraVisor!", // Subject line 
    html: emailTemplate // html body
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log('Mail sent successfully')
  } catch (err) { console.log(err); }
}

const WelcomeEmail = (email, name) => {
  sendMail(transporter, email, name)
}

module.exports = WelcomeEmail;
