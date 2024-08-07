const EncryptPassword = require('../../Helper/Encryption/EncryptPassword');
const StoreUserData = require('../../Model/DB/Authentication/StoreUserData');
const WelcomeEmail = require('../../Helper/Emails/WelcomeEmail');
const ValidateEmail = require('../../Helper/Validation/ValidateEmail');

const RegisterUser = async (req, res) => {
  let { name, email, password } = req.body;


  // Validate name and password
  if (!name || !password) {
    return res.status(400).json({ message: 'Name and password are required' });
  }

  try {
    const encryptedPassword = await EncryptPassword(password);
    const emailValidation = await ValidateEmail(email.toLowerCase());

    // Check whether the user exists

    if (!emailValidation) {
      return res.status(400).json({ message: 'User Already exists', email: false, user: false });
    }

    // Converting the email entered by the user to lower case for storing the data
    const lowerCaseEmail = email.toLowerCase(); email = lowerCaseEmail;
    //Store user data in the DB
    const DataStored = await StoreUserData({ name, email, password: encryptedPassword });
    //Checking if the Data is stored in the Database
    if (DataStored) {
      const EmailSent = await WelcomeEmail(lowerCaseEmail, name);
      // Data Stored but Email not sent
      if (!EmailSent) {
        res.status(402).json({ message: "User Registered Successfully but couldn't send Email", email: EmailSent, user: true })
      }
      // Data Stored and Email Sent
      res.status(200).json({ message: 'User registered Successfully', email: EmailSent, user: true });
    }
    else if (!DataStored) {
      res.status(403).json({ message: "Couldn't Register User", email: false, user: false })
    }


  } catch (err) {
    console.log(err);
    res.status(401).json({ message: "Couldn't register User", email: false, user: false });
  }

};

module.exports = RegisterUser;