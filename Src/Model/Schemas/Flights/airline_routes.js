import mongoose from 'mongoose';
const { Schema } = mongoose;

const routes_schema = {
  departure_city: String,
  departure_code: String,
  arrival_city: String,
  arrival_code: String,
  airline: {
    id: String,
    name: String
  }
};

const airline_routes_schema = new Schema(routes_schema)