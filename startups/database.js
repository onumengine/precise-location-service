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