const mongoose = require("mongoose");
const crypto = require("crypto")
const uuidv1 = require("uuid/v1");


var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 64,
        trim: true
    },
    //email: String,
    email: {
        type: String,
        required: true,
        maxlength: 64,
        trim: true,
        unique: true,

    },
    //phone_no: String,
    phone_no: {
        type: String,
        required: true,
        maxlength: 10,
    },
    //sex: String,
    
    encry_password: {
        type: String,
        required: true
    },
    salt: String,
    role: {
        type: Number,
        default: 1 // 1-normal user,2-requester,3-donor,4-admin
    },
},{ timestamps: true });

//creating virtual schema with getters and setters

userSchema.virtual("password")
    .set(function(password){
        this._password = password
        this.salt = uuidv1();
        this.encry_password = this.securePassword(password);
    })
    .get(function(){
        return this._password;
    })

userSchema.method = {

    authenticate: function(plainpassword){
        return this.securePassword(plainpassword) === this.encry_password;
    },

    securePassword: function(plain_password) {
        if (!password) return ""; //return empty
        try {
            return crypto.createHmac('sha256',this.salt)
            .update(plain_password)
            .digest('hex')

        } catch (err) {
            return "";
        }
    }//cannot use arrow function
}

module.exports = mongoose.model("user",userSchema)