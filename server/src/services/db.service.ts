const { MongoClient } = require("mongodb");

const config = require("../config");

module.exports = {
  getCollection,
};

// Database Name
const dbName = "items_db";

var dbConn: any = null;

async function getCollection(collectionName: string) {
  
  try {
    const db = await connect();
    const collection = await db.collection(collectionName);
    console.log(collection);
    
    return collection;
  } catch (err) {
    console.log("Failed to get Mongo collection", err);
    throw err;
  }
}

async function connect() {
  if (dbConn) return dbConn;
  try {
    const client = await MongoClient.connect(config.dbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = client.db(dbName);
    dbConn = db;
    return db;
  } catch (err) {
    console.log("Cannot Connect to DB", err);
    throw err;
  }
}
