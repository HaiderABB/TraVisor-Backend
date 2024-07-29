const EncryptPassword = require('../../Middlewares/Encryption/EncryptPassword');
const StoreUserData = require('../../Model/DB/StoreUserData');
const WelcomeEmail = require('../../Helper/WelcomeEmail');
const ValidateEmail = require('../../Middlewares/Validation/ValidateEmail');

const RegisterUser = async (req, res) => {
  const { name, email, password } = req.body;

  // Validate name and password
  if (!name || !password) {
    return res.status(400).json({ message: 'Name and password are required' });
  }

  try {
    const encryptedPassword = await EncryptPassword(password);
    const emailValidation = await ValidateEmail(email);

    if (emailValidation.user.length > 0) {
      return res.json({ message: 'User Already exists', email: 'Failed', user: false });
    }

    await StoreUserData({ name, email, password: encryptedPassword });
    await WelcomeEmail(email, name);

    res.status(200).json({ message: 'User registered Successfully', email: 'Successful', user: true });
  } catch (err) {
    console.log(err);
    res.json({ message: "Couldn't register User", email: 'Failed', user: false });
  }

};

module.exports = RegisterUser;