
const ValidateEmail = require('../../Helper/Validation/ValidateEmail');
const ResetEmail = require('../../Helper/Emails/ResetEmail')

async function ForgotPassword(req, res) {

  const payload = req.body;

  const flag = await ValidateEmail(payload.email.toLowerCase());

  if (flag.user.length === 0) {
    return res.json({ message: "Invalid Email", mail: false });
  }
  else {
    try {
      await ResetEmail(payload.email, flag.user[0].name);
    } catch (err) {
      console.log(err);
    }
    finally {
      return res.status(200).json({ message: "User Exists", mail: true })
    }
  }
}

module.exports = ForgotPassword;