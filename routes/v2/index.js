'use strict';
const router = require('express').Router();
router.use("/users", require("./user"));
router.use("/areas", require("./area"));

module.exports = router;