const mongoose = require("mongoose")

const droneSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ["USV", "UAS", "UUV", "UGV"],
    },
    country: String,
    isCommercial: Boolean,
    image: {
        type: String,
        required: true
    },
})

const Drone = mongoose.model("Drone", droneSchema)

module.exports = Drone