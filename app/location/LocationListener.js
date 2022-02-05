"use strict";

const Emitter = require("events").EventEmitter;
const axios = require("axios");
const { LOCATION } = require("../constants")
const listener = new Emitter;


listener.on(LOCATION.AREA.UPDATED, async (data) => {
    console.log("Client service area (points) as updated", data);
});
