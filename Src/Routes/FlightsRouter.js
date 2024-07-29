const express = require('express');
const FlightsRouter = express.Router();
const GetFlightInfo = require('../Controllers/Flights/GetFlightInfo');
const GetTwoWayFlightInfo = require('../Controllers/Flights/GetTwoWayFlightInfo');

// Endpoint for fetching One-Way flights 
FlightsRouter.get('/FlightInfo/OneWay', GetFlightInfo);
// Endpoint for fetching Two-Way flights 
FlightsRouter.get('/FlightInfo/TwoWay', GetTwoWayFlightInfo)

module.exports = FlightsRouter;
