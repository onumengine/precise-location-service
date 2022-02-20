const mongoose = require("mongoose");
const pointSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true
    },
    coordinates: {
        type: [Number],
        required: true
    }
});

const userSchema = new mongoose.Schema({
    name: String,
    location: pointSchema,
}, {
    toJSON: {
        transform: (doc, ret) => {
            delete ret.__v;
            delete ret._id;
        }
    },
    timestamps: true
});
module.exports = mongoose.model("users", userSchema);