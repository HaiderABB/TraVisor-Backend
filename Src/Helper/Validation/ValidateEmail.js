const mongoose = require('mongoose');
const User_Auth_Model = require('../../Model/Schemas/Auth/user_auth');

async function ValidateEmail(email) {
  let user;
  try {
    user = await User_Auth_Model.find({ email });
    return { value: !(user.length === 0), user }
  } catch (err) {
    return { value: false, user: false }
  }
}

module.exports = ValidateEmail;