const ValidateEmail = require('../../Middlewares/Validation/ValidateEmail')
const DecryptPassword = require('../../Middlewares/Encryption/DecryptPassword')
const SecretKey = require('../../Config/SecretKey');
const jwt = require('jsonwebtoken');

async function UserAuthentication(req, res) {

  const { email, password } = req.body;

  const emailValidation = await ValidateEmail(email.toLowerCase());

  if (emailValidation.value) {

    const flag = await DecryptPassword(password, emailValidation.user[0].password);

    const userId = emailValidation.user[0]._id._id.toString();

    if (flag) {
      const token = jwt.sign({ user_id: userId }, SecretKey, { expiresIn: '1h' })
      res.status(200).json({ message: 'Login Successful', Email: true, Password: true, jwt_token: token });
    }
    else {
      res.json({ message: "Password Invalid", Email: true, Password: false });
    }

  }
  else if (!emailValidation.value.length) {
    res.json({ message: "Email Invalid", Email: false, Password: false });
  }
}
module.exports = UserAuthentication;