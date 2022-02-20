const AreaModel = require('./AreaModel');
const areaRepository = require('./AreaRepository');
const dbInstance = require("../../startups/db");
const { LOCATION } = require('../constants');


exports.find = async (req, res) => {
    const { long = 0, lat = 0, ...meta } = req.query;
    console.log(long, lat);

    const client = await dbInstance.getDb();
    const database = client.db("locations");
    const areas = database.collection("areas");
    const result = await areas.find({
        ...meta,
        geometry: {
            $geoIntersects: {
                $geometry: {
                    type: LOCATION.TYPE.POINT,
                    coordinates: [+long, +lat]
                }
            }
        }
    }).toArray();
    res.json({
        message: "Finding an area that covers this user",
        data: result
    });
}

exports.create = async (req, res) => {

    const { coordinates, exclusions = [], name, description, advertiser, ...meta } = req.body;
    areaCoordinates = [];
    areaCoordinates[0] = coordinates;
    if (exclusions && exclusions.length > 0) {
        for (let index = 0; index < exclusions.length; index++) {
            areaCoordinates[index + 1] = exclusions[index];
        }
    }

    let area = {};
    area.name = name;
    area.description = description;
    area.advertiser = advertiser;
    area.metadata = meta;
    area.geometry = {};
    area.geometry.coordinates = areaCoordinates;
    area.geometry.type = LOCATION.TYPE.POLYGON;
    console.log("Saving an area", area);
    const client = await dbInstance.getDb();
    const database = client.db("locations");
    const areas = database.collection("areas");
    const result = await areas.insertOne(area);
    areas.createIndex({ geometry: "2dsphere" });
    res.json({
        message: "Area mapped successfully",
        data: result
    });
}

exports.update = async (req, res) => {
    const { name, description, advertiser, coordinates, exclusions = [], areaId, ...meta } = req.body;
    const client = await dbInstance.getDb();
    const database = client.db("locations");
    const areas = database.collection("areas");
    const area = await areas.fineOne({ _id: areaId });
    if (!area) {
        return res.json({
            message: `Area with ID ${areaId} does not exist`,
            data: null
        });
    }
    // area found go ahead and update the area
    areaCoordinates = [];
    areaCoordinates[0] = coordinates;
    if (exclusions && exclusions.length > 0) {
        for (let index = 0; index < exclusions.length; index++) {
            areaCoordinates[index + 1] = exclusions[index];
        }
    }
    let newArea = {};
    area.name = name;
    area.description = description;
    area.advertiser = advertiser;
    newArea.metadata = meta || area.metadata
    newArea.geometry = {};
    newArea.geometry.coordinates = areaCoordinates;
    newArea.geometry.type = LOCATION.TYPE.POLYGON;
    areas.save({ _id: areaId }, newArea);
    res.json({
        message: "Area updated successfully"
    });
}

exports.delete = async (req, res) => {

}