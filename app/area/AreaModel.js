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
    },
    metadata: {
        type: Object
    }
});

const areaSchema = new mongoose.Schema({
    name: String,
    location: polygonSchema,
});

module.exports = mongoose.model("areas", areaSchema);