const { MongoClient } = require('mongodb');

require('dotenv').config();

const connectionUrl = process.env.MONGODB_URI;

const dbName = process.env.DB_NAME

const init = async () => {
  try {
    let client = await MongoClient.connect(connectionUrl)
    let db = client.db(dbName);
    console.log('connected to database!');
    return db;
  } catch (error){
    console.log(error);
  }
}


module.exports = { init };