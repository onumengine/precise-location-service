const mongoose = require("mongoose");

const polygonSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Polygon'],
        required: true
    },
    coordinates: {
        type: [[[Number]]], // Array of arrays of arrays of number
        required: true
    }
});

const serviceAreaSchema = new mongoose.Schema({
    name: String,
    location: polygonSchema
});

module.exports = mongoose.model("service_areas", serviceAreaSchema);