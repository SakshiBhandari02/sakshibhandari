const mongoose = require('mongoose')


const alienSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    rollno: {
        type: Number,
        required: true
    },

    sub: {
        type: String,
        required: true,

    }

})

module.exports = mongoose.model('Alien', alienSchema)

