const Repository = require("../Repository");
const UserModel = require("./UserModel");

class UserRepository extends Repository{
    constructor() {
        super(UserModel);
    }
}

module.exports = (new UserRepository());