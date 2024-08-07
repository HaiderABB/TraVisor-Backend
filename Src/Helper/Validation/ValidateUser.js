const User_Auth_Model = require('../../Model/Schemas/Auth/user_auth');

async function ValidateUser(userId) {

  try {
    console.log(userId);
    const user = await User_Auth_Model.findById(userId);
    return user;
  } catch (err) {
    return null;
  }
}
module.exports = ValidateUser;