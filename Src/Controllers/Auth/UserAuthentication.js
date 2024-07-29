const ValidateEmail = require('../../Helper/Validation/ValidateEmail')
const DecryptPassword = require('../../Helper/Encryption/DecryptPassword')
const GenerateWebToken = require('../../Utils/GenerateWebToken');

async function UserAuthentication(req, res) {

  const { email, password } = req.body;

  const emailValidation = await ValidateEmail(email.toLowerCase());

  if (emailValidation.value) {

    const flag = await DecryptPassword(password, emailValidation.user[0].password);
    const userId = emailValidation.user[0]._id._id.toString();

    if (flag) {
      const token = GenerateWebToken(userId);
      res.status(200).json({ message: 'Login Successful', Email: true, Password: true, jwt_token: token });
    }
    else {
      res.status(400).json({ message: "Password Invalid", Email: true, Password: false });
    }

  }
  else if (!emailValidation.value.length) {
    res.status(401).json({ message: "Email Invalid", Email: false, Password: false });
  }
}
module.exports = UserAuthentication;