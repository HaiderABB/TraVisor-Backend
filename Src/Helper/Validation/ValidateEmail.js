const User_Auth_Model = require('../../Model/Schemas/Auth/user_auth');

async function ValidateEmail(email) {

  try {
    const user = await User_Auth_Model.findOne({ email });
    return user
  } catch (err) {
    return null
  }
}

module.exports = ValidateEmail;