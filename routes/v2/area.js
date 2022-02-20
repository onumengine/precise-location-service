const express = require("express");
const areaController = require("../../app/area/AreaController")
const router = express.Router();
router.get("/", areaController.find);
router.post("/", areaController.create);
router.get("/:id", areaController.find);
router.put("/:id", areaController.update);
router.delete("/:id", areaController.delete);
module.exports = router;