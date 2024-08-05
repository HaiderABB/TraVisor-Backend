const jwt = require('jsonwebtoken')

const VerifyToken = async (token) => {
  const decoded = jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        console.log('Token has expired');
      }
      else {
        console.log(`Invalid Token ${err.message}`);
      }
    } else {
      console.log(`Verified Data :${decoded} `)
    }
  });
}