const Flight_Info = require('../../Schemas/Flights/flight_info')

async function GetFlightsDB(ReqObj) {

  const DepartureDate = new Date(ReqObj.DepDate);
  const StartOfDay = DepartureDate.setHours(0, 0, 0, 0);
  const EndOfDay = DepartureDate.setHours(23, 59, 59, 999);
  try {
    const FlightsInfo = await Flight_Info.find({
      departure_city: ReqObj.DepCity, arrival_city: ReqObj.ArrivalCity, departure_date: {
        $gte: StartOfDay,
        $lt: EndOfDay
      }
    });
    return FlightsInfo;
  } catch (err) {
    return null
  }
}
module.exports = GetFlightsDB;


