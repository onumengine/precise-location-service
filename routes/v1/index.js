'use strict';
const router = require('express').Router();
router.use("/users", require("./user"));
router.use("/areas", require("./service_area"));

module.exports = router;