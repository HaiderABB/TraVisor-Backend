const mongoose = require('mongoose')

const { Schema } = mongoose;

const auth_schema = {
  email: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  username: { type: String, required: true }
}

const user_auth_schema = new Schema(auth_schema);
const User_Auth_Model = mongoose.model('auths', user_auth_schema);

module.exports = User_Auth_Model;