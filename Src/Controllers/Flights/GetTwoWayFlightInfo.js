const mongoose = require('mongoose');
const GetFlightsDB = require('../../Model/DB/Flights/GetFlightsQuery');

async function GetTwoWayFlightInfo(req, res) {
  try {

    let ReqObj = {
      DepCity: req.body.DepCity,
      ArrivalCity: req.body.ArrivalCity,
      DepDate: req.body.DepDate
    }
    const OneWay = await GetFlightsDB(ReqObj, res);

    ReqObj = {
      DepCity: req.body.ArrivalCity,
      ArrivalCity: req.body.DepCity,
      DepDate: req.body.ReturnDate
    }
    const Return = await GetFlightsDB(ReqObj, res);

    if (OneWay.length && Return.length) {
      res.status(200).json({ message: 'Flights Found', flight: true, error: false, OneWay, Return })
    }
    else {
      res.status(400).json({ message: 'Flights not found', flight: false, error: false })
    }

  } catch (err) {
    res.status(404).json({ message: 'Error Fetching Flights', flight: false, error: true })
  }


}

module.exports = GetTwoWayFlightInfo;