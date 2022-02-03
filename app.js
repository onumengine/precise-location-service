const express = require('express');
const dotenv = require('dotenv').config({});

const port = process.env.PORT || 3000;

const app = express();


app.listen(port, () => {
    console.log(`${process.env.APP_NAME} listening on port ${port}`);
})