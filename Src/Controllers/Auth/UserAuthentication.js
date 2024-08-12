const DecryptPassword = require('../../Helper/Encryption/DecryptPassword');
const GetUserDetails = require('../../Model/DB/Authentication/GetUserDetails');
const GenerateWebToken = require('../../Utils/GenerateWebToken');

async function UserAuthentication(req, res) {

  const { email, password } = req.body;
  const emailValidation = await GetUserDetails(email.toLowerCase());
  if (emailValidation.exists) {
    const flag = await DecryptPassword(password, emailValidation.user.password);
    const userId = emailValidation.user._id._id.toString();

    if (flag) {
      const token = await GenerateWebToken(userId);
      res.status(200).json({ message: 'Login Successful', email: true, password: true, jwt_token: token, username: emailValidation.user.username });
    }
    else {
      res.status(400).json({ message: "Password Invalid", email: true, password: false, jwt_token: false, username: false });
    }

  }
  else if (!emailValidation.exists) {
    res.status(401).json({ message: "Email Invalid", email: false, password: false, jwt_token: false, username: false });
  }
}
module.exports = UserAuthentication;