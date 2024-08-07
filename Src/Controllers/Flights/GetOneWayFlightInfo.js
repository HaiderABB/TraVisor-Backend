const mongoose = require('mongoose');
const GetFlightsDB = require('../../Model/DB/Flights/GetFlightsQuery');

async function GetOneWayFlightInfo(req, res) {
  try {
    const ReqObj = {
      DepCity: req.body.DepCity,
      ArrivalCity: req.body.ArrivalCity,
      DepDate: req.body.DepDate
    };
    const flights = await GetFlightsDB(ReqObj, res);
    if (flights.length) { res.status(200).json({ message: 'Flights Found', flight: true, error: false, flights }) }
    else { res.status(401).json({ message: 'Flights not found', flight: false, error: false }) }
  } catch (err) {
    res.status(404).json({ message: 'Error Fetching Flights', flight: false, error: true })
  }
}

module.exports = GetOneWayFlightInfo;