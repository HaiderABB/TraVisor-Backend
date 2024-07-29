
const bcrypt = require('bcryptjs')


// Function for generating a hashed password through bcryptjs
const EncryptPassword = async (password) => {

  const saltRounds = 10;

  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;

}

module.exports = EncryptPassword;