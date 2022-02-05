const Repository = require("../Repository");
const ServiceAreaModel = require("./ServiceAreaModel");

class ServiceAreaRepository extends Repository{
    constructor() {
        super(ServiceAreaModel);
    }
}

module.exports = (new ServiceAreaRepository());