const express = require('express');
const dotenv = require('dotenv').config({});

const port = process.env.PORT || 3000;

require("./app/helper");
require("./startups");

const app = express();
app.use(express.json());

app.use("/api/v2", require("./routes/v2"));

app.listen(port, () => {
    console.log(`${process.env.APP_NAME} listening on port ${port}`);
});