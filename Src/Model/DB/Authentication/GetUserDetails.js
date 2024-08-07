const User_Auth_Model = require('../../Schemas/Auth/user_auth');

async function GetUserDetails(email) {
  let user;
  try {
    user = await User_Auth_Model.findOne({ email });
    return { exists: Boolean(user), user }
  } catch (err) {
    return { exists: false, user: false }
  }
}

module.exports = GetUserDetails;