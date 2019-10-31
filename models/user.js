const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//schema for storing user details
const userSchema = new Schema({
    pickup: String,
    destination: String,
    Startwhen:String
});

const User = mongoose.model('user', userSchema);

module.exports = User;