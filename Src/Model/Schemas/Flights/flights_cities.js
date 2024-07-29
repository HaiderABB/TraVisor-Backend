const mongoose = require('mongoose');

const { Schema } = mongoose;

const cities_schema = {
  city: String,
  airport_code: String
};

const flights_cities_schema = new Schema(cities_schema)
module.exports = flights_cities_schema;