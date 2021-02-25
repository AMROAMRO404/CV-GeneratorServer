const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CVSchema = new Schema({
    userId: {
        type: String
    },
    fName: {
        type: String
    },
    lName: {
        type: String
    },
    phone: {
        type: Number
    },
    address: {
        type: String
    },
    email: {
        type: String
    },
    linkedIn: {
        type: String
    },

    socialMedia: {
        type: String
    },
    objective: {
        type: String
    },
    experiences: {
        type: []
    },
    educations: {
        type: []
    },
    skills: {
        type: []
    },
    languges: {
        type: []
    },
    certifications: {
        type: []
    }
})
module.exports = mongoose.model('CV', CVSchema);