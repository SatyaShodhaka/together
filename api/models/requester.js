const mongoose = require("mongoose");
//const {ObjectId} = mongoose.Schema;

var requesterSchema = new mongoose.Schema({
    requester_id: {
        type: mongoose.ObjectId,
        ref:'user',
        required: true
    },
    requester_name: String,
    required_bg: {
        type: String,
        enum: ['A+','A-','B+','B-','AB+','AB-','O+','O-'],
        required: true
    },
    location: {
        type: String,
        required: true
    },
    recieve_updates: {
        type: Boolean,
        default: true 
    },
    hospital_name: {
        type: String,
        required: false
    },
    status: {
        type: Boolean,
        default: true
    }
},{ timestamps: true });


module.exports = mongoose.model('Requester',requesterSchema);