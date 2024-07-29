const express = require('express');
const MongoConnection = require('./Config/AuthDBConnection');
const AuthRouter = require('./Routes/user_auth_routes');
const bodyParser = require('body-parser');

const connection = MongoConnection();

if (connection) {

  const cors = require("cors");
  const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  }


  const user_auth = express();

  user_auth.use(cors(corsOptions))
  user_auth.use(express.json());
  user_auth.use(express.urlencoded({ extended: false }));

  user_auth.use('/UserAuth', AuthRouter)

  user_auth.listen(5050, () => { console.log('The Server is listening to the PORT 5050') })

}