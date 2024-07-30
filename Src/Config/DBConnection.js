const mongoose = require('mongoose');
const DBname = 'travel-planner-flights';
const MongoConnection = async () => {
  const DBurl = `mongodb+srv://haideramoazzam:${process.env.DB_PASS}@travel-planner.le3q2ar.mongodb.net/${DBname}?retryWrites=true&w=majority&appName=travel-planner`;
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







