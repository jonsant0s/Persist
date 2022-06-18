const mongoose = require("mongoose")

const recordSchema = mongoose.Schema({
    id: {
        type: Number,
    },
    title: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    priority: {
        type: String,
        required: true,
    }
}, { timestamps: true })

const Record = mongoose.model("Record", recordSchema);

module.exports = Record;