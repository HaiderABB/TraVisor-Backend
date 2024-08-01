const mongoose = require('mongoose');
const User_Auth_Model = require('../../Schemas/Auth/user_auth');

async function StoreUserData(data) {

  try {
    const user = new User_Auth_Model(data);
    await user.save();
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }

}


module.exports = StoreUserData;