const User_Auth_Model = require('../../Schemas/Auth/user_auth');

async function GetUserDetails(email) {
  let user;
  try {
    user = await User_Auth_Model.find({ email });
    return { value: !(user.length === 0), user }
  } catch (err) {
    return { value: false, user: false }
  }
}

module.exports = GetUserDetails;