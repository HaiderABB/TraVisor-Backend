const mongoose = require('mongoose');
const GetFlightsDB = require('../../Model/DB/Flights/GetFlightsQuery');

async function GetTwoWayFlightInfo(req, res) {

  let ResJson = [];

  try {

    let ReqObj = {
      DepCity: req.query.DepCity,
      ArrivalCity: req.query.ArrivalCity,
      DepDate: req.query.DepDate
    }

    // console.log(ReqObj);

    const tempJsonDep = await GetFlightsDB(ReqObj, res);

    ResJson.push(tempJsonDep);

    ReqObj = {
      DepCity: req.query.ArrivalCity,
      ArrivalCity: req.query.DepCity,
      DepDate: req.query.ReturnDate
    }


    const tempJsonArrival = await GetFlightsDB(ReqObj, res);

    ResJson.push(tempJsonArrival);

    res.json(ResJson);

  } catch (err) {
    console.log(err);
  }


}

module.exports = GetTwoWayFlightInfo;