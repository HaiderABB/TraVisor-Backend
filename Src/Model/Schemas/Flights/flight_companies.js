import mongoose from 'mongoose';
const { Schema } = mongoose;

const companies_schema = {
  id: String,
  name: String
};

const flights_companies_schema = new Schema(companies_schema)