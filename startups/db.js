const { MongoClient } = require('mongodb');
const client = new MongoClient(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
let db = null;
const getDBConnection = async () => {
    try {
        db = await client.connect();
        return db
    } catch (e) {
        return e;
    }
}

const getInstance = async () => {
    try {
        if (db) {
            console.log(" db connection is already alive");
            return db;
        } else {
            console.log('getting new connection');
            db = await getDBConnection();
            return db;
        }
    } catch (e) {
        return e;
    }
}
getInstance();

module.exports = { getDb: getInstance }