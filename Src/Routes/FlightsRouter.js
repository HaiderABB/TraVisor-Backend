const express = require('express');
const FlightsRouter = express.Router();
const GetOneWayFlightInfo = require('../Controllers/Flights/GetOneWayFlightInfo');
const GetTwoWayFlightInfo = require('../Controllers/Flights/GetTwoWayFlightInfo');
const AuthenticateJWT = require('../Middlewares/AuthenticateJWT');

// Endpoint for fetching One-Way flights 
FlightsRouter.get('/FlightInfo/OneWay', AuthenticateJWT, GetOneWayFlightInfo);
// Endpoint for fetching Two-Way flights 
FlightsRouter.get('/FlightInfo/TwoWay', AuthenticateJWT, GetTwoWayFlightInfo)

module.exports = FlightsRouter;
