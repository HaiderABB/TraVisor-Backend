const User_Auth_Model = require('../../Model/Schemas/Auth/user_auth');

async function ValidateEmail(email) {
  let user;
  try {
    user = await User_Auth_Model.find({ email });
    return user
  } catch (err) {
    return null
  }
}

module.exports = ValidateEmail;