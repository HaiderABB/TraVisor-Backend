const EncryptPassword = require('../../Middlewares/Encryption/EncryptPassword');
const UpdatePassword = require('../../Model/DB/UpdatePassword');

const UpdateUserPassword = async (req, res) => {
  const { email, password } = req.body;
  const hashedPass = await EncryptPassword(password);
  try {
    await UpdatePassword(email, hashedPass);
  } catch (err) {
    console.log(err); res.status(400).json({ message: "Couldn't Update Password", password: false });
  } finally {
    res.status(200).json({ message: "Password Updated Successfully", password: true })
  }
}

module.exports = UpdateUserPassword;