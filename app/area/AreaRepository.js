const Repository = require("../Repository");
const ServiceAreaModel = require("./AreaModel");

class AreaRepository extends Repository{
    constructor() {
        super(ServiceAreaModel);
    }
}

module.exports = (new AreaRepository());