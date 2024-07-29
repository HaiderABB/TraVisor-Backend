const EncryptPassword = require('../../Helper/Encryption/EncryptPassword');
const StoreUserData = require('../../Model/DB/Authentication/StoreUserData');
const WelcomeEmail = require('../../Helper/Emails/WelcomeEmail');
const ValidateEmail = require('../../Helper/Validation/ValidateEmail');

const RegisterUser = async (req, res) => {
  let { name, email, password } = req.body;

  console.log(name, password);

  // Validate name and password
  if (!name || !password) {
    return res.status(400).json({ message: 'Name and password are required' });
  }

  try {
    const encryptedPassword = await EncryptPassword(password);
    const emailValidation = await ValidateEmail(email.toLowerCase());

    if (emailValidation.user.length > 0) {
      return res.json({ message: 'User Already exists', email: 'Failed', user: false });
    }

    const lowerCaseEmail = email.toLowerCase();
    email = lowerCaseEmail;
    await StoreUserData({ name, email, password: encryptedPassword });
    await WelcomeEmail(lowerCaseEmail, name);

    res.status(200).json({ message: 'User registered Successfully', email: 'Successful', user: true });
  } catch (err) {
    console.log(err);
    res.json({ message: "Couldn't register User", email: 'Failed', user: false });
  }

};

module.exports = RegisterUser;