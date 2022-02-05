class Repository {
    constructor(Model) {
        this.Model = Model;
    }

    create(payload) {
        return this.Model.create(payload);
    }

    findById(id) {
        return this.Model.findById({ _id: id });
    }

    findOne(condition, sort = {}) {
        return this.Model.findOne(condition).sort(sort);
    }

    all(condition, sort = {}, page = null, limit = 100) {
        try {
            if (page) {
                delete condition.page;
                delete condition.limit;
                return this.Model.paginate(condition, { sort, page, limit: parseInt(limit) });
            } else {
                return this.Model.find(condition).sort(sort);
            }
        } catch (err) {
            console.log(`Error getting all: ${err}`);
            return this.Model.find(condition).sort(sort);
        }
    }

    truncate(condition = {}) {
        if (process.env.NODE_ENV == "development") {
            return this.Model.deleteMany(condition);
        }
    }

    deleteMany(condition = {}) {
        return this.Model.deleteMany(condition);
    }

    massInsert(data = []) {
        if (data.length === 0) return [];
        return this.Model.insertMany(data);
    }

    count(condtion = {}) {
        return this.Model.find(condition).countDocuments();
    }

    upsert(query = {}, newData = {}) {
        return this.Model.update(query, newData, { upsert: true, setDefaultsOnInsert: true });
    }

    findOneAndUpdate(query, newData = {}) {
        return this.Model.findOneAndUpdate(query, newData, { upsert: true, setDefaultsOnInsert: true });
    }
}

module.exports = Repository;