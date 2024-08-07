const mongoose = require('mongoose');
const GetFlightsDB = require('../../Model/DB/Flights/GetFlightsQuery');

async function GetOneWayFlightInfo(req, res) {
  try {
    const ReqObj = {
      DepCity: req.body.DepCity,
      ArrivalCity: req.body.ArrivalCity,
      DepDate: req.body.DepDate
    };
    const ResJson = await GetFlightsDB(ReqObj, res);
    res.json(ResJson);
  } catch (err) {
    console.log(err)
  }
}

module.exports = GetOneWayFlightInfo;