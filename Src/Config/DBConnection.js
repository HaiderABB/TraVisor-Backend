const mongoose = require('mongoose');
const DBpass = require('./DBpass');
const DBname = 'travel-planner-flights';
const DBurl = `mongodb+srv://haideramoazzam:${DBpass}@travel-planner.le3q2ar.mongodb.net/${DBname}?retryWrites=true&w=majority&appName=travel-planner`;

const MongoConnection = async () => {
  let flag;
  try {
    await mongoose.connect(DBurl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = mongoose.connection;
    module.exports = db;
    console.log('Database Connection Established');
    flag = true;
    return flag;
  } catch {
    console.log('Database Connection Failed');
    flag = false;
    return flag;
  }

}

module.exports = MongoConnection;







