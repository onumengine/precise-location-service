
const dbInstance = require("../../startups/db");
const userRepository = require('./UserRepository');
exports.create = async (req, res) => {

    const { name, long, lat, ...meta } = req.body;

    const client = await dbInstance.getDb();
    const database = client.db("locations");
    const users = database.collection("users");
    let user = {};
    user.name = name;
    user.metadata = meta;
    user.location = {
        type: "Point",
        coordinates: [long, lat]
    };
    const response = await users.insertOne(user);
    areas.createIndex({ location: "2dsphere" });
    res.json(response);
}

exports.update = async (req, res) => {

}

exports.delete = async (req, res) => {

}
exports.find = async (req, res) => {
    const { area } = req.query;
}