const bcrypt = require('bcryptjs');

const DecryptPassword = async (password, hashedPass) => {

  const match = await bcrypt.compare(password, hashedPass)

  return match;

}

module.exports = DecryptPassword;