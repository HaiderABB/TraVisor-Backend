# Flight Information API

## Overview

This API provides endpoints to retrieve flight information based on various parameters such as origin, destination, travel dates, number of passengers, and class preference (economy, business, or first class).

## Endpoints

### Get Flights

#### Endpoint


#### Query Parameters

- **from**: Departure location.
- **to**: Destination location.
- **oneWay**: Boolean indicating if it's a one-way flight (`true` or `false`).
- **departureDate**: Date of departure (format: YYYY-MM-DD).
- **returnDate**: Date of return flight (required if `oneWay` is `false`; format: YYYY-MM-DD).
- **passengers**: Number of passengers.
- **class**: Travel class preference (e.g., economy, business, first).

#### Example Usage

```bash
curl -X GET 'http://localhost:5000/api/flights?from=New+York&to=Los+Angeles&oneWay=false&departureDate=2024-07-10&returnDate=2024-07-15&passengers=2&class=economy'
```
## Setup

To set up and run the API locally, follow these steps :

1. Clone the Repository

```bash
git clone https://github.com/your-username/flight-info-api.git
cd flight-info-api
```

2. Install Dependencies

```bash
npm install
```

3. Run the Server
```bash
npm start
```






