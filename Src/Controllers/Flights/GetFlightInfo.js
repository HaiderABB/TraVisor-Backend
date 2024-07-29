const mongoose = require('mongoose');
const GetFlightsDB = require('../../Model/DB/Flights/GetFlightsQuery');

async function GetFlightInfo(req, res) {
  try {

    const ReqObj = {
      DepCity: req.query.DepCity,
      ArrivalCity: req.query.ArrivalCity,
      DepDate: req.query.DepDate
    }

    //console.log(ReqObj);

    const ResJson = await GetFlightsDB(ReqObj, res);
    res.json(ResJson);

  } catch (err) {
    console.log(err)
  }
}

module.exports = GetFlightInfo;