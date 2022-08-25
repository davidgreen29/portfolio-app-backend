const mongoose = require('mongoose')

const contactForm = new mongoose.Schema({
    fullname:{
        type:String,
        required: true
    },
    email: {
        type:String, 
        required:true
    },
    message: {
        type:String, 
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('myTable', contactForm );