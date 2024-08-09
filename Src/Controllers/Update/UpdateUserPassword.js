const EncryptPassword = require('../../Helper/Encryption/EncryptPassword');
const ValidateUser = require('../../Helper/Validation/ValidateUser');
const UpdatePassword = require('../../Model/DB/Authentication/UpdatePassword');
const jwt = require('jsonwebtoken');

const UpdateUserPassword = async (req, res) => {
  const User = req.user;
  const { password } = req.body;
  const hashedPass = await EncryptPassword(password);
  try {
    const update = await UpdatePassword(User.email.toLowerCase(), hashedPass);
    if (update) {
      return res.status(200).json({ message: "Password Updated Successfully", password: update })
    }
    else {
      return res.status(200).json({ message: "Couldn't Update Password", password: update })
    }
  } catch (err) {
    return res.status(400).json({ message: "Couldn't Update Password", password: false });
  }
}

module.exports = UpdateUserPassword;