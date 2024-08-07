const ResetEmail = require('../../Helper/Emails/ResetEmail');
const GenerateWebToken = require('../../Utils/GenerateWebToken');
const GetUserDetails = require('../../Model/DB/Authentication/GetUserDetails');

async function ForgotPassword(req, res) {

  const payload = req.body;

  const data = await GetUserDetails(payload.email.toLowerCase());
  if (!data.exists) {
    return res.status(400).json({ message: "Invalid Email", mail: false });
  }
  else {
    try {
      const token = await GenerateWebToken(data.user._id._id.toString())
      await ResetEmail(payload.email.toLowerCase(), data.user.name, token);
    } catch (err) {
      console.log(err);
    }
    finally {
      return res.status(200).json({ message: "User Exists", mail: true })
    }
  }
}

module.exports = ForgotPassword;