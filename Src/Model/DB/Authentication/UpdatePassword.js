const mongoose = require('mongoose');
const User_Auth_Model = require('../../Schemas/Auth/user_auth');

const UpdatePassword = async (UserEmail, hashedPass) => {
  try {
    const user = await User_Auth_Model.findOne({ email: UserEmail });
    if (user) {
      user.password = hashedPass;
    }
    await user.save();
    return true;
  }
  catch (err) {
    return false;
  }
}

module.exports = UpdatePassword;