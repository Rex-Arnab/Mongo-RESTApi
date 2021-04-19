const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    skill: {
        type: String,
        required: true
    },
    gender: {
        type: Boolean,
        required: true,
        default: true
    }

})

module.exports = mongoose.model('User', userSchema)