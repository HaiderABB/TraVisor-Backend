const Flight_Info = require('../Schemas/flight_info')

async function GetFlightsDB(ReqObj, res) {

  const DepartureDate = new Date(ReqObj.DepDate);
  const StartOfDay = DepartureDate.setHours(0, 0, 0, 0);
  const EndOfDay = DepartureDate.setHours(23, 59, 59, 999);
  // console.log(DepartureDate);
  // console.log(ReqObj.ArrivalCity);

  try {
    const FlightsInfo = await Flight_Info.find({
      departure_city: ReqObj.DepCity, arrival_city: ReqObj.ArrivalCity, departure_date: {
        $gte: StartOfDay,
        $lt: EndOfDay
      }
    });
    return FlightsInfo;
  } catch (err) {
    console.log(err);
    res.status(500).send('Flights not found for given date');
  }
}
module.exports = GetFlightsDB;


