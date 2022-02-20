'use strict';

const mongoose = require("mongoose");
const mongodbUrl = process.env.MONGODB_URL;
console.log(`Mongodb url ${mongodbUrl}`);
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true, useUnifiedTopology: true
});
mongoose.Promise = global.Promise;
let db = mongoose.connection;

db.on("connected", () => {
    console.log("Mongo db connected");
});

db.on("error", (error) => {
    console.log("An error occurred connecting to DB: ", error);
    process.exit(1);
})

// const { MongoClient } = require('mongodb');
// const MONGODB_URL = process.env.MONGODB_URL;
// const client = new MongoClient(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });


// async function main() {
//     try {
//         await client.connect();

//         await listDatabase(client);
//     } catch (err) {
//         console.log("Error connecting to database", err);
//     } finally {
//         await client.close();
//     }
// }
// async function listDatabase(client) {
//     const databaseList = await client.db().admin().listDatabases();
//     console.log('Databases:');
//     databaseList.databases.forEach(db => console.log(` - ${db.name}`));
// }
// main().catch(console.log);