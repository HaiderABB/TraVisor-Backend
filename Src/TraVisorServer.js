const express = require('express');
const MongoConnection = require('./Config/DBConnection');
const AuthRouter = require('./Routes/AuthRouter');
const bodyParser = require('body-parser');
const FlightsRouter = require('./Routes/FlightsRouter')
const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });


// Async server for handling database connections
const connection = MongoConnection();

if (connection) {

  const cors = require("cors");
  const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  }

  const server = express();

  server.use(cors(corsOptions))
  server.use(express.json());
  server.use(express.urlencoded({ extended: false }));

  // Routers
  server.use('/UserAuth', AuthRouter)
  server.use('/FlightBooking', FlightsRouter);

  // Server Listening Port 
  server.listen(5050, () => { console.log('The Server is listening to the PORT 5050') })

}
else {
  console.log("The Server couldn't be launched : (Database Connection was not successful");
}

