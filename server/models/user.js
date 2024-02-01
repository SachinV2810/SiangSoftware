const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    program:{
        type: String,
        required: true
    },
    rollNo:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    projects: {
        type: Object
    },
    courses: {
        type: Object
    }
});

module.exports = mongoose.model('User', userSchema);