const mongoose = require("mongoose");


var donorSchema = new mongoose.Schema({
    donor_id: {
        type: mongoose.ObjectId,
        ref:'User',
        required: true
    },
    donor_name: String,
    age: {
        type: Number,
        required: true,
        min: 18,
        max: 65
    },
    sex: {
        type: String,
        enum: ['male','female','others'],
        required: true,
    },
    weight: Number,
    height: Number,
    tested_positive: Date,
    tested_negative: Date,
    blood_group: {
        type: String,
        enum: ['A+','A-','B+','B-','AB+','AB-','O+','O-'],
        required: true
    },
    availability: {
        type: Boolean,
        default: true
    },
    last_donated: {
        type: Date,
    },
    location: {
        type: String,
        required: true
    },
    hide_details: {
        type: Boolean,
        default: false
    }
    
},{ timestamps: true });


module.exports = mongoose.model('Donor', donorSchema);