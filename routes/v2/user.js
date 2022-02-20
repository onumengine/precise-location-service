const userController = require('../../app/user/UserController');
const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
    res.send("Welcome to location services");
});
router.post('/', userController.create);
module.exports = router;