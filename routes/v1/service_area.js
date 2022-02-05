const express = require("express");
const serviceAreaController = require("../../app/service_area/ServiceAreaController")
const router = express.Router();
router.get("/", (req, res) => {
    res.send("Welcome to location services");
});
router.post("/add", serviceAreaController.create);
router.get("/:id", serviceAreaController.find);
router.put("/:id", serviceAreaController.update);
router.delete("/:id", serviceAreaController.delete);
module.exports = router;