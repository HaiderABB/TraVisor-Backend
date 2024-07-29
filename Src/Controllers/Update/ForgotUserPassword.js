const ValidateEmail = require('../../Helper/Validation/ValidateEmail');
const ResetEmail = require('../../Helper/Emails/ResetEmail');
const GenerateWebToken = require('../../Utils/GenerateWebToken');

async function ForgotPassword(req, res) {

  const payload = req.body;

  const flag = await ValidateEmail(payload.email.toLowerCase());

  if (flag.user.length === 0) {
    return res.status(400).json({ message: "Invalid Email", mail: false });
  }
  else {
    try {
      const token = await GenerateWebToken(flag.user[0]._id._id.toString())
      await ResetEmail(payload.email.toLowerCase(), flag.user[0].name, token);
    } catch (err) {
      console.log(err);
    }
    finally {
      return res.status(200).json({ message: "User Exists", mail: true })
    }
  }
}

module.exports = ForgotPassword;