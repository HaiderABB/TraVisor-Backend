const express = require('express');
const PORT = require('./Config/port')
const ServerOk = require('./Utils/ServerOk')
const FlightsRouter = require('./Routes/Flights')
const MongoConnection = require('../Src/Config/FlightsDBconnection');

// Async function for handling MongoDB connection
const connection = MongoConnection();

if (connection) {
  const FlightBooking = express();

  // Routers
  FlightBooking.use('/FlightBooking', FlightsRouter);

  // Server Listening Port 
  FlightBooking.listen(PORT, ServerOk(PORT));
}
else {
  console.log("The Server couldn't be launched : (Database Connection was not successful");
}

